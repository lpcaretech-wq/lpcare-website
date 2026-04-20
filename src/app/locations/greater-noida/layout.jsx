// src/app/locations/greater-noida/layout.jsx

export const metadata = {
  title: "Premium Laptop Hardware Repair in Greater Noida | LPCARE.TECH",
  description: "Top-rated independent physical laptop hardware repair lab serving Greater Noida. Specializing in dead motherboard micro-soldering, physical screen replacements, and battery fixes.",
  keywords: [
    "Laptop hardware repair in Greater Noida",
    "MacBook physical damage repair Greater Noida",
    "Laptop screen replacement Knowledge Park",
    "Dead motherboard recovery Pari Chowk",
    "Laptop battery replacement Greater Noida",
    "Computer hardware lab Greater Noida",
    "Physical laptop repair near me Greater Noida",
    "Independent hardware repair alternative Greater Noida"
  ],
  openGraph: {
    title: "Premium Laptop Hardware Repair Lab serving Greater Noida",
    description: "Expert physical hardware repairs and chip-level logic board recovery in Greater Noida. We do not provide software technical support.",
    url: "https://lpcare.tech/locations/greater-noida",
    siteName: "LPCARE.TECH",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: 'https://lpcare.tech/locations/greater-noida',
  },
};

export default function GreaterNoidaLayout({ children }) {
  return <section className="greater-noida-location-wrapper w-full h-full">{children}</section>;
}