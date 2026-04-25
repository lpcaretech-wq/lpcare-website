// src/app/sitemap.ts
import { MetadataRoute } from 'next';

// 1. Dynamic Services Array (Match this with your [service]/page.jsx file)
// Agar aap future mein naye services add karein, toh bas yahan unka naam likh dein
const noidaServices = [
  'macbook-repair',
  'laptop-screen-replacement',
  'dead-motherboard-repair',
  'water-damage-repair',
  'laptop-battery-replacement'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lpcare.tech';

  // 2. Core High-Priority Pages
  const corePages = [
    { url: '', priority: 1.0 },
    { url: '/enterprise-support', priority: 0.9 },
    { url: '/services', priority: 0.9 },
    { url: '/about', priority: 0.8 },
    { url: '/contact', priority: 0.8 },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }));

  // 3. Location Hubs (Pillar Pages)
  const locationHubs = [
    '/locations/noida',
    '/locations/delhi',
    '/locations/greater-noida',
    '/locations/ghaziabad'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 4. NEW: Automatically generating dynamic URLs for Noida Services
  const dynamicNoidaServices = noidaServices.map((service) => ({
    url: `${baseUrl}/locations/noida/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const, // Telling Google to check these often
    priority: 0.85, // High priority for high-intent keywords
  }));

  // 5. Legal Pages (Low Priority)
  const legalPages = [
    '/privacy-policy',
    '/terms-and-conditions',
    '/refund-policy',
    '/disclaimer'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  // Combine and return all routes for the XML Sitemap
  return [...corePages, ...locationHubs, ...dynamicNoidaServices, ...legalPages];
}