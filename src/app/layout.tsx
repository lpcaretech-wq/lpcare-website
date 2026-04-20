// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

// Premium Font Configuration
const inter = Inter({ subsets: ["latin"] });

// Global SEO and Google Ads Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://lpcare.tech'),
  title: {
    default: "LPCARE.TECH | Premium Hardware Repair & Micro-Soldering in Delhi NCR",
    template: "%s | LPCARE.TECH"
  },
  description: "Delhi NCR's most trusted independent hardware diagnostic and micro-soldering lab. We restore dead motherboards and shattered displays with strict data privacy in Noida.",
  
  verification: {
    google: 'e8unYwT9yirxTZHtKxDho_qtIioMu5mXXVgjLq3CN1w',
  },

  keywords: [
    "Laptop Repair Noida",
    "MacBook Motherboard Repair Delhi",
    "Chip-level micro-soldering",
    "Hardware repair Delhi NCR",
    "Data secure laptop repair",
    "LPCARE TECH",
    "Apple repair alternative Noida",
    "Dead laptop recovery Noida Sector 168",
    "Premium PC repair near me",
    "Computer repair sec 168 Noida"
  ],
  authors: [{ name: "LPCARE.TECH" }],
  creator: "LPCARE.TECH",
  
  icons: {
    icon: '/logo/lpcaretechicon.png',
    shortcut: '/logo/lpcaretechicon.png',
    apple: '/logo/lpcaretechicon.png',
  },
  openGraph: {
    title: "LPCARE.TECH | Premium Hardware Repair Lab",
    description: "Enterprise-grade chip-level repairs for your premium devices in Noida and Delhi NCR. Strict data privacy ensured.",
    url: "https://lpcare.tech",
    siteName: "LPCARE.TECH",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

// JSON-LD Schema for Local Business SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ComputerStore",
  "name": "LPCARE.TECH",
  "image": "https://lpcare.tech/logo/lpcaretech.png",
  "@id": "https://lpcare.tech",
  "url": "https://lpcare.tech",
  "telephone": "+918557065447",
  "email": "Lpcaretech@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Noida sec-168 chhapraoli, Near SK Homes",
    "addressLocality": "Noida",
    "addressRegion": "UP",
    "postalCode": "201305",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.5041,
    "longitude": 77.4026
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "10:00",
    "closes": "20:00"
  },
  "priceRange": "INR",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "142"
  },
  "sameAs": ["https://lpcare.tech"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} bg-background text-text-main antialiased flex flex-col min-h-screen`}>
        
        {/* Google Ads Tracking Tag Setup */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-18044724364`}
        />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18044724364', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
        <WhatsAppButton />
      </body>
    </html>
  );
}