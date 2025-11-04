import Image from "next/image";
import type { Metadata } from "next";

import CityPageTemplate from "@/components/CityPageTemplate";
import { getCityBySlug } from "@/lib/cities";
import { renderHotelParagraph } from "@/lib/hotels/renderHotelContent";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/Testimonials";
import Hotels from "@/components/Hotels";

const citySlug = "hyderabad-russian-escorts";
const city = getCityBySlug(citySlug);

if (!city) {
  throw new Error(`City definition missing for slug: ${citySlug}`);
}

export const metadata: Metadata = {
  title: `${city.name} Russian Escorts | Hello Mahi`,
  description: city.description,
};

export default function HyderabadRussianEscortsPage() {
  if (!city) {
    throw new Error(`City definition missing for slug: ${citySlug}`);
  }

  return (
    <>
      <CityPageTemplate city={city} />
      
      {/* Russian Escorts Who Know Hyderabad Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/1.jpeg"
                  alt="Russian escorts in Hyderabad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Russian Escorts Who Know Hyderabad Inside and Out
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Hyderabad mixes IT with heritage, and our <strong>Russian escorts in Hyderabad</strong> get that. Whether you're hitting the tech parks in <Link href=\"/hyderabad-russian-escorts/gachibowli-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Gachibowli</Link> with all the corporate stuff, or checking out the upscale scene in <Link href=\"/hyderabad-russian-escorts/jubilee-hills-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Jubilee Hills</Link>, these girls know how to make it work.", "section-0-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("What makes our <strong>Russian call girls in Hyderabad</strong> different? They like the tech culture, they know how to handle convention centers, and they understand that privacy matters in a city that takes business seriously. Whether you're at a hotel in <Link href=\"/hyderabad-russian-escorts/banjara-hills-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Banjara Hills</Link> or a business property in <Link href=\"/hyderabad-russian-escorts/financial-district-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Financial District</Link>, they fit in wherever you are.", "section-0-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Events or Heritage Areas Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Tech Events or Heritage Areas - We Handle Both
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Hyderabad brings in tech professionals and travelers, and our <strong>Russian escorts</strong> work for both. Privacy matters here - whether you're at conventions in <Link href=\"/hyderabad-russian-escorts/hicc-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">HICC</Link> or fine dining in <Link href=\"/hyderabad-russian-escorts/banjara-hills-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Banjara Hills</Link>, our girls know how to keep things quiet.", "section-1-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Hyderabad mixes tech innovation with heritage, and you need someone who can do both. Our <strong>Russian escorts in Hyderabad</strong> are fine at professional stuff like IT parks and convention centers, and they're good at heritage hotels and fine dining restaurants too. They get what makes Hyderabad special, so your experience feels real and respectful.", "section-1-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/10.jpeg"
                  alt="IT and heritage Russian escorts in Hyderabad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conventions, Business Events, or Dinner Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/20.jpeg"
                  alt="Convention and luxury Russian escorts in Hyderabad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Conventions, Business Events, or Dinner - They Fit In
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Hyderabad's got different experiences - tech conventions, business meetings, heritage tours, fine dining. Our <strong>Russian escorts</strong> work for all of them. They dress well, they can talk, and they're engaged whether you're talking about tech or planning your night.", "section-2-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Need someone for a convention dinner in <Link href=\"/hyderabad-russian-escorts/hicc-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">HICC</Link>? Our girls know how to handle professional settings. Going to a business event in <Link href=\"/hyderabad-russian-escorts/gachibowli-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Gachibowli</Link>? They'll go with you and fit right in. Want someone for dinner in <Link href=\"/hyderabad-russian-escorts/jubilee-hills-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Jubilee Hills</Link>? They blend in with the vibe. These <strong>Russian girls in Hyderabad</strong> handle whatever situation you're in.", "section-2-para-1-")}
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
                  {renderHotelParagraph("Worried about fake profiles? All our <strong>Russian call girls in Hyderabad</strong> are real. We check backgrounds, verify IDs, and make sure they're actually Russian - not someone just claiming to be. Every girl we work with in Hyderabad gets checked, so you can book knowing you're getting the real thing.", "section-3-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("That means you get exactly who you see - attractive, professional, and they actually show up. Our <strong>Russian escorts in Hyderabad</strong> know they need to be on time, look good, and deliver every time. Whether you're in <Link href=\"/hyderabad-russian-escorts/banjara-hills-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Banjara Hills</Link>, <Link href=\"/hyderabad-russian-escorts/gachibowli-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Gachibowli</Link>, or anywhere in Hyderabad, these verified girls make sure you get what you paid for.", "section-3-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/30.jpeg"
                  alt="Verified Russian escorts in Hyderabad"
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
                  alt="Flexible Russian escort services in Hyderabad"
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
                  {renderHotelParagraph("Hyderabad visitors want different things - some want quick meetings between convention stuff, others want longer evenings. Our <strong>Russian escorts</strong> do both. Whether you're busy at tech parks or you've got time for a relaxed evening, we've got options that work with your schedule.", "section-4-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Short bookings work if you want quality time without a big commitment. Longer sessions are good if you're staying in places like <Link href=\"/hyderabad-russian-escorts/gachibowli-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Gachibowli</Link> or <Link href=\"/hyderabad-russian-escorts/financial-district-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Financial District</Link> and want someone to spend the evening with. Our <strong>Russian escorts in Hyderabad</strong> adjust to your timeline and what you want, so every minute counts.", "section-4-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Hotels and Tech Properties - We Cover All Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Hotels or Tech Properties - They Fit In Anywhere
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Hyderabad's got everything from hotels to tech properties. Our <strong>Russian escorts</strong> are fine with both. Staying at a hotel in <Link href=\"/hyderabad-russian-escorts/banjara-hills-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Banjara Hills</Link>? They get how those places work. Got a business hotel in <Link href=\"/hyderabad-russian-escorts/gachibowli-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Gachibowli</Link>? They fit in there too.", "section-5-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("What makes our <strong>Russian escorts in Hyderabad</strong> flexible? They're smart, they know how to adapt, and they can match whatever environment you're in. Whether you want someone who gets heritage hotels or someone who understands tech culture, these girls adjust to make your experience better wherever you're staying.", "section-5-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/50.jpeg"
                  alt="Hotel and tech property Russian escorts in Hyderabad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Culture and Heritage Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/60.jpeg"
                  alt="Tech culture Russian escorts in Hyderabad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                They Get Tech Culture and Heritage
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Hyderabad mixes tech innovation with heritage, and our <strong>Russian escorts</strong> get that balance. They understand the IT vibe while staying professional. Whether you're hitting tech parks in <Link href=\"/hyderabad-russian-escorts/gachibowli-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Gachibowli</Link> or heritage areas in <Link href=\"/hyderabad-russian-escorts/banjara-hills-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Banjara Hills</Link>, these girls know how to handle both.", "section-6-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("This mix of understanding tech culture and heritage makes our <strong>Russian call girls in Hyderabad</strong> valuable. They can talk about tech trends and IT culture, they appreciate heritage stuff, and they can also have conversations about business, conventions, and corporate stuff. It's this balance that makes them different.", "section-6-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliable Service for Convention Attendees and Tech Professionals Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Reliable Service for Convention People and Tech Workers
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Hyderabad brings in convention attendees and tech professionals. Our <strong>Russian escorts</strong> work for both. Convention people like girls who can help with event stuff, while tech workers want professional service that shows up on time and fits their work schedule.", "section-7-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("What makes our service reliable? Our <strong>Russian escorts in Hyderabad</strong> show up when they say they will, communicate clearly, and deliver quality every time. Whether you're at conventions or working in tech parks, these professionals make sure you get service you can count on. From <Link href=\"/hyderabad-russian-escorts/banjara-hills-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Banjara Hills</Link> to <Link href=\"/hyderabad-russian-escorts/gachibowli-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Gachibowli</Link>, reliable service is what we do.", "section-7-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/70.jpeg"
                  alt="Reliable Russian escorts in Hyderabad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful Companions Who Appreciate Hyderabad's Charm Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/80.jpeg"
                  alt="Beautiful Russian escorts in Hyderabad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Attractive Girls Who Actually Like Hyderabad
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Our <strong>Russian escorts in Hyderabad</strong> aren't just attractive - they actually like what Hyderabad has to offer. They enjoy tech culture, they get the convention scene, and they can make your Hyderabad trip more memorable. Whether you want to hit fine dining restaurants together or grab heritage tours, these girls make every moment better.", "section-8-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("These <strong>Russian girls</strong> care about how they look and they're professional. They show up looking good, dressed right for Hyderabad's tech-heritage vibe. Whether you're at a convention setting or a nice venue, they know how to present themselves. This attention to detail and actually liking Hyderabad makes them great for your visit.", "section-8-para-1-")}
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
                  {renderHotelParagraph("Worried about scams? We get it. That's why we don't ask for money upfront for our <strong>Russian escorts in Hyderabad</strong>. You can confirm everything, set it all up, and only pay after it's done. No deposits, no bank transfers before you meet - just book, meet, and pay if you're satisfied.", "section-9-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Here's how it works: Contact us, tell us what you want, and we set it up. The girl shows up at your location in Hyderabad - whether that's a hotel in <Link href=\"/hyderabad-russian-escorts/banjara-hills-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Banjara Hills</Link> or a business property in <Link href=\"/hyderabad-russian-escorts/gachibowli-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Gachibowli</Link>. You meet, and if everything's good, you pay cash. You only pay for what you get. It's our way of showing we're real and we stand behind what we do.", "section-9-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/90.jpeg"
                  alt="No advance payment Russian escorts in Hyderabad"
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
                  alt="24/7 Russian escorts in Hyderabad"
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
                  {renderHotelParagraph("Whether you get to Hyderabad early morning or finish a late convention session, our <strong>Russian escorts</strong> are available around the clock. No waiting lists, no telling you to call back later - someone's always ready to come to you, day or night, every day.", "section-10-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("This 24/7 availability is especially useful in Hyderabad, where convention people might arrive at weird hours or tech schedules are all over the place. Our <strong>Russian escorts in Hyderabad</strong> get that your time matters, so they're flexible and ready when you need them. Quick responses mean you don't wait. Just call, tell us where you are, and we'll send someone.", "section-10-para-1-")}
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
                  alt="Curvaceous Russian Call Girls in Hyderabad"
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
                  Our <strong>Russian call girls in Hyderabad</strong> come in all shapes and sizes - curvy, slim, whatever you prefer. These girls are attractive and they appreciate clients who treat them right. Spending the night with someone who knows what they're doing is a special experience. You've worked hard - it's time to enjoy yourself and create memories that stick with you.
                </p>
                <p>
                  Our <strong>escort girls in Hyderabad</strong> like having fun - dating, parties, great nights out. They enjoy helping guys who lead busy, stressful lives unwind. Pick someone from our selection to spend time with. The experience will stick with you, and you'll probably want to book again. Have the night you want and walk away satisfied. A good night can reset you for whatever comes next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Russian Escort in Hyderabad Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Russian Escorts in Hyderabad That Deliver What You Want
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Our <strong>Russian escorts in Hyderabad</strong> go above and beyond - you won't be disappointed. They work with you to make sure you leave satisfied. We have all types of <strong>Russian call girls in Hyderabad</strong> - slim, curvy, whatever you're looking for. Guys want different things at different times. Book whatever type you want, and we'll send her to your location. Making sure you're happy is what we care about.
                </p>
                <p>
                  Our <strong>Russian escorts in Hyderabad</strong> are young, energetic, and they know what they're doing. They're not afraid to try different things. Role play, different positions, whatever fantasies you have - they're open to exploring. They'll give you an experience you won't forget. They dress well and can dress how you want for your evening. Relax and enjoy having your desires met. Have the date you want with the girl you want, and enjoy your night.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/russian-escort-in-chennai.jpg"
                  alt="Russian Escort in Hyderabad"
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
      <Testimonials cityName="Hyderabad" />

      {/* Hotels Section */}
      <Hotels citySlug="hyderabad-russian-escorts" cityDisplayName="Hyderabad" />
    </>
  );
}
