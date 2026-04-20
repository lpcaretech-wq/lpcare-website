// src/app/enterprise-support/layout.jsx

export const metadata = {
  title: "Corporate IT Asset Diagnostics Noida | LPCARE B2B",
  description: "Exclusive B2B hardware maintenance, micro-soldering, and IT fleet diagnostics for corporate clients in Noida and Delhi NCR. Reduce IT procurement costs.",
  keywords: [
    "Corporate IT hardware repair Noida",
    "B2B laptop repair Delhi NCR",
    "Enterprise IT maintenance Noida Sector 168",
    "Micro-soldering lab for businesses Noida",
    "Corporate fleet diagnostics Delhi NCR",
    "Bulk laptop repair Noida"
  ],
  robots: {
    index: true, 
    follow: true, 
  },
};

export default function EnterpriseLayout({ children }) {
  return <section className="enterprise-layout-wrapper w-full h-full">{children}</section>;
}