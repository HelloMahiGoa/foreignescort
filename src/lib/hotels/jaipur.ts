import type { StaticImageData } from "next/image";

import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

export type JaipurHotelHighlight = {
  title: string;
  description: string;
};

export type JaipurHotelDefinition = {
  name: string;
  slug: string;
  headline: string;
  description: string;
  highlights: JaipurHotelHighlight[];
  nearby: string[];
  heroDesktop?: string | StaticImageData;
  heroMobile?: string | StaticImageData;
};

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

export const jaipurHotels: JaipurHotelDefinition[] = [
  {
    name: "Rambagh Palace",
    slug: "rambagh-palace-escorts",
    headline: "Russian escorts at Rambagh Palace Jaipur",
    description:
      "Premium Russian escorts available for discreet companionship at Rambagh Palace. Experience royal elegance with our verified professionals in this iconic heritage hotel.",
    highlights: [
      {
        title: "Royal heritage",
        description: "Located in the heart of Pink City, perfect blend of heritage and luxury.",
      },
      {
        title: "Palace discretion",
        description: "Five-star service with complete privacy in royal surroundings.",
      },
    ],
    nearby: ["Pink City", "C-Scheme", "Ajmer Road", "Tonk Road"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Taj Jai Mahal Palace",
    slug: "taj-jai-mahal-palace-escorts",
    headline: "Russian escorts at Taj Jai Mahal Palace Jaipur",
    description:
      "Experience elegant Russian companionship at Taj Jai Mahal Palace. Our verified escorts provide sophisticated service with complete discretion in this regal heritage property.",
    highlights: [
      {
        title: "Historic elegance",
        description: "Heritage palace hotel with modern amenities and royal atmosphere.",
      },
      {
        title: "Professional service",
        description: "Verified escorts who understand heritage hotel protocols.",
      },
    ],
    nearby: ["C-Scheme", "Pink City", "Malviya Nagar", "Vaishali Nagar"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Oberoi Rajvilas",
    slug: "oberoi-rajvilas-escorts",
    headline: "Russian escorts at Oberoi Rajvilas Jaipur",
    description:
      "Premium Russian escorts for guests of Oberoi Rajvilas. Our high-profile companions provide world-class service matching the luxury of this prestigious heritage resort.",
    highlights: [
      {
        title: "Luxury resort",
        description: "Spread across 32 acres, offering ultimate privacy and luxury.",
      },
      {
        title: "VIP treatment",
        description: "Standing arrangements and seamless service for resort guests.",
      },
    ],
    nearby: ["Tonk Road", "Ajmer Road", "Airport Zone", "Pink City"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "ITC Rajputana",
    slug: "itc-rajputana-escorts",
    headline: "Russian escorts at ITC Rajputana Jaipur",
    description:
      "Exclusive Russian escort service for ITC Rajputana guests. Our verified professionals offer discreet companionship in this luxury business hotel.",
    highlights: [
      {
        title: "Business luxury",
        description: "Perfect for business travelers seeking premium companionship.",
      },
      {
        title: "Central location",
        description: "Located on Palace Road, easy access to business districts.",
      },
    ],
    nearby: ["Pink City", "C-Scheme", "Raja Park", "Malviya Nagar"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "JW Marriott Jaipur",
    slug: "jw-marriott-jaipur-escorts",
    headline: "Russian escorts at JW Marriott Jaipur",
    description:
      "Sophisticated Russian escorts available at JW Marriott Jaipur. Our professionals provide elegant companionship with complete discretion for hotel guests.",
    highlights: [
      {
        title: "Modern luxury",
        description: "Contemporary hotel with world-class amenities and service.",
      },
      {
        title: "Prime location",
        description: "Located in Tonk Road, convenient for business and leisure.",
      },
    ],
    nearby: ["Tonk Road", "Malviya Nagar", "Vaishali Nagar", "C-Scheme"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Fairmont Jaipur",
    slug: "fairmont-jaipur-escorts",
    headline: "Russian escorts at Fairmont Jaipur",
    description:
      "Premium Russian escorts for Fairmont Jaipur guests. Experience world-class companionship in this luxury property combining heritage and modern elegance.",
    highlights: [
      {
        title: "Heritage design",
        description: "Mughal-inspired architecture with contemporary luxury amenities.",
      },
      {
        title: "Complete discretion",
        description: "Professional arrangements ensuring privacy and comfort.",
      },
    ],
    nearby: ["Airport Zone", "Tonk Road", "Ajmer Road", "Pink City"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Radisson Blu Jaipur",
    slug: "radisson-blu-jaipur-escorts",
    headline: "Russian escorts at Radisson Blu Jaipur",
    description:
      "Elegant Russian escort service at Radisson Blu Jaipur. Our verified professionals offer sophisticated companionship for business and leisure travelers.",
    highlights: [
      {
        title: "Business friendly",
        description: "Ideal location for corporate travelers and business meetings.",
      },
      {
        title: "Reliable service",
        description: "Punctual, professional escorts who understand business needs.",
      },
    ],
    nearby: ["Malviya Nagar", "C-Scheme", "Vaishali Nagar", "Raja Park"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Holiday Inn Jaipur City Centre",
    slug: "holiday-inn-jaipur-city-centre-escorts",
    headline: "Russian escorts at Holiday Inn Jaipur City Centre",
    description:
      "Professional Russian escorts available at Holiday Inn Jaipur City Centre. Our verified companions provide quality service with discretion for hotel guests.",
    highlights: [
      {
        title: "City center",
        description: "Located in the heart of Jaipur, convenient for all activities.",
      },
      {
        title: "Affordable luxury",
        description: "Quality service matching the hotel's standards.",
      },
    ],
    nearby: ["Pink City", "C-Scheme", "Raja Park", "Tonk Road"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Clarks Amer",
    slug: "clarks-amer-escorts",
    headline: "Russian escorts at Clarks Amer Jaipur",
    description:
      "Premium Russian escorts for Clarks Amer guests. Our professionals offer elegant companionship with complete discretion in this established Jaipur hotel.",
    highlights: [
      {
        title: "Established property",
        description: "One of Jaipur's well-known hotels with excellent service.",
      },
      {
        title: "Professional arrangements",
        description: "Seamless booking and discreet service for all guests.",
      },
    ],
    nearby: ["C-Scheme", "Malviya Nagar", "Vaishali Nagar", "Pink City"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Trident Jaipur",
    slug: "trident-jaipur-escorts",
    headline: "Russian escorts at Trident Jaipur",
    description:
      "Sophisticated Russian escorts available at Trident Jaipur. Our verified professionals provide world-class companionship in this luxury business hotel.",
    highlights: [
      {
        title: "Business luxury",
        description: "Perfect for corporate travelers seeking premium experience.",
      },
      {
        title: "Royal location",
        description: "Close to Pink City and major business districts.",
      },
    ],
    nearby: ["Pink City", "C-Scheme", "Malviya Nagar", "Tonk Road"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Lalit Jaipur",
    slug: "lalit-jaipur-escorts",
    headline: "Russian escorts at Lalit Jaipur",
    description:
      "Elegant Russian escort service at Lalit Jaipur. Our verified companions offer sophisticated service with complete discretion for hotel guests.",
    highlights: [
      {
        title: "Modern elegance",
        description: "Contemporary hotel with heritage-inspired design elements.",
      },
      {
        title: "Complete privacy",
        description: "Discreet arrangements ensuring guest comfort and privacy.",
      },
    ],
    nearby: ["Tonk Road", "Malviya Nagar", "Vaishali Nagar", "Airport Zone"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Umaid Bhawan Palace",
    slug: "umaid-bhawan-palace-escorts",
    headline: "Russian escorts at Umaid Bhawan Palace Jaipur",
    description:
      "Premium Russian escorts for Umaid Bhawan Palace guests. Experience royal heritage with our verified professionals in this historic palace hotel.",
    highlights: [
      {
        title: "Historic palace",
        description: "Converted royal palace offering unique heritage experience.",
      },
      {
        title: "Royal discretion",
        description: "Sophisticated service matching the palace's elegant atmosphere.",
      },
    ],
    nearby: ["Pink City", "C-Scheme", "Ajmer Road", "Raja Park"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

