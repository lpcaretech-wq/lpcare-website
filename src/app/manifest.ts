// src/app/manifest.ts
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LPCARE.TECH | Premium Hardware Repair',
    short_name: 'LPCARE',
    description: 'Delhi NCR\'s premium independent hardware diagnostic and micro-soldering lab. We restore dead motherboards and shattered displays.',
    start_url: '/',
    display: 'standalone', // Ye browser ka URL bar hata dega, taaki ye real App jaisa lage
    background_color: '#F9F8F6', // Aapka Pearl Beige theme color
    theme_color: '#0A0A0A',      // Aapka Obsidian Black theme color
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo/lpcaretech.png', // Aapki public directory ka logo
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/logo/lpcaretech.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
    ],
  };
}