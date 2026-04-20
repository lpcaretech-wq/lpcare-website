// src/app/locations/ghaziabad/page.jsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GhaziabadLocationPage() {
  
  // Advanced Local SEO Schema specifically for Ghaziabad Location
  const ghaziabadLocalSchema = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "name": "LPCARE.TECH Ghaziabad Hardware Repair Services",
    "image": "https://lpcare.tech/logo/lpcaretech.png",
    "@id": "https://lpcare.tech/locations/ghaziabad",
    "url": "https://lpcare.tech/locations/ghaziabad",
    "telephone": "+918557065447",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Noida sec-168 chhapraoli, Near SK Homes (Serving Ghaziabad Region)",
      "addressLocality": "Ghaziabad",
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Ghaziabad" },
      { "@type": "Place", "name": "Indirapuram" },
      { "@type": "Place", "name": "Vaishali" },
      { "@type": "Place", "name": "Vasundhara" }
    ],
    "priceRange": "INR",
    "description": "Independent physical laptop hardware repair lab serving Ghaziabad, specializing in screen replacement, dead motherboard recovery, and micro-soldering."
  };

  return (
    <div className="min-h-screen bg-background text-text-main relative overflow-hidden selection:bg-secondary/10 selection:text-secondary">
      
      {/* Injecting Ghaziabad Specific Local SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ghaziabadLocalSchema) }}
      />

      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-secondary/5 blur-[120px] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto z-10 text-center" aria-label="Ghaziabad Repair Services">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            Serving Ghaziabad, Indirapuram and Vaishali
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-text-main mb-6 leading-tight">
            Premium Hardware <br /> Repair in <span className="text-secondary">Ghaziabad.</span>
          </h1>
          <p className="text-text-main/70 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
            Providing the Ghaziabad region with premier independent micro-soldering services. We revive dead motherboards and replace physically damaged laptop screens using high-quality OEM components.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+918557065447" className="w-full sm:w-auto bg-secondary text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest hover:bg-black transition-colors duration-300 shadow-premium">
              Call Hardware Expert
            </a>
            <Link href="/contact" className="w-full sm:w-auto bg-primary border border-secondary/20 text-text-main font-bold py-4 px-10 rounded-full uppercase tracking-widest hover:border-secondary transition-colors duration-300 shadow-sm">
              Schedule Pickup
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges for Physical Hardware Repair */}
      <section className="border-y border-primary bg-primary relative z-20 shadow-sm" aria-label="Service Guarantees">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-background/10">
          <div className="px-4">
            <h3 className="font-black text-secondary uppercase text-sm mb-1">Physical Repair Only</h3>
            <p className="text-[10px] text-text-main/60 uppercase tracking-widest">No Remote Software Support</p>
          </div>
          <div className="px-4">
            <h3 className="font-black text-secondary uppercase text-sm mb-1">No Fix, No Fee</h3>
            <p className="text-[10px] text-text-main/60 uppercase tracking-widest">Hardware Diagnostics</p>
          </div>
          <div className="px-4">
            <h3 className="font-black text-secondary uppercase text-sm mb-1">OEM Components</h3>
            <p className="text-[10px] text-text-main/60 uppercase tracking-widest">Quality Sourced Parts</p>
          </div>
          <div className="px-4">
            <h3 className="font-black text-secondary uppercase text-sm mb-1">Data Privacy</h3>
            <p className="text-[10px] text-text-main/60 uppercase tracking-widest">Strict Offline Policies</p>
          </div>
        </div>
      </section>

      {/* Hyper-Local Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10" aria-label="Ghaziabad Hardware Services">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-text-main mb-4">
            Our Ghaziabad <span className="text-secondary">Hardware Expertise</span>
          </h2>
          <p className="text-text-main/70 max-w-2xl mx-auto">Providing secure hardware diagnostics and physical repairs for individual consumers and corporate fleets across Ghaziabad, Indirapuram, Vaishali, and Vasundhara.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <article className="bg-primary border border-secondary/10 p-8 rounded-2xl hover:shadow-md hover:border-secondary/30 transition-all duration-300">
            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Display Panel Replacement</h3>
            <p className="text-sm text-text-main/70 leading-relaxed">Shattered screens, bleeding LCDs, or broken display hinges. We execute precision physical replacements using high-grade panels for clients in Ghaziabad.</p>
          </article>

          <article className="bg-primary border border-secondary/10 p-8 rounded-2xl hover:shadow-md hover:border-secondary/30 transition-all duration-300">
            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Motherboard Micro-Soldering</h3>
            <p className="text-sm text-text-main/70 leading-relaxed">Our lab specializes in chip-level logic board recovery. We physically replace shorted capacitors, saving Ghaziabad residents the massive cost of a completely new board.</p>
          </article>

          <article className="bg-primary border border-secondary/10 p-8 rounded-2xl hover:shadow-md hover:border-secondary/30 transition-all duration-300">
            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">DC Jack & Battery Setup</h3>
            <p className="text-sm text-text-main/70 leading-relaxed">Physical extraction of swollen batteries and soldering of broken charging ports. Ensure consistent power delivery with our hardware-only interventions.</p>
          </article>

        </div>
      </section>

      {/* STRICT Google Ads Compliance Disclaimer Section */}
      <section className="py-12 px-6 bg-primary/50 border-t border-secondary/10 text-center" aria-label="Legal Disclaimers">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-background border border-secondary/20 rounded-xl shadow-sm">
            <h4 className="text-sm font-black text-secondary uppercase tracking-widest mb-3">Independent Laboratory Disclaimer</h4>
            <p className="text-xs text-text-main/60 leading-relaxed font-medium">
              We are a strictly independent physical hardware diagnostic and micro-soldering laboratory serving Ghaziabad. We are NOT officially affiliated with, authorized by, sponsored by, or endorsed by Apple, Dell, HP, Lenovo, or any other original equipment manufacturer. 
              <br /><br />
              <strong className="text-text-main/80 uppercase">No Technical Support:</strong> We do not offer remote assistance, software troubleshooting, virus removal, or consumer technical helpdesk services. Our operations are strictly limited to physical hardware component replacements and chip-level logic board physical repairs.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}