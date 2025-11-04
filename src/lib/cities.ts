export type CityHighlight = {
  title: string;
  description: string;
};

import type { StaticImageData } from "next/image";

import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

export type CityDefinition = {
  name: string;
  slug: string;
  accent: string;
  headline: string;
  description: string;
  highlights: CityHighlight[];
  serviceAreas: string[];
  heroDesktop?: string | StaticImageData;
  heroMobile?: string | StaticImageData;
};

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

export const cityEntries: CityDefinition[] = [
  {
    name: "Goa",
    slug: "goa-russian-escorts",
    accent: "from-orange-500/90 via-amber-400/80 to-rose-500/90",
    headline: "Beachfront Russian escorts across Goa",
    description:
      "Line up a sun-down encounter near Candolim, Baga or Panaji. Our Goa coordinators sync flights, villas and resort security so the evening stays effortless.",
    highlights: [
      {
        title: "Luxury resort access",
        description: "Handpicked partners at Taj, W, Hyatt, and private villas for discreet in-room meets.",
      },
      {
        title: "Late-night coastline",
        description: "Beach clubs, sunset cruises, and midnight drives covered with local fixers on call.",
      },
    ],
    serviceAreas: [
      "Candolim",
      "Calangute",
      "Baga",
      "Panaji",
      "Arpora",
      "Vagator",
      "Morjim",
      "Anjuna",
      "Siolim",
      "Colva",
    ],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Jaipur",
    slug: "jaipur-russian-escorts",
    accent: "from-rose-500/90 via-pink-400/80 to-amber-500/90",
    headline: "Royal Russian escorts in the Pink City",
    description:
      "Heritage palaces, luxury resorts, and Jaipur's regal charm meet sophisticated Russian escorts who navigate the Pink City with elegance and discretion.",
    highlights: [
      {
        title: "Palace access",
        description: "Rambagh Palace, Taj Jai Mahal, and Oberoi Rajvilas coordinated with VIP access and cultural insights.",
      },
      {
        title: "Heritage circuits",
        description: "Amber Fort, City Palace, and Hawa Mahal tours with bilingual escorts and private transportation.",
      },
    ],
    serviceAreas: [
      "Pink City",
      "C-Scheme",
      "Malviya Nagar",
      "Tonk Road",
      "Ajmer Road",
      "Airport Zone",
      "Vaishali Nagar",
      "Raja Park",
      "Bani Park",
      "Mansarovar",
    ],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Chennai",
    slug: "chennai-russian-escorts",
    accent: "from-rose-500/90 via-red-400/80 to-orange-500/90",
    headline: "Business-class Russian escorts in Chennai",
    description:
      "Corporate travellers lean on our Chennai cell for punctual airport pickups, hotel briefings, and Chennai Marina drives that stay on your terms.",
    highlights: [
      {
        title: "IT corridor coverage",
        description: "Sholinganallur to OMR tech parks with secure office-to-hotel handoffs.",
      },
      {
        title: "Five-star clearances",
        description: "Standing approvals at Leela Palace, Taj Coromandel, and Park Hyatt for swift check-ins.",
      },
    ],
    serviceAreas: [
      "OMR",
      "ECR",
      "Nungambakkam",
      "Adyar",
      "Guindy",
      "Marina Beach",
      "Tidel Park",
      "Velachery",
      "Anna Nagar",
      "T Nagar",
      "Airport Zone",
      "Kilpauk",
      "Egmore",
      "Arumbakkam",
    ],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Bangalore",
    slug: "bangalore-russian-escorts",
    accent: "from-sky-500/90 via-cyan-400/80 to-blue-500/90",
    headline: "Nightlife-ready Russian escorts in Bangalore",
    description:
      "Tech founders and weekenders rely on our Bangalore roster for craft-bar runs, Koramangala loft parties, and boutique hotel stays that click instantly.",
    highlights: [
      {
        title: "Startup hour alignments",
        description: "On-demand bookings around pitch nights, demo days, and investor dinners.",
      },
      {
        title: "Club scene sync",
        description: "Microbrewery tables, VIP lanes and after-hours rides handled door to door.",
      },
    ],
    serviceAreas: [
      "Koramangala",
      "Indiranagar",
      "MG Road",
      "Whitefield",
      "Airport hotels",
      "HSR Layout",
      "Sarjapur Road",
      "Hebbal",
      "Electronic City",
      "BTM Layout",
    ],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Delhi NCR",
    slug: "delhi-ncr-russian-escorts",
    accent: "from-fuchsia-500/90 via-purple-500/80 to-indigo-500/90",
    headline: "High-profile Russian escorts across Delhi NCR",
    description:
      "From Lutyens’ Delhi to Gurgaon rooftops, the NCR command desk secures elite venues, embassy-grade residences, and private chauffeurs on standby.",
    highlights: [
      {
        title: "South Delhi villas",
        description: "Curated guest list clearances for farmhouses and Vasant Kunj residencies.",
      },
      {
        title: "Gurgaon skyline",
        description: "Cyberhub lounges, club nights, and hotel suites matched to your calendar.",
      },
    ],
    serviceAreas: [
      "Vasant Kunj",
      "Greater Kailash",
      "Aerocity",
      "Cyberhub",
      "Noida Sec-18",
      "Connaught Place",
      "Saket",
      "Golf Course Road",
      "Dwarka",
      "Ghaziabad",
    ],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Mumbai",
    slug: "mumbai-russian-escorts",
    accent: "from-amber-500/90 via-yellow-400/80 to-orange-500/90",
    headline: "Celebrity-grade Russian escorts in Mumbai",
    description:
      "Our Mumbai bureau choreographs sea-facing penthouses, South Bombay walk-ins, and Bandra after-hours with film-ready finesse.",
    highlights: [
      {
        title: "Film & media sync",
        description: "Discreet companions for wrap parties, award nights, and yacht brunch gigs.",
      },
      {
        title: "Harbour drives",
        description: "Chauffeured routes through Marine Drive, Worli Sea Link, and Juhu.",
      },
    ],
    serviceAreas: [
      "Bandra",
      "Juhu",
      "Colaba",
      "Worli",
      "Powai",
      "Andheri",
      "Malad",
      "Navi Mumbai",
      "Thane",
      "Lower Parel",
    ],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Hyderabad",
    slug: "hyderabad-russian-escorts",
    accent: "from-emerald-500/90 via-emerald-400/80 to-teal-500/90",
    headline: "Executive Russian escorts in Hyderabad",
    description:
      "Whether it’s a HICC expo, fintech summit or Jubilee Hills soirée, Hyderabad operations ensure multi-lingual hosts and security-cleared drivers.",
    highlights: [
      {
        title: "Convention ready",
        description: "Expo City, HICC and corporate parks covered with badge-ready escorts.",
      },
      {
        title: "Fine dining tours",
        description: "Banjara Hills, Jubilee Hills and Gachibowli curations with private tables.",
      },
    ],
    serviceAreas: [
      "Jubilee Hills",
      "Banjara Hills",
      "Gachibowli",
      "HICC",
      "Airport corridor",
      "Financial District",
      "Madhapur",
      "Kokapet",
      "Begumpet",
      "Shamshabad",
    ],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Pune",
    slug: "pune-russian-escorts",
    accent: "from-blue-500/90 via-sky-400/80 to-indigo-500/90",
    headline: "Weekender Russian escorts in Pune",
    description:
      "Drive down for Lavasa retreats, Koregaon Park lounges or Kharadi business suites with a Pune lineup that makes every Friday unforgettable.",
    highlights: [
      {
        title: "After-hours terraces",
        description: "Rooftops in KP, Baner and SB Road with DJ sets and exclusive booths.",
      },
      {
        title: "Outstation planners",
        description: "Lavasa, Lonavala and Mahabaleshwar escapes ready with transport.",
      },
    ],
    serviceAreas: [
      "Koregaon Park",
      "Baner",
      "Kharadi",
      "Magarpatta",
      "Lavasa",
      "Viman Nagar",
      "Hadapsar",
      "Pimpri-Chinchwad",
      "Bavdhan",
      "Balewadi High Street",
    ],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Kolkata",
    slug: "kolkata-russian-escorts",
    accent: "from-pink-500/90 via-rose-500/80 to-orange-500/90",
    headline: "Art-forward Russian escorts in Kolkata",
    description:
      "Heritage stays, Park Street jazz and Howrah sundowners become a curated romance with our Kolkata connoisseurs guiding every detail.",
    highlights: [
      {
        title: "Culture circuits",
        description: "Park Street, Victoria Memorial and river cruises with bilingual companions.",
      },
      {
        title: "Heritage suites",
        description: "Taj Bengal, Oberoi Grand and boutique mansions on artisanal itineraries.",
      },
    ],
    serviceAreas: [
      "Park Street",
      "Salt Lake",
      "New Town",
      "Howrah riverfront",
      "Alipore",
      "Ballygunge",
      "Sector V",
      "Rajarhat",
      "Princep Ghat",
      "Dumdum",
    ],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

export const citySlugSet = new Set(cityEntries.map((city) => city.slug));

export const defaultCityHeroDesktop = defaultHeroDesktop;
export const defaultCityHeroMobile = defaultHeroMobile;

export function getCityBySlug(slug: string) {
  return cityEntries.find((city) => city.slug === slug);
}

