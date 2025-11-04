import type { StaticImageData } from "next/image";

import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

export type ServiceAreaHighlight = {
  title: string;
  description: string;
};

export type ServiceAreaDefinition = {
  name: string;
  slug: string;
  headline: string;
  description: string;
  highlights: ServiceAreaHighlight[];
  nearby: string[];
  heroDesktop?: string | StaticImageData;
  heroMobile?: string | StaticImageData;
};

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

export const goaServiceAreas: ServiceAreaDefinition[] = [
  {
    name: "Candolim",
    slug: "candolim-escorts",
    headline: "Candolim beachfront escorts ready when you land",
    description:
      "Candolim’s high-rise suites, clifftop villas and Taj Fort Aguada rooms are pre-briefed so your evening flows from check-in to champagne without delays.",
    highlights: [
      {
        title: "Resort liaison",
        description: "Front-office teams at Taj, Hyatt and boutique stays get security briefings, keycard permissions and arrival notes before you show up.",
      },
      {
        title: "Beach club entries",
        description: "SinQ, Cohiba and LPK Waterfront guest lists, cabanas and bottle service blocked with your exact ETA.",
      },
    ],
    nearby: ["Taj Fort Aguada", "SinQ Nightclub", "Cohiba", "LPK Waterfront", "Candolim Market"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Calangute",
    slug: "calangute-escorts",
    headline: "Calangute promenade escorts synced with the crowd",
    description:
      "We handle Calangute’s busiest stretch with crowd-ready escorts, police-aware drivers and quick apartment resets between bar hops.",
    highlights: [
      {
        title: "High-density timing",
        description: "Escort handoffs coordinated around peak traffic, chapel crossings and beach-road diversions for zero hold-ups.",
      },
      {
        title: "Promenade pulse",
        description: "Shacks, karaoke bars and midnight flea markets scouted so you slide into the vibe instantly.",
      },
    ],
    nearby: ["Calangute Beach Walk", "Pousada by the Beach", "Mojo Play Bar", "Saturday Market", "St. Alex Church"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Baga",
    slug: "baga-escorts",
    headline: "Baga nightlife escorts wired into the strip",
    description:
      "From Britto’s sunset dinners to 3 am Tito’s exits, our Baga circuit delivers nightlife pros who thrive on the neon strip.",
    highlights: [
      {
        title: "Club strip access",
        description: "Tito’s, Mambo’s and Cape Town Cafe guest access staged with walk-ins, VIP ropes and parking passes.",
      },
      {
        title: "Late-night rides",
        description: "Dedicated chauffeurs for multi-stop bar crawls, midnight food runs and coastal hideaways.",
      },
    ],
    nearby: ["Britto's", "Tito's Lane", "Mambo's", "Cape Town Cafe", "Baga Creek"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Panaji",
    slug: "panaji-escorts",
    headline: "Panaji heritage escorts with riverfront finesse",
    description:
      "Portuguese mansions, casinos and Miramar promenades are choreographed with bilingual escorts who match Panaji’s heritage pace.",
    highlights: [
      {
        title: "Old-quarter etiquette",
        description: "Fontainhas and Campal villa calls staged with heritage house staff, valet teams and discreet check-ins.",
      },
      {
        title: "Casino-ready",
        description: "Mandovi river casinos, yacht dinners and jetty transfers lined up with ID checks and onboard dressers.",
      },
    ],
    nearby: ["Fontainhas", "Mandovi Riverfront", "Deltin Royale Jetty", "Miramar Beach", "Campal Promenade"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Arpora",
    slug: "arpora-escorts",
    headline: "Arpora market nights with curated escorts",
    description:
      "Saturday night markets, live bands and hidden pool villas turn into a concierge-led playground with our Arpora specialists.",
    highlights: [
      {
        title: "Night market pace",
        description: "Entry, parking and backstage passes for Saturday Night Market, Echo and retro gigs locked in advance.",
      },
      {
        title: "Villa privacy",
        description: "Infinity pool villas and boutique stays prepped with housekeeping NDAs and private chefs.",
      },
    ],
    nearby: ["Saturday Night Market", "Club Cubana", "Echo", "DoubleTree Hilton", "Brittos Villas"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Vagator",
    slug: "vagator-escorts",
    headline: "Vagator cliffside escorts for sundown sets",
    description:
      "Hilltop parties, sunset cliffs and boutique stays are tuned to perfection with escorts who mirror Vagator’s avant-garde groove.",
    highlights: [
      {
        title: "Sunset rituals",
        description: "Chapora fort shots, Ozran cliff picnics and private beach setups arranged end-to-end.",
      },
      {
        title: "Hilltop guestlists",
        description: "Hilltop Goa, Antares and Titlie reservations paired with chauffeur rotation and afterparty routes.",
      },
    ],
    nearby: ["Chapora Fort", "Hilltop Goa", "Ozran Beach", "Antares", "Titlie"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Morjim",
    slug: "morjim-escorts",
    headline: "Morjim luxe escorts on the quiet tide",
    description:
      "Morjim’s long-stay Russians, turtle beach clubs and champagne brunches get companions who match its slow-burn luxury.",
    highlights: [
      {
        title: "Expat harmony",
        description: "Hosts fluent in Russian and English for beach house meetings, private chefs and yoga mornings.",
      },
      {
        title: "Brunch cruises",
        description: "Champagne catamaran brunches, Ashwem daybeds and spa afternoons sequenced effortlessly.",
      },
    ],
    nearby: ["Morjim Beach", "La Plage", "Club House", "Teso Waterfront", "Ashwem"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Anjuna",
    slug: "anjuna-escorts",
    headline: "Anjuna party escorts dialled to the underground",
    description:
      "From legendary trance floors to sunrise barbecues, our Anjuna crew thrives on the alternative scene without missing a beat.",
    highlights: [
      {
        title: "Legendary decks",
        description: "Curlies, Shiva Valley and UV bar guest access handled from sound-check to sunrise cool-downs.",
      },
      {
        title: "After-hours villas",
        description: "Soundproof villas, pool parties and DJ rooftops lined with decibel-clearance and bar inventory.",
      },
    ],
    nearby: ["Curlies", "Shiva Valley", "UV Bar", "Anjuna Flea Market", "Artjuna"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Siolim",
    slug: "siolim-escorts",
    headline: "Siolim riverfront escorts for slow evenings",
    description:
      "Siolim’s heritage casas, river cruises and farmers’ tables pair with escorts who favour hush over hype.",
    highlights: [
      {
        title: "River cruises",
        description: "Private yachts, pontoon dinners and mangrove picnics equipped with gourmet hampers.",
      },
      {
        title: "Heritage stays",
        description: "Siolim House, Coco Shambhala and hidden boutique stays synchronized with estate hosts.",
      },
    ],
    nearby: ["Siolim House", "River Cruises", "Gunpowder", "Coco Shambhala", "Assagao Boutiques"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Colva",
    slug: "colva-escorts",
    headline: "Colva beach escorts for serenely staged nights",
    description:
      "Colva's five-star resorts, golf greens and champagne sunsets come alive with escorts tuned for tranquil indulgence.",
    highlights: [
      {
        title: "Luxury resort sync",
        description: "Leela, Alila Diwa, ITC Grand and St. Regis liaisons to align butlers, buggy rides and villa privacy.",
      },
      {
        title: "Secluded experiences",
        description: "Cavelossim and Palolem itineraries featuring sunset picnics, spa circuits and yacht dinners.",
      },
    ],
    nearby: ["The Leela", "Alila Diwa", "St. Regis", "Colva Beach", "Cavelossim"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

export const goaServiceAreaMap = new Map<string, ServiceAreaDefinition>(
  goaServiceAreas.map((area) => [area.slug, area])
);

