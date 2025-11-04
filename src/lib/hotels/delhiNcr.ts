import type { StaticImageData } from "next/image";

import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

export type DelhiNcrHotelHighlight = {
  title: string;
  description: string;
};

export type DelhiNcrHotelDefinition = {
  name: string;
  slug: string;
  headline: string;
  description: string;
  highlights: DelhiNcrHotelHighlight[];
  nearby: string[];
  heroDesktop?: string | StaticImageData;
  heroMobile?: string | StaticImageData;
};

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

export const delhiNcrHotels: DelhiNcrHotelDefinition[] = [
  {
    name: "The Oberoi",
    slug: "the-oberoi-escorts",
    headline: "Russian escorts at The Oberoi New Delhi",
    description:
      "Luxury Russian escorts available for sophisticated companionship at The Oberoi New Delhi. Located in the heart of the capital, our verified professionals ensure a premium and memorable experience.",
    highlights: [
      {
        title: "Prime location",
        description: "Centrally located in Connaught Place, easy access from diplomatic areas and business districts.",
      },
      {
        title: "Five-star discretion",
        description: "Ultra-luxury service with complete privacy and professional arrangements.",
      },
    ],
    nearby: ["Connaught Place", "Greater Kailash", "Aerocity", "Vasant Kunj"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Taj Palace",
    slug: "taj-palace-escorts",
    headline: "Russian escorts at Taj Palace New Delhi",
    description:
      "Heritage luxury meets modern sophistication at Taj Palace. Our Russian escorts provide elegant companionship in this iconic Delhi property known for its royal hospitality.",
    highlights: [
      {
        title: "Palace standards",
        description: "Elite Russian escorts matching the grandeur of Taj Palace hospitality.",
      },
      {
        title: "Diplomatic access",
        description: "Located near diplomatic enclave, perfect for high-profile guests.",
      },
    ],
    nearby: ["Chanakyapuri", "Vasant Kunj", "Aerocity", "Greater Kailash"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Leela Palace",
    slug: "the-leela-palace-escorts",
    headline: "Russian escorts at The Leela Palace New Delhi",
    description:
      "Premium Russian escorts available at The Leela Palace New Delhi, a luxury property in the diplomatic enclave. Perfect for high-profile professionals and diplomatic guests.",
    highlights: [
      {
        title: "Diplomatic enclave",
        description: "Located in Chanakyapuri, ideal for diplomatic and high-profile guests.",
      },
      {
        title: "Palace luxury",
        description: "Royal treatment with modern amenities and complete discretion.",
      },
    ],
    nearby: ["Chanakyapuri", "Vasant Kunj", "Aerocity", "Greater Kailash"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "JW Marriott Aerocity",
    slug: "jw-marriott-aerocity-escorts",
    headline: "Russian escorts at JW Marriott Aerocity",
    description:
      "Sophisticated Russian escorts available at JW Marriott Aerocity, combining luxury hospitality with discreet companionship services near the airport.",
    highlights: [
      {
        title: "Airport proximity",
        description: "Perfect for transit guests and business travelers arriving in Delhi.",
      },
      {
        title: "Modern luxury",
        description: "Contemporary design with world-class service and privacy.",
      },
    ],
    nearby: ["Aerocity", "Dwarka", "Connaught Place", "Cyberhub"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Andaz Delhi",
    slug: "andaz-delhi-escorts",
    headline: "Russian escorts at Andaz Delhi",
    description:
      "Modern Russian escorts available at Andaz Delhi, located in Aerocity. Perfect for business travelers and transit stays with contemporary luxury.",
    highlights: [
      {
        title: "Aerocity location",
        description: "Close to Delhi International Airport, convenient for transit guests.",
      },
      {
        title: "Contemporary style",
        description: "Modern design with personalized service and complete discretion.",
      },
    ],
    nearby: ["Aerocity", "Airport", "Dwarka", "Cyberhub"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Roseate",
    slug: "the-roseate-escorts",
    headline: "Russian escorts at The Roseate New Delhi",
    description:
      "Luxury Russian escorts for The Roseate New Delhi guests. Located near Aerocity, our verified professionals provide discreet service for business travelers and executives.",
    highlights: [
      {
        title: "Aerocity access",
        description: "Perfect for airport guests and corporate travelers.",
      },
      {
        title: "Boutique luxury",
        description: "Intimate setting with personalized service and privacy.",
      },
    ],
    nearby: ["Aerocity", "Airport", "Dwarka", "Connaught Place"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "ITC Maurya",
    slug: "itc-maurya-escorts",
    headline: "Russian escorts at ITC Maurya New Delhi",
    description:
      "Premium Russian escorts available at ITC Maurya New Delhi, offering sophisticated companionship in this luxury property near diplomatic enclave.",
    highlights: [
      {
        title: "Diplomatic district",
        description: "Located near Chanakyapuri, perfect for diplomatic and high-profile guests.",
      },
      {
        title: "Heritage luxury",
        description: "Blend of Indian heritage and modern luxury with professional service.",
      },
    ],
    nearby: ["Chanakyapuri", "Vasant Kunj", "Greater Kailash", "Connaught Place"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Imperial",
    slug: "the-imperial-escorts",
    headline: "Russian escorts at The Imperial New Delhi",
    description:
      "Heritage luxury meets colonial elegance at The Imperial. Our Russian escorts provide sophisticated companionship in this iconic Delhi property.",
    highlights: [
      {
        title: "Heritage property",
        description: "Colonial-era hotel with modern amenities and royal treatment.",
      },
      {
        title: "Connaught Place location",
        description: "Centrally located in CP, easy access to business and diplomatic areas.",
      },
    ],
    nearby: ["Connaught Place", "Greater Kailash", "Aerocity", "Vasant Kunj"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Hyatt Regency Delhi",
    slug: "hyatt-regency-delhi-escorts",
    headline: "Russian escorts at Hyatt Regency Delhi",
    description:
      "Premium Russian escorts for Hyatt Regency Delhi guests. Our high-profile companions provide world-class service matching the international standards of this luxury hotel.",
    highlights: [
      {
        title: "International standards",
        description: "Verified escorts who meet global hospitality expectations.",
      },
      {
        title: "Aerocity proximity",
        description: "Perfect for international travelers arriving at Delhi airport.",
      },
    ],
    nearby: ["Aerocity", "Airport", "Dwarka", "Cyberhub"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Lodhi",
    slug: "the-lodhi-escorts",
    headline: "Russian escorts at The Lodhi New Delhi",
    description:
      "Sophisticated Russian escorts available for The Lodhi guests. Our verified professionals ensure a memorable experience with elegance and complete discretion.",
    highlights: [
      {
        title: "Boutique luxury",
        description: "Intimate luxury property with personalized service and privacy.",
      },
      {
        title: "South Delhi location",
        description: "Situated in Lutyens' Delhi, surrounded by diplomatic residences.",
      },
    ],
    nearby: ["Lutyens' Delhi", "Chanakyapuri", "Vasant Kunj", "Greater Kailash"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Taj Mahal Hotel",
    slug: "taj-mahal-hotel-escorts",
    headline: "Russian escorts at Taj Mahal Hotel New Delhi",
    description:
      "Premium Russian escorts for Taj Mahal Hotel New Delhi guests. Located in Connaught Place, our verified professionals provide discreet service in the heart of the capital.",
    highlights: [
      {
        title: "Central location",
        description: "Perfect location in Connaught Place, accessible from all major areas.",
      },
      {
        title: "Taj hospitality",
        description: "Legendary service standards with complete privacy and discretion.",
      },
    ],
    nearby: ["Connaught Place", "Greater Kailash", "Aerocity", "Vasant Kunj"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Sheraton New Delhi",
    slug: "sheraton-new-delhi-escorts",
    headline: "Russian escorts at Sheraton New Delhi",
    description:
      "Professional Russian escorts available for Sheraton New Delhi guests. Our verified companions provide reliable and discreet service in the heart of the capital.",
    highlights: [
      {
        title: "Business district",
        description: "Located near Connaught Place, perfect for business travelers.",
      },
      {
        title: "International brand",
        description: "Global standards with reliable service and complete discretion.",
      },
    ],
    nearby: ["Connaught Place", "Greater Kailash", "Aerocity", "Vasant Kunj"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

