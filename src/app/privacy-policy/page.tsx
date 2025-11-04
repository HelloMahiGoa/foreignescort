import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Hello Mahi",
  description:
    "Read our privacy policy to understand how Hello Mahi protects your personal information and ensures complete discretion in our services.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              Your privacy is fundamental to our service. This policy explains how we collect, use, and protect your personal information while maintaining complete discretion.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[#60a5fa]/60">
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40 bg-gradient-to-br from-blue-500/90 via-cyan-400/80 to-teal-500/90" aria-hidden="true" />
              <div className="relative">
                <p className="text-lg font-semibold text-white">Complete Discretion</p>
                <p className="mt-2 text-sm text-white/70">
                  All personal information is encrypted and protected with strict confidentiality protocols.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[#60a5fa]/60">
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40 bg-gradient-to-br from-blue-500/90 via-cyan-400/80 to-teal-500/90" aria-hidden="true" />
              <div className="relative">
                <p className="text-lg font-semibold text-white">Data Protection</p>
                <p className="mt-2 text-sm text-white/70">
                  We never share client information with third parties and maintain secure data storage systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg shadow-[0_30px_70px_-45px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Privacy Principles
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              {[
                { label: "Data Security", step: "01" },
                { label: "Confidentiality", step: "02" },
                { label: "Client Rights", step: "03" },
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
              <h2 className="text-2xl font-semibold mb-6 text-white">Information We Collect</h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80">
                <p>
                  Hello Mahi collects only the information necessary to provide our services. This includes contact information such as phone numbers, names, and booking preferences. We collect this information when you contact our operations desk or submit a booking form.
                </p>
                <p>
                  We do not collect sensitive personal data beyond what is required for service delivery. All information is collected with your explicit consent and is used solely for the purpose of coordinating bookings and ensuring service quality.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold mb-6 text-white">How We Use Your Information</h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80">
                <p>
                  Your personal information is used exclusively to coordinate bookings, verify availability, and ensure seamless service delivery. We use this information to match your preferences with available <strong>Russian escorts</strong>, coordinate hotel access, and arrange transportation when requested.
                </p>
                <p>
                  We never share your personal information with third parties, except when required by law or necessary for service delivery (such as coordinating with hotels or drivers). All such sharing is done with strict confidentiality agreements and only for the purpose of completing your booking.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold mb-6 text-white">Data Security</h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80">
                <p>
                  We implement industry-standard security measures to protect your personal information. All data is encrypted during transmission and stored securely. Our field crews are trained in privacy protocols and confidentiality requirements.
                </p>
                <p>
                  We regularly review and update our security practices to ensure your information remains protected. Access to client information is restricted to authorized personnel only, and all access is logged and monitored.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold mb-6 text-white">Your Rights</h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80">
                <p>
                  You have the right to access, correct, or delete your personal information at any time. You can request information about what data we hold about you, request corrections to inaccurate information, or request deletion of your data.
                </p>
                <p>
                  To exercise these rights, contact our operations desk. We will respond to your request within a reasonable timeframe and ensure your privacy rights are respected throughout the process.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/50 p-8 backdrop-blur-lg shadow-[0_35px_80px_-50px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80">
                <p>
                  If you have questions about this privacy policy or wish to exercise your rights, please contact our operations desk at <Link href="tel:+918121426651" className="text-amber-400 hover:text-amber-300 underline">+91 81214 26651</Link> or use our <Link href="/contact" className="text-amber-400 hover:text-amber-300 underline">contact form</Link>.
                </p>
                <p>
                  We reserve the right to update this privacy policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

