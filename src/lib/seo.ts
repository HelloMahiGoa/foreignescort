import type { Metadata } from "next";
import type { CityDefinition } from "./cities";

// City-specific geographic coordinates
const cityCoordinates: Record<string, { lat: string; lng: string; region: string }> = {
  "goa-russian-escorts": { lat: "15.2993", lng: "74.1240", region: "IN-GA" },
  "jaipur-russian-escorts": { lat: "26.9124", lng: "75.7873", region: "IN-RJ" },
  "chennai-russian-escorts": { lat: "13.0827", lng: "80.2707", region: "IN-TN" },
  "bangalore-russian-escorts": { lat: "12.9716", lng: "77.5946", region: "IN-KA" },
  "delhi-ncr-russian-escorts": { lat: "28.6139", lng: "77.2090", region: "IN-DL" },
  "mumbai-russian-escorts": { lat: "19.0760", lng: "72.8777", region: "IN-MH" },
  "hyderabad-russian-escorts": { lat: "17.3850", lng: "78.4867", region: "IN-TG" },
  "pune-russian-escorts": { lat: "18.5204", lng: "73.8567", region: "IN-MH" },
  "kolkata-russian-escorts": { lat: "22.5726", lng: "88.3639", region: "IN-WB" },
};

// Generate keywords for city pages
export function generateCityKeywords(cityName: string): string[] {
  return [
    `${cityName} Russian escorts`,
    `Russian escorts ${cityName}`,
    `Russian call girls ${cityName}`,
    `Russian escorts in ${cityName}`,
    `${cityName} Russian escort service`,
    `book Russian escorts ${cityName}`,
    `Russian girls ${cityName}`,
    `${cityName} escort service`,
    `verified Russian escorts ${cityName}`,
    `Russian escorts near me ${cityName}`,
    `${cityName} Russian call girls`,
    `Russian escorts 24/7 ${cityName}`,
    `affordable Russian escorts ${cityName}`,
    `high profile Russian escorts ${cityName}`,
    `professional Russian escorts ${cityName}`,
  ];
}

// Generate comprehensive metadata for city pages
export function generateCityMetadata(city: CityDefinition): Metadata {
  const cityName = city.name;
  const citySlug = city.slug;
  const url = `https://foreignescort.in/${citySlug}`;
  const coordinates = cityCoordinates[citySlug] || { lat: "0", lng: "0", region: "IN" };
  
  const title = `${cityName} Russian Escorts | Book Russian Girls with 10% Discount | Foreign Escort`;
  const description = city.description || `Book verified Russian escorts in ${cityName} with 10% discount. Real Russian call girls available 24/7 for in-call and out-call services. Professional, verified profiles with no advance payment required.`;

  return {
    title,
    description,
    keywords: generateCityKeywords(cityName),
    authors: [{ name: "Foreign Escort" }],
    creator: "Foreign Escort",
    publisher: "Foreign Escort",
    formatDetection: {
      email: false,
      address: false,
      telephone: true,
    },
    metadataBase: new URL("https://foreignescort.in"),
    openGraph: {
      title,
      description,
      url,
      siteName: "Foreign Escort",
      images: [
        {
          url: "/images/desktop-hero.jpg",
          width: 1200,
          height: 630,
          alt: `${cityName} Russian Escorts - Book Russian Girls with 10% Discount`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/desktop-hero.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        "en": url,
      },
    },
    other: {
      "geo.region": coordinates.region,
      "geo.placename": cityName,
      "geo.position": `${coordinates.lat};${coordinates.lng}`,
      "ICBM": `${coordinates.lat}, ${coordinates.lng}`,
      "theme-color": "#000000",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "format-detection": "telephone=no",
      "mobile-web-app-capable": "yes",
      "msapplication-TileColor": "#000000",
      "msapplication-config": "/browserconfig.xml",
    },
    category: "Services",
  };
}

// Generate structured data for city pages
export function generateCityStructuredData(city: CityDefinition) {
  const cityName = city.name;
  const citySlug = city.slug;
  const url = `https://foreignescort.in/${citySlug}`;
  const coordinates = cityCoordinates[citySlug] || { lat: "0", lng: "0", region: "IN" };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Foreign Escort",
    url: "https://foreignescort.in",
    description: `Professional Russian escort services in ${cityName} and major Indian cities`,
    inLanguage: "en-IN",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Foreign Escort - ${cityName} Russian Escorts`,
    description: `Book verified Russian escorts in ${cityName} with 10% discount. Available 24/7 for in-call and out-call services.`,
    url,
    telephone: "+91-8121426651",
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: coordinates.region,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coordinates.lat,
      longitude: coordinates.lng,
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: {
      "@type": "City",
      name: cityName,
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Escort Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Foreign Escort",
    },
    areaServed: {
      "@type": "City",
      name: cityName,
    },
    description: `Professional Russian escort services in ${cityName} with verified profiles, 24/7 availability, and 10% discount on bookings.`,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      description: "10% discount on all bookings",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://foreignescort.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${cityName} Russian Escorts`,
        item: url,
      },
    ],
  };

  return {
    websiteSchema,
    localBusinessSchema,
    serviceSchema,
    breadcrumbSchema,
  };
}

