import Image from "next/image";
import type { Metadata } from "next";

import CityPageTemplate from "@/components/CityPageTemplate";
import { getCityBySlug } from "@/lib/cities";
import { renderHotelParagraph } from "@/lib/hotels/renderHotelContent";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/Testimonials";
import Hotels from "@/components/Hotels";

const citySlug = "delhi-ncr-russian-escorts";
const city = getCityBySlug(citySlug);

if (!city) {
  throw new Error(`City definition missing for slug: ${citySlug}`);
}

export const metadata: Metadata = {
  title: `${city.name} Russian Escorts | Hello Mahi`,
  description: city.description,
};

export default function DelhiNcrRussianEscortsPage() {
  if (!city) {
    throw new Error(`City definition missing for slug: ${citySlug}`);
  }

  return (
    <>
      <CityPageTemplate city={city} />
      
      {/* Russian Escorts Who Know Delhi NCR Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/1.jpeg"
                  alt="Russian escorts in Delhi NCR"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Russian Escorts Who Know Delhi NCR Inside and Out
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Delhi NCR mixes politics with business, and our <strong>Russian escorts in Delhi NCR</strong> get that. Whether you're hitting the upscale areas in <Link href=\"/delhi-ncr-russian-escorts/vasant-kunj-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Vasant Kunj</Link> with all the embassy stuff, or checking out the corporate scene in <Link href=\"/delhi-ncr-russian-escorts/cyberhub-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Cyberhub</Link>, these girls know how to make it work.", "section-0-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("What makes our <strong>Russian call girls in Delhi NCR</strong> different? They like the political and corporate culture, they know how to handle high-profile events, and they understand that privacy matters in a capital that takes business seriously. Whether you're at a property near <Link href=\"/delhi-ncr-russian-escorts/aerocity-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Aerocity</Link> or a residence in <Link href=\"/delhi-ncr-russian-escorts/greater-kailash-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Greater Kailash</Link>, they fit in wherever you are.", "section-0-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political Events or Corporate Meetings Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Political Events or Corporate Meetings - We Handle Both
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Delhi NCR brings in political professionals and corporate executives, and our <strong>Russian escorts</strong> work for both. Privacy matters here - whether you're at high-profile events in <Link href=\"/delhi-ncr-russian-escorts/vasant-kunj-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Vasant Kunj</Link> or corporate gatherings in <Link href=\"/delhi-ncr-russian-escorts/cyberhub-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Cyberhub</Link>, our girls know how to keep things quiet.", "section-1-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Delhi NCR mixes political stuff with corporate power, and you need someone who can do both. Our <strong>Russian escorts in Delhi NCR</strong> are fine at diplomatic settings like embassy residences and high-profile venues, and they're good at corporate spaces like boardrooms and hotels too. They get what makes Delhi NCR special, so your experience feels real and respectful.", "section-1-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/10.jpeg"
                  alt="Political and corporate Russian escorts in Delhi NCR"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Profile Events, Corporate Meetings, or Dinner Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/20.jpeg"
                  alt="High-profile Russian escorts in Delhi NCR"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                High-Profile Events, Corporate Meetings, or Dinner - They Fit In
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Delhi NCR's got different experiences - embassy receptions, political gatherings, corporate board meetings, nice dinners. Our <strong>Russian escorts</strong> work for all of them. They dress well, they can talk, and they're engaged whether you're talking about business or politics.", "section-2-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Need someone for a high-profile event in <Link href=\"/delhi-ncr-russian-escorts/connaught-place-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Connaught Place</Link>? Our girls get capital culture. Going to a corporate meeting in <Link href=\"/delhi-ncr-russian-escorts/cyberhub-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Cyberhub</Link>? They'll go with you and handle it professionally. Want someone for dinner at a nice restaurant? They fit in with the vibe. These <strong>Russian girls in Delhi NCR</strong> handle whatever situation you're in.", "section-2-para-1-")}
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
                  {renderHotelParagraph("Worried about fake profiles? All our <strong>Russian call girls in Delhi NCR</strong> are real. We check backgrounds, verify IDs, and make sure they're actually Russian - not someone just claiming to be. Every girl we work with in Delhi NCR gets checked, so you can book knowing you're getting the real thing.", "section-3-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("That means you get exactly who you see - attractive, professional, and they actually show up. Our <strong>Russian escorts in Delhi NCR</strong> know they need to be on time, look good, and deliver every time. Whether you're in <Link href=\"/delhi-ncr-russian-escorts/saket-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Saket</Link>, <Link href=\"/delhi-ncr-russian-escorts/dwarka-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Dwarka</Link>, or anywhere in the region, these verified girls make sure you get what you paid for.", "section-3-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/30.jpeg"
                  alt="Verified Russian escorts in Delhi NCR"
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
                  alt="Flexible Russian escort services in Delhi NCR"
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
                  {renderHotelParagraph("Delhi NCR professionals want different things - some want quick meetings between work, others want longer evenings. Our <strong>Russian escorts</strong> do both. Whether you're busy at corporate hubs or you've got time for a relaxed evening, we've got options that work with your schedule.", "section-4-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Short bookings work if you want quality time without a big commitment. Longer sessions are good if you're staying in places like <Link href=\"/delhi-ncr-russian-escorts/aerocity-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Aerocity</Link> or <Link href=\"/delhi-ncr-russian-escorts/cyberhub-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Cyberhub</Link> and want someone to spend the evening with. Our <strong>Russian escorts in Delhi NCR</strong> adjust to your timeline and what you want, so every minute counts.", "section-4-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Hotels and Embassy-Grade Properties - We Cover All Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Hotels or Embassy Properties - They Fit In Anywhere
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Delhi NCR's got everything from hotels to embassy properties. Our <strong>Russian escorts</strong> are fine with both. Staying at a hotel near <Link href=\"/delhi-ncr-russian-escorts/aerocity-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Aerocity</Link>? They get how those places work. Got a suite at an embassy property in <Link href=\"/delhi-ncr-russian-escorts/vasant-kunj-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Vasant Kunj</Link>? They fit in there too.", "section-5-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("What makes our <strong>Russian escorts in Delhi NCR</strong> flexible? They're smart, they know how to adapt, and they can match whatever environment you're in. Whether you want someone who gets Delhi's political scene or someone who understands corporate culture, these girls adjust to make your experience better wherever you're staying.", "section-5-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/50.jpeg"
                  alt="Luxury and embassy-grade Russian escorts in Delhi NCR"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political Culture and Corporate Life Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/60.jpeg"
                  alt="Political prestige Russian escorts in Delhi NCR"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                They Get Political Culture and Corporate Life
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Delhi NCR mixes political significance with corporate stuff, and our <strong>Russian escorts</strong> get that balance. They understand capital culture while staying professional. Whether you're hitting diplomatic areas in <Link href=\"/delhi-ncr-russian-escorts/vasant-kunj-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Vasant Kunj</Link> or corporate settings in <Link href=\"/delhi-ncr-russian-escorts/greater-kailash-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Greater Kailash</Link>, these girls know how to handle both.", "section-6-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("This mix of understanding political culture and corporate life makes our <strong>Russian call girls in Delhi NCR</strong> valuable. They can talk about Delhi's political scene, they appreciate corporate achievements, and they can also have conversations about business, travel, and culture. It's this balance that makes them different.", "section-6-para-1-")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliable Service for Executives and High-Profile Professionals Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Reliable Service for Executives and High-Profile People
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Delhi NCR brings in corporate executives and high-profile professionals working in politics and business. Our <strong>Russian escorts</strong> work for both. Executives like girls who can help with work-life balance, while high-profile people want professional service that shows up on time and fits their busy schedule.", "section-7-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("What makes our service reliable? Our <strong>Russian escorts in Delhi NCR</strong> show up when they say they will, communicate clearly, and deliver quality every time. Whether you're here for a few days or working long-term, these professionals make sure you get service you can count on. From <Link href=\"/delhi-ncr-russian-escorts/noida-sec-18-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Noida Sec-18</Link> to <Link href=\"/delhi-ncr-russian-escorts/ghaziabad-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Ghaziabad</Link>, reliable service is what we do.", "section-7-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/70.jpeg"
                  alt="Reliable Russian escorts in Delhi NCR"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful Companions Who Appreciate Delhi NCR's Sophistication Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/80.jpeg"
                  alt="Beautiful Russian escorts in Delhi NCR"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Attractive Girls Who Actually Like Delhi NCR
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  {renderHotelParagraph("Our <strong>Russian escorts in Delhi NCR</strong> aren't just attractive - they actually like what Delhi NCR has to offer. They enjoy exploring diplomatic areas, they get corporate culture, and they can make your Delhi NCR trip more memorable. Whether you want to hit nice restaurants together or grab dinner at a rooftop place, these girls make every moment better.", "section-8-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("These <strong>Russian girls</strong> care about how they look and they're professional. They show up looking good, dressed right for Delhi NCR's vibe. Whether you're at a diplomatic setting or a corporate venue, they know how to present themselves. This attention to detail and actually liking Delhi NCR makes them great for your visit.", "section-8-para-1-")}
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
                  {renderHotelParagraph("Worried about scams? We get it. That's why we don't ask for money upfront for our <strong>Russian escorts in Delhi NCR</strong>. You can confirm everything, set it all up, and only pay after it's done. No deposits, no bank transfers before you meet - just book, meet, and pay if you're satisfied.", "section-9-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("Here's how it works: Contact us, tell us what you want, and we set it up. The girl shows up at your location in Delhi NCR - whether that's a hotel in <Link href=\"/delhi-ncr-russian-escorts/aerocity-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Aerocity</Link> or a residence in <Link href=\"/delhi-ncr-russian-escorts/vasant-kunj-escorts\" className=\"text-amber-400 hover:text-amber-300 underline\">Vasant Kunj</Link>. You meet, and if everything's good, you pay cash. You only pay for what you get. It's our way of showing we're real and we stand behind what we do.", "section-9-para-1-")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/gallery/90.jpeg"
                  alt="No advance payment Russian escorts in Delhi NCR"
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
                  alt="24/7 Russian escorts in Delhi NCR"
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
                  {renderHotelParagraph("Whether you finish a late meeting or get in early morning from a flight, our <strong>Russian escorts</strong> are available around the clock. No waiting lists, no telling you to call back later - someone's always ready to come to you, day or night, every day.", "section-10-para-0-")}
                </p>
                <p>
                  {renderHotelParagraph("This 24/7 availability is especially useful in Delhi NCR, where executive schedules vary or business travelers arrive at weird hours. Our <strong>Russian escorts in Delhi NCR</strong> get that your time matters, so they're flexible and ready when you need them. Quick responses mean you don't wait. Just call, tell us where you are, and we'll send someone.", "section-10-para-1-")}
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
                  alt="Curvaceous Russian Call Girls in Delhi NCR"
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
                  Our <strong>Russian call girls in Delhi NCR</strong> come in all shapes and sizes - curvy, slim, whatever you prefer. These girls are attractive and they appreciate clients who treat them right. Spending the night with someone who knows what they're doing is a special experience. You've worked hard - it's time to enjoy yourself and create memories that stick with you.
                </p>
                <p>
                  Our <strong>escort girls in Delhi NCR</strong> like having fun - dating, parties, great nights out. They enjoy helping guys who lead busy, stressful lives unwind. Pick someone from our selection to spend time with. The experience will stick with you, and you'll probably want to book again. Have the night you want and walk away satisfied. A good night can reset you for whatever comes next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Russian Escort in Delhi NCR Section */}
      <section className="relative bg-zinc-950 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Left Side - Heading and Paragraphs */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-white">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#B8860B]">
                Russian Escorts in Delhi NCR That Deliver What You Want
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                <p>
                  Our <strong>Russian escorts in Delhi NCR</strong> go above and beyond - you won't be disappointed. They work with you to make sure you leave satisfied. We have all types of <strong>Russian call girls in Delhi NCR</strong> - slim, curvy, whatever you're looking for. Guys want different things at different times. Book whatever type you want, and we'll send her to your location. Making sure you're happy is what we care about.
                </p>
                <p>
                  Our <strong>Russian escorts in Delhi NCR</strong> are young, energetic, and they know what they're doing. They're not afraid to try different things. Role play, different positions, whatever fantasies you have - they're open to exploring. They'll give you an experience you won't forget. They dress well and can dress how you want for your evening. Relax and enjoy having your desires met. Have the date you want with the girl you want, and enjoy your night.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex items-center">
              <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/russian-escort-in-chennai.jpg"
                  alt="Russian Escort in Delhi NCR"
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
      <Testimonials cityName="Delhi NCR" />

      {/* Hotels Section */}
      <Hotels citySlug="delhi-ncr-russian-escorts" cityDisplayName="Delhi NCR" />
    </>
  );
}

