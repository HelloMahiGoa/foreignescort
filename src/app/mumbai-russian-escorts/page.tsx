import Image from "next/image";
import type { Metadata } from "next";

import CityPageTemplate from "@/components/CityPageTemplate";
import { getCityBySlug } from "@/lib/cities";
import { generateCityMetadata, generateCityStructuredData } from "@/lib/seo";
import { renderHotelParagraph } from "@/lib/hotels/renderHotelContent";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/Testimonials";
import Hotels from "@/components/Hotels";

const citySlug = "mumbai-russian-escorts";
const city = getCityBySlug(citySlug);

if (!city) {
  throw new Error(`City definition missing for slug: ${citySlug}`);
}

export const metadata: Metadata = generateCityMetadata(city);

export default function MumbaiRussianEscortsPage() {
  if (!city) {
    throw new Error(`City definition missing for slug: ${citySlug}`);
  }

  const structuredData = generateCityStructuredData(city);

  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumbSchema) }}
      />
      <CityPageTemplate city={city} />
      
      {/* Russian Escorts Who Know Mumbai Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/1.jpeg"
                  alt="Russian escorts in Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Russian Escorts Who Know Mumbai Inside and Out
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Mumbai mixes business with entertainment, and our <strong>Russian escorts in Mumbai</strong> get that. Whether you're hitting the celebrity scene in <Link href=\"/mumbai-russian-escorts/bandra-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Bandra</Link> with all the penthouses, or checking out the beachfront in <Link href=\"/mumbai-russian-escorts/juhu-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Juhu</Link>, these girls know how to make it work.", "section-0-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("What makes our <strong>Russian call girls in Mumbai</strong> different? They like the celebrity culture, they know how to handle business districts, and they understand that privacy matters in a city that takes business seriously. Whether you're at a hotel in <Link href=\"/mumbai-russian-escorts/colaba-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Colaba</Link> or a beachfront place in <Link href=\"/mumbai-russian-escorts/worli-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Worli</Link>, they fit in wherever you are.", "section-0-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Events or Celebrity Parties Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Business Events or Celebrity Parties - We Handle Both
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Mumbai brings in business professionals and entertainment people, and our <strong>Russian escorts</strong> work for both. Privacy matters here - whether you're at business meetings in <Link href=\"/mumbai-russian-escorts/lower-parel-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Lower Parel</Link> or celebrity events in <Link href=\"/mumbai-russian-escorts/bandra-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Bandra</Link>, our girls know how to keep things quiet.", "section-1-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Mumbai mixes business districts with entertainment zones, and you need someone who can do both. Our <strong>Russian escorts in Mumbai</strong> are fine at professional stuff like corporate offices and business lounges, and they're good at celebrity parties and exclusive clubs too. They get what makes Mumbai special, so your experience feels real and respectful.", "section-1-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/10.jpeg"
                  alt="Business and celebrity Russian escorts in Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Events, Celebrity Parties, or Dinner Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/20.jpeg"
                  alt="Business and entertainment Russian escorts in Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Business Events, Celebrity Parties, or Dinner - They Fit In
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Mumbai's got different experiences - business meetings, corporate events, celebrity parties, beachfront dining. Our <strong>Russian escorts</strong> work for all of them. They dress well, they can talk, and they're engaged whether you're talking about business or planning your night.", "section-2-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Need someone for a business dinner in <Link href=\"/mumbai-russian-escorts/worli-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Worli</Link>? Our girls know how to handle professional settings. Going to a celebrity event in <Link href=\"/mumbai-russian-escorts/bandra-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Bandra</Link>? They'll go with you and fit right in. Want someone for dinner at a beachfront place in <Link href=\"/mumbai-russian-escorts/juhu-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Juhu</Link>? They blend in with the vibe. These <strong>Russian girls in Mumbai</strong> handle whatever situation you're in.", "section-2-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Russian Girls, Verified and Professional Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Real Russian Girls - No Fake Profiles
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Worried about fake profiles? All our <strong>Russian call girls in Mumbai</strong> are real. We check backgrounds, verify IDs, and make sure they're actually Russian - not someone just claiming to be. Every girl we work with in Mumbai gets checked, so you can book knowing you're getting the real thing.", "section-3-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("That means you get exactly who you see - attractive, professional, and they actually show up. Our <strong>Russian escorts in Mumbai</strong> know they need to be on time, look good, and deliver every time. Whether you're in <Link href=\"/mumbai-russian-escorts/colaba-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Colaba</Link>, <Link href=\"/mumbai-russian-escorts/bandra-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Bandra</Link>, or anywhere in Mumbai, these verified girls make sure you get what you paid for.", "section-3-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/30.jpeg"
                  alt="Verified Russian escorts in Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Service Options for Every Schedule Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/40.jpeg"
                  alt="Flexible Russian escort services in Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Quick Sessions or Long Evenings - We Do Both
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Mumbai visitors want different things - some want quick meetings between business, others want longer evenings. Our <strong>Russian escorts</strong> do both. Whether you're busy exploring the city or you've got time for a relaxed evening, we've got options that work with your schedule.", "section-4-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Short bookings work if you want quality time without a big commitment. Longer sessions are good if you're staying in places like <Link href=\"/mumbai-russian-escorts/lower-parel-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Lower Parel</Link> or <Link href=\"/mumbai-russian-escorts/worli-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Worli</Link> and want someone to spend the evening with. Our <strong>Russian escorts in Mumbai</strong> adjust to your timeline and what you want, so every minute counts.", "section-4-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Hotels and Business Properties - We Cover All Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Hotels or Business Properties - They Fit In Anywhere
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Mumbai's got everything from hotels to business properties. Our <strong>Russian escorts</strong> are fine with both. Staying at a hotel in <Link href=\"/mumbai-russian-escorts/colaba-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Colaba</Link>? They get how those places work. Got a business hotel in <Link href=\"/mumbai-russian-escorts/lower-parel-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Lower Parel</Link>? They fit in there too.", "section-5-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("What makes our <strong>Russian escorts in Mumbai</strong> flexible? They're smart, they know how to adapt, and they can match whatever environment you're in. Whether you want someone who gets heritage hotels or someone who understands business culture, these girls adjust to make your experience better wherever you're staying.", "section-5-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/50.jpeg"
                  alt="Hotel and business property Russian escorts in Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrity Culture and Business Life Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/60.jpeg"
                  alt="Celebrity culture Russian escorts in Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                They Get Celebrity Culture and Business Life
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Mumbai mixes celebrity culture with business, and our <strong>Russian escorts</strong> get that balance. They understand the entertainment vibe while staying professional. Whether you're hitting celebrity areas in <Link href=\"/mumbai-russian-escorts/bandra-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Bandra</Link> or business districts in <Link href=\"/mumbai-russian-escorts/lower-parel-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Lower Parel</Link>, these girls know how to handle both.", "section-6-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("This mix of understanding celebrity culture and business makes our <strong>Russian call girls in Mumbai</strong> valuable. They can talk about entertainment industry trends and celebrity culture, they appreciate good experiences, and they can also have conversations about business, finance, and corporate stuff. It's this balance that makes them different.", "section-6-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliable Service for Business Travelers and Entertainment Industry Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Reliable Service for Business Travelers and Entertainment People
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Mumbai brings in business travelers and entertainment industry people. Our <strong>Russian escorts</strong> work for both. Business travelers like girls who can help with corporate stuff, while entertainment people want professional service that shows up on time and fits their event schedule.", "section-7-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("What makes our service reliable? Our <strong>Russian escorts in Mumbai</strong> show up when they say they will, communicate clearly, and deliver quality every time. Whether you're here for business meetings or entertainment events, these professionals make sure you get service you can count on. From <Link href=\"/mumbai-russian-escorts/colaba-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Colaba</Link> to <Link href=\"/mumbai-russian-escorts/bandra-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Bandra</Link>, reliable service is what we do.", "section-7-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/70.jpeg"
                  alt="Reliable Russian escorts in Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful Companions Who Appreciate Mumbai's Charm Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/80.jpeg"
                  alt="Beautiful Russian escorts in Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Attractive Girls Who Actually Like Mumbai
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Our <strong>Russian escorts in Mumbai</strong> aren't just attractive - they actually like what Mumbai has to offer. They enjoy business culture, they get the entertainment industry, and they can make your Mumbai trip more memorable. Whether you want to hit exclusive clubs together or grab dinner at a nice restaurant, these girls make every moment better.", "section-8-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("These <strong>Russian girls</strong> care about how they look and they're professional. They show up looking good, dressed right for Mumbai's business-entertainment vibe. Whether you're at a corporate setting or a celebrity venue, they know how to present themselves. This attention to detail and actually liking Mumbai makes them great for your visit.", "section-8-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Advance Payment - Book with Confidence Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                No Advance Payment - Pay After You're Happy
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Worried about scams? We get it. That's why we don't ask for money upfront for our <strong>Russian escorts in Mumbai</strong>. You can confirm everything, set it all up, and only pay after it's done. No deposits, no bank transfers before you meet - just book, meet, and pay if you're satisfied.", "section-9-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Here's how it works: Contact us, tell us what you want, and we set it up. The girl shows up at your location in Mumbai - whether that's a hotel in <Link href=\"/mumbai-russian-escorts/colaba-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Colaba</Link> or a business property in <Link href=\"/mumbai-russian-escorts/lower-parel-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Lower Parel</Link>. You meet, and if everything's good, you pay cash. You only pay for what you get. It's our way of showing we're real and we stand behind what we do.", "section-9-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/90.jpeg"
                  alt="No advance payment Russian escorts in Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available 24/7 for Your Convenience Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/100.jpeg"
                  alt="24/7 Russian escorts in Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Available 24/7 - We're Here When You Need Us
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Whether you get to Mumbai early morning or finish a late business meeting, our <strong>Russian escorts</strong> are available around the clock. No waiting lists, no telling you to call back later - someone's always ready to come to you, day or night, every day.", "section-10-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("This 24/7 availability is especially useful in Mumbai, where business travelers might arrive at weird hours or event schedules are all over the place. Our <strong>Russian escorts in Mumbai</strong> get that your time matters, so they're flexible and ready when you need them. Quick responses mean you don't wait. Just call, tell us where you are, and we'll send someone.", "section-10-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Curvaceous And Lanky Russian Call Girls Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/russian-call-girl.jpg"
                  alt="Curvaceous Russian Call Girls in Mumbai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Curvy and Slim Russian Girls - All Types Available
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Our <strong>Russian call girls in Mumbai</strong> come in all shapes and sizes - curvy, slim, whatever you prefer. These girls are attractive and they appreciate clients who treat them right. Spending the night with someone who knows what they're doing is a special experience. You've worked hard - it's time to enjoy yourself and create memories that stick with you.
                </p>
                <p>
                  Our <strong>escort girls in Mumbai</strong> like having fun - dating, parties, great nights out. They enjoy helping guys who lead busy, stressful lives unwind. Pick someone from our selection to spend time with. The experience will stick with you, and you'll probably want to book again. Have the night you want and walk away satisfied. A good night can reset you for whatever comes next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Russian Escort in Mumbai Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Russian Escorts in Mumbai That Deliver What You Want
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Our <strong>Russian escorts in Mumbai</strong> go above and beyond - you won't be disappointed. They work with you to make sure you leave satisfied. We have all types of <strong>Russian call girls in Mumbai</strong> - slim, curvy, whatever you're looking for. Guys want different things at different times. Book whatever type you want, and we'll send her to your location. Making sure you're happy is what we care about.
                </p>
                <p>
                  Our <strong>Russian escorts in Mumbai</strong> are young, energetic, and they know what they're doing. They're not afraid to try different things. Role play, different positions, whatever fantasies you have - they're open to exploring. They'll give you an experience you won't forget. They dress well and can dress how you want for your evening. Relax and enjoy having your desires met. Have the date you want with the girl you want, and enjoy your night.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/russian-escort-in-chennai.jpg"
                  alt="Russian Escort in Mumbai"
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
      <Testimonials cityName="Mumbai" />

      {/* Hotels Section */}
      <Hotels citySlug="mumbai-russian-escorts" cityDisplayName="Mumbai" />
    </>
  );
}
