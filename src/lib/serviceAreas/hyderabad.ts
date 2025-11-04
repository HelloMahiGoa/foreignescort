import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

import type { ServiceAreaDefinition, ServiceAreaHighlight } from "./goa";

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

type HyderabadServiceAreaDefinition = ServiceAreaDefinition & {
  highlights: ServiceAreaHighlight[];
};

export const hyderabadServiceAreas: HyderabadServiceAreaDefinition[] = [
  {
    name: "Jubilee Hills",
    slug: "jubilee-hills-escorts",
    headline: "Jubilee Hills escorts for premium villa soirées",
    description:
      "Private villas, rooftop grills and bespoke lounges across Jubilee Hills become a curated affair with escorts attuned to Hyderabad’s high society pulse.",
    highlights: [
      {
        title: "Villa concierge",
        description: "Road No. 36 villas, boutique rooftops and pool decks prepared with security-cleared entries and private chefs.",
      },
      {
        title: "Curated tastings",
        description: "Wine bars, micro roasteries and craft kitchens lined up for leisurely tasting sessions.",
      },
    ],
    nearby: ["Road No. 36", "ICONIC Club", "Alchemy", "Hyderabad International Convention", "Film Nagar"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Banjara Hills",
    slug: "banjara-hills-escorts",
    headline: "Banjara Hills escorts synchronized with heritage luxury",
    description:
      "Banjara Hills’ five-star suites, art galleries and old-world clubs are managed by escorts who exude refined grace.",
    highlights: [
      {
        title: "Five-star liaison",
        description: "Taj Krishna, Park Hyatt and Jiva spa experiences booked with bespoke amenity kits and NDAs.",
      },
      {
        title: "Art & culture",
        description: "Kalakriti galleries, Qutb Shahi Tombs and literature cafés scheduled for cultured evenings.",
      },
    ],
    nearby: ["Taj Krishna", "Park Hyatt", "Kalakriti", "Golkonda View", "Road No. 12"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Gachibowli",
    slug: "gachibowli-escorts",
    headline: "Gachibowli escorts matching tech campus cadence",
    description:
      "IT campuses, golf greens and late-night drives around Gachibowli blend with escorts who understand corporate adrenaline.",
    highlights: [
      {
        title: "Campus coordination",
        description: "Financial District towers and HITEC enclosures synchronized with precise chauffeur hand-offs.",
      },
      {
        title: "Executive downtime",
        description: "Hyatt Avenue, Westin and Boulder Hills lounges prepared for soft-close meetings.",
      },
    ],
    nearby: ["Financial District", "Boulder Hills", "The Westin", "Hyatt Avenue", "HITEC City"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "HICC",
    slug: "hicc-escorts",
    headline: "HICC escorts for convention-ready companionship",
    description:
      "Expo days at HICC, Novotel corridors and Summit lounges are aligned with escorts ready for fast-paced convention schedules.",
    highlights: [
      {
        title: "Expo efficiency",
        description: "Badges, security checks and hall transitions mapped for stress-free meetups.",
      },
      {
        title: "After-hours reset",
        description: "Pool decks, spa circuits and midnight buffets prepared for post-conference downtime.",
      },
    ],
    nearby: ["HICC", "Novotel", "Shilparamam", "HITEX", "Kondapur"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Airport corridor",
    slug: "airport-corridor-escorts",
    headline: "Airport corridor escorts for seamless arrivals",
    description:
      "Escorts stationed along Shamshabad expressways deliver swift, premium experiences for flyers landing deep into the night.",
    highlights: [
      {
        title: "Flight sync",
        description: "Real-time flight tracking, lounge pickups and express check-ins for red-eye schedules.",
      },
      {
        title: "Transit luxury",
        description: "Airport hotels, spa suites and chauffeur fleets locked for quick yet indulgent stopovers.",
      },
    ],
    nearby: ["RGIA", "Novotel Airport", "GMR AeroCity", "Outer Ring Road", "Airport Expressway"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Financial District",
    slug: "financial-district-escorts",
    headline: "Financial District escorts for boardroom-to-bar transitions",
    description:
      "Banking towers, co-working hubs and elite bars around Nanakramguda pair with escorts designed for polished corporate wind downs.",
    highlights: [
      {
        title: "Deal closure",
        description: "Escorts aligned with investor dinners, tender signings and celebratory champagne rituals.",
      },
      {
        title: "Private lounges",
        description: "Top-floor lounges and speakeasies curated with curated mixes and confidentiality protocols.",
      },
    ],
    nearby: ["Nanakramguda", "T-Hub", "One BKC (Hyd)", "Zion Club", "Luxe Lounges"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Madhapur",
    slug: "madhapur-escorts",
    headline: "Madhapur escorts for creative hub nights",
    description:
      "Co-working spaces, VR arcades and creative studios in Madhapur get escorts who thrive on experimentation and artful vibes.",
    highlights: [
      {
        title: "Creative crawls",
        description: "VR lounges, gaming dens and underground art decks explored with playful energy.",
      },
      {
        title: "Food truck fiestas",
        description: "Street food lanes, craft bars and dessert spots curated for fun-first evenings.",
      },
    ],
    nearby: ["Raheja Mindspace", "Inorbit", "Shilparamam", "Food Truck Lane", "Workafella"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Kokapet",
    slug: "kokapet-escorts",
    headline: "Kokapet escorts for gated luxury enclaves",
    description:
      "Skyline residences, golf communities and designer villas around Kokapet are matched with escorts accustomed to private luxury.",
    highlights: [
      {
        title: "Township indulgence",
        description: "Prestige villas, ORR condos and club houses prepped for intimate soirees.",
      },
      {
        title: "Scenic drives",
        description: "Gandipet, Osman Sagar and Kokapet lake drives choreographed with convertible sedans.",
      },
    ],
    nearby: ["Prestige Villas", "Osman Sagar", "Gandipet", "SkyHigh", "CBI Colony"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Begumpet",
    slug: "begumpet-escorts",
    headline: "Begumpet escorts for heritage hotel charm",
    description:
      "Old-school clubs, heritage hotels and upscale malls in Begumpet offer a nostalgic canvas for escorts delivering classic Hyderabad warmth.",
    highlights: [
      {
        title: "Heritage hospitality",
        description: "ITC Kakatiya, Taj Deccan and Nizam Club rendezvous arranged with vintage flair.",
      },
      {
        title: "Shopping ease",
        description: "Begumpet malls, boutiques and jewelers managed with personal shopping stylists.",
      },
    ],
    nearby: ["ITC Kakatiya", "Taj Deccan", "Nizam Club", "CMR Shopping", "Begumpet Airport Park"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Shamshabad",
    slug: "shamshabad-escorts",
    headline: "Shamshabad escorts for swift transit luxury",
    description:
      "Airport lounges, expressway retreats and resort spas in Shamshabad welcome escorts ready for fly-in, fly-out affairs.",
    highlights: [
      {
        title: "Transit mastery",
        description: "RGIA lounges, charter flights and fast-track gates monitored for seamless arrivals.",
      },
      {
        title: "Resort calm",
        description: "Novotel, Pride Plaza and spa retreats set for quick decompression between flights.",
      },
    ],
    nearby: ["RGIA", "Novotel", "Pride Plaza", "Airport Expressway", "Shamshabad Resorts"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

export const hyderabadServiceAreaMap = new Map<string, HyderabadServiceAreaDefinition>(
  hyderabadServiceAreas.map((area) => [area.slug, area])
);

