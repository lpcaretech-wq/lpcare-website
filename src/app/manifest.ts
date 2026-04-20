// src/app/manifest.ts
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LPCARE.TECH | Hardware Repair Lab',
    short_name: 'LPCARE',
    description: 'Delhi NCR\'s premium independent hardware diagnostic and micro-soldering laboratory.',
    start_url: '/',
    display: 'standalone', // Makes the website look like a native app without browser UI
    background_color: '#0A0A0B', // Matches your obsidian black background
    theme_color: '#C5A059', // Matches your secondary gold/accent color
    icons: [
      {
        src: '/logo/lpcaretechicon.png', // Assuming this is your square app icon
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/logo/lpcaretechicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}