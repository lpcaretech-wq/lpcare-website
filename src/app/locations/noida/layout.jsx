// src/app/locations/noida/layout.jsx

export const metadata = {
  title: "Premium Laptop Hardware Repair in Noida | LPCARE.TECH",
  description: "Top-rated independent physical laptop hardware repair lab in Noida Sector 168. Specializing in motherboard micro-soldering, physical screen replacements, and battery installations.",
  keywords: [
    "Laptop hardware repair in Noida",
    "MacBook physical damage repair Noida",
    "Laptop screen replacement near me",
    "Dead motherboard recovery Sector 168",
    "Laptop battery replacement Noida",
    "Computer hardware lab Noida Sector 62",
    "Physical laptop repair Sector 18 Noida",
    "Independent Apple hardware repair alternative Noida"
  ],
  openGraph: {
    title: "Premium Laptop Hardware Repair Lab in Noida",
    description: "Expert physical hardware repairs and chip-level logic board recovery in Noida. We do not provide software technical support.",
    url: "https://lpcare.tech/locations/noida",
    siteName: "LPCARE.TECH",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: 'https://lpcare.tech/locations/noida',
  },
};

export default function NoidaLayout({ children }) {
  return <section className="noida-location-wrapper w-full h-full">{children}</section>;
}