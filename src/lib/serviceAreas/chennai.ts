import type { StaticImageData } from "next/image";

import defaultHeroDesktopAsset from "@/../public/images/desktop-hero.jpg";
import defaultHeroMobileAsset from "@/../public/images/mobile-hero.jpg";

export type ChennaiServiceAreaHighlight = {
  title: string;
  description: string;
};

export type ChennaiServiceAreaDefinition = {
  name: string;
  slug: string;
  headline: string;
  description: string;
  highlights: ChennaiServiceAreaHighlight[];
  nearby: string[];
  heroDesktop?: string | StaticImageData;
  heroMobile?: string | StaticImageData;
};

const defaultHeroDesktop = defaultHeroDesktopAsset;
const defaultHeroMobile = defaultHeroMobileAsset;

export const chennaiServiceAreas: ChennaiServiceAreaDefinition[] = [
  {
    name: "OMR",
    slug: "omr-escorts",
    headline: "OMR Russian escorts for tech corridor excellence",
    description:
      "The Old Mahabalipuram Road tech corridor demands precision timing. Our OMR escorts sync with SIPCOT, Sholinganallur and Siruseri office schedules, ensuring seamless handoffs between boardrooms and hotel suites.",
    highlights: [
      {
        title: "Tech park handoffs",
        description: "SIPCOT, Sholinganallur and Siruseri offices mapped with chauffeur swaps, ensuring escorts arrive exactly when your meetings wrap.",
      },
      {
        title: "Corporate precision",
        description: "On-demand bookings aligned with investor dinners, tech summits and late-night code sprints across the IT corridor.",
      },
    ],
    nearby: ["SIPCOT", "Siruseri", "Sholinganallur", "DLF IT Park", "Tidel Park"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "ECR",
    slug: "ecr-escorts",
    headline: "ECR Russian escorts for coastal escapes",
    description:
      "The East Coast Road winds through beachside villas, resort spas and sunset vistas. Our ECR escorts curate coastal evenings that blend relaxed sophistication with Chennai's oceanfront charm.",
    highlights: [
      {
        title: "Coastal villas",
        description: "ECR beach villas, private pools and resort spas prepped with concierge briefings and discreet staff coordination.",
      },
      {
        title: "Sunset rendezvous",
        description: "VGP Marine, Mahabalipuram and ECR resorts coordinated for evening drives, beach dinners and private villa stays.",
      },
    ],
    nearby: ["East Coast Road", "VGP Marine", "Mahabalipuram", "Covelong Beach", "Thiruvanmiyur"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Nungambakkam",
    slug: "nungambakkam-escorts",
    headline: "Nungambakkam escorts for luxury evenings in the city core",
    description:
      "Nungambakkam’s fine-dining rooms, art galleries and boutique hotels become an indulgent circuit with escorts fluent in elite Chennai etiquette.",
    highlights: [
      {
        title: "High-street dining",
        description: "Park Hyatt, Taj Club House and independent wine bars staged with timed entries and reserved private booths.",
      },
      {
        title: "Gallery walks",
        description: "Apparao Galleries, Alliance Française and Sterling Road ateliers curated for cultured strolls and piano evenings.",
      },
    ],
    nearby: ["Park Hyatt", "Taj Club House", "Apparao Galleries", "Alliance Française", "Sterling Road"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Adyar",
    slug: "adyar-escorts",
    headline: "Adyar riverside escorts synced with green retreats",
    description:
      "From Theosophical Society retreats to Besant Nagar cafés, Adyar escorts offer mellow conversations, long drives and sea-breeze evenings.",
    highlights: [
      {
        title: "Mindful escapes",
        description: "Yoga residencies, cultural talks and riverbank strolls paired with escorts tuned for slow, sensory dates.",
      },
      {
        title: "Beach cafés",
        description: "Besant Nagar beach shacks, Elliot’s promenade and artisan bakeries woven into intimate night plans.",
      },
    ],
    nearby: ["Theosophical Society", "Besant Nagar", "Elliot's Beach", "Broken Bridge", "Kalakshetra"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Guindy",
    slug: "guindy-escorts",
    headline: "Guindy business escorts tuned to corporate clocks",
    description:
      "Round off Guindy’s corporate day with escorts ready for last-minute cocktails, hotel suites and golf-course brunches.",
    highlights: [
      {
        title: "Trade centre timing",
        description: "Chennai Trade Centre, IT parks and race course meetings sequenced with precise chauffeur coordination.",
      },
      {
        title: "Five-star liaison",
        description: "Hilton, Le Royal Méridien and ITC Grand Chola concierge teams briefed for discreet, repeat visits.",
      },
    ],
    nearby: ["Chennai Trade Centre", "Hilton", "ITC Grand Chola", "Race Course", "Guindy National Park"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Marina Beach",
    slug: "marina-beach-escorts",
    headline: "Marina Beach escorts for dramatic shoreline nights",
    description:
      "Stroll the world’s longest urban beach with escorts who choreograph horse rides, lighthouse climbs and midnight snack trails.",
    highlights: [
      {
        title: "Sunrise theatrics",
        description: "Photo shoots, sunrise rituals and memorial walks appointed with professional photographers and guides.",
      },
      {
        title: "Street-food crawl",
        description: "Sundal, molaga bajji and seafood pop-ups curated with sanitized tasting setups and chauffeur drop-offs.",
      },
    ],
    nearby: ["Marina Lighthouse", "MGR Memorial", "Santhome Basilica", "Marina Food Stalls", "Marina Drive"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Tidel Park",
    slug: "tidel-park-escorts",
    headline: "Tidel Park escorts for post-shift decompression",
    description:
      "Tech leads clocking out at Tidel Park can slip into cocktails, karaoke and spa sessions with escorts who know the quick-change drill.",
    highlights: [
      {
        title: "Shift-change cadence",
        description: "Escorts matched to late-night shifts, 2 am logouts and surprise weekend sprints.",
      },
      {
        title: "Team celebrations",
        description: "Private lounges, VR arenas and karaoke suites locked for team-bonding or one-on-one unwinds.",
      },
    ],
    nearby: ["Tidel Park", "Phoenix Marketcity", "VR Chennai", "Huxley Bar", "Oyster Bay"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Velachery",
    slug: "velachery-escorts",
    headline: "Velachery escorts for mall-to-loft adventures",
    description:
      "Velachery’s malls, rooftop lounges and hidden lofts become a whirlwind of fun with escorts ready for every checkpoint.",
    highlights: [
      {
        title: "Mall crawls",
        description: "Phoenix Marketcity and Palladium shopping sprees segmented with private lounge breaks.",
      },
      {
        title: "Rooftop lounges",
        description: "Elevated bars, live music and midnight drives sealed with curated playlists.",
      },
    ],
    nearby: ["Phoenix Marketcity", "Palladium", "The Flying Elephant", "Illusions Bar", "Velachery Lake"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Anna Nagar",
    slug: "anna-nagar-escorts",
    headline: "Anna Nagar escorts for uptown vibes",
    description:
      "From Coffee brewing studios to rooftop grills, Anna Nagar escorts mirror the uptown neighborhood’s chic energy.",
    highlights: [
      {
        title: "Brew trails",
        description: "Craft coffee labs, dessert ateliers and weekend farmer’s markets lined up in one sweet route.",
      },
      {
        title: "Luxury salons",
        description: "Premium grooming sessions and spa rituals for couples booked around your timetable.",
      },
    ],
    nearby: ["Amadora", "Ciclo Café", "VR Mall", "Tower Park", "A2B Rooftop"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "T Nagar",
    slug: "t-nagar-escorts",
    headline: "T Nagar escorts threading luxury into shopping runs",
    description:
      "Navigate crowded bazaar lanes, couture showrooms and rooftop lounges with escorts who make the retail rush feel indulgent.",
    highlights: [
      {
        title: "Couture concierge",
        description: "Kalyan silks, Nalli sarees and boutique jewellers visited with stylists and valet coordination.",
      },
      {
        title: "Rooftop resets",
        description: "Rooftop lounge reservations post-shopping with premium cocktails and curated menus.",
      },
    ],
    nearby: ["T Nagar Shopping", "Nalli", "Pothys", "The Crown", "Skyline Lounge"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Airport Zone",
    slug: "airport-zone-escorts",
    headline: "Airport zone escorts prepped for swift arrivals",
    description:
      "Step off the flight into a seamless reception with escorts who match arrivals, lounges and expressways with military precision.",
    highlights: [
      {
        title: "Flight sync",
        description: "Live flight tracking, lounge coordination and fast-track exits for midnight landings.",
      },
      {
        title: "Expressway escorts",
        description: "Guided routes to GST Road, Tambaram and Chromepet with premium sedans and SUV fleets.",
      },
    ],
    nearby: ["Chennai International Airport", "GST Road", "Radisson Blu", "Le Royal Méridien", "Tambaram"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Kilpauk",
    slug: "kilpauk-escorts",
    headline: "Kilpauk escorts for residential elegance",
    description:
      "Kilpauk's quiet residential lanes and heritage bungalows provide a refined backdrop for discreet companionship. Our Kilpauk escorts understand the neighborhood's understated sophistication.",
    highlights: [
      {
        title: "Residential privacy",
        description: "Private residences, heritage homes and gated communities coordinated with utmost discretion and security.",
      },
      {
        title: "Local amenities",
        description: "Nearby malls, cafes and cultural spots mapped for comfortable, low-key encounters in familiar settings.",
      },
    ],
    nearby: ["Kilpauk Park", "Forum Vijaya Mall", "Chetpet", "Aminjikarai", "Pachaiyappa's College"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Egmore",
    slug: "egmore-escorts",
    headline: "Egmore escorts bridging heritage and modern convenience",
    description:
      "Egmore's central location connects heritage museums, railway stations and modern business districts. Our Egmore escorts navigate the area's mix of colonial architecture and contemporary venues seamlessly.",
    highlights: [
      {
        title: "Central access",
        description: "Strategic location with easy access to Egmore Station, Government Museum and Connemara Hotel for business and leisure travelers.",
      },
      {
        title: "Cultural proximity",
        description: "Heritage sites, art galleries and traditional eateries paired with knowledgeable companions for cultural exploration.",
      },
    ],
    nearby: ["Egmore Railway Station", "Government Museum", "Connemara Hotel", "Pantheon Road", "Ethiraj College"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
  {
    name: "Arumbakkam",
    slug: "arumbakkam-escorts",
    headline: "Arumbakkam escorts for suburban comfort",
    description:
      "Arumbakkam offers suburban ease with good connectivity and residential comfort. Our Arumbakkam escorts provide reliable companionship in this accessible neighborhood.",
    highlights: [
      {
        title: "Suburban convenience",
        description: "Easy access, affordable stays and comfortable residential areas ideal for extended visits or casual encounters.",
      },
      {
        title: "Local connectivity",
        description: "Well-connected to Anna Nagar, Koyambedu and other key areas with convenient transportation options.",
      },
    ],
    nearby: ["Arumbakkam Bus Stand", "Koyambedu", "Anna Nagar", "CMBT", "Villivakkam"],
    heroDesktop: defaultHeroDesktop,
    heroMobile: defaultHeroMobile,
  },
];

export const chennaiServiceAreaMap = new Map<string, ChennaiServiceAreaDefinition>(
  chennaiServiceAreas.map((area) => [area.slug, area])
);

