// src/app/about/page.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
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
            Who We Are
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-text-main uppercase mb-6">
            ABOUT <span className="text-accent">LPCARE.TECH</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base text-text-main/70 font-medium leading-relaxed">
            We don't just replace; we restore. Delhi NCR's most trusted independent hardware diagnostic and micro-soldering laboratory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
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
              <h3 className="text-2xl font-black text-secondary tracking-widest uppercase">Precision <br/> Engineering</h3>
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
                Founded in Noida, LPCARE.TECH was built on a simple premise: high-end electronics deserve high-end care. We say no to local "jugaad" and temporary fixes. Our mission is to provide enterprise-grade chip-level repairs to everyday consumers and businesses alike.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-black text-secondary tracking-tight uppercase">Why Choose Us?</h2>
              <ul className="space-y-4 text-sm text-text-main/80">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Chip-Level Expertise:</strong> We specialize in micro-soldering, repairing dead motherboards that others declare unfixable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Absolute Data Privacy:</strong> Your hard drive data is never snooped on or accessed without strict diagnostic necessity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>OEM Quality Parts:</strong> We source original or highest-grade equivalent components for long-lasting reliability.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-secondary text-primary hover:bg-black font-bold py-4 px-8 rounded-full tracking-[0.15em] uppercase text-xs transition-all duration-300 shadow-premium hover:shadow-2xl hover:-translate-y-1">
                Speak With An Expert
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}