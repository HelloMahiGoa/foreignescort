import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import type { CityDefinition } from "@/lib/cities";
import { defaultCityHeroDesktop, defaultCityHeroMobile } from "@/lib/cities";
import { getServiceAreaByName } from "@/lib/serviceAreas";

type CityPageTemplateProps = {
  city: CityDefinition;
};

export default function CityPageTemplate({ city }: CityPageTemplateProps) {
  const heroDesktop = (city.heroDesktop ?? defaultCityHeroDesktop) as string | StaticImageData;
  const heroMobile = (city.heroMobile ?? defaultCityHeroMobile) as string | StaticImageData;

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 -z-20 md:hidden">
        <div className="relative h-full w-full">
          <Image
            src={heroMobile}
            alt={`${city.name} nightlife background`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-20 hidden md:block">
        <div className="relative h-full w-full">
          <Image
            src={heroDesktop}
            alt={`${city.name} nightlife background`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-zinc-950/55" />
      <div className="absolute -left-32 top-20 -z-10 h-64 w-64 rounded-full bg-pink-500/30 blur-3xl" />
      <div className="absolute right-[-120px] bottom-10 -z-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-44 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl space-y-10 text-white">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:border-white/40 hover:text-white relative z-10"
          >
            ← Back
          </Link>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {city.headline}
            </h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              {city.description}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {city.highlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[#60a5fa]/60"
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40 bg-gradient-to-br ${city.accent}`}
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg shadow-[0_30px_70px_-45px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Service Radius
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-2">
              {city.serviceAreas.map((area, index) => {
                const areaDefinition = getServiceAreaByName(city.slug, area);

                if (areaDefinition) {
                  return (
                    <Link
                      key={`${area}-${index}`}
                      href={`/${city.slug}/${areaDefinition.slug}`}
                      className="group block rounded-2xl border border-white/10 bg-white/5 px-3 py-2 transition duration-300 hover:border-[#60a5fa]/60 hover:bg-[#60a5fa]/15"
                    >
                      <span className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_10px_rgba(96,165,250,0.55)] transition duration-300 group-hover:shadow-[0_0_18px_rgba(96,165,250,0.9)]" />
                        <span className="transition duration-300 group-hover:text-[#60a5fa]">
                          {area}
                        </span>
                      </span>
                    </Link>
                  );
                }

                return (
                  <div
                    key={`${area}-${index}`}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 transition duration-300 hover:border-[#60a5fa]/60 hover:bg-[#60a5fa]/15"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_10px_rgba(96,165,250,0.55)] transition duration-300 group-hover:shadow-[0_0_18px_rgba(96,165,250,0.9)]" />
                    <span className="transition duration-300 group-hover:text-[#60a5fa]">{area}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-white/10 opacity-0 transition duration-500 hover:opacity-30" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
              How it works
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              {[
                { label: "Share schedule", step: "01" },
                { label: "Match profile", step: "02" },
                { label: "Confirm arrival", step: "03" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition duration-300 hover:border-[#60a5fa]/60 hover:bg-[#60a5fa]/10"
                >
                  <span className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_12px_rgba(96,165,250,0.6)]" />
                    {item.label}
                  </span>
                  <span className="text-white/80">{item.step}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.35em] text-white/50">
              Ops desk ready now
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

