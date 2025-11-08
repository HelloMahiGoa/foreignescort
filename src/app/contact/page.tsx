import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Foreign Escort | Book Russian Escorts",
  description:
    "Get in touch with Foreign Escort to book professional Russian escorts across Goa, Mumbai, Delhi, Bangalore, Chennai and other major Indian cities.",
};

export default function ContactPage() {
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
            â† Back
          </Link>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              Ready to book? Reach out via hotline or use the booking form below. Our 24/7 operations desk ensures quick response times and seamless coordination.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[#60a5fa]/60">
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40 bg-gradient-to-br from-blue-500/90 via-cyan-400/80 to-teal-500/90" aria-hidden="true" />
              <div className="relative">
                <p className="text-lg font-semibold text-white">24/7 Hotline</p>
                <p className="mt-2 text-sm text-white/70">
                  Round-the-clock support with 5-minute response times.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[#60a5fa]/60">
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40 bg-gradient-to-br from-blue-500/90 via-cyan-400/80 to-teal-500/90" aria-hidden="true" />
              <div className="relative">
                <p className="text-lg font-semibold text-white">8+ Cities</p>
                <p className="mt-2 text-sm text-white/70">
                  Service available across major Indian cities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg shadow-[0_30px_70px_-45px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Contact Info
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-sm font-semibold text-white">Hotline</p>
                <Link
                  href="tel:+918121426651"
                  className="mt-1 text-sm text-amber-400 hover:text-amber-300 transition"
                >
                  +91 81214 26651
                </Link>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-sm font-semibold text-white">Response Time</p>
                <p className="mt-1 text-sm text-white/70">Under 5 minutes</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-sm font-semibold text-white">Languages</p>
                <p className="mt-1 text-sm text-white/70">English, Hindi, Russian</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-white/10 opacity-0 transition duration-500 hover:opacity-30" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
              Service Areas
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <p>Goa, Mumbai, Delhi NCR</p>
              <p>Bangalore, Chennai, Hyderabad</p>
              <p>Pune, Kolkata & more</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
            <h2 className="text-2xl font-semibold mb-6 text-white">Booking Form</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-white/80 mb-2">
                  City
                </label>
                <select
                  id="city"
                  name="city"
                  className="w-full rounded-xl border border-white/20 bg-zinc-900/80 px-4 py-3 text-white focus:border-white/40 focus:outline-none focus:bg-zinc-900 [&>option]:bg-zinc-900 [&>option]:text-white"
                  style={{ backgroundColor: 'rgba(24, 24, 27, 0.8)' }}
                >
                  <option value="">Select city</option>
                  <option value="goa">Goa</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi-ncr">Delhi NCR</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                  <option value="kolkata">Kolkata</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none resize-none"
                  placeholder="Tell us your preferences..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}


