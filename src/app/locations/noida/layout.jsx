// src/app/locations/noida/layout.jsx

export const metadata = {
  // SEO Title optimized for high-intent local searches and Ads synergy
  title: "Laptop Hardware Repair in Noida Sector 168 | LPCARE.TECH",
  
  // Meta description updated to include the exact USP and conversion triggers
  description: "No Fix, No Fee. Noida's premier physical laptop hardware repair lab in Sector 168. Expert motherboard micro-soldering, screen replacements, and data secure repairs.",
  
  keywords: [
    "Laptop hardware repair in Noida",
    "MacBook physical damage repair Noida",
    "Laptop screen replacement near me",
    "Dead motherboard recovery Sector 168",
    "Laptop battery replacement Noida",
    "Computer hardware lab Noida Sector 62",
    "Physical laptop repair Sector 18 Noida",
    "Independent Apple hardware repair alternative Noida",
    "No Fix No Fee laptop repair Noida",         // NEW: High intent conversion keyword
    "Chip level logic board repair Noida",       // NEW: Technical authority keyword
    "Advant Navis laptop repair nearby"          // NEW: Hyper-local landmark keyword
  ],
  
  openGraph: {
    title: "Premium Laptop Hardware Repair Lab in Noida | Sector 168",
    description: "Expert physical hardware repairs, screen replacement, and chip-level logic board recovery in Noida. We do not provide software technical support.",
    url: "https://lpcare.tech/locations/noida",
    siteName: "LPCARE.TECH",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://lpcare.tech/logo/lpcaretech.png",
        width: 1200,
        height: 630,
        alt: "LPCARE.TECH Noida Repair Lab - Sector 168",
      }
    ]
  },
  
  // NEW: Twitter cards for enhanced rich snippets when shared locally
  twitter: {
    card: 'summary_large_image',
    title: 'Laptop Hardware Repair in Noida | LPCARE.TECH',
    description: 'Dead motherboard? Shattered screen? Visit our Sector 168 lab in Noida for physical hardware recovery.',
    images: ['https://lpcare.tech/logo/lpcaretech.png'],
  },
  
  alternates: {
    canonical: 'https://lpcare.tech/locations/noida',
  },
};

export default function NoidaLayout({ children }) {
  return <section className="noida-location-wrapper w-full h-full">{children}</section>;
}