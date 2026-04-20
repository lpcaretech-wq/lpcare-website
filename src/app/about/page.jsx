// src/app/about/page.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUs() {
  
  // SEO Schema for About Page & Local Business Entity
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "ComputerStore",
      "name": "LPCARE.TECH Hardware Repair Laboratory",
      "description": "Independent physical hardware diagnostic and micro-soldering laboratory located in Noida.",
      "url": "https://lpcare.tech/about",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Noida sec-168 chhapraoli, Near SK Homes",
        "addressLocality": "Noida",
        "addressRegion": "UP",
        "postalCode": "201305",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-label="About Our Hardware Lab">
      
      {/* Injecting AboutPage SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Premium Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary border border-secondary/10 px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Independent Hardware Laboratory
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-text-main uppercase mb-6">
            ABOUT <span className="text-accent">LPCARE.TECH</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base text-text-main/70 font-medium leading-relaxed">
            We don't just replace; we physically restore. Delhi NCR's most trusted independent hardware diagnostic and micro-soldering laboratory based in Noida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Side: Premium Image/Graphic Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-primary rounded-3xl p-8 border border-secondary/5 shadow-premium flex items-center justify-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-background to-primary opacity-50"></div>
            {/* Abstract Tech Graphic */}
            <div className="relative z-10 text-center">
              <svg className="w-32 h-32 mx-auto text-secondary/10 group-hover:text-accent/20 transition-colors duration-700 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <h3 className="text-2xl font-black text-secondary tracking-widest uppercase">Physical <br/> Hardware Care</h3>
            </div>
            
            {/* Decorative Corner Elements */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-accent/40"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-accent/40"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-secondary tracking-tight uppercase">Our Mission</h2>
              <p className="text-sm text-text-main/80 leading-relaxed">
                Founded in Noida, LPCARE.TECH was built on a simple premise: high-end electronics deserve high-end physical care. We say no to local "jugaad" and temporary fixes. Our mission is to provide enterprise-grade chip-level hardware repairs to everyday consumers and businesses across Delhi NCR.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-black text-secondary tracking-tight uppercase">Why Choose Us?</h2>
              <ul className="space-y-4 text-sm text-text-main/80">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Chip-Level Hardware Expertise:</strong> We specialize in logic board micro-soldering, physically repairing dead motherboards that others declare unfixable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Absolute Data Privacy:</strong> We perform offline physical repairs. Your hard drive data is never snooped on or accessed during hardware replacement.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>OEM Quality Components:</strong> We source original or highest-grade equivalent physical hardware components for long-lasting device reliability.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-secondary text-primary hover:bg-black font-bold py-4 px-8 rounded-full tracking-[0.15em] uppercase text-xs transition-all duration-300 shadow-premium hover:shadow-2xl hover:-translate-y-1">
                Book Hardware Diagnostics
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Strict Google Ads Compliance Disclaimer for About Page */}
        <div className="border-t border-secondary/10 pt-10 text-center">
          <div className="max-w-4xl mx-auto p-6 bg-primary border border-secondary/20 rounded-xl shadow-sm">
            <h3 className="text-xs font-black text-secondary uppercase tracking-widest mb-3">Policy & Operations Notice</h3>
            <p className="text-[11px] text-text-main/60 leading-relaxed font-medium">
              LPCARE.TECH operates exclusively as an independent physical hardware repair and micro-soldering laboratory. We are not an authorized service provider for Apple, HP, Dell, Lenovo, or any other manufacturer. <strong className="text-text-main/80">We do not offer remote assistance, consumer technical support helpdesks, virus removal, or software troubleshooting services.</strong> All our services require physical inspection of the hardware at our facility.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}