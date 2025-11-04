import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

import type { ServiceAreaDefinition, ServiceAreaHighlight } from "./goa";

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

type JaipurServiceAreaDefinition = ServiceAreaDefinition & {
  highlights: ServiceAreaHighlight[];
};

export const jaipurServiceAreas: JaipurServiceAreaDefinition[] = [
  {
    name: "Pink City",
    slug: "pink-city-escorts",
    headline: "Pink City escorts blending heritage with luxury",
    description:
      "Navigate the historic Pink City with escorts who understand royal etiquette, heritage walks, and palace-adjacent luxury stays.",
    highlights: [
      {
        title: "Palace proximity",
        description: "City Palace, Hawa Mahal, and Jantar Mantar tours with private guides and VIP access to restricted areas.",
      },
      {
        title: "Heritage hotels",
        description: "Samode Haveli, Diggi Palace, and traditional havelis converted into luxury stays with cultural programs.",
      },
    ],
    nearby: ["City Palace", "Hawa Mahal", "Jantar Mantar", "Samode Haveli", "Johri Bazaar"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "C-Scheme",
    slug: "c-scheme-escorts",
    headline: "C-Scheme escorts for upscale commercial evenings",
    description:
      "Corporate hubs, fine-dining venues, and premium shopping in C-Scheme sync with escorts who mirror the area's refined energy.",
    highlights: [
      {
        title: "Business district",
        description: "Corporate offices, boardroom meetings, and post-work cocktails seamlessly coordinated.",
      },
      {
        title: "Fine dining",
        description: "C-Scheme's premium restaurants, rooftop lounges, and wine bars with reserved tables and valet service.",
      },
    ],
    nearby: ["MI Road", "Statue Circle", "Corporate Offices", "Rooftop Restaurants", "Shopping Malls"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Malviya Nagar",
    slug: "malviya-nagar-escorts",
    headline: "Malviya Nagar escorts for residential luxury",
    description:
      "Upscale residential areas, boutique cafes, and private clubs in Malviya Nagar become intimate retreats with discreet escorts.",
    highlights: [
      {
        title: "Residential privacy",
        description: "Private residences, gated communities, and villa stays coordinated with security and discretion.",
      },
      {
        title: "Boutique experiences",
        description: "Art galleries, craft workshops, and curated dining experiences in quiet, sophisticated settings.",
      },
    ],
    nearby: ["Residential Enclaves", "Boutique Cafes", "Art Galleries", "Private Clubs", "Gated Communities"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Tonk Road",
    slug: "tonk-road-escorts",
    headline: "Tonk Road escorts for emerging commercial vibes",
    description:
      "Modern commercial complexes, IT parks, and entertainment hubs on Tonk Road get escorts who keep pace with the area's growth.",
    highlights: [
      {
        title: "Commercial hubs",
        description: "IT offices, business parks, and conference venues mapped with timely pickups and drop-offs.",
      },
      {
        title: "Entertainment zones",
        description: "Malls, multiplexes, and food courts coordinated for casual outings and group celebrations.",
      },
    ],
    nearby: ["IT Parks", "Shopping Malls", "Multiplexes", "Business Centers", "Restaurants"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Ajmer Road",
    slug: "ajmer-road-escorts",
    headline: "Ajmer Road escorts bridging city and highway access",
    description:
      "Strategic location connecting Jaipur to Ajmer and beyond, with escorts ready for highway drives, resort stays, and city returns.",
    highlights: [
      {
        title: "Highway access",
        description: "Smooth connections to Pushkar, Ajmer, and nearby heritage sites with chauffeured road trips.",
      },
      {
        title: "Resort corridor",
        description: "Luxury resorts and heritage properties along the route for extended stays and weekend escapes.",
      },
    ],
    nearby: ["Highway Access", "Resorts", "Heritage Sites", "Pushkar Road", "Ajmer Highway"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Airport Zone",
    slug: "airport-zone-escorts",
    headline: "Airport zone escorts synced with flight arrivals",
    description:
      "Jaipur International Airport arrivals, hotel check-ins, and expressway commutes handled with precision timing and VIP protocols.",
    highlights: [
      {
        title: "Flight tracking",
        description: "Live arrival monitoring, lounge coordination, and seamless pickups for business and leisure travelers.",
      },
      {
        title: "Airport hotels",
        description: "Taj, ITC, and premium airport-adjacent properties with pre-cleared guest access and concierge briefings.",
      },
    ],
    nearby: ["Jaipur International Airport", "Taj Jai Mahal", "ITC Rajputana", "Expressway", "Sanganer"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Vaishali Nagar",
    slug: "vaishali-nagar-escorts",
    headline: "Vaishali Nagar escorts for modern residential elegance",
    description:
      "Contemporary residential layouts, modern amenities, and family-friendly spaces balanced with discreet, sophisticated companionship.",
    highlights: [
      {
        title: "Modern living",
        description: "New-age apartments, gated societies, and residential complexes with privacy-focused logistics.",
      },
      {
        title: "Community spaces",
        description: "Clubhouses, parks, and recreational facilities mapped for low-key, comfortable encounters.",
      },
    ],
    nearby: ["Residential Complexes", "Gated Societies", "Clubhouses", "Parks", "Community Centers"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Raja Park",
    slug: "raja-park-escorts",
    headline: "Raja Park escorts for traditional charm",
    description:
      "Raja Park's mix of traditional homes, local markets, and authentic Rajasthani experiences paired with culturally-aware escorts.",
    highlights: [
      {
        title: "Local culture",
        description: "Traditional markets, Rajasthani cuisine, and cultural spots explored with knowledgeable companions.",
      },
      {
        title: "Authentic stays",
        description: "Heritage homestays and traditional guesthouses offering immersive Pink City experiences.",
      },
    ],
    nearby: ["Local Markets", "Rajasthani Restaurants", "Heritage Homes", "Cultural Spots", "Traditional Bazaars"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Bani Park",
    slug: "bani-park-escorts",
    headline: "Bani Park escorts for heritage hospitality",
    description:
      "Heritage hotels, converted palaces, and royal estates in Bani Park become luxurious backdrops for refined companionship.",
    highlights: [
      {
        title: "Heritage hotels",
        description: "Rambagh Palace, Samode Haveli, and converted royal residences with exclusive access and cultural programs.",
      },
      {
        title: "Royal experiences",
        description: "Private palace tours, traditional performances, and royal dining experiences curated for discerning guests.",
      },
    ],
    nearby: ["Rambagh Palace", "Samode Haveli", "Heritage Hotels", "Royal Estates", "Traditional Performances"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Mansarovar",
    slug: "mansarovar-escorts",
    headline: "Mansarovar escorts for suburban comfort",
    description:
      "Suburban ease, affordable luxury, and relaxed vibes in Mansarovar matched with escorts who value comfort and discretion.",
    highlights: [
      {
        title: "Suburban access",
        description: "Easy connectivity, budget-friendly stays, and comfortable residential areas for extended visits.",
      },
      {
        title: "Local amenities",
        description: "Shopping centers, local eateries, and entertainment options in a relaxed, approachable setting.",
      },
    ],
    nearby: ["Shopping Centers", "Local Markets", "Residential Areas", "Entertainment Hubs", "Budget Hotels"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

export const jaipurServiceAreaMap = new Map<string, JaipurServiceAreaDefinition>(
  jaipurServiceAreas.map((area) => [area.slug, area])
);

