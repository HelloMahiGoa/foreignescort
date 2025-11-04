import { goaServiceAreas, goaServiceAreaMap } from "./goa";
import { chennaiServiceAreas, chennaiServiceAreaMap } from "./chennai";
import { bangaloreServiceAreas, bangaloreServiceAreaMap } from "./bangalore";
import { delhiNcrServiceAreas, delhiNcrServiceAreaMap } from "./delhiNcr";
import { mumbaiServiceAreas, mumbaiServiceAreaMap } from "./mumbai";
import { hyderabadServiceAreas, hyderabadServiceAreaMap } from "./hyderabad";
import { puneServiceAreas, puneServiceAreaMap } from "./pune";
import { kolkataServiceAreas, kolkataServiceAreaMap } from "./kolkata";
import { jaipurServiceAreas, jaipurServiceAreaMap } from "./jaipur";
import type { ServiceAreaDefinition } from "./goa";

const registry: Record<string, ServiceAreaDefinition[]> = {
  "goa-russian-escorts": goaServiceAreas,
  "chennai-russian-escorts": chennaiServiceAreas,
  "bangalore-russian-escorts": bangaloreServiceAreas,
  "delhi-ncr-russian-escorts": delhiNcrServiceAreas,
  "mumbai-russian-escorts": mumbaiServiceAreas,
  "hyderabad-russian-escorts": hyderabadServiceAreas,
  "pune-russian-escorts": puneServiceAreas,
  "kolkata-russian-escorts": kolkataServiceAreas,
  "jaipur-russian-escorts": jaipurServiceAreas,
};

export function getServiceAreasForCity(citySlug: string): ServiceAreaDefinition[] {
  return registry[citySlug] ?? [];
}

export function getServiceAreaBySlug(
  citySlug: string,
  areaSlug: string,
): ServiceAreaDefinition | undefined {
  if (citySlug === "goa-russian-escorts") {
    return goaServiceAreaMap.get(areaSlug);
  }

  if (citySlug === "chennai-russian-escorts") {
    return chennaiServiceAreaMap.get(areaSlug);
  }

  if (citySlug === "bangalore-russian-escorts") {
    return bangaloreServiceAreaMap.get(areaSlug);
  }

  if (citySlug === "delhi-ncr-russian-escorts") {
    return delhiNcrServiceAreaMap.get(areaSlug);
  }

  if (citySlug === "mumbai-russian-escorts") {
    return mumbaiServiceAreaMap.get(areaSlug);
  }

  if (citySlug === "hyderabad-russian-escorts") {
    return hyderabadServiceAreaMap.get(areaSlug);
  }

  if (citySlug === "pune-russian-escorts") {
    return puneServiceAreaMap.get(areaSlug);
  }

  if (citySlug === "kolkata-russian-escorts") {
    return kolkataServiceAreaMap.get(areaSlug);
  }

  if (citySlug === "jaipur-russian-escorts") {
    return jaipurServiceAreaMap.get(areaSlug);
  }

  return getServiceAreasForCity(citySlug).find((area) => area.slug === areaSlug);
}

export function getServiceAreaByName(
  citySlug: string,
  areaName: string,
): ServiceAreaDefinition | undefined {
  return getServiceAreasForCity(citySlug).find(
    (area) => area.name.toLowerCase() === areaName.toLowerCase(),
  );
}

export type { ServiceAreaDefinition, ServiceAreaHighlight } from "./goa";

