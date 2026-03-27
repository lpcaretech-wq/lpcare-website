// src/app/services/layout.jsx

export const metadata = {
  title: "Premium Hardware Services | Mac & PC Chip-Level Repair Noida",
  description: "Expert micro-soldering, dead motherboard recovery, and data-secure hardware diagnostics in Noida Sector 168. We restore your premium devices with OEM parts.",
  keywords: [
    "MacBook repair near me",
    "Dead motherboard repair Noida",
    "Laptop screen replacement UP",
    "Data recovery services NCR",
    "Chip-level hardware lab",
    "PC water damage repair",
    "LPCARE services"
  ],
  openGraph: {
    title: "LPCARE.TECH | Our Premium Repair Services",
    description: "From micro-soldering to data recovery, explore our high-end IT and hardware restoration services.",
    url: "https://lpcare.tech/services",
    siteName: "LPCARE.TECH",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: 'https://lpcare.tech/services',
  },
};

export default function ServicesLayout({ children }) {
  return <>{children}</>;
}