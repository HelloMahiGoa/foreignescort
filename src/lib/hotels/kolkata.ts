import type { StaticImageData } from "next/image";

import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

export type KolkataHotelHighlight = {
  title: string;
  description: string;
};

export type KolkataHotelDefinition = {
  name: string;
  slug: string;
  headline: string;
  description: string;
  highlights: KolkataHotelHighlight[];
  nearby: string[];
  heroDesktop?: string | StaticImageData;
  heroMobile?: string | StaticImageData;
};

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

export const kolkataHotels: KolkataHotelDefinition[] = [
  {
    name: "The Oberoi Grand Kolkata",
    slug: "the-oberoi-grand-kolkata-escorts",
    headline: "Russian escorts at The Oberoi Grand Kolkata",
    description:
      "Premium Russian escorts available at The Oberoi Grand Kolkata, offering sophisticated companionship in this heritage property in Park Street.",
    highlights: [
      {
        title: "Heritage luxury",
        description: "Iconic heritage hotel with colonial architecture and world-class service.",
      },
      {
        title: "Park Street",
        description: "Located in Park Street, Kolkata's entertainment and dining hub.",
      },
    ],
    nearby: ["Park Street", "New Market", "Esplanade", "Ballygunge"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Taj Bengal Kolkata",
    slug: "taj-bengal-kolkata-escorts",
    headline: "Russian escorts at Taj Bengal Kolkata",
    description:
      "Premium Russian escorts available at Taj Bengal Kolkata, offering sophisticated companionship in this luxury property in Alipore.",
    highlights: [
      {
        title: "Alipore location",
        description: "Located in Alipore, Kolkata's premium residential area.",
      },
      {
        title: "Heritage charm",
        description: "Elegant property with traditional Bengali hospitality.",
      },
    ],
    nearby: ["Alipore", "Park Street", "Ballygunge", "New Town"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "ITC Royal Bengal Kolkata",
    slug: "itc-royal-bengal-kolkata-escorts",
    headline: "Russian escorts at ITC Royal Bengal Kolkata",
    description:
      "Premium Russian escorts available at ITC Royal Bengal Kolkata, offering sophisticated companionship in this luxury property in New Town.",
    highlights: [
      {
        title: "New Town",
        description: "Located in New Town, Kolkata's modern business district.",
      },
      {
        title: "Business district",
        description: "Perfect for business travelers and professionals.",
      },
    ],
    nearby: ["New Town", "Salt Lake", "Sector V", "Airport"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Park Kolkata",
    slug: "the-park-kolkata-escorts",
    headline: "Russian escorts at The Park Kolkata",
    description:
      "Premium Russian escorts available at The Park Kolkata, offering sophisticated companionship in this luxury property in Park Street.",
    highlights: [
      {
        title: "Park Street",
        description: "Located in Park Street, near entertainment and dining.",
      },
      {
        title: "Modern luxury",
        description: "Contemporary property with sophisticated service.",
      },
    ],
    nearby: ["Park Street", "New Market", "Esplanade", "Ballygunge"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Hyatt Regency Kolkata",
    slug: "hyatt-regency-kolkata-escorts",
    headline: "Russian escorts at Hyatt Regency Kolkata",
    description:
      "Premium Russian escorts available at Hyatt Regency Kolkata, offering sophisticated companionship in this luxury property in Salt Lake.",
    highlights: [
      {
        title: "Salt Lake",
        description: "Located in Salt Lake, near business parks and IT sector.",
      },
      {
        title: "Business ready",
        description: "Ideal for business travelers and professionals.",
      },
    ],
    nearby: ["Salt Lake", "Sector V", "New Town", "Airport"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Novotel Kolkata Hotel and Residences",
    slug: "novotel-kolkata-escorts",
    headline: "Russian escorts at Novotel Kolkata",
    description:
      "Premium Russian escorts available at Novotel Kolkata, offering sophisticated companionship in this property in New Town.",
    highlights: [
      {
        title: "New Town",
        description: "Located in New Town, Kolkata's modern district.",
      },
      {
        title: "Modern comfort",
        description: "Contemporary property with modern amenities.",
      },
    ],
    nearby: ["New Town", "Salt Lake", "Sector V", "Airport"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Lalit Great Eastern Kolkata",
    slug: "the-lalit-great-eastern-kolkata-escorts",
    headline: "Russian escorts at The Lalit Great Eastern Kolkata",
    description:
      "Premium Russian escorts available at The Lalit Great Eastern Kolkata, offering sophisticated companionship in this heritage property in Esplanade.",
    highlights: [
      {
        title: "Heritage property",
        description: "One of Kolkata's oldest hotels with heritage charm.",
      },
      {
        title: "Esplanade",
        description: "Located in Esplanade, near business district.",
      },
    ],
    nearby: ["Esplanade", "Park Street", "New Market", "Ballygunge"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Holiday Inn Kolkata Airport",
    slug: "holiday-inn-kolkata-airport-escorts",
    headline: "Russian escorts at Holiday Inn Kolkata Airport",
    description:
      "Premium Russian escorts available at Holiday Inn Kolkata Airport, offering sophisticated companionship in this property near airport.",
    highlights: [
      {
        title: "Airport proximity",
        description: "Close to Kolkata airport, perfect for travelers.",
      },
      {
        title: "Convenient location",
        description: "Ideal for transit and business travelers.",
      },
    ],
    nearby: ["Airport", "New Town", "Salt Lake", "Sector V"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Kenilworth Kolkata",
    slug: "the-kenilworth-kolkata-escorts",
    headline: "Russian escorts at The Kenilworth Kolkata",
    description:
      "Premium Russian escorts available at The Kenilworth Kolkata, offering sophisticated companionship in this luxury property in Park Street.",
    highlights: [
      {
        title: "Park Street",
        description: "Located in Park Street, near entertainment district.",
      },
      {
        title: "Heritage charm",
        description: "Elegant property with traditional architecture.",
      },
    ],
    nearby: ["Park Street", "New Market", "Esplanade", "Ballygunge"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Swissotel Kolkata",
    slug: "swissotel-kolkata-escorts",
    headline: "Russian escorts at Swissotel Kolkata",
    description:
      "Premium Russian escorts available at Swissotel Kolkata, offering sophisticated companionship in this luxury property in New Town.",
    highlights: [
      {
        title: "New Town",
        description: "Located in New Town, Kolkata's modern business hub.",
      },
      {
        title: "Business district",
        description: "Perfect for business travelers and professionals.",
      },
    ],
    nearby: ["New Town", "Salt Lake", "Sector V", "Airport"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Sonnet Kolkata",
    slug: "the-sonnet-kolkata-escorts",
    headline: "Russian escorts at The Sonnet Kolkata",
    description:
      "Premium Russian escorts available at The Sonnet Kolkata, offering sophisticated companionship in this property in Salt Lake.",
    highlights: [
      {
        title: "Salt Lake",
        description: "Located in Salt Lake, near business parks.",
      },
      {
        title: "Modern comfort",
        description: "Contemporary property with modern amenities.",
      },
    ],
    nearby: ["Salt Lake", "Sector V", "New Town", "Airport"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Gateway Hotel Kolkata",
    slug: "the-gateway-hotel-kolkata-escorts",
    headline: "Russian escorts at The Gateway Hotel Kolkata",
    description:
      "Premium Russian escorts available at The Gateway Hotel Kolkata, offering sophisticated companionship in this property in Salt Lake.",
    highlights: [
      {
        title: "Salt Lake",
        description: "Located in Salt Lake, near IT sector.",
      },
      {
        title: "Business ready",
        description: "Ideal for business travelers and professionals.",
      },
    ],
    nearby: ["Salt Lake", "Sector V", "New Town", "Airport"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

