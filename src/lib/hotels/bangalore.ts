import type { StaticImageData } from "next/image";

import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

export type BangaloreHotelHighlight = {
  title: string;
  description: string;
};

export type BangaloreHotelDefinition = {
  name: string;
  slug: string;
  headline: string;
  description: string;
  highlights: BangaloreHotelHighlight[];
  nearby: string[];
  heroDesktop?: string | StaticImageData;
  heroMobile?: string | StaticImageData;
};

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

export const bangaloreHotels: BangaloreHotelDefinition[] = [
  {
    name: "The Ritz-Carlton",
    slug: "the-ritz-carlton-escorts",
    headline: "Russian escorts at The Ritz-Carlton Bangalore",
    description:
      "Luxury Russian escorts available for sophisticated companionship at The Ritz-Carlton Bangalore. Located in the heart of the tech city, our verified professionals ensure a premium and memorable experience.",
    highlights: [
      {
        title: "Premium location",
        description: "Centrally located in Residency Road, easy access from business districts and nightlife hubs.",
      },
      {
        title: "Five-star discretion",
        description: "Ultra-luxury service with complete privacy and professional arrangements.",
      },
    ],
    nearby: ["MG Road", "Indiranagar", "Cubbon Park", "Church Street"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Taj West End",
    slug: "taj-west-end-escorts",
    headline: "Russian escorts at Taj West End Bangalore",
    description:
      "Heritage luxury meets modern sophistication at Taj West End. Our Russian escorts provide elegant companionship in this iconic Bangalore property surrounded by lush gardens.",
    highlights: [
      {
        title: "Heritage property",
        description: "Colonial-era hotel with modern amenities, perfect for refined experiences.",
      },
      {
        title: "Garden setting",
        description: "Serene 20-acre property offering privacy and elegance.",
      },
    ],
    nearby: ["Race Course Road", "Cubbon Park", "MG Road", "Indiranagar"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "ITC Gardenia",
    slug: "itc-gardenia-escorts",
    headline: "Russian escorts at ITC Gardenia Bangalore",
    description:
      "Premium Russian escorts available at ITC Gardenia, a luxury property in the heart of Bangalore's business district. Perfect for tech professionals and business travelers.",
    highlights: [
      {
        title: "Business hub",
        description: "Located near tech parks and corporate offices, ideal for business travelers.",
      },
      {
        title: "Green luxury",
        description: "LEED Platinum certified property with eco-luxury amenities.",
      },
    ],
    nearby: ["Residency Road", "MG Road", "Indiranagar", "Whitefield"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Oberoi",
    slug: "the-oberoi-escorts",
    headline: "Russian escorts at The Oberoi Bangalore",
    description:
      "Sophisticated Russian escorts available at The Oberoi Bangalore, combining luxury hospitality with discreet companionship services in the tech capital.",
    highlights: [
      {
        title: "City center",
        description: "Prime location in Mahatma Gandhi Road, close to business and entertainment districts.",
      },
      {
        title: "Oberoi standards",
        description: "World-class service and privacy for discerning clients.",
      },
    ],
    nearby: ["MG Road", "Cubbon Park", "Indiranagar", "Church Street"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "JW Marriott",
    slug: "jw-marriott-escorts",
    headline: "Russian escorts at JW Marriott Bangalore",
    description:
      "Premium Russian escorts available at JW Marriott Bangalore, located near the airport and tech corridors. Perfect for business travelers and transit stays.",
    highlights: [
      {
        title: "Airport proximity",
        description: "Close to Bangalore International Airport, convenient for transit guests.",
      },
      {
        title: "Tech corridor access",
        description: "Easy access to Whitefield, Electronic City, and major IT parks.",
      },
    ],
    nearby: ["Airport Road", "Whitefield", "Hebbal", "Manyata Tech Park"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Sheraton Grand",
    slug: "sheraton-grand-escorts",
    headline: "Russian escorts at Sheraton Grand Bangalore",
    description:
      "Luxury Russian escorts available at Sheraton Grand Bangalore at Brigade Gateway. Modern property perfect for tech professionals and business travelers.",
    highlights: [
      {
        title: "Modern luxury",
        description: "Contemporary design with state-of-the-art facilities in a prime location.",
      },
      {
        title: "Tech hub access",
        description: "Connected to tech corridors and startup hubs.",
      },
    ],
    nearby: ["Hebbal", "Manyata Tech Park", "Whitefield", "MG Road"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Conrad Bengaluru",
    slug: "conrad-bengaluru-escorts",
    headline: "Russian escorts at Conrad Bengaluru",
    description:
      "Premium Russian escorts available at Conrad Bengaluru, offering sophisticated companionship in this luxury property near UB City and business districts.",
    highlights: [
      {
        title: "Business district",
        description: "Located in the heart of the business district, near corporate offices and shopping.",
      },
      {
        title: "Urban sophistication",
        description: "Modern luxury with stunning city views and premium amenities.",
      },
    ],
    nearby: ["UB City", "MG Road", "Cubbon Park", "Indiranagar"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Leela Palace",
    slug: "leela-palace-escorts",
    headline: "Russian escorts at Leela Palace Bangalore",
    description:
      "Royal luxury meets modern elegance at Leela Palace. Our Russian escorts provide sophisticated companionship in this iconic Bangalore property.",
    highlights: [
      {
        title: "Palace luxury",
        description: "Palatial architecture with modern amenities and royal treatment.",
      },
      {
        title: "Garden city location",
        description: "Situated in Embassy Golf Links, surrounded by greens and tranquility.",
      },
    ],
    nearby: ["Whitefield", "Old Airport Road", "Indiranagar", "Koramangala"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Four Seasons",
    slug: "four-seasons-escorts",
    headline: "Russian escorts at Four Seasons Bangalore",
    description:
      "World-class Russian escorts available at Four Seasons Bangalore, offering discreet and sophisticated companionship in this luxury property.",
    highlights: [
      {
        title: "International standards",
        description: "Global luxury brand with exceptional service and privacy.",
      },
      {
        title: "Prime connectivity",
        description: "Well-connected to tech parks, business districts, and nightlife areas.",
      },
    ],
    nearby: ["Whitefield", "Indiranagar", "Koramangala", "MG Road"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Park Plaza",
    slug: "park-plaza-escorts",
    headline: "Russian escorts at Park Plaza Bangalore",
    description:
      "Comfortable and professional Russian escorts available at Park Plaza Bangalore, perfect for business travelers and tech professionals visiting the city.",
    highlights: [
      {
        title: "Business friendly",
        description: "Designed for business travelers with convenient location and amenities.",
      },
      {
        title: "Value luxury",
        description: "Premium experience at accessible rates with quality service.",
      },
    ],
    nearby: ["Residency Road", "MG Road", "Indiranagar", "Koramangala"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Novotel Bangalore",
    slug: "novotel-bangalore-escorts",
    headline: "Russian escorts at Novotel Bangalore",
    description:
      "Modern Russian escorts available at Novotel Bangalore, offering professional companionship in this contemporary property perfect for tech professionals.",
    highlights: [
      {
        title: "Tech hub proximity",
        description: "Located near major tech parks and startup hubs.",
      },
      {
        title: "Contemporary comfort",
        description: "Modern design with all essential amenities for comfortable stays.",
      },
    ],
    nearby: ["Indiranagar", "Koramangala", "HSR Layout", "Whitefield"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Taj Yeshwantpur",
    slug: "taj-yeshwantpur-escorts",
    headline: "Russian escorts at Taj Yeshwantpur Bangalore",
    description:
      "Premium Russian escorts available at Taj Yeshwantpur, a luxury property in North Bangalore perfect for business travelers and tech professionals.",
    highlights: [
      {
        title: "North Bangalore location",
        description: "Strategic location in North Bangalore, close to tech parks and business districts.",
      },
      {
        title: "Taj hospitality",
        description: "Legendary service standards with complete privacy and discretion.",
      },
    ],
    nearby: ["Yeshwantpur", "Hebbal", "Manyata Tech Park", "Whitefield"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

