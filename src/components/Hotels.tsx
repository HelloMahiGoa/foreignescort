"use client";

import Link from "next/link";
import { getHotelsForCity, getCityNameForUrl } from "@/lib/hotels";

type HotelsProps = {
  citySlug?: string;
  cityDisplayName?: string;
};

export default function Hotels({ citySlug = "chennai-russian-escorts", cityDisplayName }: HotelsProps) {
  const hotels = getHotelsForCity(citySlug);
  const cityName = getCityNameForUrl(citySlug);
  const displayName = cityDisplayName || (citySlug === "chennai-russian-escorts" ? "Chennai" : citySlug === "jaipur-russian-escorts" ? "Jaipur" : "City");

  if (hotels.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-12 lg:py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Partner Hotels</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-white bg-clip-text text-transparent">
              {displayName} Hotel Escorts
            </span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
            Premium Russian escorts available at {displayName}&apos;s finest hotels. Discreet service for hotel guests and business travelers.
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {hotels.map((hotel) => (
            <Link
              key={hotel.slug}
              href={`/hotels/${cityName}/${hotel.slug}`}
              className="group relative overflow-hidden rounded-3xl border-2 border-white/20 bg-gradient-to-br from-black/60 via-black/80 to-black/60 p-6 sm:p-8 transition-all duration-300 hover:border-amber-400/50 hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.6)] hover:shadow-amber-500/30"
            >
              {/* Content */}
              <div className="relative z-10 flex h-full flex-col">
                {/* Hotel icon/indicator */}
                <div className="mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 bg-gradient-to-br from-amber-500/20 via-amber-400/10 to-transparent">
                    <svg
                      className="h-5 w-5 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hotel name */}
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {hotel.name}
                </h3>

                {/* Hotel description preview */}
                <p className="mb-4 flex-1 text-sm leading-relaxed text-white/70 line-clamp-2">
                  {hotel.description.substring(0, 100)}...
                </p>

                {/* Nearby areas */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-2">
                    Nearby
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {hotel.nearby.slice(0, 2).map((area, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/60"
                      >
                        {area}
                      </span>
                    ))}
                    {hotel.nearby.length > 2 && (
                      <span className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/60">
                        +{hotel.nearby.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* View more indicator */}
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Details</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

