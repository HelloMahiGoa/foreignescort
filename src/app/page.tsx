import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cityEntries, getCityBySlug } from "@/lib/cities";
import { getServiceAreaByName } from "@/lib/serviceAreas";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/Testimonials";
import Hotels from "@/components/Hotels";

export const metadata: Metadata = {
  title: "Chennai Russian Escorts | Book Russian's With 10% Discount",
  description:
    "Book verified Russian escorts in Chennai with 10% discount. Real Russian call girls available 24/7 for in-call and out-call services. Professional, verified profiles with no advance payment required.",
  keywords: [
    "Chennai Russian escorts",
    "Russian escorts Chennai",
    "Russian call girls Chennai",
    "Russian escorts in Chennai",
    "Chennai Russian escort service",
    "book Russian escorts Chennai",
    "Russian girls Chennai",
    "Chennai escort service",
    "Russian escorts discount",
    "verified Russian escorts Chennai",
    "Russian escorts near me",
    "Chennai Russian call girls",
    "Russian escorts 24/7 Chennai",
    "affordable Russian escorts Chennai",
    "high profile Russian escorts Chennai",
  ],
  authors: [{ name: "Foreign Escort" }],
  creator: "Foreign Escort",
  publisher: "Foreign Escort",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://foreignescort.com"),
  openGraph: {
    title: "Chennai Russian Escorts | Book Russian's With 10% Discount",
    description:
      "Book verified Russian escorts in Chennai with 10% discount. Real Russian call girls available 24/7 for in-call and out-call services.",
    url: "https://foreignescort.com",
    siteName: "Foreign Escort",
    images: [
      {
        url: "/images/desktop-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Chennai Russian Escorts - Book Russian Girls with 10% Discount",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chennai Russian Escorts | Book Russian's With 10% Discount",
    description:
      "Book verified Russian escorts in Chennai with 10% discount. Real Russian call girls available 24/7.",
    images: ["/images/desktop-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://foreignescort.com",
    languages: {
      "en-IN": "https://foreignescort.com",
      "en": "https://foreignescort.com",
    },
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0827;80.2707",
    "ICBM": "13.0827, 80.2707",
    "theme-color": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
  category: "Services",
};

export default function Home() {
  const chennaiCity = getCityBySlug("chennai-russian-escorts");
  const stats = [
    { label: "Cities Live", value: "08+" },
    { label: "Profiles Synced", value: "120" },
    { label: "Support Window", value: "24/7" },
  ];

  const citiesForOrbit = cityEntries.filter((city) => city.slug !== "chennai-russian-escorts");
  const orbitNodes = citiesForOrbit.map((city, index) => {
    const angle = (2 * Math.PI * index) / citiesForOrbit.length;
    return {
      ...city,
      x: Math.cos(angle) * 150,
      y: Math.sin(angle) * 150,
      delay: index * 0.45,
    };
  });

  if (!chennaiCity) {
    throw new Error("Chennai city definition missing");
  }

  // Structured Data (JSON-LD) for SEO
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Foreign Escort",
    url: "https://foreignescort.com",
    description: "Professional Russian escort services in Chennai and major Indian cities",
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://foreignescort.com/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Foreign Escort",
    url: "https://foreignescort.com",
    logo: "https://foreignescort.com/logo.png",
    description: "Professional Russian escort services in Chennai and major Indian cities",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-8121426651",
      availableLanguage: ["English", "Hindi", "Tamil"],
    },
    sameAs: [],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Foreign Escort - Chennai Russian Escorts",
    description: "Book verified Russian escorts in Chennai with 10% discount. Available 24/7 for in-call and out-call services.",
    url: "https://foreignescort.com",
    telephone: "+91-8121426651",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0827",
      longitude: "80.2707",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: {
      "@type": "City",
      name: "Chennai",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Escort Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Foreign Escort",
    },
    areaServed: {
      "@type": "City",
      name: "Chennai",
    },
    description: "Professional Russian escort services in Chennai with verified profiles, 24/7 availability, and 10% discount on bookings.",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      description: "10% discount on all bookings",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How to book Russian escorts in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Booking Russian escorts in Chennai is simple. Call us, tell us what you're looking for, and we'll match you with someone who fits. Our Russian girls in Chennai know how to connect and are available 24/7.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer Russian escorts with discount in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer a 10% discount on booking Russian escorts in Chennai. Contact us to avail the discount on verified Russian call girls.",
        },
      },
      {
        "@type": "Question",
        name: "Are Russian escorts in Chennai verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, every Russian call girl in Chennai we work with is real and verified. We check IDs, verify who they are, and confirm they're actually Russian. Every girl goes through our verification process before they're on our list.",
        },
      },
      {
        "@type": "Question",
        name: "Do you require advance payment for Russian escorts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, we don't ask for money upfront. You can book our Russian escorts in Chennai, confirm everything, and only pay after it's done. No deposits, no bank transfers before you meet - just book, meet, and pay if you're satisfied.",
        },
      },
      {
        "@type": "Question",
        name: "Are Russian escorts available 24/7 in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our Russian escorts in Chennai are available around the clock, every day. Whether it's late night, early morning, or any time, someone's always ready to come to you. Just call, tell us where you are in Chennai, and we'll send someone.",
        },
      },
      {
        "@type": "Question",
        name: "Do Russian escorts provide in-call and out-call services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our Russian escorts in Chennai do both in-call and out-call. In-call means you go to her place - good for quick meetings. Out-call means she comes to you - works for hotels, your home, or wherever you want in Chennai.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://foreignescort.com",
      },
    ],
  };

  return (
    <main className="text-white font-sans">
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative isolate min-h-screen overflow-hidden bg-zinc-950 z-0">
        <div className="absolute inset-0 -z-20 md:hidden">
          <div className="relative h-screen w-full">
            <Image
              src="/images/mobile-hero.jpg"
              alt="Chennai Russian Escorts - Book Russian Girls with 10% Discount"
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
              src="/images/desktop-hero.jpg"
              alt="Chennai Russian Escorts - Book Russian Girls with 10% Discount"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-zinc-950/50" />
        <div className="absolute -left-32 top-20 -z-10 h-64 w-64 rounded-full bg-pink-500/30 blur-3xl" />
        <div className="absolute right-[-120px] bottom-10 -z-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-44 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <div className="max-w-2xl space-y-8 text-white lg:pt-8">
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Chennai Russian Escorts | Book Russian Girls With 10% Discount
            </h1>
            <h2 className="text-xl font-semibold leading-tight tracking-tight sm:text-2xl lg:text-3xl text-white/90">
              REAL RUSSIAN GIRLS AVAILABLE NOW AT AFFORDABLE RATES
            </h2>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              Looking for Russian escorts in Chennai? You&apos;ve come to the right place. We&apos;ve been connecting clients with verified Russian call girls across Chennai, Goa, and Bangalore for years. Our girls are real, professional, and ready to meet whenever you need them. No fake profiles, no scams - just straightforward booking that works.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="group overflow-hidden rounded-2xl border border-white/25 bg-white/5 px-[1px] py-[1px] shadow-[0_25px_60px_-40px_rgba(15,15,15,0.9)] transition hover:border-white/40"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[15px] bg-black/65 px-5 py-6 transition duration-700 group-hover:[background:linear-gradient(135deg,rgba(251,146,60,0.28)_0%,rgba(91,33,182,0.32)_45%,rgba(14,165,233,0.26)_100%)]">
                  <div className="pointer-events-none absolute inset-0 opacity-60 transition duration-700 group-hover:opacity-100">
                    <span className="absolute inset-[-120%] bg-[radial-gradient(circle,rgba(250,191,36,0.25)_0%,rgba(0,0,0,0)_65%)] blur-3xl" />
                    <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-[#fde68a]/70 to-transparent mix-blend-screen animate-[shineSweep_2.8s_linear_infinite]" />
                  </div>
                  <p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#fde68a] via-[#fbbf24] to-[#f97316] drop-shadow-[0_10px_25px_rgba(250,204,21,0.4)] transition duration-500 group-hover:drop-shadow-[0_16px_40px_rgba(250,204,21,0.55)]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.45em] text-white/60">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex w-full max-w-lg items-center justify-center lg:pt-8">
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-[26rem] w-[26rem] rounded-full bg-gradient-to-b from-white/10 via-white/0 to-transparent blur-3xl" />
          </div>
          <div className="relative h-[22rem] w-[22rem]">
            <div className="absolute inset-0 rounded-full border border-white/20" />
            <div className="absolute inset-10 rounded-full border border-dashed border-white/20" />

            <div className="absolute left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-white/20 bg-black/60 p-6 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl animate-[floatY_6s_ease-in-out_infinite]">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                Tonightâ€™s flow
              </p>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                <div className="flex items-center justify-between">
                  <span>Choose city</span>
                  <span className="text-white">01</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Match profile</span>
                  <span className="text-white">02</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Confirm slot</span>
                  <span className="text-white">03</span>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Ops desk ready now
              </div>
            </div>

            {orbitNodes.map((node) => (
              <div
                key={node.name}
                className="absolute left-1/2 top-1/2 z-10"
                style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
              >
                <Link
                  href={`/${node.slug}`}
                  className={`block -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-gradient-to-r px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_40px_-25px_rgba(0,0,0,0.9)] backdrop-blur animate-[floatY_6s_ease-in-out_infinite] relative z-20 ${node.accent}`}
                  style={{ animationDelay: `${node.delay}s` }}
                >
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {node.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        </div>
      </section>

      {/* Content Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12 z-10">
        <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Side - Heading and Paragraphs */}
          <div className="flex-1 space-y-6 text-white relative z-10">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
              Russian Escorts Available Throughout Chennai
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
              <p>
                We work with <strong>Russian escorts in Chennai</strong> who know the city inside and out. Whether you&apos;re here for business at ITC Grand Chola, closing deals in <Link href="/guindy-escorts" className="text-amber-400 hover:text-amber-300 underline">Guindy</Link>, or just want someone to spend time with near <Link href="/marina-beach-escorts" className="text-amber-400 hover:text-amber-300 underline">Marina Beach</Link>, we make it happen. These girls understand your schedule and work around it.
              </p>
              <p>
                Every <strong>Russian call girl in Chennai</strong> we send is verified and speaks multiple languages. We&apos;ve built connections with hotels like <Link href="/hotels/chennai/taj-coromandel-escorts" className="text-amber-400 hover:text-amber-300 underline">Taj Coromandel</Link>, Leela Palace, and The Park, plus we have drivers and know the local spots. Everything runs smoothly from when you call us until you&apos;re done. No hassle, no complications.
              </p>
            </div>
          </div>

          {/* Right Side - Service Areas List */}
          <div className="flex-1 lg:pt-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_30px_70px_-45px_rgba(0,0,0,0.8)]">
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" aria-hidden="true" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                    Service Areas
                  </p>
                  <span className="text-xs text-white/40">{chennaiCity.serviceAreas.length} locations</span>
                </div>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {chennaiCity.serviceAreas.map((area, index) => {
                    const areaDefinition = getServiceAreaByName("chennai-russian-escorts", area);

                    if (areaDefinition) {
                      return (
                        <Link
                          key={`${area}-${index}`}
                          href={`/${areaDefinition.slug}`}
                          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:border-[#60a5fa]/60 hover:bg-gradient-to-r hover:from-[#60a5fa]/20 hover:to-[#3b82f6]/20 hover:shadow-[0_8px_32px_-8px_rgba(96,165,250,0.4)]"
                        >
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#60a5fa]/0 via-[#60a5fa]/5 to-[#60a5fa]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <span className="relative flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-[#60a5fa] shadow-[0_0_8px_rgba(96,165,250,0.6)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_16px_rgba(96,165,250,0.9)]" />
                            <span className="text-sm font-medium text-white/90 transition-colors duration-300 group-hover:text-[#60a5fa]">
                              {area}
                            </span>
                          </span>
                        </Link>
                      );
                    }

                    return (
                      <div
                        key={`${area}-${index}`}
                        className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300"
                      >
                        <span className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-[#60a5fa] shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                          <span className="text-sm font-medium text-white/90">{area}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* How to Book Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/erotic-russian-kiss.jpg"
                  alt="How to Book Russian Escorts in Chennai - Professional Service"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                How to Book Russian Escorts in Chennai
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Booking <strong>Russian escorts in Chennai</strong> is simple. Call us, tell us what you&apos;re looking for, and we&apos;ll match you with someone who fits. Our <strong>Russian girls in Chennai</strong> know how to connect - they listen, they respond, and they make sure you both have a great time. It&apos;s not just physical - when you&apos;re on the same page, everything feels better.
                </p>
                <p>
                  Want to try something new? Our <strong>Russian call girls in Chennai</strong> are open to different experiences. Just talk to them about what you want. They&apos;re professional, they&apos;re respectful, and they know how to make things work. Whether this is your first time or you&apos;ve done this before, they adapt to your style and make sure you walk away satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High Profile Russian Escorts Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Experienced Russian Escorts You Can Trust
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  We&apos;ve been running one of Chennai&apos;s most trusted <strong>escort agencies</strong> for years. Our <strong>Russian escorts in Chennai</strong> are in-demand because they deliver. Every <strong>Russian girl</strong> we work with is handpicked - they&apos;re attractive, smart, and know how to carry themselves. They keep themselves clean and presentable, and they&apos;re easy to work with. Treat them right, and they&apos;ll go above and beyond to make sure you&apos;re happy.
                </p>
                <p>
                  Our <strong>Russian call girls in Chennai</strong> work with professionals, business owners, and regular guys who want quality service. They appreciate clients who are respectful. Most of them take advance bookings, so if you&apos;re planning a trip to Chennai, you can lock in your date before you arrive. These girls know how to have fun and they bring real energy to every meeting. You&apos;ll remember the time you spent together.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/high-profile-russian-escorts-in-chennai.avif"
                  alt="Experienced Russian Escorts in Chennai - Verified and Trusted"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Russian Escort Services for Business Events Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/1.jpeg"
                  alt="Russian escort services for business events in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Need Someone for Business Events or Social Gatherings?
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Sometimes you need more than just a quick meeting. Our <strong>Russian escorts in Chennai</strong> work great for business dinners, events, or when you just want someone interesting to talk to. Need someone for a dinner at ITC Grand Chola? Want company for a late event? These girls fit in anywhere. They&apos;re smart, they can talk about anything, and they know how to read the room.
                </p>
                <p>
                  What makes our <strong>Russian escorts in Chennai</strong> stand out? They actually like spending time with clients. Whether you&apos;re at a business party in <Link href="/guindy-escorts" className="text-amber-400 hover:text-amber-300 underline">Guindy</Link>, going to a show in <Link href="/nungambakkam-escorts" className="text-amber-400 hover:text-amber-300 underline">Nungambakkam</Link>, or just want someone to grab dinner with, it feels natural. No awkward moments, no fake smiles. Just real conversation and good company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy and Reliability Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Your Privacy Matters and We Keep Our Word
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Worried about someone finding out? We understand. Our <strong>Russian escorts in Chennai</strong> know how to keep things private. Whether you&apos;re meeting someone near <Link href="/tidel-park-escorts" className="text-amber-400 hover:text-amber-300 underline">Tidel Park</Link> or staying at a hotel in <Link href="/anna-nagar-escorts" className="text-amber-400 hover:text-amber-300 underline">Anna Nagar</Link>, what happens stays between you and us. No one else needs to know anything.
                </p>
                <p>
                  As for reliability? Our girls show up when they say they will. They look good, they&apos;re ready, and they don&apos;t make excuses. If they tell you 8 PM, they&apos;re there at 8 PM. That&apos;s how we keep clients coming back across Chennai - from <Link href="/velachery-escorts" className="text-amber-400 hover:text-amber-300 underline">Velachery</Link> to <Link href="/omr-escorts" className="text-amber-400 hover:text-amber-300 underline">OMR</Link>. You call, we book, they show up. That&apos;s it.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/10.jpeg"
                  alt="Private Russian escorts in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified and Trusted Russian Call Girls Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/20.jpeg"
                  alt="Verified Russian call girls in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Real Russian Girls - No Fake Profiles, No Scams
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Sick of fake profiles and getting ripped off? Every <strong>Russian call girl in Chennai</strong> we work with is real. We check IDs, verify who they are, and confirm they&apos;re actually Russian - not someone just claiming to be. Every girl goes through our checks before they&apos;re on our list. What that means for you? The person who shows up is the person in the photos. You can book knowing you&apos;re getting what you paid for.
                </p>
                <p>
                  How do we keep clients happy? We do what we say we&apos;ll do. Our <strong>Russian escorts in Chennai</strong> have been working with us for years. They know what&apos;s expected, they know how to deliver, and they actually show up. No fake numbers, no canceling at the last minute, no surprises. Just real service you can rely on, whether you&apos;re in <Link href="/adyar-escorts" className="text-amber-400 hover:text-amber-300 underline">Adyar</Link>, <Link href="/egmore-escorts" className="text-amber-400 hover:text-amber-300 underline">Egmore</Link>, or anywhere in Chennai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Call and Out-Call Services Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Meet at Your Hotel or Your Place - Your Choice
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Don&apos;t know where to meet? We handle both. Our <strong>Russian escorts in Chennai</strong> do in-call and out-call. Staying at <Link href="/hotels/chennai/leela-palace-escorts" className="text-amber-400 hover:text-amber-300 underline">Leela Palace</Link> or <Link href="/hotels/chennai/taj-coromandel-escorts" className="text-amber-400 hover:text-amber-300 underline">Taj Coromandel</Link>? She comes to your room. Want to meet at your place? She&apos;ll show up there. We don&apos;t ask questions - we just make it happen.
                </p>
                <p>
                  Here&apos;s how it works: In-call means you go to her place - good for quick meetings. Out-call means she comes to you - works for hotels, your home, or wherever you want in Chennai. Both are available around the clock. Pick what fits your schedule and what you&apos;re comfortable with.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/30.jpeg"
                  alt="In-call and out-call Russian escort services in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Massage and Sensual Services Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/40.jpeg"
                  alt="Body massage and sensual services with Russian escorts in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Need to Unwind? We&apos;ve Got You Covered
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Rough day? Meetings at <Link href="/omr-escorts" className="text-amber-400 hover:text-amber-300 underline">OMR</Link> or <Link href="/guindy-escorts" className="text-amber-400 hover:text-amber-300 underline">Guindy</Link> got you stressed? Our <strong>Russian escorts in Chennai</strong> know how to help you relax. Book someone who can do a full body massage plus everything else. These girls know what they&apos;re doing - they&apos;ll get the tension out while keeping things interesting.
                </p>
                <p>
                  It&apos;s more than just a rubdown. They know where to press, how hard to go, and what works. By the time they&apos;re done, you&apos;ll feel better all over. After a long week or a crazy schedule, sometimes you need someone who knows how to take care of you - physically and mentally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Term and Overnight Bookings Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Two Hours or All Night - Whatever Works for You
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Only got 2-3 hours between meetings? We can do that. Need someone for the whole night? That works too. Our <strong>Russian escorts in Chennai</strong> get that people have different schedules. Whether you want a quick meeting near <Link href="/tidel-park-escorts" className="text-amber-400 hover:text-amber-300 underline">Tidel Park</Link> or someone to spend the evening with in <Link href="/nungambakkam-escorts" className="text-amber-400 hover:text-amber-300 underline">Nungambakkam</Link>, we make it happen.
                </p>
                <p>
                  Short bookings work if you&apos;re busy but want quality time. Overnight bookings give you more time - dinner, drinks, whatever you want to do. Both are available, and the girls adjust to whatever schedule you&apos;re working with.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/50.jpeg"
                  alt="Short term and overnight bookings with Russian escorts in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party and Social Events Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/60.jpeg"
                  alt="Russian escorts for parties and social events in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Need a Date for an Event? We&apos;ve Got You
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Got a business event, party, or gathering in Chennai? Don&apos;t go solo. Our <strong>Russian escorts in Chennai</strong> work great as dates for any event. They dress right for the occasion, they can talk to anyone, and they make you look good while enjoying themselves.
                </p>
                <p>
                  Whether it&apos;s a business dinner in <Link href="/adyar-escorts" className="text-amber-400 hover:text-amber-300 underline">Adyar</Link>, a pool party at a hotel, or a night at a club in <Link href="/t-nagar-escorts" className="text-amber-400 hover:text-amber-300 underline">T Nagar</Link>, these girls fit in anywhere. They&apos;re comfortable at formal business stuff or casual parties. You&apos;ll have someone to talk to, someone to dance with, and someone to go home with when it&apos;s over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Advance Payment Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                No Advance Payment Required - Pay After You&apos;re Happy
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Tired of getting scammed? We get it. That&apos;s why we don&apos;t ask for money upfront. You can book our <strong>Russian escorts in Chennai</strong>, confirm everything, and only pay after it&apos;s done. No deposits, no bank transfers before you meet - just book, meet, and pay if you&apos;re satisfied.
                </p>
                <p>
                  Here&apos;s how it works: You call us, tell us what you want, and we set it up. The girl shows up, you meet, and if everything&apos;s good, you pay cash. You only pay for what you get. It&apos;s our way of showing we&apos;re real and we stand behind what we do.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/70.jpeg"
                  alt="No advance payment booking with Russian escorts in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Availability Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/80.jpeg"
                  alt="24/7 available Russian escorts in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Available 24/7 - We&apos;re Here When You Need Us
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Late night? Early morning? Doesn&apos;t matter. Our <strong>Russian escorts in Chennai</strong> are available around the clock, every day. Just got off a flight? Finished a late meeting in <Link href="/omr-escorts" className="text-amber-400 hover:text-amber-300 underline">OMR</Link>? Can&apos;t sleep at 3 AM in your <Link href="/hotels/chennai/hyatt-regency-escorts" className="text-amber-400 hover:text-amber-300 underline">hotel</Link>? Someone&apos;s always ready to come to you.
                </p>
                <p>
                  No waiting lists, no telling you to call back later. Need someone at midnight on Tuesday? Sunday afternoon? We have girls ready. We respond fast, so you don&apos;t wait. Just call, tell us where you are in Chennai, and we&apos;ll send someone - day or night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful and Fashionable Escorts Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                They Show Up Looking Good Every Time
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  When our <strong>Russian escorts in Chennai</strong> show up, they look good. These girls care about how they look - nice clothes, makeup done right, and they carry themselves well. Whether you&apos;re meeting at a hotel in <Link href="/nungambakkam-escorts" className="text-amber-400 hover:text-amber-300 underline">Nungambakkam</Link> like <Link href="/hotels/chennai/the-park-escorts" className="text-amber-400 hover:text-amber-300 underline">The Park</Link> or your place in <Link href="/adyar-escorts" className="text-amber-400 hover:text-amber-300 underline">Adyar</Link>, they arrive looking sharp.
                </p>
                <p>
                  It&apos;s not just about looks. These are smart women who know how to handle themselves. Need someone who looks professional for a business dinner? Done. Want someone who looks great for a night out? No problem. They dress for the occasion and know how to act, so you look good wherever you are.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/90.jpeg"
                  alt="Beautiful and fashionable Russian escorts in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open-Minded and Cooperative Escorts Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/100.jpeg"
                  alt="Open-minded Russian escorts in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                They Listen and They&apos;re Open to What You Want
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Everyone wants different things. Our <strong>Russian escorts in Chennai</strong> understand that. They&apos;re open to different preferences and won&apos;t judge you. Whether you want something gentle and romantic or something more adventurous, they&apos;re ready to try whatever works for you.
                </p>
                <p>
                  The best thing? They actually pay attention. Tell them what you like, what you want to try, and they&apos;ll work with you. No awkward moments, no holding back - they want to make sure you&apos;re happy when you leave. That&apos;s what makes them different.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affordable Rates Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Good Service That Doesn&apos;t Break the Bank
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Think <strong>Russian escorts in Chennai</strong> cost too much? Not with us. Our rates are fair and we work with different budgets. Whether you want a quick meeting or an overnight booking, there&apos;s something that fits what you can spend.
                </p>
                <p>
                  What do you get? Real Russian girls, verified profiles, they show up on time, and you leave satisfied. No hidden fees, no surprises - just clear pricing. You pay for what you book, you get what you pay for. Good service doesn&apos;t have to cost a fortune.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/110.jpeg"
                  alt="Affordable Russian escort rates in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety and Hygiene Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/112.jpeg"
                  alt="Safe and hygienic Russian escort services in Chennai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Your Health and Safety Come First
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Worried about cleanliness and health? Don&apos;t be. All our <strong>Russian escorts in Chennai</strong> keep themselves clean. They get regular checkups, they take care of themselves, and they stay fresh. Your health matters as much as having a good time.
                </p>
                <p>
                  We don&apos;t cut corners on health. Every girl gets checked, and we make sure they&apos;re healthy before they meet anyone. Clean, fresh, safe - that&apos;s how we do it. You can relax and enjoy yourself without worrying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Curvaceous Russian Call Girls Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/russian-call-girl.jpg"
                  alt="Curvaceous and Slim Russian Call Girls in Chennai - All Types Available"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Curvaceous and Slim Russian Girls - All Types Available
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Our <strong>Russian call girls in Chennai</strong> come in all shapes and sizes - curvy, slim, whatever you prefer. These girls are attractive and they appreciate clients who treat them right. Spending the night with someone who knows what they&apos;re doing is a special experience. You&apos;ve worked hard - it&apos;s time to enjoy yourself and create memories that stick with you.
                </p>
                <p>
                  Our <strong>escort girls in Chennai</strong> like having fun - dating, parties, great nights out. They enjoy helping guys who lead busy, stressful lives unwind. Pick someone from our selection to spend time with. The experience will stick with you, and you&apos;ll probably want to book again. Have the night you want and walk away satisfied. A good night can reset you for whatever comes next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Russian Escort in Chennai Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Russian Escorts in Chennai That Deliver What You Want
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Our <strong>Russian escorts in Chennai</strong> go above and beyond - you won&apos;t be disappointed. They work with you to make sure you leave satisfied. We have all types of <strong>Russian call girls in Chennai</strong> - slim, curvy, whatever you&apos;re looking for. Guys want different things at different times. Book whatever type you want, and we&apos;ll send her to your location. Making sure you&apos;re happy is what we care about.
                </p>
                <p>
                  Our <strong>Russian escorts in Chennai</strong> are young, energetic, and they know what they&apos;re doing. They&apos;re not afraid to try different things. Role play, different positions, whatever fantasies you have - they&apos;re open to exploring. They&apos;ll give you an experience you won&apos;t forget. They dress well and can dress how you want for your evening. Relax and enjoy having your desires met. Have the date you want with the girl you want, and enjoy your night.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/russian-escort-in-chennai.jpg"
                  alt="Russian Escorts in Chennai - Professional Service That Delivers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Hotels Section */}
      <Hotels />

      {/* FAQ Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12" itemScope itemType="https://schema.org/FAQPage">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold text-white mb-3" itemProp="name">
                How to book Russian escorts in Chennai?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-white/80 leading-relaxed" itemProp="text">
                  Booking Russian escorts in Chennai is simple. Call us, tell us what you&apos;re looking for, and we&apos;ll match you with someone who fits. Our Russian girls in Chennai know how to connect and are available 24/7.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold text-white mb-3" itemProp="name">
                Do you offer Russian escorts with discount in Chennai?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-white/80 leading-relaxed" itemProp="text">
                  Yes, we offer a 10% discount on booking Russian escorts in Chennai. Contact us to avail the discount on verified Russian call girls.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold text-white mb-3" itemProp="name">
                Are Russian escorts in Chennai verified?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-white/80 leading-relaxed" itemProp="text">
                  Yes, every Russian call girl in Chennai we work with is real and verified. We check IDs, verify who they are, and confirm they&apos;re actually Russian. Every girl goes through our verification process before they&apos;re on our list.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold text-white mb-3" itemProp="name">
                Do you require advance payment for Russian escorts?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-white/80 leading-relaxed" itemProp="text">
                  No, we don&apos;t ask for money upfront. You can book our Russian escorts in Chennai, confirm everything, and only pay after it&apos;s done. No deposits, no bank transfers before you meet - just book, meet, and pay if you&apos;re satisfied.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold text-white mb-3" itemProp="name">
                Are Russian escorts available 24/7 in Chennai?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-white/80 leading-relaxed" itemProp="text">
                  Yes, our Russian escorts in Chennai are available around the clock, every day. Whether it&apos;s late night, early morning, or any time, someone&apos;s always ready to come to you. Just call, tell us where you are in Chennai, and we&apos;ll send someone.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg" itemScope itemType="https://schema.org/Question">
              <h3 className="text-xl font-semibold text-white mb-3" itemProp="name">
                Do Russian escorts provide in-call and out-call services?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-white/80 leading-relaxed" itemProp="text">
                  Yes, our Russian escorts in Chennai do both in-call and out-call. In-call means you go to her place - good for quick meetings. Out-call means she comes to you - works for hotels, your home, or wherever you want in Chennai.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}


