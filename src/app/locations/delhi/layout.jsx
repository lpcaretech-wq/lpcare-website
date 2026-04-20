// src/app/locations/delhi/layout.jsx

export const metadata = {
  title: "Premium Laptop Hardware Repair in Delhi | LPCARE.TECH",
  description: "Top-rated independent physical laptop hardware repair lab serving South Delhi and East Delhi. Specializing in dead motherboard micro-soldering and screen replacements.",
  keywords: [
    "Laptop hardware repair in Delhi",
    "MacBook physical damage repair South Delhi",
    "Laptop screen replacement East Delhi",
    "Dead motherboard recovery Delhi NCR",
    "Laptop battery replacement Delhi",
    "Computer hardware lab South Delhi",
    "Physical laptop repair Delhi NCR",
    "Independent Apple hardware repair alternative Delhi"
  ],
  openGraph: {
    title: "Premium Laptop Hardware Repair Lab serving Delhi",
    description: "Expert physical hardware repairs and chip-level logic board recovery for Delhi NCR. We do not provide software technical support.",
    url: "https://lpcare.tech/locations/delhi",
    siteName: "LPCARE.TECH",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: 'https://lpcare.tech/locations/delhi',
  },
};

export default function DelhiLayout({ children }) {
  return <section className="delhi-location-wrapper w-full h-full">{children}</section>;
}