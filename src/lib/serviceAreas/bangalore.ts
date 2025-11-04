import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

import type { ServiceAreaDefinition, ServiceAreaHighlight } from "./goa";

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

type BangaloreServiceAreaDefinition = ServiceAreaDefinition & {
  highlights: ServiceAreaHighlight[];
};

export const bangaloreServiceAreas: BangaloreServiceAreaDefinition[] = [
  {
    name: "Koramangala",
    slug: "koramangala-escorts",
    headline: "Koramangala escorts wired into startup nightlife",
    description:
      "Founders, investors and creators wind down in Koramangala with escorts ready for taprooms, speakeasies and loft gigs three blocks from the co-working strip.",
    highlights: [
      {
        title: "Taproom trail",
        description: "Byg Brewski, Foozy and The Reservoire tables locked with VIP draft menus and live music cues.",
      },
      {
        title: "Loft parties",
        description: "Pop-up lofts and terrace lounges prepped with curated playlists, mixologists and security briefings.",
      },
    ],
    nearby: ["Byg Brewski", "The Reservoire", "2nd Block", "Sony World Signal", "Co-working Row"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Indiranagar",
    slug: "indiranagar-escorts",
    headline: "Indiranagar escorts for buzzworthy evenings",
    description:
      "Independent bars, theatre nights and 100 Feet Road patios sync seamlessly with escorts who speak Bangalore’s high-energy dialect.",
    highlights: [
      {
        title: "100 Feet Road crawl",
        description: "Toit, Bob’s Bar and Hangover reservations sequenced with valet swaps and smoke breaks.",
      },
      {
        title: "Culture nights",
        description: "Indiranagar Club, theatre screenings and wine tastings pre-booked for refined conversations.",
      },
    ],
    nearby: ["Toit", "Bob's Bar", "Hangover", "Indiranagar Club", "100 Feet Road"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "MG Road",
    slug: "mg-road-escorts",
    headline: "MG Road escorts blending heritage with skyline",
    description:
      "From heritage pubs to sky-high lounges, MG Road escorts orchestrate nostalgic evenings crowned by glittering city views.",
    highlights: [
      {
        title: "Colonial circuits",
        description: "United Coffee House, Hard Rock Cafe and Church Street Jazz tours for a heritage-infused night.",
      },
      {
        title: "Skyline lounges",
        description: "Skyye, Ebony and JW terraces prepped with bottle service and curated menus.",
      },
    ],
    nearby: ["Cubbon Park", "Skyye", "Church Street", "Hard Rock Cafe", "One MG"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Whitefield",
    slug: "whitefield-escorts",
    headline: "Whitefield escorts tuned to corporate cadence",
    description:
      "IT parks, golf greens and five-star suites in Whitefield get escorts who understand boardroom schedules and post-deal celebrations.",
    highlights: [
      {
        title: "Business brunches",
        description: "The Den, Marriott and Sheraton brunch circuits with live grills and private cabanas.",
      },
      {
        title: "Golf & spa",
        description: "Prestige golf access, spa reservations and chauffeured commutes between towers.",
      },
    ],
    nearby: ["ITPL", "The Den", "Marriott", "Phoenix Marketcity", "Prestige Golf"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Airport hotels",
    slug: "airport-hotels-escorts",
    headline: "Airport hotel escorts aligned with arrival clocks",
    description:
      "Late-night arrivals and transit stays are wrapped with escorts who match airport hotel security protocols and expressway timings.",
    highlights: [
      {
        title: "Timeline precision",
        description: "Flight tracking, lounge pickups and expressway escorts ready for red-eye schedules.",
      },
      {
        title: "Hotel concierge sync",
        description: "Taj, JW Marriott and Hilton staff briefed with badge clearances and room service cues.",
      },
    ],
    nearby: ["BIAL", "Taj Bangalore", "JW Marriott", "Airport Expressway", "Nandi Hills"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "HSR Layout",
    slug: "hsr-layout-escorts",
    headline: "HSR Layout escorts for laid-back creative nights",
    description:
      "Boutique brewer nights, board game cafés and home-chef suppers in HSR come alive with escorts who vibe with the creative scene.",
    highlights: [
      {
        title: "Maker circles",
        description: "Art cafés, board game dens and popup workshops scheduled for alternative dates.",
      },
      {
        title: "Rooftop cookouts",
        description: "Home-chef terraces and private supper clubs booked with curated pairings.",
      },
    ],
    nearby: ["Sector 2", "Cafe Down The Alley", "House of Commons", "Agara Lake", "Startups Row"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Sarjapur Road",
    slug: "sarjapur-road-escorts",
    headline: "Sarjapur Road escorts for emerging hubs",
    description:
      "New townships, open-air bars and weekend retreats on Sarjapur Road merge with escorts ready for everything from family events to midnight drives.",
    highlights: [
      {
        title: "Township lounges",
        description: "Prestige, RGA and Wipro campuses mapped with clubhouses and private dining rooms.",
      },
      {
        title: "Weekend escapes",
        description: "Farm stays, micro breweries and drive-in cinemas curated for couples or group celebrations.",
      },
    ],
    nearby: ["RGA Tech Park", "Prestige Smart City", "Microbreweries", "Drive-in Cinema", "Dommasandra"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Hebbal",
    slug: "hebbal-escorts",
    headline: "Hebbal escorts balancing lakeside calm and skyline",
    description:
      "Lakeside brunches, rooftop lounges and Manyata tech park agendas converge with escorts who keep Hebbal nights smooth.",
    highlights: [
      {
        title: "Lake brunch",
        description: "Lakeside brunches, yacht dinners and floating decks crafted for serene dates.",
      },
      {
        title: "Tech park sync",
        description: "Manyata tech park pickups, traffic-adjusted commutes and after-work cocktails.",
      },
    ],
    nearby: ["Hebbal Lake", "Manyata Tech Park", "Byg Brewski North", "Elements Mall", "Rooftop Lounges"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Electronic City",
    slug: "electronic-city-escorts",
    headline: "Electronic City escorts matching tech pace",
    description:
      "Phase I & II campuses, sky lounges and Hosur escapes are handled by escorts who align with techie schedules and nightlife bursts.",
    highlights: [
      {
        title: "Campus coordination",
        description: "Infosys, Wipro and Tech Mahindra campuses mapped with entry-valid escorts and shuttle swaps.",
      },
      {
        title: "Hosur detours",
        description: "Weekend Hosur farmhouses, microbreweries and race tracks planned with precise logistics.",
      },
    ],
    nearby: ["Electronics City Phase I", "Infosys Pyramid", "Microbreweries", "Hosur Farmhouses", "Sky Lounges"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "BTM Layout",
    slug: "btm-layout-escorts",
    headline: "BTM Layout escorts for student-town energy",
    description:
      "Coaching hubs, gaming cafes and micro-budget food streets in BTM get escorts who vibe with the youthful energy while keeping things composed.",
    highlights: [
      {
        title: "Gamer circuits",
        description: "LAN centers, VR arenas and all-night board game cafes mapped for gaming marathons.",
      },
      {
        title: "Street food crawl",
        description: "Momos, shawarmas and dessert joints curated with sanitized tasting breaks and chauffeur pickups.",
      },
    ],
    nearby: ["BTM 2nd Stage", "Food Street", "VR Arcades", "Gamer's Den", "Udupi Gardens"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

export const bangaloreServiceAreaMap = new Map<string, BangaloreServiceAreaDefinition>(
  bangaloreServiceAreas.map((area) => [area.slug, area])
);

