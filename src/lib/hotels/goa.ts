import type { StaticImageData } from "next/image";

import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

export type GoaHotelHighlight = {
  title: string;
  description: string;
};

export type GoaHotelDefinition = {
  name: string;
  slug: string;
  headline: string;
  description: string;
  highlights: GoaHotelHighlight[];
  nearby: string[];
  heroDesktop?: string | StaticImageData;
  heroMobile?: string | StaticImageData;
};

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

export const goaHotels: GoaHotelDefinition[] = [
  {
    name: "Taj Fort Aguada",
    slug: "taj-fort-aguada-escorts",
    headline: "Russian escorts at Taj Fort Aguada Goa",
    description:
      "Premium Russian escorts available at Taj Fort Aguada, offering sophisticated companionship in this iconic beachfront property near Candolim and SinQ.",
    highlights: [
      {
        title: "Beachfront luxury",
        description: "Stunning ocean views and pristine beach access with world-class amenities.",
      },
      {
        title: "Resort access",
        description: "Located in North Goa, near Candolim beach and popular nightlife spots.",
      },
    ],
    nearby: ["Candolim", "SinQ Nightclub", "Cohiba", "LPK Waterfront"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Leela Goa",
    slug: "the-leela-goa-escorts",
    headline: "Russian escorts at The Leela Goa",
    description:
      "Premium Russian escorts available at The Leela Goa, offering sophisticated companionship in this luxury beachfront property near Cavelossim.",
    highlights: [
      {
        title: "Five-star resort",
        description: "Luxury beachfront property with private beach access and premium amenities.",
      },
      {
        title: "South Goa location",
        description: "Serene location in South Goa with easy access to beaches and resorts.",
      },
    ],
    nearby: ["Cavelossim", "Colva", "Benaulim", "Palolem"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "W Goa",
    slug: "w-goa-escorts",
    headline: "Russian escorts at W Goa",
    description:
      "Premium Russian escorts available at W Goa, offering sophisticated companionship in this modern beachfront property near Vagator.",
    highlights: [
      {
        title: "Modern luxury",
        description: "Contemporary beachfront resort with vibrant nightlife and modern amenities.",
      },
      {
        title: "Vagator location",
        description: "Located near Vagator beach, close to party scene and cliffside venues.",
      },
    ],
    nearby: ["Vagator", "Anjuna", "Chapora Fort", "Hilltop Goa"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Hyatt Regency Goa",
    slug: "hyatt-regency-goa-escorts",
    headline: "Russian escorts at Hyatt Regency Goa",
    description:
      "Premium Russian escorts available at Hyatt Regency Goa, offering sophisticated companionship in this luxury resort near Bambolim.",
    highlights: [
      {
        title: "Resort luxury",
        description: "Beachfront resort with multiple pools, spa, and fine dining options.",
      },
      {
        title: "Panaji proximity",
        description: "Close to Panaji city center and heritage sites like Fontainhas.",
      },
    ],
    nearby: ["Panaji", "Bambolim", "Miramar Beach", "Fontainhas"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "ITC Grand Goa",
    slug: "itc-grand-goa-escorts",
    headline: "Russian escorts at ITC Grand Goa",
    description:
      "Premium Russian escorts available at ITC Grand Goa, offering sophisticated companionship in this luxury beachfront property near Cavelossim.",
    highlights: [
      {
        title: "Beachfront resort",
        description: "Luxury property with private beach, spa, and multiple dining venues.",
      },
      {
        title: "South Goa",
        description: "Pristine location in South Goa with access to quiet beaches.",
      },
    ],
    nearby: ["Cavelossim", "Colva", "Benaulim", "Betul Beach"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Alila Diwa Goa",
    slug: "alila-diwa-goa-escorts",
    headline: "Russian escorts at Alila Diwa Goa",
    description:
      "Premium Russian escorts available at Alila Diwa Goa, offering sophisticated companionship in this luxury resort near Majorda.",
    highlights: [
      {
        title: "Luxury retreat",
        description: "Serene resort with rice paddy views, spa, and authentic Goan experiences.",
      },
      {
        title: "Majorda location",
        description: "Located near Majorda beach, away from crowds, perfect for privacy.",
      },
    ],
    nearby: ["Majorda", "Colva", "Benaulim", "Utorda"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "St. Regis Goa Resort",
    slug: "st-regis-goa-resort-escorts",
    headline: "Russian escorts at St. Regis Goa Resort",
    description:
      "Premium Russian escorts available at St. Regis Goa Resort, offering sophisticated companionship in this ultra-luxury beachfront property.",
    highlights: [
      {
        title: "Ultra-luxury",
        description: "World-class service with butler service, private beach, and premium amenities.",
      },
      {
        title: "South Goa",
        description: "Exclusive location in South Goa with pristine beaches and golf courses nearby.",
      },
    ],
    nearby: ["Mobor", "Cavelossim", "Colva", "Palolem"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Park Hyatt Goa",
    slug: "park-hyatt-goa-escorts",
    headline: "Russian escorts at Park Hyatt Goa",
    description:
      "Premium Russian escorts available at Park Hyatt Goa, offering sophisticated companionship in this luxury beachfront resort near Cansaulim.",
    highlights: [
      {
        title: "Beach resort",
        description: "Luxury beachfront property with private beach, pools, and fine dining.",
      },
      {
        title: "South Goa",
        description: "Serene location with easy access to beaches and cultural sites.",
      },
    ],
    nearby: ["Cansaulim", "Majorda", "Colva", "Benaulim"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Grand Hyatt Goa",
    slug: "grand-hyatt-goa-escorts",
    headline: "Russian escorts at Grand Hyatt Goa",
    description:
      "Premium Russian escorts available at Grand Hyatt Goa, offering sophisticated companionship in this luxury beachfront property near Bambolim.",
    highlights: [
      {
        title: "Beachfront luxury",
        description: "Premium resort with private beach, multiple pools, and world-class dining.",
      },
      {
        title: "Panaji access",
        description: "Close to Panaji city and heritage sites, perfect for exploring.",
      },
    ],
    nearby: ["Bambolim", "Panaji", "Miramar", "Dona Paula"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "DoubleTree by Hilton Goa",
    slug: "doubletree-hilton-goa-escorts",
    headline: "Russian escorts at DoubleTree by Hilton Goa",
    description:
      "Premium Russian escorts available at DoubleTree by Hilton Goa, offering sophisticated companionship in this modern resort near Arpora.",
    highlights: [
      {
        title: "Modern resort",
        description: "Contemporary property with pool, spa, and convenient location.",
      },
      {
        title: "Arpora location",
        description: "Close to Saturday Night Market and popular nightlife spots.",
      },
    ],
    nearby: ["Arpora", "Calangute", "Baga", "Anjuna"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Novotel Goa Resort",
    slug: "novotel-goa-resort-escorts",
    headline: "Russian escorts at Novotel Goa Resort",
    description:
      "Premium Russian escorts available at Novotel Goa Resort, offering sophisticated companionship in this beachfront property near Candolim.",
    highlights: [
      {
        title: "Beachfront resort",
        description: "Modern beachfront property with pool, spa, and dining options.",
      },
      {
        title: "North Goa",
        description: "Located in North Goa, close to popular beaches and nightlife.",
      },
    ],
    nearby: ["Candolim", "Calangute", "Baga", "SinQ"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Holiday Inn Resort Goa",
    slug: "holiday-inn-resort-goa-escorts",
    headline: "Russian escorts at Holiday Inn Resort Goa",
    description:
      "Premium Russian escorts available at Holiday Inn Resort Goa, offering sophisticated companionship in this beachfront property near Mobor.",
    highlights: [
      {
        title: "Beach resort",
        description: "Family-friendly beachfront resort with pools, spa, and activities.",
      },
      {
        title: "South Goa",
        description: "Peaceful location in South Goa with access to quiet beaches.",
      },
    ],
    nearby: ["Mobor", "Cavelossim", "Colva", "Benaulim"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

