// src/app/locations/noida/[service]/page.jsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 1. MASTER SERVICE DATABASE (Add as many services here as you want)
const servicesData = {
  'macbook-repair': {
    name: 'MacBook Motherboard & Hardware Repair',
    shortName: 'MacBook Repair',
    description: 'Expert chip-level micro-soldering and physical hardware recovery for dead Apple MacBooks in Noida Sector 168. We fix liquid damage, shorted logic boards, and shattered retina displays.',
    keywords: 'MacBook repair Noida, Apple laptop repair Sector 168, MacBook logic board repair, Mac screen replacement near me',
    priceRange: '₹2,500 - ₹15,000',
    faqs: [
      { q: 'Can you fix a dead MacBook Pro motherboard in Noida?', a: 'Yes, our Sector 168 lab specializes in chip-level logic board recovery for MacBooks. We repair water damage and shorted components without replacing the entire expensive board.' },
      { q: 'Do you use original Apple displays for replacement?', a: 'We use high-quality OEM compatible retina panels for all physical screen replacements, ensuring exact color accuracy and resolution.' }
    ]
  },
  'laptop-screen-replacement': {
    name: 'Laptop Screen Replacement',
    shortName: 'Screen Replacement',
    description: 'Fast and reliable physical laptop screen replacement in Noida. We replace shattered displays, bleeding LCDs, and broken hinges for Dell, HP, Lenovo, and Asus.',
    keywords: 'Laptop screen replacement Noida, Broken laptop display repair, HP laptop screen cost Noida, Dell screen replacement Sector 62',
    priceRange: '₹2,000 - ₹8,000',
    faqs: [
      { q: 'How long does a laptop screen replacement take?', a: 'Most screen replacements are completed within 2 to 4 hours at our Noida facility, provided the specific OEM panel is in stock.' },
      { q: 'Will my data be safe during screen repair?', a: 'Absolutely. Screen replacement is a strict physical hardware procedure. We do not access, wipe, or need your passwords for this repair.' }
    ]
  },
  'dead-motherboard-repair': {
    name: 'Dead Motherboard Micro-Soldering',
    shortName: 'Motherboard Repair',
    description: 'Advanced chip-level motherboard repair in Noida. We recover dead laptops, fix liquid spills, and replace burned ICs using precision micro-soldering.',
    keywords: 'Laptop motherboard repair Noida, Chip level laptop repair near me, Dead laptop recovery Noida, Micro-soldering lab Sector 168',
    priceRange: '₹1,500 - ₹6,000',
    faqs: [
      { q: 'Is it better to repair or replace a laptop motherboard?', a: 'Repairing via micro-soldering saves you 70% of the cost of a new motherboard. We replace only the faulty capacitors or ICs, not the whole board.' },
      { q: 'What is your success rate for dead laptops?', a: 'We maintain a 98% success rate on hardware-level motherboard recoveries at our specialized Noida lab.' }
    ]
  }
};

// 2. DYNAMIC SEO METADATA GENERATOR (Crucial for Google Ranking)
export async function generateMetadata({ params }) {
  // Await params based on Next.js 15+ best practices
  const resolvedParams = await params;
  const serviceSlug = resolvedParams.service;
  const service = servicesData[serviceSlug];

  if (!service) {
    return { title: 'Service Not Found | LPCARE.TECH' };
  }

  return {
    title: `${service.name} in Noida Sector 168 | LPCARE.TECH`,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} Lab in Noida`,
      description: service.description,
      url: `https://lpcare.tech/locations/noida/${serviceSlug}`,
      images: ['https://lpcare.tech/logo/lpcaretech.png'],
    },
    alternates: {
      canonical: `https://lpcare.tech/locations/noida/${serviceSlug}`,
    }
  };
}

// 3. MAIN PAGE COMPONENT
export default async function NoidaServicePage({ params }) {
  const resolvedParams = await params;
  const serviceSlug = resolvedParams.service;
  const service = servicesData[serviceSlug];

  // Agar URL me koi aisi service daali jo database me nahi hai, toh 404 page dikhayega
  if (!service) {
    notFound();
  }

  // Generate Dynamic Schema for Google Rich Snippets & AI Overviews
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "provider": {
      "@type": "ComputerStore",
      "name": "LPCARE.TECH Noida Hardware Repair Lab",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Noida sec-168 chhapraoli, Near SK Homes",
        "addressLocality": "Noida",
        "addressRegion": "UP",
        "postalCode": "201305",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Noida" },
      { "@type": "Place", "name": "Sector 168 Noida" },
      { "@type": "Place", "name": "Sector 62 Noida" }
    ],
    "description": service.description,
    "offers": {
      "@type": "Offer",
      "priceRange": service.priceRange,
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background text-text-main relative overflow-hidden">
      
      {/* Injecting Dynamic Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Decorative Background - FIXED TAILWIND WARNINGS HERE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-secondary/5 blur-[120px] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto z-10 text-center">
        <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
          Specialized Hardware Lab
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-text-main mb-6 leading-tight">
          {service.shortName} <br /> in <span className="text-secondary">Noida.</span>
        </h1>
        
        <p className="text-text-main/70 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
          {service.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+918557065447" className="w-full sm:w-auto bg-secondary text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest hover:bg-black transition-colors duration-300 shadow-premium">
            Call Expert Now
          </a>
          <a 
            href="https://maps.google.com/?q=28.5041,77.4026(LPCARE.TECH+Noida+Sector+168)" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-primary border border-secondary/20 text-text-main font-bold py-4 px-10 rounded-full uppercase tracking-widest hover:border-secondary transition-colors duration-300 shadow-sm"
          >
            Get Lab Directions
          </a>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-primary bg-primary relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-background/10">
          <div className="px-4">
            <h3 className="font-black text-secondary uppercase text-sm mb-1">Physical Repair Only</h3>
            <p className="text-[10px] text-text-main/60 uppercase tracking-widest">No Remote Support</p>
          </div>
          <div className="px-4">
            <h3 className="font-black text-secondary uppercase text-sm mb-1">No Fix, No Fee</h3>
            <p className="text-[10px] text-text-main/60 uppercase tracking-widest">Free Hardware Check</p>
          </div>
          <div className="px-4">
            <h3 className="font-black text-secondary uppercase text-sm mb-1">OEM Parts</h3>
            <p className="text-[10px] text-text-main/60 uppercase tracking-widest">High Quality Panels</p>
          </div>
          <div className="px-4">
            <h3 className="font-black text-secondary uppercase text-sm mb-1">Data Privacy</h3>
            <p className="text-[10px] text-text-main/60 uppercase tracking-widest">100% Offline Service</p>
          </div>
        </div>
      </section>

      {/* Service Specific FAQ Section (AEO) */}
      <section className="py-20 px-6 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black uppercase tracking-tight text-text-main mb-4">
            {service.shortName} <span className="text-secondary">FAQs</span>
          </h2>
          <p className="text-sm text-text-main/60 uppercase tracking-widest">Sector 168 Noida Diagnostics</p>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, index) => (
            <div key={index} className="border border-secondary/20 p-6 rounded-lg bg-primary/30">
              <h3 className="font-bold text-lg mb-2 text-text-main">{faq.q}</h3>
              <p className="text-sm text-text-main/70 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Return to Location Hub */}
      <div className="text-center pb-20">
        <Link href="/locations/noida" className="text-sm font-bold text-secondary uppercase tracking-widest hover:underline">
          ← Back to Noida Location Hub
        </Link>
      </div>

    </div>
  );
}