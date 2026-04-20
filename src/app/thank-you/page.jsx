// src/app/thank-you/page.jsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function ThankYouPage() {
  
  useEffect(() => {
    // Google Ads Conversion Tracking Snippet (Optional but Recommended)
    // Jab aap Google Ads account mein conversion banayenge, toh ek "send_to" label milega.
    // Aap use yahan add kar sakte hain taaki perfect tracking ho.
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18044724364/REPLACE_WITH_YOUR_CONVERSION_LABEL'
      });
    }
  }, []);

  return (
    <div className="min-h-[80vh] bg-background text-text-main flex items-center justify-center relative overflow-hidden px-4 selection:bg-secondary/10 selection:text-secondary">
      
      {/* Soft Success Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl w-full bg-primary border border-secondary/10 p-10 md:p-16 rounded-3xl shadow-premium text-center relative z-10"
      >
        
        {/* Success Checkmark Icon */}
        <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20 shadow-sm">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-text-main mb-4">
          Request <span className="text-secondary">Received</span>
        </h1>
        
        <p className="text-text-main/70 text-base md:text-lg font-medium leading-relaxed mb-8">
          Thank you for trusting LPCARE.TECH. Your hardware diagnostic request has been successfully registered in our secure system. One of our lab experts will review your device details and call you shortly to confirm the next steps.
        </p>

        <div className="bg-background border border-secondary/10 p-6 rounded-xl mb-10 text-left">
          <h3 className="text-[11px] font-black text-secondary uppercase tracking-widest mb-2">Drop-off Location Details</h3>
          <p className="text-sm font-medium text-text-main/80 leading-relaxed">
            Shop LPCARE.TECH<br />
            Noida Sector-168 Chhapraoli<br />
            Near SK Homes, UP, Pincode 201305
          </p>
          <div className="mt-4 pt-4 border-t border-secondary/10">
            <p className="text-xs text-text-main/60 font-bold uppercase tracking-widest">
              Direct Lab Contact: <a href="tel:+918557065447" className="text-secondary hover:underline">+91 8557065447</a>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="w-full sm:w-auto bg-secondary text-primary hover:bg-black font-bold py-4 px-10 rounded-full tracking-[0.15em] uppercase text-xs transition-all duration-300 shadow-sm">
            Return to Homepage
          </Link>
          <Link href="/services" className="w-full sm:w-auto bg-transparent border border-secondary/20 text-text-main hover:border-secondary font-bold py-4 px-10 rounded-full tracking-[0.15em] uppercase text-xs transition-all duration-300">
            Explore Services
          </Link>
        </div>

      </motion.div>
    </div>
  );
}