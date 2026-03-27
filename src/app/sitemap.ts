// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lpcare.tech'; // Aapki website ka main URL

  // Yahan humne aapki website ke saare pages define kar diye hain
  return [
    {
      url: `${baseUrl}`, // Home Page
      lastModified: new Date(),
      changeFrequency: 'weekly', // Google ko batayega ki page weekly update hota hai
      priority: 1, // Home page ki priority sabse high (1.0) hoti hai
    },
    {
      url: `${baseUrl}/services`, // Services Page
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`, // About Us
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`, // Contact Page
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`, // Legal Pages
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5, // Legal pages ki priority thodi kam rakhte hain
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}