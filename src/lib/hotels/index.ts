import type { BangaloreHotelDefinition } from "./bangalore";
import { bangaloreHotels } from "./bangalore";
import type { ChennaiHotelDefinition } from "./chennai";
import { chennaiHotels } from "./chennai";
import type { DelhiNcrHotelDefinition } from "./delhiNcr";
import { delhiNcrHotels } from "./delhiNcr";
import type { GoaHotelDefinition } from "./goa";
import { goaHotels } from "./goa";
import type { HyderabadHotelDefinition } from "./hyderabad";
import { hyderabadHotels } from "./hyderabad";
import type { JaipurHotelDefinition } from "./jaipur";
import { jaipurHotels } from "./jaipur";
import type { KolkataHotelDefinition } from "./kolkata";
import { kolkataHotels } from "./kolkata";
import type { MumbaiHotelDefinition } from "./mumbai";
import { mumbaiHotels } from "./mumbai";
import type { PuneHotelDefinition } from "./pune";
import { puneHotels } from "./pune";

export type HotelDefinition = ChennaiHotelDefinition | JaipurHotelDefinition | BangaloreHotelDefinition | DelhiNcrHotelDefinition | GoaHotelDefinition | MumbaiHotelDefinition | HyderabadHotelDefinition | KolkataHotelDefinition | PuneHotelDefinition;

// Map city slugs to URL-friendly city names
const citySlugToName: Record<string, string> = {
  "chennai-russian-escorts": "chennai",
  "jaipur-russian-escorts": "jaipur",
  "bangalore-russian-escorts": "bangalore",
  "delhi-ncr-russian-escorts": "delhi-ncr",
  "goa-russian-escorts": "goa",
  "mumbai-russian-escorts": "mumbai",
  "hyderabad-russian-escorts": "hyderabad",
  "kolkata-russian-escorts": "kolkata",
  "pune-russian-escorts": "pune",
};

export function getCityNameForUrl(citySlug: string): string {
  return citySlugToName[citySlug] || citySlug;
}

export function getHotelsForCity(citySlug: string): HotelDefinition[] {
  if (citySlug === "chennai-russian-escorts") {
    return chennaiHotels;
  }
  if (citySlug === "jaipur-russian-escorts") {
    return jaipurHotels;
  }
  if (citySlug === "bangalore-russian-escorts") {
    return bangaloreHotels;
  }
  if (citySlug === "delhi-ncr-russian-escorts") {
    return delhiNcrHotels;
  }
  if (citySlug === "goa-russian-escorts") {
    return goaHotels;
  }
  if (citySlug === "mumbai-russian-escorts") {
    return mumbaiHotels;
  }
  if (citySlug === "hyderabad-russian-escorts") {
    return hyderabadHotels;
  }
  if (citySlug === "kolkata-russian-escorts") {
    return kolkataHotels;
  }
  if (citySlug === "pune-russian-escorts") {
    return puneHotels;
  }
  return [];
}

export function getHotelBySlug(citySlug: string, hotelSlug: string): HotelDefinition | undefined {
  const hotels = getHotelsForCity(citySlug);
  return hotels.find((hotel) => hotel.slug === hotelSlug);
}

export function getHotelByName(citySlug: string, hotelName: string): HotelDefinition | undefined {
  const hotels = getHotelsForCity(citySlug);
  return hotels.find((hotel) => hotel.name.toLowerCase() === hotelName.toLowerCase());
}

