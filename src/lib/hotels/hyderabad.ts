import type { StaticImageData } from "next/image";

import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

export type HyderabadHotelHighlight = {
  title: string;
  description: string;
};

export type HyderabadHotelDefinition = {
  name: string;
  slug: string;
  headline: string;
  description: string;
  highlights: HyderabadHotelHighlight[];
  nearby: string[];
  heroDesktop?: string | StaticImageData;
  heroMobile?: string | StaticImageData;
};

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

export const hyderabadHotels: HyderabadHotelDefinition[] = [
  {
    name: "Taj Krishna",
    slug: "taj-krishna-escorts",
    headline: "Russian escorts at Taj Krishna Hyderabad",
    description:
      "Premium Russian escorts available at Taj Krishna Hyderabad, offering sophisticated companionship in this luxury property in Banjara Hills.",
    highlights: [
      {
        title: "Banjara Hills",
        description: "Located in Banjara Hills, Hyderabad's premium residential area.",
      },
      {
        title: "Heritage luxury",
        description: "Iconic property with world-class amenities and service.",
      },
    ],
    nearby: ["Banjara Hills", "Jubilee Hills", "Gachibowli", "HICC"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Park Hyatt Hyderabad",
    slug: "park-hyatt-hyderabad-escorts",
    headline: "Russian escorts at Park Hyatt Hyderabad",
    description:
      "Premium Russian escorts available at Park Hyatt Hyderabad, offering sophisticated companionship in this luxury property in Banjara Hills.",
    highlights: [
      {
        title: "Luxury retreat",
        description: "Serene property with premium amenities and sophisticated service.",
      },
      {
        title: "Banjara Hills",
        description: "Located in Banjara Hills, near fine dining and luxury shopping.",
      },
    ],
    nearby: ["Banjara Hills", "Jubilee Hills", "Gachibowli", "Financial District"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "ITC Kohenur Hyderabad",
    slug: "itc-kohenur-hyderabad-escorts",
    headline: "Russian escorts at ITC Kohenur Hyderabad",
    description:
      "Premium Russian escorts available at ITC Kohenur Hyderabad, offering sophisticated companionship in this luxury property in HITEC City.",
    highlights: [
      {
        title: "HITEC City",
        description: "Located in HITEC City, Hyderabad's IT hub.",
      },
      {
        title: "Business district",
        description: "Perfect for business travelers and tech professionals.",
      },
    ],
    nearby: ["HITEC City", "Gachibowli", "Financial District", "Madhapur"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Westin Hyderabad Mindspace",
    slug: "the-westin-hyderabad-mindspace-escorts",
    headline: "Russian escorts at The Westin Hyderabad Mindspace",
    description:
      "Premium Russian escorts available at The Westin Hyderabad Mindspace, offering sophisticated companionship in this luxury property in HITEC City.",
    highlights: [
      {
        title: "HITEC City",
        description: "Located in HITEC City, near IT parks and business centers.",
      },
      {
        title: "Modern luxury",
        description: "Contemporary property with premium amenities.",
      },
    ],
    nearby: ["HITEC City", "Gachibowli", "Madhapur", "Financial District"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Novotel Hyderabad Convention Centre",
    slug: "novotel-hyderabad-convention-escorts",
    headline: "Russian escorts at Novotel Hyderabad Convention Centre",
    description:
      "Premium Russian escorts available at Novotel Hyderabad Convention Centre, offering sophisticated companionship in this property near HICC.",
    highlights: [
      {
        title: "HICC proximity",
        description: "Located near HICC, perfect for convention attendees.",
      },
      {
        title: "Convention ready",
        description: "Ideal for business events and conferences.",
      },
    ],
    nearby: ["HICC", "Gachibowli", "Financial District", "Madhapur"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Taj Banjara Hyderabad",
    slug: "taj-banjara-hyderabad-escorts",
    headline: "Russian escorts at Taj Banjara Hyderabad",
    description:
      "Premium Russian escorts available at Taj Banjara Hyderabad, offering sophisticated companionship in this luxury property in Banjara Hills.",
    highlights: [
      {
        title: "Banjara Hills",
        description: "Located in Banjara Hills, near luxury shopping and fine dining.",
      },
      {
        title: "Heritage charm",
        description: "Iconic property with elegant architecture and service.",
      },
    ],
    nearby: ["Banjara Hills", "Jubilee Hills", "Gachibowli", "Begumpet"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Hyatt Regency Hyderabad",
    slug: "hyatt-regency-hyderabad-escorts",
    headline: "Russian escorts at Hyatt Regency Hyderabad",
    description:
      "Premium Russian escorts available at Hyatt Regency Hyderabad, offering sophisticated companionship in this luxury property near airport.",
    highlights: [
      {
        title: "Airport proximity",
        description: "Close to Hyderabad airport, perfect for travelers.",
      },
      {
        title: "Begumpet location",
        description: "Located in Begumpet, near business districts.",
      },
    ],
    nearby: ["Begumpet", "HICC", "Gachibowli", "Airport"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Radisson Blu Plaza Hyderabad",
    slug: "radisson-blu-plaza-hyderabad-escorts",
    headline: "Russian escorts at Radisson Blu Plaza Hyderabad",
    description:
      "Premium Russian escorts available at Radisson Blu Plaza Hyderabad, offering sophisticated companionship in this property in Banjara Hills.",
    highlights: [
      {
        title: "Banjara Hills",
        description: "Located in Banjara Hills, near upscale areas.",
      },
      {
        title: "Business ready",
        description: "Ideal for business travelers and professionals.",
      },
    ],
    nearby: ["Banjara Hills", "Jubilee Hills", "Gachibowli", "Begumpet"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Golkonda Resort",
    slug: "the-golkonda-resort-escorts",
    headline: "Russian escorts at The Golkonda Resort Hyderabad",
    description:
      "Premium Russian escorts available at The Golkonda Resort Hyderabad, offering sophisticated companionship in this luxury resort property.",
    highlights: [
      {
        title: "Resort luxury",
        description: "Luxury resort with extensive grounds and premium amenities.",
      },
      {
        title: "Serene location",
        description: "Peaceful location away from city center.",
      },
    ],
    nearby: ["Gachibowli", "HITEC City", "Financial District", "Madhapur"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Lemon Tree Premier HITEC City",
    slug: "lemon-tree-premier-hitec-escorts",
    headline: "Russian escorts at Lemon Tree Premier HITEC City",
    description:
      "Premium Russian escorts available at Lemon Tree Premier HITEC City, offering sophisticated companionship in this modern property.",
    highlights: [
      {
        title: "HITEC City",
        description: "Located in HITEC City, near IT parks.",
      },
      {
        title: "Modern comfort",
        description: "Contemporary property with modern amenities.",
      },
    ],
    nearby: ["HITEC City", "Gachibowli", "Madhapur", "Financial District"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Marriott Hyderabad",
    slug: "marriott-hyderabad-escorts",
    headline: "Russian escorts at Marriott Hyderabad",
    description:
      "Premium Russian escorts available at Marriott Hyderabad, offering sophisticated companionship in this luxury property in HITEC City.",
    highlights: [
      {
        title: "HITEC City",
        description: "Located in HITEC City, Hyderabad's IT hub.",
      },
      {
        title: "Business district",
        description: "Perfect for business travelers and tech professionals.",
      },
    ],
    nearby: ["HITEC City", "Gachibowli", "Financial District", "Madhapur"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Park Hyderabad",
    slug: "the-park-hyderabad-escorts",
    headline: "Russian escorts at The Park Hyderabad",
    description:
      "Premium Russian escorts available at The Park Hyderabad, offering sophisticated companionship in this luxury property in Banjara Hills.",
    highlights: [
      {
        title: "Banjara Hills",
        description: "Located in Banjara Hills, near luxury shopping.",
      },
      {
        title: "Modern luxury",
        description: "Contemporary property with sophisticated service.",
      },
    ],
    nearby: ["Banjara Hills", "Jubilee Hills", "Gachibowli", "Begumpet"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

