import type { StaticImageData } from "next/image";

import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

export type ChennaiHotelHighlight = {
  title: string;
  description: string;
};

export type ChennaiHotelDefinition = {
  name: string;
  slug: string;
  headline: string;
  description: string;
  highlights: ChennaiHotelHighlight[];
  nearby: string[];
  heroDesktop?: string | StaticImageData;
  heroMobile?: string | StaticImageData;
};

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

export const chennaiHotels: ChennaiHotelDefinition[] = [
  {
    name: "The Park",
    slug: "the-park-escorts",
    headline: "Russian escorts at The Park Chennai",
    description:
      "Premium Russian escorts available for discreet companionship at The Park Chennai. Located in the heart of the city, our verified professionals ensure a sophisticated and memorable experience.",
    highlights: [
      {
        title: "Prime location",
        description: "Centrally located in Nungambakkam, easy access from major business districts.",
      },
      {
        title: "Luxury discretion",
        description: "Five-star service with complete privacy and professional arrangements.",
      },
    ],
    nearby: ["Nungambakkam", "Egmore", "T Nagar", "Anna Nagar"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Ramada Egmore",
    slug: "ramada-egmore-escorts",
    headline: "Russian escorts at Ramada Egmore Chennai",
    description:
      "Experience elegant Russian companionship at Ramada Egmore. Our verified escorts provide sophisticated service with complete discretion for hotel guests and locals alike.",
    highlights: [
      {
        title: "Convenient access",
        description: "Located in Egmore, perfect for travelers and business professionals.",
      },
      {
        title: "Professional service",
        description: "Verified escorts with impeccable standards and punctual service.",
      },
    ],
    nearby: ["Egmore", "Central Railway Station", "Kilpauk", "Nungambakkam"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Taj Coromandel",
    slug: "taj-coromandel-escorts",
    headline: "Russian escorts at Taj Coromandel Chennai",
    description:
      "Premium Russian escorts for guests of Taj Coromandel. Our high-profile companions provide world-class service matching the luxury of this iconic five-star hotel.",
    highlights: [
      {
        title: "Five-star standards",
        description: "Elite Russian escorts who understand luxury hospitality requirements.",
      },
      {
        title: "VIP treatment",
        description: "Standing approvals and seamless arrangements for hotel guests.",
      },
    ],
    nearby: ["Nungambakkam", "T Nagar", "Anna Nagar", "Mylapore"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Taj Club House",
    slug: "taj-club-house-escorts",
    headline: "Russian escorts at Taj Club House Chennai",
    description:
      "Exclusive Russian escort service for Taj Club House guests. Our verified professionals offer discreet companionship in one of Chennai's most prestigious hotels.",
    highlights: [
      {
        title: "Exclusive access",
        description: "Priority arrangements for club house members and hotel guests.",
      },
      {
        title: "Refined companions",
        description: "Sophisticated Russian escorts matching the hotel's elegant atmosphere.",
      },
    ],
    nearby: ["Nungambakkam", "Egmore", "Anna Nagar", "T Nagar"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Leela Palace",
    slug: "leela-palace-escorts",
    headline: "Russian escorts at Leela Palace Chennai",
    description:
      "Luxury Russian escorts available for Leela Palace Chennai guests. Our handpicked professionals ensure an unforgettable experience with complete discretion and sophistication.",
    highlights: [
      {
        title: "Palace standards",
        description: "Elite Russian escorts matching the grandeur of Leela Palace.",
      },
      {
        title: "Swift check-ins",
        description: "Pre-approved arrangements for seamless hotel access.",
      },
    ],
    nearby: ["Adyar", "Besant Nagar", "Anna Nagar", "OMR"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Crown Plaza",
    slug: "crown-plaza-escorts",
    headline: "Russian escorts at Crown Plaza Chennai",
    description:
      "Premium Russian escorts for Crown Plaza Chennai guests. Located in IT Corridor, our verified professionals provide discreet service for business travelers and executives.",
    highlights: [
      {
        title: "Business hub",
        description: "Perfect for IT corridor professionals and corporate guests.",
      },
      {
        title: "Round-the-clock",
        description: "Available 24/7 to accommodate your schedule and travel needs.",
      },
    ],
    nearby: ["OMR", "Tidel Park", "Sholinganallur", "Guindy"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Hotel Savera",
    slug: "hotel-savera-escorts",
    headline: "Russian escorts at Hotel Savera Chennai",
    description:
      "Elegant Russian escorts available for Hotel Savera guests. Our verified professionals offer sophisticated companionship with complete privacy in the heart of Chennai.",
    highlights: [
      {
        title: "Central location",
        description: "Conveniently located in RK Salai, accessible from all major areas.",
      },
      {
        title: "Discrete service",
        description: "Professional arrangements ensuring complete privacy and comfort.",
      },
    ],
    nearby: ["RK Salai", "T Nagar", "Nungambakkam", "Egmore"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Hyatt Regency",
    slug: "hyatt-regency-escorts",
    headline: "Russian escorts at Hyatt Regency Chennai",
    description:
      "Premium Russian escorts for Hyatt Regency Chennai guests. Our high-profile companions provide world-class service matching the international standards of this luxury hotel.",
    highlights: [
      {
        title: "International standards",
        description: "Verified escorts who meet global hospitality expectations.",
      },
      {
        title: "Airport proximity",
        description: "Perfect for international travelers arriving at Chennai airport.",
      },
    ],
    nearby: ["Airport Zone", "Guindy", "OMR", "Adyar"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Hablis",
    slug: "hablis-escorts",
    headline: "Russian escorts at Hablis Chennai",
    description:
      "Sophisticated Russian escorts available for Hablis hotel guests. Our verified professionals ensure a memorable experience with elegance and complete discretion.",
    highlights: [
      {
        title: "Boutique luxury",
        description: "Curated Russian escorts matching the intimate elegance of Hablis.",
      },
      {
        title: "Personalized service",
        description: "Tailored arrangements to meet your specific preferences and needs.",
      },
    ],
    nearby: ["Gopalapuram", "T Nagar", "Nungambakkam", "Egmore"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Marriott Courtyard",
    slug: "marriott-courtyard-escorts",
    headline: "Russian escorts at Marriott Courtyard Chennai",
    description:
      "Premium Russian escorts for Marriott Courtyard Chennai guests. Our verified professionals provide discreet companionship meeting the standards of this renowned international chain.",
    highlights: [
      {
        title: "Global brand",
        description: "Verified escorts familiar with international hotel protocols.",
      },
      {
        title: "Business travelers",
        description: "Ideal service for corporate guests and frequent travelers.",
      },
    ],
    nearby: ["OMR", "IT Corridor", "Tidel Park", "Guindy"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Ibis City Centre",
    slug: "ibis-city-centre-escorts",
    headline: "Russian escorts at Ibis City Centre Chennai",
    description:
      "Professional Russian escorts available for Ibis City Centre guests. Our verified companions provide reliable and discreet service in the heart of Chennai.",
    highlights: [
      {
        title: "City center",
        description: "Perfect location for exploring Chennai with a companion.",
      },
      {
        title: "Value service",
        description: "Premium Russian escorts at accessible rates for all guests.",
      },
    ],
    nearby: ["Egmore", "Nungambakkam", "T Nagar", "Central Station"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Holiday Inn Express",
    slug: "holiday-inn-express-escorts",
    headline: "Russian escorts at Holiday Inn Express Chennai",
    description:
      "Quality Russian escorts for Holiday Inn Express Chennai guests. Our verified professionals offer comfortable and discreet companionship for business and leisure travelers.",
    highlights: [
      {
        title: "Express service",
        description: "Quick arrangements for guests with busy schedules.",
      },
      {
        title: "Reliable companions",
        description: "Verified Russian escorts ensuring a trustworthy experience.",
      },
    ],
    nearby: ["OMR", "IT Corridor", "Guindy", "Adyar"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

