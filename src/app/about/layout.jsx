// src/app/about/layout.jsx

export const metadata = {
  title: "About LPCARE.TECH | Independent Hardware Repair Lab in Noida",
  description: "Learn about LPCARE.TECH's mission. We are Delhi NCR's trusted independent experts in chip-level micro-soldering, focusing on OEM quality and absolute data privacy.",
  keywords: [
    "About LPCARE",
    "Independent Apple repair alternative",
    "Hardware diagnostic lab Noida",
    "Micro-soldering experts Delhi NCR",
    "Trustworthy laptop repair UP"
  ],
  openGraph: {
    title: "About LPCARE.TECH | Who We Are",
    description: "We don't just replace; we restore. Discover why we are Delhi NCR's premium choice for hardware repairs.",
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
  return <>{children}</>;
}