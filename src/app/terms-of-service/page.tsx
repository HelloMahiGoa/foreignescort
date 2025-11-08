import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Foreign Escort",
  description:
    "Read our terms of service to understand the terms and conditions for using Foreign Escort&apos;s Russian escort services across major Indian cities.",
};

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              These terms govern your use of Foreign Escort&apos;s services. Please read carefully before booking our <strong>Russian escorts</strong>.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[#60a5fa]/60">
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40 bg-gradient-to-br from-blue-500/90 via-cyan-400/80 to-teal-500/90" aria-hidden="true" />
              <div className="relative">
                <p className="text-lg font-semibold text-white">Service Agreement</p>
                <p className="mt-2 text-sm text-white/70">
                  All bookings are subject to these terms and our service standards.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[#60a5fa]/60">
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40 bg-gradient-to-br from-blue-500/90 via-cyan-400/80 to-teal-500/90" aria-hidden="true" />
              <div className="relative">
                <p className="text-lg font-semibold text-white">Client Responsibilities</p>
                <p className="mt-2 text-sm text-white/70">
                  Clients must treat all escorts with respect and maintain professional boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg shadow-[0_30px_70px_-45px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Key Terms
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              {[
                { label: "Booking Terms", step: "01" },
                { label: "Service Standards", step: "02" },
                { label: "Cancellation Policy", step: "03" },
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
              Quick Links
            </p>
            <div className="mt-4 space-y-3">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/20"
              >
                Contact Us
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

      {/* Content Sections */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold mb-6 text-white">Service Agreement</h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80">
                <p>
                  By booking our <strong>Russian escorts</strong>, you agree to these terms of service. Our services are available to adults aged 18 and above. All bookings are subject to availability and verification.
                </p>
                <p>
                  We provide professional companionship services through verified <strong>Russian call girls</strong> across major Indian cities. Our services are designed for adults seeking quality companionship in a discreet and professional manner.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold mb-6 text-white">Client Responsibilities</h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80">
                <p>
                  Clients are expected to treat all <strong>Russian escorts</strong> with respect and maintain professional boundaries. Any behavior that violates these standards may result in immediate termination of service without refund.
                </p>
                <p>
                  Clients must provide accurate information when booking, including correct contact details and hotel information. Misrepresentation may result in service cancellation or additional charges.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold mb-6 text-white">Booking and Payment</h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80">
                <p>
                  Bookings are confirmed upon payment or agreement with our operations desk. Payment terms are discussed during booking confirmation. We accept various payment methods as agreed upon during booking.
                </p>
                <p>
                  All bookings are subject to availability. While we strive to accommodate all requests, availability depends on our network of <strong>Russian escorts</strong> and their schedules. We will inform you immediately if requested services are unavailable.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold mb-6 text-white">Cancellation Policy</h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80">
                <p>
                  Cancellations must be communicated to our operations desk as soon as possible. Cancellation terms vary based on timing and circumstances, and will be discussed during booking confirmation.
                </p>
                <p>
                  We understand that circumstances may change, and we work with clients to find reasonable solutions. However, late cancellations or no-shows may result in charges as agreed upon during booking.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold mb-6 text-white">Service Standards</h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80">
                <p>
                  We maintain high standards for all our <strong>Russian escorts</strong>. Every escort in our network is verified, professional, and committed to providing quality service. We expect clients to maintain similar standards of respect and professionalism.
                </p>
                <p>
                  If you have concerns about service quality, please contact our operations desk immediately. We take all feedback seriously and work to resolve any issues promptly and professionally.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold mb-6 text-white">Limitation of Liability</h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80">
                <p>
                  Foreign Escort provides coordination services for professional companionship. We are not responsible for the actions of individual escorts beyond our coordination and verification responsibilities.
                </p>
                <p>
                  Our liability is limited to the service fees paid. We are not responsible for indirect damages, loss of opportunity, or other consequential damages arising from service provision.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80">
                <p>
                  For questions about these terms or to discuss specific booking arrangements, contact our operations desk at <Link href="tel:+918121426651" className="text-amber-400 hover:text-amber-300 underline">+91 81214 26651</Link> or use our <Link href="/contact" className="text-amber-400 hover:text-amber-300 underline">contact form</Link>.
                </p>
                <p>
                  We reserve the right to update these terms of service from time to time. Any changes will be posted on this page, and continued use of our services constitutes acceptance of updated terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


