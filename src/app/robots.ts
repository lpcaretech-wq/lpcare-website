// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://lpcare.tech';

  return {
    rules: {
      userAgent: '*', // '*' ka matlab hai ki ye rule sabhi search engines (Google, Bing, etc.) ke liye hai
      allow: '/',     // '/' ka matlab hai ki bots poori website ko scan kar sakte hain
      disallow: [
        '/api/',      // Agar aap future mein koi backend API banate hain, toh usey search mein aane se rokna chahiye
        '/_next/',    // Next.js ke internal files ko hide karne ke liye
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Ye Google ko batayega ki aapka sitemap kahan rakha hai
  };
}