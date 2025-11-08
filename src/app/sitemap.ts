import { MetadataRoute } from 'next';
import { cityEntries } from '@/lib/cities';
import { getServiceAreasForCity } from '@/lib/serviceAreas';
import { getHotelsForCity, getCityNameForUrl } from '@/lib/hotels';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://foreignescort.com';
  
  const currentDate = new Date();
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // City pages
  const cityPages: MetadataRoute.Sitemap = cityEntries.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  // Service area pages (nested under cities)
  const serviceAreaPages: MetadataRoute.Sitemap = [];
  cityEntries.forEach((city) => {
    const serviceAreas = getServiceAreasForCity(city.slug);
    serviceAreas.forEach((area) => {
      serviceAreaPages.push({
        url: `${baseUrl}/${city.slug}/${area.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      });
    });
  });

  // Hotel pages
  const hotelPages: MetadataRoute.Sitemap = [];
  cityEntries.forEach((city) => {
    const hotels = getHotelsForCity(city.slug);
    const cityName = getCityNameForUrl(city.slug);
    hotels.forEach((hotel) => {
      hotelPages.push({
        url: `${baseUrl}/hotels/${cityName}/${hotel.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      });
    });
  });

  // Chennai service areas (some are at root level)
  const chennaiRootServiceAreas = [
    'adyar-escorts',
    'anna-nagar-escorts',
    'arumbakkam-escorts',
    'ecr-escorts',
    'egmore-escorts',
    'guindy-escorts',
    'kilpauk-escorts',
    'marina-beach-escorts',
    'nungambakkam-escorts',
    'omr-escorts',
    'tidel-park-escorts',
    't-nagar-escorts',
    'velachery-escorts',
    'airport-zone-escorts',
  ];

  const chennaiRootPages: MetadataRoute.Sitemap = chennaiRootServiceAreas.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...cityPages,
    ...serviceAreaPages,
    ...hotelPages,
    ...chennaiRootPages,
  ];
}


