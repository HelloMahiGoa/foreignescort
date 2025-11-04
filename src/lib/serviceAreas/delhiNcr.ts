import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

import type { ServiceAreaDefinition, ServiceAreaHighlight } from "./goa";

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

type DelhiNcrServiceAreaDefinition = ServiceAreaDefinition & {
  highlights: ServiceAreaHighlight[];
};

export const delhiNcrServiceAreas: DelhiNcrServiceAreaDefinition[] = [
  {
    name: "Vasant Kunj",
    slug: "vasant-kunj-escorts",
    headline: "Vasant Kunj escorts for embassy-grade evenings",
    description:
      "Embassy lawns, DLF Emporio couture and plush farmhouses become a seamless circuit with escorts matching Vasant Kunj’s high society flair.",
    highlights: [
      {
        title: "Couture concierge",
        description: "DLF Emporio, Ambience Mall and premium jewelers curated with private viewing suites and valet swaps.",
      },
      {
        title: "Farmhouse affairs",
        description: "Chattarpur farmhouses, private chefs and after-party lounges staged with discrete security briefs.",
      },
    ],
    nearby: ["DLF Emporio", "Ambience Mall", "Chattarpur Farms", "Aloft Vasant Kunj", "Embassy Row"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Greater Kailash",
    slug: "greater-kailash-escorts",
    headline: "Greater Kailash escorts tuned to South Delhi chic",
    description:
      "M Block markets, home bars and terrace brunches are orchestrated with escorts fluent in South Delhi tempo.",
    highlights: [
      {
        title: "Boutique runs",
        description: "M Block designers, cafés and spa retreats choreographed for pampered excursions.",
      },
      {
        title: "Terrace parties",
        description: "Townhouse terraces and living-room lounges prepped with curated playlists and signature cocktails.",
      },
    ],
    nearby: ["M Block Market", "Habitat World", "GK II Cafés", "Pamfer Terrace", "Nehru Place"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Aerocity",
    slug: "aerocity-escorts",
    headline: "Aerocity escorts for business class nights",
    description:
      "World-class hotels, culinary hotspots and 24/7 lounges in Aerocity sync with escorts trained for global corporate etiquette.",
    highlights: [
      {
        title: "Hotel liaison",
        description: "Andaz, JW Marriott and Roseate houses briefed for discreet in-room experiences and premium suites.",
      },
      {
        title: "Culinary crawl",
        description: "AnnaMaya, K3 and The Hong Kong Club reservations lined up with chauffeurs and late checkout.",
      },
    ],
    nearby: ["Andaz", "JW Marriott", "AnnaMaya", "The Hong Kong Club", "The Walk"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Cyberhub",
    slug: "cyberhub-escorts",
    headline: "Cyberhub escorts for Gurgaon skyline nights",
    description:
      "Corporate towers, sky lounges and golf greens around Cyberhub get nightlife pros navigating Gurgaon’s fast lane.",
    highlights: [
      {
        title: "Skyline lounges",
        description: "Whisky Samba, Pra Pra Prank and After Stories reserved with skyline seating and bottle service.",
      },
      {
        title: "Golf & spa",
        description: "DLF golf course, spa retreats and chauffeur-driven commutes for executive indulgence.",
      },
    ],
    nearby: ["Cyberhub", "DLF Golf", "Whisky Samba", "Pra Pra Prank", "One Horizon"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Noida Sec-18",
    slug: "noida-sec-18-escorts",
    headline: "Noida Sector 18 escorts for mall-to-lounge dashes",
    description:
      "GIP Mall, Atta Market and premium lounges are guided by escorts offering playful company for Noida’s energetic nights.",
    highlights: [
      {
        title: "Mall crawls",
        description: "DLF Mall, GIP Mall and Stellar walk served with personal shopping and valet coordination.",
      },
      {
        title: "Lounge nights",
        description: "Roost, Imperfecto and Smaaash tables set for gaming, karaoke and late-night revelry.",
      },
    ],
    nearby: ["DLF Mall", "GIP Mall", "Atta Market", "Roost", "Imperfecto Ruin"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Connaught Place",
    slug: "connaught-place-escorts",
    headline: "Connaught Place escorts for colonial-chic evenings",
    description:
      "CP’s heritage corridors, jazz bars and hidden speakeasies shine with escorts who celebrate Delhi’s vintage glamour.",
    highlights: [
      {
        title: "Heritage walks",
        description: "Rajpath, Central Park and Khan Market tours staged with cultural anecdotes and photo ops.",
      },
      {
        title: "Speakeasy crawl",
        description: "Piano Man, PDA and Home speakeasies coordinated with private tasting flights.",
      },
    ],
    nearby: ["Rajpath", "Piano Man", "PDA", "Khan Market", "Central Park"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Saket",
    slug: "saket-escorts",
    headline: "Saket escorts for mall-to-movie escapes",
    description:
      "Saket’s DLF Avenue, PVR Director’s Cut and garden rooftops welcome escorts who deliver cinema-ready evenings.",
    highlights: [
      {
        title: "Premium cinemas",
        description: "Director’s Cut, INOX Insignia and iSkate experiences curated with gourmet menus.",
      },
      {
        title: "Garden rooftops",
        description: "Rooftop grills and terrace lounges elevated with signature cocktails and skyline views.",
      },
    ],
    nearby: ["DLF Avenue", "PVR Director's Cut", "Select Citywalk", "Rooftop Lounges", "Garden of Five Senses"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Golf Course Road",
    slug: "golf-course-road-escorts",
    headline: "Golf Course Road escorts for elite Gurgaon drives",
    description:
      "From villas to Aston Martin joyrides, escorts along Golf Course Road ensure Gurgaon’s elite playground stays seamless.",
    highlights: [
      {
        title: "Supercar swings",
        description: "Luxury rentals, chauffeur swaps and scenic drives curated for adrenaline nights.",
      },
      {
        title: "Villa soirées",
        description: "DLF Camellias, Magnolias and Aralias villas prepared for intimate gatherings and tasting dinners.",
      },
    ],
    nearby: ["DLF Camellias", "Magnolias", "Aralias", "The Oberoi", "One Horizon"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Dwarka",
    slug: "dwarka-escorts",
    headline: "Dwarka escorts for transit-ready luxury",
    description:
      "Five-star transit hotels, spas and golf clubs in Dwarka meet escorts geared for quick yet indulgent stopovers.",
    highlights: [
      {
        title: "Transit mastery",
        description: "Airport express check-ins, day rooms and spa sessions synchronized with flight itineraries.",
      },
      {
        title: "Golf & spa",
        description: "ITC WelcomHotel, Radisson Blu and DDA Golf curated for tranquil escapes.",
      },
    ],
    nearby: ["ITC WelcomHotel", "Radisson Blu", "DDA Golf", "Dwarka Sector 21", "Aerocity Express"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Ghaziabad",
    slug: "ghaziabad-escorts",
    headline: "Ghaziabad escorts for NCR’s satellite city scene",
    description:
      "Skylit lounges, luxury condos and road trip launches in Ghaziabad are streamlined with escorts ready for edge-of-city adventures.",
    highlights: [
      {
        title: "Luxury condos",
        description: "Indirapuram, Vaishali and Kaushambi residencies with concierge clearances and valet parking.",
      },
      {
        title: "Roadtrip launches",
        description: "Chauffeured getaways to Rishikesh, Agra and Jaipur orchestrated from Ghaziabad hubs.",
      },
    ],
    nearby: ["Indirapuram", "Vaishali", "Kaushambi", "Shipra Mall", "NH24"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

export const delhiNcrServiceAreaMap = new Map<string, DelhiNcrServiceAreaDefinition>(
  delhiNcrServiceAreas.map((area) => [area.slug, area])
);

