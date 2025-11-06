import type { Metadata } from "next";
import { notFound } from "next/navigation";

import HotelPageTemplate from "@/components/HotelPageTemplate";
import { getCityBySlug } from "@/lib/cities";
import { getHotelBySlug } from "@/lib/hotels";

// Map URL city names to city slugs
const cityNameToSlug: Record<string, string> = {
  chennai: "chennai-russian-escorts",
  jaipur: "jaipur-russian-escorts",
  bangalore: "bangalore-russian-escorts",
  "delhi-ncr": "delhi-ncr-russian-escorts",
  goa: "goa-russian-escorts",
  mumbai: "mumbai-russian-escorts",
  hyderabad: "hyderabad-russian-escorts",
  kolkata: "kolkata-russian-escorts",
  pune: "pune-russian-escorts",
};

type Props = {
  params: Promise<{
    city: string;
    hotel: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, hotel } = await params;
  const citySlug = cityNameToSlug[city];
  
  if (!citySlug) {
    return {
      title: "Hotel Not Found | Hello Mahi",
    };
  }

  const hotelData = getHotelBySlug(citySlug, hotel);
  
  if (!hotelData) {
    return {
      title: "Hotel Not Found | Hello Mahi",
    };
  }

  const cityData = getCityBySlug(citySlug);

  return {
    title: `${hotelData.name} Escorts in ${cityData?.name || city} | Hello Mahi`,
    description: hotelData.description,
  };
}

export default async function HotelPage({ params }: Props) {
  const { city, hotel } = await params;
  const citySlug = cityNameToSlug[city];

  if (!citySlug) {
    notFound();
  }

  const cityData = getCityBySlug(citySlug);
  const hotelData = getHotelBySlug(citySlug, hotel);

  if (!cityData || !hotelData) {
    notFound();
  }

  return <HotelPageTemplate city={cityData} hotel={hotelData} />;
}

