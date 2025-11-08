import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Foreign Escort | Russian Escort Services Across Major Cities",
  description:
    "Learn about Foreign Escort's commitment to providing discreet, professional Russian escort services across Goa, Mumbai, Delhi, Bangalore, Chennai and other major Indian cities.",
};

export default function AboutPage() {
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
              About Foreign Escort
            </h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              We operate field crews across India&apos;s major metros to ensure verified Russian escorts arrive on time, at the right location, with clear communication every step of the way.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[#60a5fa]/60">
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40 bg-gradient-to-br from-blue-500/90 via-cyan-400/80 to-teal-500/90" aria-hidden="true" />
              <div className="relative">
                <p className="text-lg font-semibold text-white">8+ Cities Live</p>
                <p className="mt-2 text-sm text-white/70">
                  Active operations in Goa, Mumbai, Delhi NCR, Bangalore, Chennai, Hyderabad, Pune, and Kolkata.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-5 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[#60a5fa]/60">
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40 bg-gradient-to-br from-blue-500/90 via-cyan-400/80 to-teal-500/90" aria-hidden="true" />
              <div className="relative">
                <p className="text-lg font-semibold text-white">24/7 Operations</p>
                <p className="mt-2 text-sm text-white/70">
                  Round-the-clock hotline support with 5-minute response times, even on weekends.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/50 p-6 backdrop-blur-lg shadow-[0_30px_70px_-45px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Our Stats
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#fde68a] via-[#fbbf24] to-[#f97316]">08+</p>
                <p className="mt-1 text-sm text-white/70">Cities Live</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#fde68a] via-[#fbbf24] to-[#f97316]">120+</p>
                <p className="mt-1 text-sm text-white/70">Profiles Synced</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#fde68a] via-[#fbbf24] to-[#f97316]">24/7</p>
                <p className="mt-1 text-sm text-white/70">Support Window</p>
              </div>
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

      {/* Content Section 1 */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Our Mission and Values
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Foreign Escort operates with a clear mission: to provide discreet, professional, and reliable <strong>Russian escort services</strong> across India&apos;s major cities. We understand that quality companionship requires trust, discretion, and attention to detail. Our network spans <Link href="/goa-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Goa</Link>, <Link href="/mumbai-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Mumbai</Link>, <Link href="/delhi-ncr-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Delhi NCR</Link>, <Link href="/bangalore-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Bangalore</Link>, and <Link href="/chennai-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Chennai</Link>, ensuring consistent service standards wherever you travel.
                </p>
                <p>
                  Every <strong>Russian escort</strong> in our network undergoes thorough verification. We maintain professional relationships with premium hotels, private drivers, and local venues to ensure seamless coordination. Our commitment to discretion means your privacy is protected at every step, from initial contact through checkout.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/1.jpeg"
                  alt="Professional Russian escorts"
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
                  src="/images/gallery/10.jpeg"
                  alt="Verified Russian escorts network"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Verified Network of Russian Escorts
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Our <strong>Russian escorts</strong> are carefully selected professionals who understand the importance of discretion and professionalism. Each profile is verified with photo sets, availability calendars, and communication preferences. Whether you need a companion for business events in <Link href="/hyderabad-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Hyderabad</Link>, weekend getaways in <Link href="/pune-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Pune</Link>, or cultural experiences in <Link href="/kolkata-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Kolkata</Link>, our network ensures quality matches.
                </p>
                <p>
                  We maintain bilingual communication capabilities, understanding that language should never be a barrier. Our <strong>Russian call girls</strong> are fluent in English and other languages, making interactions smooth and natural. Every escort in our network maintains high standards of hygiene, professionalism, and respect for client boundaries.
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
                24/7 Operations Desk
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Our operations desk operates around the clock, ensuring you can book <strong>Russian escorts</strong> whenever you need them. Whether it&apos;s a last-minute business trip to <Link href="/jaipur-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Jaipur</Link> or a planned weekend in <Link href="/goa-russian-escorts" className="text-amber-400 hover:text-amber-300 underline">Goa</Link>, our team responds within minutes. We understand that schedules change, and we&apos;re equipped to handle quick adjustments while maintaining service quality.
                </p>
                <p>
                  The operations desk coordinates with field crews in each city to verify availability, confirm hotel access, and arrange transportation. This infrastructure ensures that every booking is seamless, from your initial call through the final checkout. Our commitment to punctuality and professionalism sets us apart in the industry.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/20.jpeg"
                  alt="24/7 operations support"
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
                  src="/images/gallery/30.jpeg"
                  alt="Premium hotel partnerships"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Premium Hotel Partnerships
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  We maintain standing relationships with premium hotels across all our service cities. This network ensures that your <strong>Russian escort</strong> can access hotel facilities seamlessly, whether you&apos;re staying at Taj properties, Oberoi hotels, or boutique luxury accommodations. Our field crews coordinate with hotel security and concierge teams to ensure smooth check-ins and access.
                </p>
                <p>
                  These partnerships mean faster confirmations and better service quality. When you book through Foreign Escort, you&apos;re accessing a network that understands the logistics of premium hospitality. From airport hotels to city center properties, we ensure your experience remains discreet and professional.
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
                Discretion and Privacy
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Privacy is fundamental to our service. Every interaction is handled with complete discretion, from initial contact through final checkout. We understand that clients value confidentiality, and our entire operation is designed to protect your identity and personal information. All communication is encrypted, and our field crews are trained in privacy protocols.
                </p>
                <p>
                  Our <strong>Russian escorts</strong> understand the importance of discretion and maintain professional boundaries. Whether you&apos;re a business traveler, visiting executive, or local resident, your privacy is protected at every step. We never share client information, and all bookings are handled with absolute confidentiality.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/40.jpeg"
                  alt="Discreet professional service"
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
            <h2 className="text-2xl font-semibold mb-6 text-white">Why Choose Foreign Escort?</h2>
            <div className="space-y-4 text-base leading-relaxed text-white/80">
              <p>
                Foreign Escort stands out in the industry through our commitment to quality, professionalism, and reliability. We operate field crews across <strong>8+ major cities</strong>, ensuring consistent service standards wherever you travel. Our <strong>120+ verified Russian escorts</strong> are carefully selected professionals who understand the importance of discretion and client satisfaction.
              </p>
              <p>
                Our 24/7 operations desk ensures you can book whenever you need, with response times under 5 minutes. We maintain partnerships with premium hotels, ensuring seamless access and coordination. Every booking is handled with complete discretion, protecting your privacy at every step.
              </p>
              <p>
                Whether you&apos;re visiting India for business or pleasure, Foreign Escort provides the reliable, professional service you deserve. Our network spans from beachfront destinations in Goa to business hubs in Bangalore and Mumbai, ensuring quality companionship wherever your travels take you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


