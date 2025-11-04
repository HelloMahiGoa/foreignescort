import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

import type { ServiceAreaDefinition, ServiceAreaHighlight } from "./goa";

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

type PuneServiceAreaDefinition = ServiceAreaDefinition & {
  highlights: ServiceAreaHighlight[];
};

export const puneServiceAreas: PuneServiceAreaDefinition[] = [
  {
    name: "Koregaon Park",
    slug: "koregaon-park-escorts",
    headline: "Koregaon Park escorts for upscale lounge nights",
    description:
      "Osho gardens, cocktail patios and art cafés across Koregaon Park feel effortless with escorts who vibe with the neighborhood’s bohemian luxury.",
    highlights: [
      {
        title: "Osho & mall runs",
        description: "Osho gardens, German Bakery brunches and Phoenix Marketcity strolls mapped with valet swaps.",
      },
      {
        title: "Patio cocktails",
        description: "Effingut, Murphies and rooftop speakeasies pre-booked with bottle service and curated playlists.",
      },
    ],
    nearby: ["Osho Garden", "German Bakery", "Effingut", "Phoenix Marketcity", "Lane 7 Cafés"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Baner",
    slug: "baner-escorts",
    headline: "Baner escorts for skyline microbrew evenings",
    description:
      "Baner’s microbreweries, terrace lounges and upcoming tech parks become a curated trail with escorts who love city lights.",
    highlights: [
      {
        title: "Brewery crawl",
        description: "Independence Brewing, Murphies and Moonshine tables lined with tasting flights.",
      },
      {
        title: "Rooftop lounges",
        description: "Sky lounges, sushi bars and dessert cafés sequenced for laid-back glamour nights.",
      },
    ],
    nearby: ["Independence Brewing", "Murphies", "Vibe Bar", "Balewadi High Street", "Pancard Club"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Kharadi",
    slug: "kharadi-escorts",
    headline: "Kharadi escorts for EON tech zone celebrations",
    description:
      "Kharadi’s IT corridors, five-star hotels and riverfront lounges are handled with clockwork precision for post-deal celebrations.",
    highlights: [
      {
        title: "Tech zone liaison",
        description: "EON IT Park, World Trade Tower and corporate suites aligned with chauffeur rotations.",
      },
      {
        title: "Riverside dinners",
        description: "Mula-Mutha riverfront decks, boat brunches and spa retreats curated for decompressing nights.",
      },
    ],
    nearby: ["EON IT Park", "World Trade Tower", "The Westin", "Marriott Suites", "Riverfront Deck"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Magarpatta",
    slug: "magarpatta-escorts",
    headline: "Magarpatta escorts blending township ease",
    description:
      "Magarpatta’s integrated township, rooftop greens and Season’s Mall outings are staged with escorts who mix business and leisure flawlessly.",
    highlights: [
      {
        title: "Township comfort",
        description: "Pentagon towers, co-working pods and rooftop gardens synced for quick meetups.",
      },
      {
        title: "Mall evenings",
        description: "Season’s Mall movies, bowling alleys and food courts lined with chauffeur availability.",
      },
    ],
    nearby: ["Pentagon Towers", "Amanora Mall", "Season's Mall", "Township Rooftops", "Hadapsar"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Lavasa",
    slug: "lavasa-escorts",
    headline: "Lavasa escorts for hillside retreats",
    description:
      "Lakeside villas, yacht brunches and adventure trails in Lavasa pair with escorts crafted for slow, indulgent weekends.",
    highlights: [
      {
        title: "Lakeside sojourn",
        description: "Boating picnics, sunset decks and gourmet hampers arranged on arrival.",
      },
      {
        title: "Adventure add-ons",
        description: "Kayaking, trekking and spa circuits lined up for intimate adrenaline blends.",
      },
    ],
    nearby: ["Lavasa Promenade", "Dasvino Town & Country Club", "Waterfront Villas", "Adventure Park", "Temghar Dam"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Viman Nagar",
    slug: "viman-nagar-escorts",
    headline: "Viman Nagar escorts for airport-to-lounge ease",
    description:
      "Escorts around Viman Nagar glide from airport lounges to nightspots, ensuring transits turn into polished nights out.",
    highlights: [
      {
        title: "Transit mastery",
        description: "Airport lounges, express check-ins and chauffeur swaps ready for midnight landings.",
      },
      {
        title: "Lounge circuits",
        description: "Clubs at Hyatt, Novotel and rooftop lounges prepped with skyline views and signature menus.",
      },
    ],
    nearby: ["Pune Airport", "Hyatt Regency", "Novotel", "Phoenix Marketcity", "Weikfield IT Park"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Hadapsar",
    slug: "hadapsar-escorts",
    headline: "Hadapsar escorts for corporate township comfort",
    description:
      "Corporate campuses, race tracks and spa resorts around Hadapsar are handled by escorts who keep the tempo relaxed yet refined.",
    highlights: [
      {
        title: "Corporate sync",
        description: "SP Infocity and Magarpatta offices coordinated with spa and gourmet follow-ups.",
      },
      {
        title: "Race-course escapes",
        description: "Amanora Park Town, race tracks and countryside drives charted for a mix of thrill and calm.",
      },
    ],
    nearby: ["SP Infocity", "Amanora Park Town", "Race Track", "Seasons Mall", "Countryside Drives"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Pimpri-Chinchwad",
    slug: "pimpri-chinchwad-escorts",
    headline: "Pimpri-Chinchwad escorts for industrial chic evenings",
    description:
      "Manufacturing parks, premium lounges and weekend resorts in Pimpri-Chinchwad are elevated with escorts balancing business and pleasure.",
    highlights: [
      {
        title: "Industrial itineraries",
        description: "Auto parks, logistics hubs and expo centres coordinated with chauffeur-driven routes.",
      },
      {
        title: "Resort resets",
        description: "Luxury resorts, golf clubs and spa hideaways prepped for post-factory relaxation.",
      },
    ],
    nearby: ["Auto Cluster", "PCMC Expo", "DoubleTree Hilton", "Golf Clubs", "Aquarius Resort"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Bavdhan",
    slug: "bavdhan-escorts",
    headline: "Bavdhan escorts for hillside terrace gatherings",
    description:
      "Bavdhan’s hillside villas, art studios and boutique cafés welcome escorts ideal for private, scenic gatherings.",
    highlights: [
      {
        title: "Artful evenings",
        description: "Art studios, pottery workshops and hillside cafés curated for creative dates.",
      },
      {
        title: "Villa socials",
        description: "Boutique villas, rooftop grills and infinity pools tuned to small-group celebrations.",
      },
    ],
    nearby: ["Paud Road", "Art Studios", "Boutique Cafés", "Riverfront Trails", "Hilltop Villas"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Balewadi High Street",
    slug: "balewadi-high-street-escorts",
    headline: "Balewadi High Street escorts for glam sport nights",
    description:
      "From sports arenas to glam restaurants, Balewadi High Street escorts blend adrenaline, cuisine and nightlife in one sweep.",
    highlights: [
      {
        title: "Stadium sync",
        description: "Balewadi Sports Complex schedules, VIP boxes and after-match lounges orchestrated flawlessly.",
      },
      {
        title: "High-street glamour",
        description: "Cocktail bars, dessert labs and live music venues curated for energetic nights.",
      },
    ],
    nearby: ["Balewadi Sports Complex", "High Street", "Elephant & Co", "Street Storyss", "Restaurants Hub"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

export const puneServiceAreaMap = new Map<string, PuneServiceAreaDefinition>(
  puneServiceAreas.map((area) => [area.slug, area])
);

