import Image from "next/image";
import Link from "next/link";

import type { CityDefinition } from "@/lib/cities";
import type { HotelDefinition } from "@/lib/hotels";
import { getHotelContentSections } from "@/lib/hotels/hotelContent";
import { renderHotelParagraph } from "@/lib/hotels/renderHotelContent";

type HotelPageTemplateProps = {
  city: CityDefinition;
  hotel: HotelDefinition;
};

export default function HotelPageTemplate({
  city,
  hotel,
}: HotelPageTemplateProps) {
  // Use string paths directly like homepage - more reliable than StaticImageData
  const heroDesktop = "/images/desktop-hero.jpg";
  const heroMobile = "/images/mobile-hero.jpg";

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Mobile Hero Background */}
        <div className="absolute inset-0 -z-20 md:hidden">
          <div className="relative h-full w-full">
            <Image
              src={heroMobile}
              alt={`${hotel.name} escorts in ${city.name}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
        {/* Desktop Hero Background */}
        <div className="absolute inset-0 -z-20 hidden md:block">
          <div className="relative h-full w-full">
            <Image
              src={heroDesktop}
              alt={`${hotel.name} escorts in ${city.name}`}
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
            href={city.slug === "chennai-russian-escorts" ? "/" : `/${city.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:border-white/40 hover:text-white relative z-10"
          >
            ← Back to {city.slug === "chennai-russian-escorts" ? "Home" : city.name}
          </Link>
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/70">
              {city.name} • {hotel.name}
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {hotel.headline}
            </h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              {hotel.description}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {hotel.highlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[#38bdf8]/60"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40 bg-gradient-to-br from-[#38bdf8] via-transparent to-[#38bdf8]"
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
              Nearby Areas
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              {hotel.nearby.map((spot, index) => (
                <div
                  key={`${spot}-${index}`}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition duration-300 hover:border-[#60a5fa]/60 hover:bg-[#60a5fa]/10"
                >
                  <span className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_12px_rgba(96,165,250,0.6)]" />
                    {spot}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
              Booking process
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              {["Share details", "Confirm profile", "Meet at hotel"].map((label, index) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition duration-300 hover:border-[#38bdf8]/60 hover:bg-[#38bdf8]/10"
                >
                  <span className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                    {label}
                  </span>
                  <span className="text-white/80">{`0${index + 1}`}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.35em] text-white/50">
              Available 24/7
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Content Sections */}
      {getHotelContentSections(hotel.name, hotel.nearby, city.name).map((section, index) => (
        <section key={index} className="relative bg-zinc-950 py-8 lg:py-12">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
              {section.imagePosition === "left" && (
                <>
                  {/* Left Side - Image */}
                  <div className="flex-1 flex items-center">
                    <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                      <Image
                        src={section.imageSrc}
                        alt={section.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Right Side - Heading and Paragraphs */}
                  <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
                    <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                      {section.heading}
                    </h2>
                    <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                      {section.paragraphs.map((para, pIndex) => (
                        <p key={pIndex}>{renderHotelParagraph(para, `section-${index}-para-${pIndex}-`)}</p>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {section.imagePosition === "right" && (
                <>
                  {/* Left Side - Heading and Paragraphs */}
                  <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
                    <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                      {section.heading}
                    </h2>
                    <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                      {section.paragraphs.map((para, pIndex) => (
                        <p key={pIndex}>{renderHotelParagraph(para, `section-${index}-para-${pIndex}-`)}</p>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="flex-1 flex items-center">
                    <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                      <Image
                        src={section.imageSrc}
                        alt={section.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}

