// src/app/locations/ghaziabad/layout.jsx

export const metadata = {
  title: "Premium Laptop Hardware Repair in Ghaziabad | LPCARE.TECH",
  description: "Top-rated independent physical laptop hardware repair lab serving Ghaziabad, Indirapuram, and Vaishali. Specializing in dead motherboard micro-soldering and screen replacements.",
  keywords: [
    "Laptop hardware repair in Ghaziabad",
    "MacBook physical damage repair Indirapuram",
    "Laptop screen replacement Vaishali",
    "Dead motherboard recovery Vasundhara",
    "Laptop battery replacement Ghaziabad",
    "Computer hardware lab Ghaziabad",
    "Physical laptop repair near me Indirapuram",
    "Independent hardware repair alternative Ghaziabad"
  ],
  openGraph: {
    title: "Premium Laptop Hardware Repair Lab serving Ghaziabad",
    description: "Expert physical hardware repairs and chip-level logic board recovery in Ghaziabad. We do not provide software technical support.",
    url: "https://lpcare.tech/locations/ghaziabad",
    siteName: "LPCARE.TECH",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: 'https://lpcare.tech/locations/ghaziabad',
  },
};

export default function GhaziabadLayout({ children }) {
  return <section className="ghaziabad-location-wrapper w-full h-full">{children}</section>;
}