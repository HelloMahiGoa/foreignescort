import type { Metadata } from "next";

import ServiceAreaPageTemplate from "@/components/ServiceAreaPageTemplate";
import { getCityBySlug } from "@/lib/cities";
import { getServiceAreaBySlug } from "@/lib/serviceAreas";

const citySlug = "pune-russian-escorts";
const areaSlug = "viman-nagar-escorts";

const city = getCityBySlug(citySlug);
const area = getServiceAreaBySlug(citySlug, areaSlug);

if (!city || !area) {
  throw new Error("Pune Viman Nagar service area configuration missing");
}

export const metadata: Metadata = {
  title: `${area.name} Escorts in ${city.name} | Foreign Escort`,
  description: area.description,
};

export default function VimanNagarEscortsPage() {
  // city and area are guaranteed to be defined due to the precondition check above
  return <ServiceAreaPageTemplate city={city!} area={area!} />;
}


