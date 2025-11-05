import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery | Foreign Escort",
  description:
    "View our curated gallery of professional Russian escorts available across Goa, Mumbai, Delhi, Bangalore, Chennai and other major Indian cities.",
};

export default function GalleryPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 -z-20 md:hidden">
        <div className="relative h-screen w-full">
          <Image
            src="/images/mobile-hero.jpg"
            alt="Nightlife background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-20 hidden md:block">
        <div className="relative h-screen w-full">
          <Image
            src="/images/desktop-hero.jpg"
            alt="Nightlife background"
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
              Gallery
            </h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              Browse verified photo sets from our network of professional Russian escorts across India. Every profile is authentic and regularly updated to reflect current availability.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[#60a5fa]/60">
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40 bg-gradient-to-br from-blue-500/90 via-cyan-400/80 to-teal-500/90" aria-hidden="true" />
              <div className="relative">
                <p className="text-lg font-semibold text-white">Verified Photos</p>
                <p className="mt-2 text-sm text-white/70">
                  All photos are professionally taken and verified by our field crews for authenticity.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[#60a5fa]/60">
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40 bg-gradient-to-br from-blue-500/90 via-cyan-400/80 to-teal-500/90" aria-hidden="true" />
              <div className="relative">
                <p className="text-lg font-semibold text-white">Real-Time Updates</p>
                <p className="mt-2 text-sm text-white/70">
                  Profiles are regularly updated to ensure availability information is current and accurate.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg shadow-[0_30px_70px_-45px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Gallery Features
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              {[
                { label: "Browse by city", step: "01" },
                { label: "View profiles", step: "02" },
                { label: "Book instantly", step: "03" },
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
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-white/10 opacity-0 transition duration-500 hover:opacity-30" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
              Quick Access
            </p>
            <div className="mt-4 space-y-3">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/20"
              >
                Book Now
              </Link>
              <Link
                href="tel:+918121426651"
                className="flex items-center justify-center rounded-2xl border border-white/40 px-4 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Hotline +91 81214 26651
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Component */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Gallery />
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Verified Photo Sets
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Our gallery features verified photo sets from our network of <strong>Russian escorts</strong> across India. Every profile displayed is authentic and regularly updated to reflect current availability. Whether you&apos;re looking for companions in <Link href="/mumbai-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Mumbai</Link>, <Link href="/delhi-ncr-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Delhi NCR</Link>, or <Link href="/bangalore-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Bangalore</Link>, our gallery provides accurate representation of our network.
                </p>
                <p>
                  All photos are professionally taken and verified by our field crews. We maintain strict standards to ensure every image accurately represents the <strong>Russian escort</strong> you&apos;ll meet. Our verification process includes identity checks, photo authenticity verification, and regular updates to ensure profiles remain current.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/50.jpeg"
                  alt="Verified Russian escort photos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2 */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/60.jpeg"
                  alt="Professional Russian escorts gallery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Browse by City
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Our gallery organizes <strong>Russian escorts</strong> by city, making it easy to find companions in your destination. From beachfront destinations in <Link href="/goa-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Goa</Link> to business hubs in <Link href="/hyderabad-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Hyderabad</Link> and cultural centers in <Link href="/kolkata-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Kolkata</Link>, our network spans major Indian cities. Each city gallery showcases profiles available in that location.
                </p>
                <p>
                  Whether you&apos;re planning a business trip to <Link href="/pune-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Pune</Link> or a weekend getaway to <Link href="/jaipur-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Jaipur</Link>, browsing our gallery helps you understand the quality and variety of our network. Each profile includes verified photos, availability information, and communication preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 3 */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Real-Time Availability
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Our gallery connects directly to our operations desk, ensuring that availability information is current. When you see a profile in our gallery, our team can confirm real-time availability within minutes. This system eliminates the frustration of outdated listings and ensures you can book with confidence.
                </p>
                <p>
                  Every <strong>Russian escort</strong> profile includes availability calendars that are updated regularly. Our operations desk maintains communication with field crews in each city to track schedules and confirm availability. This infrastructure ensures that gallery browsing leads directly to confirmed bookings.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/70.jpeg"
                  alt="Real-time availability updates"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 4 */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/80.jpeg"
                  alt="Professional verification process"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Verification Process
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Every <strong>Russian escort</strong> in our gallery undergoes a thorough verification process. This includes identity verification, photo authenticity checks, and professional background verification. Our field crews meet with each escort to confirm professionalism, communication skills, and service standards.
                </p>
                <p>
                  The verification process ensures that every profile in our gallery represents a verified professional. We maintain regular updates to ensure photos remain current and accurate. This commitment to verification means you can browse our gallery with confidence, knowing every profile is authentic and verified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 5 */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Booking Through Gallery
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Browsing our gallery is the first step in booking a <strong>Russian escort</strong>. When you find a profile that matches your preferences, contact our operations desk to confirm availability and make arrangements. Our team coordinates with field crews to ensure seamless booking and confirmation.
                </p>
                <p>
                  The gallery provides detailed information about each <strong>Russian call girl</strong>, including verified photos, availability windows, and communication preferences. This information helps you make informed decisions before contacting our operations desk. Our team can answer additional questions and coordinate bookings based on your specific requirements.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/90.jpeg"
                  alt="Easy booking process"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 6 */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
            <h2 className="text-2xl font-semibold mb-6 text-white">Gallery Features</h2>
            <div className="space-y-4 text-base leading-relaxed text-white/80">
              <p>
                Our gallery provides comprehensive access to our network of <strong>120+ verified Russian escorts</strong> across <strong>8+ major Indian cities</strong>. Each profile includes verified photo sets, availability information, and detailed descriptions. The gallery is organized by city, making it easy to browse profiles in your destination.
              </p>
              <p>
                All photos are professionally taken and regularly updated to ensure accuracy. Our verification process ensures every profile is authentic and verified. Real-time availability connections mean you can browse with confidence, knowing that profiles you see are currently available.
              </p>
              <p>
                For instant access to verified profiles and real-time availability confirmation, contact our 24/7 operations desk. Our team can provide additional information, answer questions, and coordinate bookings based on your specific requirements and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

