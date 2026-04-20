// src/app/about/layout.jsx

export const metadata = {
  title: "About LPCARE.TECH | Independent Hardware Repair Lab in Noida",
  description: "Learn about LPCARE.TECH's mission. We are Delhi NCR's trusted independent experts in chip-level micro-soldering, focusing on physical hardware repairs and data privacy.",
  keywords: [
    "About LPCARE",
    "Independent Apple repair alternative",
    "Hardware diagnostic lab Noida",
    "Micro-soldering experts Delhi NCR",
    "Physical laptop repair company",
    "Noida Sector 168 computer shop"
  ],
  openGraph: {
    title: "About LPCARE.TECH | Independent Hardware Repair Lab",
    description: "We don't just replace; we physically restore. Discover why we are Delhi NCR's premium choice for hardware repairs.",
    url: "https://lpcare.tech/about",
    siteName: "LPCARE.TECH",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: 'https://lpcare.tech/about',
  },
};

export default function AboutLayout({ children }) {
  return <section className="about-layout-wrapper w-full h-full">{children}</section>;
}