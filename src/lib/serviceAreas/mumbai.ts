import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

import type { ServiceAreaDefinition, ServiceAreaHighlight } from "./goa";

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

type MumbaiServiceAreaDefinition = ServiceAreaDefinition & {
  highlights: ServiceAreaHighlight[];
};

export const mumbaiServiceAreas: MumbaiServiceAreaDefinition[] = [
  {
    name: "Bandra",
    slug: "bandra-escorts",
    headline: "Bandra escorts for seaside celebrity nights",
    description:
      "From Pali Hill penthouses to Bandstand sunset drives, our Bandra escorts glide through Mumbai’s celebrity circuit with poise and pace.",
    highlights: [
      {
        title: "Pali Hill residencies",
        description: "Luxury condos, private screenings and wrap parties briefed with staff NDAs and valet swaps.",
      },
      {
        title: "Bandstand drives",
        description: "Sunset convertibles, sea-link rides and seaside coffee runs timed to the tide.",
      },
    ],
    nearby: ["Pali Hill", "Carter Road", "Bandra Bandstand", "Olive Bistro", "Mehboob Studios"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Juhu",
    slug: "juhu-escorts",
    headline: "Juhu escorts for beachfront indulgence",
    description:
      "Juhu’s five-star hotels, celebrity bungalows and beach brunches shine brighter with escorts trained for luxe, sand-kissed evenings.",
    highlights: [
      {
        title: "Luxury hotel liaison",
        description: "JW Marriott, Novotel and Sun-n-Sand concierges aligned for in-suite experiences.",
      },
      {
        title: "Champagne brunch",
        description: "Sunday brunches, private sand decks and spa afternoons orchestrated flawlessly.",
      },
    ],
    nearby: ["JW Marriott", "Novotel", "Juhu Beach", "Prithvi Theatre", "ISKCON"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Colaba",
    slug: "colaba-escorts",
    headline: "Colaba escorts for heritage harbour walks",
    description:
      "Gateway sunsets, art galleries and Taj dinners become a curated romance with escorts steeped in SoBo elegance.",
    highlights: [
      {
        title: "Heritage strolls",
        description: "Art deco walks, Kala Ghoda galleries and Colaba Causeway shopping with personal stylists.",
      },
      {
        title: "Taj evenings",
        description: "Sea Lounge, Harbour Bar and yacht docks booked with security-cleared escorts.",
      },
    ],
    nearby: ["Gateway of India", "Taj Mahal Palace", "Kala Ghoda", "Colaba Causeway", "Navy Pier"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Worli",
    slug: "worli-escorts",
    headline: "Worli escorts for sea-link skyline nights",
    description:
      "Sea-link drives, rooftop lounges and racing circuit evenings in Worli find escorts who mirror its luxury rhythm.",
    highlights: [
      {
        title: "Sea-link glamour",
        description: "Chauffeured joyrides, yacht dinners and bridge photo ops timed around city lights.",
      },
      {
        title: "High-rise lounges",
        description: "Four Seasons, St. Regis and AER lounge tables orchestrated for skyline cocktails.",
      },
    ],
    nearby: ["Bandra-Worli Sea Link", "AER Lounge", "Four Seasons", "St. Regis", "Mahalaxmi Racecourse"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Powai",
    slug: "powai-escorts",
    headline: "Powai escorts for lakeside tech retreats",
    description:
      "Powai’s skyline residences, start-up hubs and lakeside decks become effortless with escorts attuned to tech-town indulgence.",
    highlights: [
      {
        title: "Lakeside soirées",
        description: "Powai lake decks, sailing clubs and Hiranandani terraces set for twilight dinners.",
      },
      {
        title: "Startup hubs",
        description: "Co-working rooftops, investor mixers and craft coffee bars locked for innovation-driven nights.",
      },
    ],
    nearby: ["Powai Lake", "Hiranandani", "The Westin", "Social Powai", "Boat Club"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Andheri",
    slug: "andheri-escorts",
    headline: "Andheri escorts balancing studios and nightlife",
    description:
      "Workshops, production houses and clubbing lanes in Andheri are choreographed with escorts who navigate between sets and dance floors.",
    highlights: [
      {
        title: "Studio sync",
        description: "YRF, Balaji and film studios briefed for on-site meetups, wrap parties and post-shoot relaxation.",
      },
      {
        title: "Club strip",
        description: "Kitty Su, The Stables and Dragonfly reservations with valet and VIP access.",
      },
    ],
    nearby: ["YRF Studios", "Balaji", "Dragonfly", "Kitty Su", "Lokhandwala"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Malad",
    slug: "malad-escorts",
    headline: "Malad escorts for suburban skybars",
    description:
      "Infinity malls, rooftop lounges and film city proximity make Malad an energetic suburban hub for curated nights.",
    highlights: [
      {
        title: "Sky-high lounges",
        description: "Rooftop brews, live music and infinity lounges arranged with skyline seating.",
      },
      {
        title: "Film city gateway",
        description: "Goregaon Film City trips, royal picnic sets and nature retreat transitions handled seamlessly.",
      },
    ],
    nearby: ["Infinity Mall", "Inorbit", "Goregaon Film City", "Rooftop Lounges", "Mindspace"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Navi Mumbai",
    slug: "navi-mumbai-escorts",
    headline: "Navi Mumbai escorts for harbour city calm",
    description:
      "Palm Beach Road drives, private boat clubs and business parks in Navi Mumbai glow with escorts tuned for luxe-yet-laidback meetups.",
    highlights: [
      {
        title: "Harbour drives",
        description: "Palm Beach Road sunset drives, monsoon coastal tours and harbour picnics with chauffeur swaps.",
      },
      {
        title: "Business parks",
        description: "Mindspace, Seawoods and Mahape campuses aligned for quick exits into luxury lounges.",
      },
    ],
    nearby: ["Palm Beach Road", "Seawoods", "CIDCO Boat Club", "Mindspace", "DY Patil Arena"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Thane",
    slug: "thane-escorts",
    headline: "Thane escorts for skyline retreats",
    description:
      "Luxury high-rises, lakeside promenades and drive-to picnic spots in Thane are wrapped with escorts who elevate the satellite city experience.",
    highlights: [
      {
        title: "Lakeside retreats",
        description: "Upvan Lake, Yeoor Hills and Glady Alwares events filled with curated picnics and sunset rituals.",
      },
      {
        title: "Skyline residencies",
        description: "Skyline towers and township clubhouses briefed with concierge teams for private rendezvous.",
      },
    ],
    nearby: ["Upvan Lake", "Yeoor Hills", "Viviana Mall", "Hiranandani Meadows", "Clubhouse Lounges"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Lower Parel",
    slug: "lower-parel-escorts",
    headline: "Lower Parel escorts for mill-to-luxe evolution",
    description:
      "Trendy mills, high-fashion showrooms and iconic skybars in Lower Parel become thrilling playgrounds with escorts who know every velvet rope.",
    highlights: [
      {
        title: "High-street couture",
        description: "Palladium couture houses, designer showrooms and personal stylists secured for private previews.",
      },
      {
        title: "Skybar takeover",
        description: "Aer, By the Mekong and Asilo lounge takeovers matched with curated tasting menus.",
      },
    ],
    nearby: ["Palladium", "High Street Phoenix", "Asilo", "By the Mekong", "Blue Frog"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

export const mumbaiServiceAreaMap = new Map<string, MumbaiServiceAreaDefinition>(
  mumbaiServiceAreas.map((area) => [area.slug, area])
);

