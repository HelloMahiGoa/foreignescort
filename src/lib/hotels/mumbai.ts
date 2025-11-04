import type { StaticImageData } from "next/image";

import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

export type MumbaiHotelHighlight = {
  title: string;
  description: string;
};

export type MumbaiHotelDefinition = {
  name: string;
  slug: string;
  headline: string;
  description: string;
  highlights: MumbaiHotelHighlight[];
  nearby: string[];
  heroDesktop?: string | StaticImageData;
  heroMobile?: string | StaticImageData;
};

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

export const mumbaiHotels: MumbaiHotelDefinition[] = [
  {
    name: "Taj Mahal Palace",
    slug: "taj-mahal-palace-mumbai-escorts",
    headline: "Russian escorts at Taj Mahal Palace Mumbai",
    description:
      "Premium Russian escorts available at Taj Mahal Palace Mumbai, offering sophisticated companionship in this iconic heritage property near Gateway of India.",
    highlights: [
      {
        title: "Heritage luxury",
        description: "Iconic landmark hotel with stunning Arabian Sea views and world-class amenities.",
      },
      {
        title: "Colaba location",
        description: "Located in Colaba, near Gateway of India and Marine Drive.",
      },
    ],
    nearby: ["Colaba", "Gateway of India", "Marine Drive", "Fort"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Oberoi Mumbai",
    slug: "the-oberoi-mumbai-escorts",
    headline: "Russian escorts at The Oberoi Mumbai",
    description:
      "Premium Russian escorts available at The Oberoi Mumbai, offering sophisticated companionship in this luxury property near Nariman Point.",
    highlights: [
      {
        title: "Business district",
        description: "Located in Nariman Point, Mumbai's premier business district.",
      },
      {
        title: "Marine Drive views",
        description: "Stunning views of Marine Drive and Arabian Sea.",
      },
    ],
    nearby: ["Nariman Point", "Marine Drive", "Fort", "Colaba"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The St. Regis Mumbai",
    slug: "the-st-regis-mumbai-escorts",
    headline: "Russian escorts at The St. Regis Mumbai",
    description:
      "Premium Russian escorts available at The St. Regis Mumbai, offering sophisticated companionship in this ultra-luxury property in Lower Parel.",
    highlights: [
      {
        title: "Ultra-luxury",
        description: "World-class service with butler service and premium amenities.",
      },
      {
        title: "Lower Parel",
        description: "Located in Lower Parel, close to business districts and nightlife.",
      },
    ],
    nearby: ["Lower Parel", "Worli", "Bandra", "Prabhadevi"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "JW Marriott Mumbai Juhu",
    slug: "jw-marriott-mumbai-juhu-escorts",
    headline: "Russian escorts at JW Marriott Mumbai Juhu",
    description:
      "Premium Russian escorts available at JW Marriott Mumbai Juhu, offering sophisticated companionship in this beachfront property.",
    highlights: [
      {
        title: "Beachfront luxury",
        description: "Luxury beachfront property with stunning Juhu Beach views.",
      },
      {
        title: "Juhu location",
        description: "Located in Juhu, near celebrity bungalows and beach.",
      },
    ],
    nearby: ["Juhu", "Andheri", "Bandra", "Santa Cruz"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Leela Mumbai",
    slug: "the-leela-mumbai-escorts",
    headline: "Russian escorts at The Leela Mumbai",
    description:
      "Premium Russian escorts available at The Leela Mumbai, offering sophisticated companionship in this luxury property near Andheri.",
    highlights: [
      {
        title: "Airport proximity",
        description: "Close to Mumbai airport, perfect for business travelers.",
      },
      {
        title: "Andheri location",
        description: "Located in Andheri, near business districts and entertainment zones.",
      },
    ],
    nearby: ["Andheri", "Juhu", "Bandra", "Airport"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "ITC Maratha Mumbai",
    slug: "itc-maratha-mumbai-escorts",
    headline: "Russian escorts at ITC Maratha Mumbai",
    description:
      "Premium Russian escorts available at ITC Maratha Mumbai, offering sophisticated companionship in this luxury property near airport.",
    highlights: [
      {
        title: "Airport luxury",
        description: "Luxury property with easy airport access and premium amenities.",
      },
      {
        title: "Andheri location",
        description: "Located in Andheri East, close to airport and business parks.",
      },
    ],
    nearby: ["Andheri", "Airport", "Powai", "Vile Parle"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Four Seasons Mumbai",
    slug: "four-seasons-mumbai-escorts",
    headline: "Russian escorts at Four Seasons Mumbai",
    description:
      "Premium Russian escorts available at Four Seasons Mumbai, offering sophisticated companionship in this luxury property in Worli.",
    highlights: [
      {
        title: "Worli location",
        description: "Located in Worli, near business districts and Sea Link.",
      },
      {
        title: "Premium service",
        description: "World-class service with stunning city views.",
      },
    ],
    nearby: ["Worli", "Lower Parel", "Bandra", "Prabhadevi"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Hyatt Regency Mumbai",
    slug: "hyatt-regency-mumbai-escorts",
    headline: "Russian escorts at Hyatt Regency Mumbai",
    description:
      "Premium Russian escorts available at Hyatt Regency Mumbai, offering sophisticated companionship in this luxury property near airport.",
    highlights: [
      {
        title: "Airport access",
        description: "Close to Mumbai airport, perfect for travelers.",
      },
      {
        title: "Andheri location",
        description: "Located in Andheri, near business districts.",
      },
    ],
    nearby: ["Andheri", "Airport", "Juhu", "Bandra"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Taj Lands End Mumbai",
    slug: "taj-lands-end-mumbai-escorts",
    headline: "Russian escorts at Taj Lands End Mumbai",
    description:
      "Premium Russian escorts available at Taj Lands End Mumbai, offering sophisticated companionship in this luxury property in Bandra.",
    highlights: [
      {
        title: "Bandra location",
        description: "Located in Bandra, Mumbai's celebrity hub.",
      },
      {
        title: "Sea views",
        description: "Stunning views of Arabian Sea and Bandra-Worli Sea Link.",
      },
    ],
    nearby: ["Bandra", "Juhu", "Pali Hill", "Carter Road"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Westin Mumbai Garden City",
    slug: "the-westin-mumbai-garden-city-escorts",
    headline: "Russian escorts at The Westin Mumbai Garden City",
    description:
      "Premium Russian escorts available at The Westin Mumbai Garden City, offering sophisticated companionship in this luxury property in Goregaon.",
    highlights: [
      {
        title: "Goregaon location",
        description: "Located in Goregaon, near business parks and entertainment.",
      },
      {
        title: "Modern luxury",
        description: "Contemporary property with premium amenities.",
      },
    ],
    nearby: ["Goregaon", "Malad", "Andheri", "Powai"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Novotel Mumbai Juhu Beach",
    slug: "novotel-mumbai-juhu-beach-escorts",
    headline: "Russian escorts at Novotel Mumbai Juhu Beach",
    description:
      "Premium Russian escorts available at Novotel Mumbai Juhu Beach, offering sophisticated companionship in this beachfront property.",
    highlights: [
      {
        title: "Beachfront",
        description: "Modern beachfront property with Juhu Beach access.",
      },
      {
        title: "Juhu location",
        description: "Located in Juhu, near celebrity area and beach.",
      },
    ],
    nearby: ["Juhu", "Andheri", "Bandra", "Santa Cruz"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "The Trident Mumbai",
    slug: "the-trident-mumbai-escorts",
    headline: "Russian escorts at The Trident Mumbai",
    description:
      "Premium Russian escorts available at The Trident Mumbai, offering sophisticated companionship in this luxury property in Nariman Point.",
    highlights: [
      {
        title: "Business district",
        description: "Located in Nariman Point, Mumbai's financial hub.",
      },
      {
        title: "Marine Drive",
        description: "Close to Marine Drive with stunning sea views.",
      },
    ],
    nearby: ["Nariman Point", "Marine Drive", "Fort", "Colaba"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

