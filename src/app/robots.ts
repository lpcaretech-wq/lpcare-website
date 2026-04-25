// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Allow all bots (Googlebot, Bingbot, etc.)
      allow: '/',
      // Disallow any private API routes or admin panels if you add them later
      disallow: ['/private/', '/api/'], 
    },
    // Crucial: Pointing the bots directly to your newly upgraded dynamic sitemap
    sitemap: 'https://lpcare.tech/sitemap.xml',
  };
}