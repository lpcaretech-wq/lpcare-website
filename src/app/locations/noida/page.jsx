// src/app/locations/noida/page.jsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NoidaLocationPage() {
  
  // Advanced Local SEO Schema specifically for Noida Location
  const noidaLocalSchema = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "name": "LPCARE.TECH Noida Hardware Repair Lab",
    "image": "https://lpcare.tech/logo/lpcaretech.png",
    "@id": "https://lpcare.tech/locations/noida",
    "url": "https://lpcare.tech/locations/noida",
    "telephone": "+918557065447",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Noida sec-168 chhapraoli, Near SK Homes",
      "addressLocality": "Noida",
      "addressRegion": "UP",
      "postalCode": "201305",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5041,
      "longitude": 77.4026
    },
    "areaServed": [
      { "@type": "City", "name": "Noida" },
      { "@type": "Place", "name": "Sector 168 Noida" },
      { "@type": "Place", "name": "Sector 62 Noida" },
      { "@type": "Place", "name": "Sector 18 Noida" }
    ],
    "priceRange": "INR",
    "description": "Independent physical laptop hardware repair lab specializing in screen replacement, dead motherboard recovery, and micro-soldering in Noida."
  };

  // NEW: AEO / AI Overview Schema for Voice Search & Generative Engines
  const noidaFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I fix a dead MacBook motherboard near Sector 62, Noida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LPCARE.TECH operates a specialized micro-soldering lab in Sector 168, Noida, easily accessible from Sector 62. We specialize in chip-level logic board recovery and dead motherboard repairs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide original laptop screen replacements in Noida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we execute precision physical replacements using high-grade OEM panels available in our Noida inventory for all major brands."
        }
      },
      {
        "@type": "Question",
        "name": "How much time does it take for laptop repair in Noida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Screen and battery replacements are typically done within 2-4 hours. Deep motherboard micro-soldering may take 24-48 hours depending on the damage severity."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-text-main relative overflow-hidden selection:bg-secondary/10 selection:text-secondary">
      
      {/* Injecting Noida Specific Local SEO & FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(noidaLocalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(noidaFAQSchema) }}
      />

      {/* Decorative Background - FIXED TAILWIND WARNINGS HERE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-secondary/5 blur-[120px] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto z-10 text-center" aria-label="Noida Repair Services">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            Serving Noida, Greater Noida & Delhi NCR
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-text-main mb-6 leading-tight">
            Premium Hardware <br /> Repair in <span className="text-secondary">Noida.</span>
          </h1>
          <p className="text-text-main/70 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
            Located conveniently in Sector 168 (near Advant Navis), we are Noida's premier independent micro-soldering laboratory. We revive dead motherboards and replace physically damaged screens using high-quality OEM components.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+918557065447" className="w-full sm:w-auto bg-secondary text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest hover:bg-black transition-colors duration-300 shadow-premium">
              Call Noida Lab
            </a>
            {/* SXO UPDATE: Direct Google Maps Link for immediate conversion */}
            <a 
              href="https://maps.google.com/?q=28.5041,77.4026(LPCARE.TECH+Noida+Sector+168)" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto bg-primary border border-secondary/20 text-text-main font-bold py-4 px-10 rounded-full uppercase tracking-widest hover:border-secondary transition-colors duration-300 shadow-sm"
            >
              Get Directions
            </a>
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

      {/* NEW: Information Gain & Entity Density Section for AI Overviews */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center relative z-10" aria-label="About LPCARE Noida Lab">
        <h2 className="text-2xl font-black uppercase text-text-main mb-4">Why Choose Our Sector 168 Lab?</h2>
        <p className="text-text-main/70 leading-relaxed text-sm">
          Unlike generic repair shops, <strong>LPCARE.TECH in Noida</strong> is a dedicated hardware-only facility equipped with advanced micro-soldering stations. Strategically located near the Noida-Greater Noida Expressway, we provide fast, high-success-rate repairs for clients commuting from <strong>Sector 62, Sector 18, and Greater Noida</strong>. We maintain a 98% success rate on dead motherboard recoveries that other service centers declare "unrepairable."
        </p>
      </section>

      {/* Hyper-Local Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10" aria-label="Noida Hardware Services">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-text-main mb-4">
            Our Noida <span className="text-secondary">Hardware Expertise</span>
          </h2>
          <p className="text-text-main/70 max-w-2xl mx-auto">Drop off your physically damaged device at our Sector 168 facility. We cater to individual consumers and businesses across Noida Expressway, Sector 62, and Sector 18.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-primary border border-secondary/10 p-8 rounded-2xl hover:shadow-md hover:border-secondary/30 transition-all duration-300">
            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Display Panel Replacement</h3>
            <p className="text-sm text-text-main/70 leading-relaxed">Shattered screens, bleeding LCDs, or broken display hinges. We execute precision physical replacements using high-grade panels available in our Noida inventory.</p>
          </div>

          <div className="bg-primary border border-secondary/10 p-8 rounded-2xl hover:shadow-md hover:border-secondary/30 transition-all duration-300">
            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">Motherboard Micro-Soldering</h3>
            <p className="text-sm text-text-main/70 leading-relaxed">Our lab specializes in chip-level logic board recovery. We clean liquid spills and physically replace shorted capacitors, saving you the cost of a completely new board.</p>
          </div>

          <div className="bg-primary border border-secondary/10 p-8 rounded-2xl hover:shadow-md hover:border-secondary/30 transition-all duration-300">
            <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">DC Jack & Battery Setup</h3>
            <p className="text-sm text-text-main/70 leading-relaxed">Physical extraction of swollen batteries and soldering of broken charging ports. Ensure consistent power delivery with our hardware-only interventions.</p>
          </div>

        </div>
      </section>

      {/* NEW: Local FAQ Section for AEO (Answer Engine Optimization) */}
      <section className="py-16 px-6 max-w-4xl mx-auto relative z-10" aria-label="Noida Repair FAQs">
        <h2 className="text-2xl font-black uppercase text-center text-text-main mb-10">Frequently Asked in <span className="text-secondary">Noida</span></h2>
        <div className="space-y-4">
          <div className="border border-secondary/20 p-6 rounded-lg bg-primary/30">
            <h4 className="font-bold text-lg mb-2">Where can I fix a dead MacBook motherboard near Sector 62?</h4>
            <p className="text-sm text-text-main/70">Our specialized micro-soldering lab is located in Sector 168, just a short drive down the expressway from Sector 62. We handle dead motherboard recoveries that other shops reject.</p>
          </div>
          <div className="border border-secondary/20 p-6 rounded-lg bg-primary/30">
            <h4 className="font-bold text-lg mb-2">How quickly can you replace a laptop screen?</h4>
            <p className="text-sm text-text-main/70">Most physical screen replacements at our Noida facility are completed within 2-4 hours, provided the OEM panel is in our local inventory.</p>
          </div>
        </div>
      </section>

      {/* STRICT Google Ads Compliance Disclaimer Section */}
      <section className="py-12 px-6 bg-primary/50 border-t border-secondary/10 text-center" aria-label="Legal Disclaimers">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-background border border-secondary/20 rounded-xl shadow-sm">
            <h4 className="text-sm font-black text-secondary uppercase tracking-widest mb-3">Independent Laboratory Disclaimer</h4>
            <p className="text-xs text-text-main/60 leading-relaxed font-medium">
              We are a strictly independent physical hardware diagnostic and micro-soldering laboratory located in Noida. We are NOT officially affiliated with, authorized by, sponsored by, or endorsed by Apple, Dell, HP, Lenovo, or any other original equipment manufacturer. 
              <br /><br />
              <strong className="text-text-main/80 uppercase">No Technical Support:</strong> We do not offer remote assistance, software troubleshooting, virus removal, or consumer technical helpdesk services. Our operations are strictly limited to physical hardware component replacements and chip-level logic board physical repairs.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}