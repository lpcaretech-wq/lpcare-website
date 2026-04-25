// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // 1. Image Optimization for Core Web Vitals
  images: {
    // Force image compression to WebP/AVIF format for faster loading
    formats: ['image/avif', 'image/webp'],
    
    // Remote domains ko allow karein if you plan to fetch images from external sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lpcare.tech',
      },
    ],
    // Dangerously allow unoptimized images for local SVG, but keep optimization ON for regular images
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // 2. React Strict Mode to catch potential bugs early
  reactStrictMode: true,

  // 3. Optional: X-Powered-By header hide karein security ke liye
  poweredByHeader: false,
};

export default nextConfig;