// src/app/doorstep-repair/layout.jsx

// 1. SEO & SXO: High-intent Meta Tags
export const metadata = {
  title: "Doorstep Laptop & MacBook Repair in Noida | LPCARE",
  description: "Dead laptop? Broken screen? Get professional chip-level hardware repair at your home in Noida, Greater Noida & Ghaziabad. No Fix, No Fee. Call now!",
  keywords: "laptop repair noida, macbook repair greater noida, doorstep laptop repair, chip level motherboard repair, dead laptop repair ghaziabad",
  alternates: {
    canonical: "https://www.lpcare.tech/doorstep-repair",
  },
  openGraph: {
    title: "Doorstep Laptop Repair in Noida | LPCARE",
    description: "Expert hardware repair at your doorstep in Delhi NCR.",
    url: "https://www.lpcare.tech/doorstep-repair",
    siteName: "LPCARE",
    locale: "en_IN",
    type: "website",
  },
};

export default function DoorstepLayout({ children }) {
  // 2. GEO, AEO & AIO: Advanced Structured Data for AI Models & Google SGE
  // AI bots look for these exact JSON structures to answer user queries.
  
  const aiOptimizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // Tells AI exactly WHO you are and WHERE you serve (Local Business Schema)
        "@type": "ComputerStore",
        "@id": "https://www.lpcare.tech/#business",
        "name": "LPCARE - Laptop Repair Experts",
        "url": "https://www.lpcare.tech",
        "telephone": "+918557065447",
        "priceRange": "₹₹",
        "image": "https://www.lpcare.tech/logo.png", // Aapka logo URL yahan aayega
        "description": "Premium doorstep laptop and MacBook hardware repair service in Noida, Greater Noida, and Ghaziabad.",
        "areaServed": [
          { "@type": "City", "name": "Noida" },
          { "@type": "City", "name": "Greater Noida" },
          { "@type": "City", "name": "Ghaziabad" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Hardware Repair Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Screen Replacement" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chip-level Motherboard Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Liquid Damage Cleaning" } }
          ]
        }
      },
      {
        // Tells Answer Engines (AEO) direct answers to common questions (FAQ Schema)
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you provide laptop repair at home in Noida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, LPCARE provides professional doorstep laptop and MacBook repair services across Noida, Greater Noida, and Ghaziabad with a 60-minute response time."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a visiting charge if the laptop is not fixed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, we strictly follow a 'No Fix, No Fee' policy. If our technicians cannot fix your hardware issue, you do not pay."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a dead motherboard repair cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Motherboard repair costs depend on the shorted component. We perform chip-level micro-soldering which is 70% cheaper than replacing the entire board at authorized centers. Contact us for a free estimate."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Injecting the AI & SEO Schema into the head invisibly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiOptimizationSchema) }}
      />
      {children}
    </>
  );
}