// src/app/error.jsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error("Global Application Error Captured:", error);
  }, [error]);

  return (
    <div className="min-h-[85vh] bg-background text-text-main flex items-center justify-center relative overflow-hidden px-6 selection:bg-secondary/10 selection:text-secondary">
      
      {/* Background Ambient Glows (Red tint for error) */}
      <div className="absolute top-1/4 left-1/4 w-100 h-100 bg-red-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-3xl w-full relative z-10 text-center">
        
        {/* Animated Warning Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center border border-red-500/20 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
             </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 bg-primary border border-red-500/20 px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Critical System Failure
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-text-main mb-6">
            Logic Board <span className="text-secondary">Fault.</span>
          </h1>
          
          <p className="text-text-main/70 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto mb-12">
            We encountered an unexpected short circuit in our application logic. Our engineers have been notified. Please try restarting the sequence or return to the main hub.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => reset()}
              className="w-full sm:w-auto bg-secondary text-primary hover:bg-black font-bold py-4 px-10 rounded-full tracking-[0.15em] uppercase text-xs transition-all duration-300 shadow-premium hover:-translate-y-1"
            >
              Reboot System
            </button>
            <Link href="/" className="w-full sm:w-auto bg-transparent border border-secondary/20 text-text-main hover:border-secondary font-bold py-4 px-10 rounded-full tracking-[0.15em] uppercase text-xs transition-all duration-300">
              Return To Homepage
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
          Error Code: 500_INTERNAL_SHORT // LPCARE.TECH_SERVER
        </motion.div>
      </div>

    </div>
  );
}