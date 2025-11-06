"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 -z-10 bg-gradient-to-b from-zinc-950/70 via-zinc-950/35 to-transparent blur-3xl" />
      <div className="mx-auto w-full max-w-6xl px-6 pt-6">
        <div className="flex items-center justify-between gap-6 rounded-full border border-white/15 bg-zinc-950/65 px-5 py-3 shadow-[0_25px_50px_-28px_rgba(0,0,0,0.85)] backdrop-blur-2xl pointer-events-auto">
          <Link
            href="/"
            className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white shadow-[0_18px_36px_-22px_rgba(0,0,0,0.85)] transition duration-300 hover:border-white/40 hover:bg-white/10 relative z-10"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            <span className="relative">Hello Mahi</span>
          </Link>
          <nav className="hidden items-center gap-3 rounded-full border border-white/15 bg-zinc-900/40 px-6 py-2 text-sm text-white shadow-[0_22px_48px_-32px_rgba(0,0,0,0.85)] backdrop-blur-xl md:flex relative z-10">
          {links.map((link) => {
            const isHome = link.href === "/";
            const isActive = isHome
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);
            const overlayClass = isActive
              ? "opacity-100 bg-[#facc15]/90"
              : "opacity-0 group-hover:opacity-80 group-hover:bg-[#facc15]/45";
            const shineClass = isActive
              ? "opacity-75 animate-[shineSweep_2.1s_linear_infinite]"
              : "opacity-0 group-hover:opacity-60 group-hover:animate-[shineSweep_2.1s_linear_infinite]";
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex items-center justify-center overflow-hidden rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] transition-all duration-500 ${
                  isActive
                    ? "text-zinc-900 shadow-[0_12px_32px_-22px_rgba(255,214,120,0.85)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span
                  className={`pointer-events-none absolute inset-0 transition duration-500 ${overlayClass}`}
                />
                <span
                  className={`pointer-events-none absolute inset-[-110%] -skew-x-12 bg-white/40 mix-blend-screen transition duration-500 ${shineClass}`}
                />
                {isActive && (
                  <span className="pointer-events-none absolute inset-0 -z-10 bg-amber-200/25 blur-xl" />
                )}
                <span className="relative z-10 flex items-center gap-2 transition duration-500 group-hover:translate-y-[-1px]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition duration-500 ${
                      isActive
                        ? "bg-[#facc15] shadow-[0_0_22px_rgba(250,204,21,0.8)]"
                        : "bg-white/40 group-hover:bg-[#facc15] group-hover:shadow-[0_0_18px_rgba(250,204,21,0.65)]"
                    }`}
                  />
                  <span
                    className={`transition duration-500 group-hover:text-[#facc15] group-hover:tracking-[0.45em] ${
                      isActive ? "text-zinc-900" : "text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                </span>
                <span
                    className={`pointer-events-none absolute -bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full transition duration-500 ${
                    isActive
                      ? "bg-[#facc15] blur-[1px]"
                      : "scale-x-0 bg-[#facc15]/60 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-zinc-900/60 text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 md:hidden relative z-10"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-white transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-full rounded-full bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-white transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
        </div>
      </div>

      <div className="pointer-events-none mx-auto w-full max-w-6xl px-6 md:hidden">
        <div
          className={`origin-top transform transition duration-300 ${
            isOpen
              ? "pointer-events-auto scale-100 opacity-100"
              : "scale-95 opacity-0"
          }`}
        >
          <div className="mt-3 rounded-3xl border border-white/25 bg-zinc-950/80 p-6 text-white shadow-[0_35px_65px_-35px_rgba(0,0,0,0.85)] backdrop-blur-xl">
            <nav className="flex flex-col gap-3 text-sm">
              {links.map((link) => {
                const isHome = link.href === "/";
                const isActive = isHome
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
                const overlayClass = isActive
                  ? "opacity-100 bg-[#facc15]/90"
                  : "opacity-0 group-hover:opacity-80 group-hover:bg-[#facc15]/45";
                const shineClass = isActive
                  ? "opacity-75 animate-[shineSweep_2.1s_linear_infinite]"
                  : "opacity-0 group-hover:opacity-60 group-hover:animate-[shineSweep_2.1s_linear_infinite]";
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] transition duration-300 ${
                      isActive
                        ? "text-zinc-900 shadow-[0_24px_45px_-28px_rgba(250,204,21,0.75)]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span
                      className={`pointer-events-none absolute inset-0 transition duration-500 ${overlayClass}`}
                    />
                    <span
                      className={`pointer-events-none absolute inset-[-110%] -skew-x-12 bg-white/40 mix-blend-screen transition duration-500 ${shineClass}`}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition duration-500 ${
                          isActive
                            ? "bg-[#facc15] shadow-[0_0_22px_rgba(250,204,21,0.8)]"
                            : "bg-white/40 group-hover:bg-[#facc15] group-hover:shadow-[0_0_18px_rgba(250,204,21,0.65)]"
                        }`}
                      />
                      <span
                        className={`transition duration-500 group-hover:text-[#facc15] group-hover:tracking-[0.5em] ${
                          isActive ? "text-zinc-900" : "text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                    </span>
                    <span
                      className={`relative z-10 text-[10px] transition duration-500 group-hover:translate-x-1 ${
                        isActive ? "text-zinc-900/70" : "text-white/40"
                      }`}
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

