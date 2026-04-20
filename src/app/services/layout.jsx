// src/app/services/layout.jsx

export const metadata = {
  title: "Premium Hardware Services | Mac & PC Chip-Level Repair Noida",
  description: "Expert micro-soldering, dead motherboard recovery, and data-secure hardware diagnostics in Noida Sector 168. We restore your premium devices with OEM parts.",
  keywords: [
    "MacBook repair near me",
    "Dead motherboard repair Noida",
    "Laptop screen replacement Noida",
    "Data recovery services Delhi NCR",
    "Chip-level hardware lab Noida",
    "PC water damage repair Sector 168",
    "Laptop charging port repair Noida",
    "LPCARE services"
  ],
  openGraph: {
    title: "LPCARE.TECH | Our Premium Repair Services in Noida",
    description: "From micro-soldering to physical display replacement, explore our high-end IT and hardware restoration services in Delhi NCR.",
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
  return <section className="services-layout-wrapper w-full h-full">{children}</section>;
}