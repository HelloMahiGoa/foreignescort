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

const citySlug = "pune-russian-escorts";
const city = getCityBySlug(citySlug);

if (!city) {
  throw new Error(`City definition missing for slug: ${citySlug}`);
}

export const metadata: Metadata = generateCityMetadata(city);

export default function PuneRussianEscortsPage() {
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
      
      {/* Russian Escorts Who Get Pune's Vibe Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/1.jpeg"
                  alt="Russian escorts in Pune"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Russian Escorts Who Get Pune's Tech-Meets-Bohemian Vibe
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Pune mixes IT culture with bohemian energy, and our <strong>Russian escorts in Pune</strong> get that. Whether you're hitting the lounges in <Link href=\"/pune-russian-escorts/koregaon-park-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Koregaon Park</Link> with all the Osho stuff, or checking out the microbrewery scene in <Link href=\"/pune-russian-escorts/baner-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Baner</Link>, these girls know how to make it work.", "section-0-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("What makes our <strong>Russian call girls in Pune</strong> different? They like the bohemian culture, they know how to handle tech parks, and they understand that privacy matters in a city that's both relaxed and professional. Whether you're at a hotel in <Link href=\"/pune-russian-escorts/koregaon-park-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Koregaon Park</Link> or a business property in <Link href=\"/pune-russian-escorts/kharadi-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Kharadi</Link>, they fit in wherever you are.", "section-0-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Hub Meets Bohemian Luxury Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Tech Events or Weekend Vibes - They Handle Both
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Pune brings in tech professionals and weekend travelers, and our <strong>Russian escorts</strong> work for both. Privacy matters here - whether you're at tech events in <Link href=\"/pune-russian-escorts/kharadi-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Kharadi</Link> or rooftop lounges in <Link href=\"/pune-russian-escorts/koregaon-park-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Koregaon Park</Link>, our girls know how to keep things quiet.", "section-1-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Pune mixes IT innovation with bohemian energy, and you need someone who can do both. Our <strong>Russian escorts in Pune</strong> are fine at professional stuff like tech parks and business lounges, and they're good at microbreweries and art cafes too. They get what makes Pune special, so your experience feels real and respectful.", "section-1-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/10.jpeg"
                  alt="IT and bohemian Russian escorts in Pune"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Companions for Tech Events and Weekend Escapes Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/20.jpeg"
                  alt="Tech events and weekend Russian escorts in Pune"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Tech Conferences, Weekend Getaways, or Rooftop Lounges - They Fit In
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Pune's got different experiences - tech conferences, business meetings, weekend retreats, Lavasa trips. Our <strong>Russian escorts</strong> work for all of them. They dress well, they can talk, and they're engaged whether you're talking about tech or planning your weekend.", "section-2-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Need someone for a tech event in <Link href=\"/pune-russian-escorts/kharadi-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Kharadi</Link>? Our girls know how to handle professional settings. Going to a weekend getaway in <Link href=\"/pune-russian-escorts/lavasa-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Lavasa</Link>? They'll go with you and fit right in. Want someone for a rooftop lounge in <Link href=\"/pune-russian-escorts/koregaon-park-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Koregaon Park</Link>? They blend in with the bohemian vibe. These <strong>Russian girls in Pune</strong> handle whatever situation you're in.", "section-2-para-1-")}
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
                Real Russian Girls - No Fake Profiles, No Games
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Worried about fake profiles? All our <strong>Russian call girls in Pune</strong> are real. We check backgrounds, verify IDs, and make sure they're actually Russian - not someone just claiming to be. Every girl we work with in Pune gets checked, so you can book knowing you're getting the real thing.", "section-3-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("That means you get exactly who you see - attractive, professional, and they actually show up. Our <strong>Russian escorts in Pune</strong> know they need to be on time, look good, and deliver every time. Whether you're in <Link href=\"/pune-russian-escorts/koregaon-park-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Koregaon Park</Link>, <Link href=\"/pune-russian-escorts/kharadi-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Kharadi</Link>, or anywhere in Pune, these verified girls make sure you get what you paid for.", "section-3-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/30.jpeg"
                  alt="Verified Russian escorts in Pune"
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
                  alt="Flexible Russian escort services in Pune"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Quick Meetings or Weekend Escapes - Your Choice
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Pune visitors want different things - some want quick meetings between tech events, others want longer weekend escapes. Our <strong>Russian escorts</strong> do both. Whether you're busy at tech parks or you've got time for a relaxed weekend, we've got options that work with your schedule.", "section-4-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Short bookings work if you want quality time without a big commitment. Longer sessions are good if you're staying in places like <Link href=\"/pune-russian-escorts/koregaon-park-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Koregaon Park</Link> or <Link href=\"/pune-russian-escorts/baner-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Baner</Link> and want someone to spend the weekend with. Our <strong>Russian escorts in Pune</strong> adjust to your timeline and what you want, so every minute counts.", "section-4-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Hotels and Weekend Properties - We Cover All Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Hotels or Weekend Retreats - They Fit In Anywhere
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Pune's got everything from hotels to weekend retreats. Our <strong>Russian escorts</strong> are fine with both. Staying at a hotel in <Link href=\"/pune-russian-escorts/koregaon-park-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Koregaon Park</Link>? They get how those places work. Got a weekend property in <Link href=\"/pune-russian-escorts/lavasa-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Lavasa</Link>? They fit in there too.", "section-5-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("What makes our <strong>Russian escorts in Pune</strong> flexible? They're smart, they know how to adapt, and they can match whatever environment you're in. Whether you want someone who gets bohemian vibes or someone who understands tech culture, these girls adjust to make your experience better wherever you're staying.", "section-5-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/50.jpeg"
                  alt="Hotel and weekend property Russian escorts in Pune"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bohemian Culture Meets Tech Sophistication Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/60.jpeg"
                  alt="Bohemian culture Russian escorts in Pune"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                They Get Bohemian Culture and Tech Life
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Pune mixes bohemian culture with tech innovation, and our <strong>Russian escorts</strong> get that balance. They understand the relaxed vibe while staying professional. Whether you're hitting Osho gardens in <Link href=\"/pune-russian-escorts/koregaon-park-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Koregaon Park</Link> or tech parks in <Link href=\"/pune-russian-escorts/kharadi-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Kharadi</Link>, these girls know how to handle both.", "section-6-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("This mix of understanding bohemian culture and tech life makes our <strong>Russian call girls in Pune</strong> valuable. They can talk about bohemian lifestyle and art culture, they appreciate weekend escapes, and they can also have conversations about tech, business, and corporate stuff. It's this balance that makes them different.", "section-6-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliable Service for Tech Professionals and Weekend Travelers Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Reliable Service for Tech Workers and Weekend Travelers
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Pune brings in tech professionals and weekend travelers. Our <strong>Russian escorts</strong> work for both. Tech workers like girls who can help with work-life balance, while weekend travelers want professional service that shows up on time and fits their schedule.", "section-7-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("What makes our service reliable? Our <strong>Russian escorts in Pune</strong> show up when they say they will, communicate clearly, and deliver quality every time. Whether you're working in tech parks or escaping for the weekend, these professionals make sure you get service you can count on. From <Link href=\"/pune-russian-escorts/koregaon-park-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Koregaon Park</Link> to <Link href=\"/pune-russian-escorts/lavasa-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Lavasa</Link>, reliable service is what we do.", "section-7-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/70.jpeg"
                  alt="Reliable Russian escorts in Pune"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful Companions Who Appreciate Pune's Charm Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/80.jpeg"
                  alt="Beautiful Russian escorts in Pune"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Attractive Girls Who Actually Like Pune
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Our <strong>Russian escorts in Pune</strong> aren't just attractive - they actually like what Pune has to offer. They enjoy bohemian culture, they get the tech scene, and they can make your Pune trip more memorable. Whether you want to hit rooftop lounges together or grab weekend escapes, these girls make every moment better.", "section-8-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("These <strong>Russian girls</strong> care about how they look and they're professional. They show up looking good, dressed right for Pune's bohemian-tech vibe. Whether you're at a tech setting or a weekend venue, they know how to present themselves. This attention to detail and actually liking Pune makes them great for your visit.", "section-8-para-1-")}
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
                  {renderHotelParagraph("Worried about scams? We get it. That's why we don't ask for money upfront for our <strong>Russian escorts in Pune</strong>. You can confirm everything, set it all up, and only pay after it's done. No deposits, no bank transfers before you meet - just book, meet, and pay if you're satisfied.", "section-9-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Here's how it works: Contact us, tell us what you want, and we set it up. The girl shows up at your location in Pune - whether that's a hotel in <Link href=\"/pune-russian-escorts/koregaon-park-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Koregaon Park</Link> or a weekend property in <Link href=\"/pune-russian-escorts/lavasa-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Lavasa</Link>. You meet, and if everything's good, you pay cash. You only pay for what you get. It's our way of showing we're real and we stand behind what we do.", "section-9-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/90.jpeg"
                  alt="No advance payment Russian escorts in Pune"
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
                  alt="24/7 Russian escorts in Pune"
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
                  {renderHotelParagraph("Whether you get to Pune early morning or finish a late tech event, our <strong>Russian escorts</strong> are available around the clock. No waiting lists, no telling you to call back later - someone's always ready to come to you, day or night, every day.", "section-10-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("This 24/7 availability is especially useful in Pune, where tech workers might work weird hours or weekend schedules are all over the place. Our <strong>Russian escorts in Pune</strong> get that your time matters, so they're flexible and ready when you need them. Quick responses mean you don't wait. Just call, tell us where you are, and we'll send someone.", "section-10-para-1-")}
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
                  alt="Curvaceous Russian Call Girls in Pune"
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
                  Our <strong>Russian call girls in Pune</strong> come in all shapes and sizes - curvy, slim, whatever you prefer. These girls are attractive and they appreciate clients who treat them right. Spending the night with someone who knows what they're doing is a special experience. You've worked hard - it's time to enjoy yourself and create memories that stick with you.
                </p>
                <p>
                  Our <strong>escort girls in Pune</strong> like having fun - dating, parties, great nights out. They enjoy helping guys who lead busy, stressful lives unwind. Pick someone from our selection to spend time with. The experience will stick with you, and you'll probably want to book again. Have the night you want and walk away satisfied. A good night can reset you for whatever comes next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Russian Escort in Pune Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Russian Escorts in Pune That Deliver What You Want
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Our <strong>Russian escorts in Pune</strong> go above and beyond - you won't be disappointed. They work with you to make sure you leave satisfied. We have all types of <strong>Russian call girls in Pune</strong> - slim, curvy, whatever you're looking for. Guys want different things at different times. Book whatever type you want, and we'll send her to your location. Making sure you're happy is what we care about.
                </p>
                <p>
                  Our <strong>Russian escorts in Pune</strong> are young, energetic, and they know what they're doing. They're not afraid to try different things. Role play, different positions, whatever fantasies you have - they're open to exploring. They'll give you an experience you won't forget. They dress well and can dress how you want for your evening. Relax and enjoy having your desires met. Have the date you want with the girl you want, and enjoy your night.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/russian-escort-in-chennai.jpg"
                  alt="Russian Escort in Pune"
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
      <Testimonials cityName="Pune" />

      {/* Hotels Section */}
      <Hotels citySlug="pune-russian-escorts" cityDisplayName="Pune" />
    </>
  );
}
