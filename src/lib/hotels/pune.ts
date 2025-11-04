import type { StaticImageData } from "next/image";

import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

export type PuneHotelHighlight = {
  title: string;
  description: string;
};

export type PuneHotelDefinition = {
  name: string;
  slug: string;
  headline: string;
  description: string;
  highlights: PuneHotelHighlight[];
  nearby: string[];
  heroDesktop?: string | StaticImageData;
  heroMobile?: string | StaticImageData;
};

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

export const puneHotels: PuneHotelDefinition[] = [
  {
    name: "The Westin Pune",
    slug: "the-westin-pune-escorts",
    headline: "Russian escorts at The Westin Pune",
    description:
      "Premium Russian escorts available at The Westin Pune, offering sophisticated companionship in this luxury property in Koregaon Park.",
    highlights: [
      {
        title: "Koregaon Park",
        description: "Located in Koregaon Park, Pune's premium residential area.",
      },
      {
        title: "Luxury retreat",
        description: "Serene property with premium amenities and sophisticated service.",
      },
    ],
    nearby: ["Koregaon Park", "Baner", "Kharadi", "Magarpatta"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Hyatt Regency Pune",
    slug: "hyatt-regency-pune-escorts",
    headline: "Russian escorts at Hyatt Regency Pune",
    description:
      "Premium Russian escorts available at Hyatt Regency Pune, offering sophisticated companionship in this luxury property in Kharadi.",
    highlights: [
      {
        title: "Kharadi",
        description: "Located in Kharadi, Pune's IT and business hub.",
      },
      {
        title: "Business district",
        description: "Perfect for business travelers and tech professionals.",
      },
    ],
    nearby: ["Kharadi", "Magarpatta", "Baner", "Koregaon Park"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "JW Marriott Pune",
    slug: "jw-marriott-pune-escorts",
    headline: "Russian escorts at JW Marriott Pune",
    description:
      "Premium Russian escorts available at JW Marriott Pune, offering sophisticated companionship in this luxury property in Senapati Bapat Road.",
    highlights: [
      {
        title: "Central location",
        description: "Located in Senapati Bapat Road, Pune's central business district.",
      },
      {
        title: "Business ready",
        description: "Ideal for business travelers and professionals.",
      },
    ],
    nearby: ["SB Road", "Koregaon Park", "Baner", "Kharadi"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Conrad Pune",
    slug: "conrad-pune-escorts",
    headline: "Russian escorts at Conrad Pune",
    description:
      "Premium Russian escorts available at Conrad Pune, offering sophisticated companionship in this luxury property in Koregaon Park.",
    highlights: [
      {
        title: "Koregaon Park",
        description: "Located in Koregaon Park, near upscale areas.",
      },
      {
        title: "Ultra-luxury",
        description: "World-class service with premium amenities.",
      },
    ],
    nearby: ["Koregaon Park", "Baner", "Kharadi", "Magarpatta"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Novotel Pune",
    slug: "novotel-pune-escorts",
    headline: "Russian escorts at Novotel Pune",
    description:
      "Premium Russian escorts available at Novotel Pune, offering sophisticated companionship in this modern property in Viman Nagar.",
    highlights: [
      {
        title: "Viman Nagar",
        description: "Located in Viman Nagar, near airport and business parks.",
      },
      {
        title: "Airport proximity",
        description: "Close to Pune airport, perfect for travelers.",
      },
    ],
    nearby: ["Viman Nagar", "Airport", "Kharadi", "Magarpatta"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Ritz-Carlton Pune",
    slug: "the-ritz-carlton-pune-escorts",
    headline: "Russian escorts at The Ritz-Carlton Pune",
    description:
      "Premium Russian escorts available at The Ritz-Carlton Pune, offering sophisticated companionship in this ultra-luxury property in Koregaon Park.",
    highlights: [
      {
        title: "Ultra-luxury",
        description: "World-class service with butler service and premium amenities.",
      },
      {
        title: "Koregaon Park",
        description: "Located in Koregaon Park, Pune's premium area.",
      },
    ],
    nearby: ["Koregaon Park", "Baner", "Kharadi", "Magarpatta"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Sheraton Grand Pune",
    slug: "sheraton-grand-pune-escorts",
    headline: "Russian escorts at Sheraton Grand Pune",
    description:
      "Premium Russian escorts available at Sheraton Grand Pune, offering sophisticated companionship in this luxury property in Hadapsar.",
    highlights: [
      {
        title: "Hadapsar",
        description: "Located in Hadapsar, near business districts.",
      },
      {
        title: "Business district",
        description: "Perfect for business travelers and professionals.",
      },
    ],
    nearby: ["Hadapsar", "Magarpatta", "Kharadi", "Baner"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The O Hotel Pune",
    slug: "the-o-hotel-pune-escorts",
    headline: "Russian escorts at The O Hotel Pune",
    description:
      "Premium Russian escorts available at The O Hotel Pune, offering sophisticated companionship in this property in Koregaon Park.",
    highlights: [
      {
        title: "Koregaon Park",
        description: "Located in Koregaon Park, near upscale areas.",
      },
      {
        title: "Modern luxury",
        description: "Contemporary property with sophisticated service.",
      },
    ],
    nearby: ["Koregaon Park", "Baner", "Kharadi", "Magarpatta"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Radisson Blu Pune",
    slug: "radisson-blu-pune-escorts",
    headline: "Russian escorts at Radisson Blu Pune",
    description:
      "Premium Russian escorts available at Radisson Blu Pune, offering sophisticated companionship in this property in Kharadi.",
    highlights: [
      {
        title: "Kharadi",
        description: "Located in Kharadi, Pune's IT hub.",
      },
      {
        title: "Business ready",
        description: "Ideal for business travelers and tech professionals.",
      },
    ],
    nearby: ["Kharadi", "Magarpatta", "Baner", "Koregaon Park"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Lemon Tree Premier Pune",
    slug: "lemon-tree-premier-pune-escorts",
    headline: "Russian escorts at Lemon Tree Premier Pune",
    description:
      "Premium Russian escorts available at Lemon Tree Premier Pune, offering sophisticated companionship in this modern property in Viman Nagar.",
    highlights: [
      {
        title: "Viman Nagar",
        description: "Located in Viman Nagar, near airport.",
      },
      {
        title: "Modern comfort",
        description: "Contemporary property with modern amenities.",
      },
    ],
    nearby: ["Viman Nagar", "Airport", "Kharadi", "Magarpatta"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Fern Residency Pune",
    slug: "the-fern-residency-pune-escorts",
    headline: "Russian escorts at The Fern Residency Pune",
    description:
      "Premium Russian escorts available at The Fern Residency Pune, offering sophisticated companionship in this property in Koregaon Park.",
    highlights: [
      {
        title: "Koregaon Park",
        description: "Located in Koregaon Park, near upscale areas.",
      },
      {
        title: "Comfortable stay",
        description: "Modern property with comfortable amenities.",
      },
    ],
    nearby: ["Koregaon Park", "Baner", "Kharadi", "Magarpatta"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Holiday Inn Pune Hinjewadi",
    slug: "holiday-inn-pune-hinjewadi-escorts",
    headline: "Russian escorts at Holiday Inn Pune Hinjewadi",
    description:
      "Premium Russian escorts available at Holiday Inn Pune Hinjewadi, offering sophisticated companionship in this property in Hinjewadi.",
    highlights: [
      {
        title: "Hinjewadi",
        description: "Located in Hinjewadi, Pune's IT park area.",
      },
      {
        title: "IT hub",
        description: "Perfect for tech professionals and business travelers.",
      },
    ],
    nearby: ["Hinjewadi", "Baner", "Kharadi", "Magarpatta"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

