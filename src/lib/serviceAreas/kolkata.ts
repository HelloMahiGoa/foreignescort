import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

import type { ServiceAreaDefinition, ServiceAreaHighlight } from "./goa";

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

type KolkataServiceAreaDefinition = ServiceAreaDefinition & {
  highlights: ServiceAreaHighlight[];
};

export const kolkataServiceAreas: KolkataServiceAreaDefinition[] = [
  {
    name: "Park Street",
    slug: "park-street-escorts",
    headline: "Park Street escorts for jazz-infused evenings",
    description:
      "Park Street’s heritage bars, jazz cafes and colonial mansions glow brighter with escorts who embody classic Calcutta charisma.",
    highlights: [
      {
        title: "Jazz trails",
        description: "Someplace Else, Trincas and piano lounges orchestrated for smooth, soulful nights.",
      },
      {
        title: "Colonial charm",
        description: "Heritage mansions, Park Mansion rooftops and culture walks paired with bilingual escorts.",
      },
    ],
    nearby: ["Someplace Else", "Trincas", "Flurys", "Park Mansion", "Oxford Bookstore"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Salt Lake",
    slug: "salt-lake-escorts",
    headline: "Salt Lake escorts for tech-city getaways",
    description:
      "Salt Lake’s business parks, lakeside promenades and modern lounges find escorts ready for work-play escapes.",
    highlights: [
      {
        title: "Tech hub sync",
        description: "Sector V towers, corporate lounges and event spaces aligned with chauffeur swaps.",
      },
      {
        title: "Lakeside evenings",
        description: "Central Park, rowing clubs and lakeside decks arranged for serene dates.",
      },
    ],
    nearby: ["Sector V", "Central Park", "Nalban", "Corporate Hubs", "City Centre Mall"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "New Town",
    slug: "new-town-escorts",
    headline: "New Town escorts for futuristic leisure",
    description:
      "New Town’s modern skyline, art districts and green plazas are mastered by escorts who balance innovation and indulgence.",
    highlights: [
      {
        title: "Art & tech",
        description: "Eco Park, Biswa Bangla Gate and art installations curated for immersive strolls.",
      },
      {
        title: "Sky dinners",
        description: "Sky-dining capsules, rooftop lounges and convention centre galas choreographed flawlessly.",
      },
    ],
    nearby: ["Eco Park", "Biswa Bangla Gate", "Axis Mall", "Convention Centre", "Aquatica"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Howrah riverfront",
    slug: "howrah-riverfront-escorts",
    headline: "Howrah riverfront escorts for heritage boat nights",
    description:
      "Hooghly river cruises, historic ghats and skyline dinners transform with escorts who master the riverfront’s romance.",
    highlights: [
      {
        title: "Sunset cruises",
        description: "Private boats, champagne picnics and Howrah Bridge illuminations arranged down to the minute.",
      },
      {
        title: "Ghat rituals",
        description: "Princep Ghat, Armenian Ghat and heritage walks guided with story-rich escorts.",
      },
    ],
    nearby: ["Princep Ghat", "Howrah Bridge", "Hooghly Cruises", "Mullik Ghat", "Heritage Walks"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Alipore",
    slug: "alipore-escorts",
    headline: "Alipore escorts for palace-like privacy",
    description:
      "Colonial mansions, zoo treehouses and premium clubs in Alipore get escorts tailored for aristocratic experiences.",
    highlights: [
      {
        title: "Heritage residences",
        description: "Lutyens-style mansions, rooftop terraces and private gardens paired with bespoke service.",
      },
      {
        title: "Zoo treehouse",
        description: "Alipore Zoo and botanical enclaves arranged for unique, secluded rendezvous.",
      },
    ],
    nearby: ["Alipore Zoo", "National Library", "Club Houses", "Botanical Garden", "Rooftop Villas"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Ballygunge",
    slug: "ballygunge-escorts",
    headline: "Ballygunge escorts blending genteel grace",
    description:
      "Fine dining, boutique homes and art studios in Ballygunge are enriched with escorts who cherish refined, familial warmth.",
    highlights: [
      {
        title: "Culinary tours",
        description: "5-star Bengali kitchens, heritage cafés and dessert ateliers curated with private tastings.",
      },
      {
        title: "Art salons",
        description: "Art galleries, music baithaks and salon evenings planned for cultured indulgence.",
      },
    ],
    nearby: ["Quest Mall", "Birla Mandir", "Art Galleries", "South City", "Hindustan Park"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Sector V",
    slug: "sector-v-escorts",
    headline: "Sector V escorts for after-hours tech nights",
    description:
      "Co-working glass towers, gaming arcades and craft bars in Sector V come alive with escorts who keep the energy high.",
    highlights: [
      {
        title: "Tech hub pace",
        description: "Night shifts, hackathons and founder dinners synchronized with quick-change escorts.",
      },
      {
        title: "Gaming dens",
        description: "LAN centres, VR arenas and after-party lounges booked with exclusive access.",
      },
    ],
    nearby: ["Infinity Benchmark", "VR Arcades", "Co-working Hubs", "Pubs & Bars", "Hidco Bhavan"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Rajarhat",
    slug: "rajarhat-escorts",
    headline: "Rajarhat escorts for green urban retreats",
    description:
      "Residential high-rises, luxury spas and eco-park villas in Rajarhat are perfectly choreographed with escorts who love tranquillity.",
    highlights: [
      {
        title: "Eco stays",
        description: "Eco-park villas, golf greens and rooftop decks booked for chill sunset sessions.",
      },
      {
        title: "Spa circuits",
        description: "Luxury spa suites, yoga residencies and wellness retreats arranged for restful nights.",
      },
    ],
    nearby: ["Eco Park", "Swissotel", "City Centre II", "Golf Greens", "Wellness Retreats"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Princep Ghat",
    slug: "princep-ghat-escorts",
    headline: "Princep Ghat escorts for riverside romance",
    description:
      "Escorts stationed around Princep Ghat deliver riverside picnics, yacht dinners and heritage walkaways wrapped in gentle charm.",
    highlights: [
      {
        title: "Yacht dinners",
        description: "Hooghly yachts, moonlit picnics and saxophone evenings orchestrated with finesse.",
      },
      {
        title: "River rituals",
        description: "Evening aarti, lantern floats and photo tours staged for storybook moments.",
      },
    ],
    nearby: ["Princep Ghat", "Millennium Park", "Babughat", "River Cruises", "Eden Gardens"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Dumdum",
    slug: "dumdum-escorts",
    headline: "Dumdum escorts for transit-ready sophistication",
    description:
      "Airport hotels, express lanes and suburban hideouts in Dumdum are navigated by escorts ready for efficient turnarounds.",
    highlights: [
      {
        title: "Flight sync",
        description: "NSCBI airport lounges, executive suites and chauffeur rotations handled with minute-level precision.",
      },
      {
        title: "Hidden lounges",
        description: "Private cafés, live music basements and speakeasies curated for swift indulgence before departure.",
      },
    ],
    nearby: ["NSCBI Airport", "Airport Lounges", "Private Cafés", "Expressway", "Suburban Villas"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

export const kolkataServiceAreaMap = new Map<string, KolkataServiceAreaDefinition>(
  kolkataServiceAreas.map((area) => [area.slug, area])
);

