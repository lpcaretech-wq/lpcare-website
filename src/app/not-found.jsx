// src/app/not-found.jsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-background text-text-main flex items-center justify-center relative overflow-hidden px-6 selection:bg-secondary/10 selection:text-secondary">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-3xl w-full relative z-10 text-center">
        
        {/* Animated 404 Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-secondary to-background drop-shadow-sm select-none">
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 bg-primary border border-secondary/10 px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Connection Lost
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-text-main mb-6">
            Hardware Component <br/> <span className="text-secondary">Missing.</span>
          </h1>
          
          <p className="text-text-main/70 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto mb-12">
            Looks like the page you are looking for has been physically misplaced or removed from our logic board. Don't worry, our lab technicians can help you navigate back.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="w-full sm:w-auto bg-secondary text-primary hover:bg-black font-bold py-4 px-10 rounded-full tracking-[0.15em] uppercase text-xs transition-all duration-300 shadow-premium hover:-translate-y-1">
              Return To Base
            </Link>
            <Link href="/contact" className="w-full sm:w-auto bg-transparent border border-secondary/20 text-text-main hover:border-secondary font-bold py-4 px-10 rounded-full tracking-[0.15em] uppercase text-xs transition-all duration-300">
              Book Diagnostics
            </Link>
          </div>
        </motion.div>

        {/* Technical Footer Detail */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-[10px] text-text-main/30 uppercase tracking-widest font-mono"
        >
          Error Code: PAGE_NOT_FOUND // LPCARE.TECH_SERVER
        </motion.div>
      </div>

    </div>
  );
}