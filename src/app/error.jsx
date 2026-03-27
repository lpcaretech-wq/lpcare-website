// src/app/error.jsx
"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Ye line background mein error ko log karegi taaki baad me aap check kar sakein
    console.error("System Error Detected:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Soft Red/Gold Glow for Error State */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-2xl mx-auto text-center relative z-10 bg-primary p-10 md:p-16 rounded-3xl border border-secondary/10 shadow-premium">
        
        {/* Warning Icon Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-24 h-24 bg-red-50 flex items-center justify-center rounded-full mx-auto mb-8 border border-red-100"
        >
          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-4xl font-black text-secondary uppercase tracking-tight mb-4">
            System <span className="text-red-500">Malfunction</span>
          </h1>
          <p className="text-sm font-medium text-text-main/70 mb-10 leading-relaxed tracking-wide">
            We encountered an unexpected technical error while processing your request. Don't worry, your data is safe. You can try refreshing the system or return to the main hub.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Reset Button - Tries to reload the component without refreshing the whole page */}
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary text-primary hover:bg-black font-bold py-4 px-8 rounded-full tracking-[0.15em] uppercase text-xs transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              Try Again
            </button>
            
            {/* Return Home Link */}
            <Link 
              href="/" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-background border border-secondary/20 hover:border-secondary text-secondary font-bold py-4 px-8 rounded-full tracking-[0.15em] uppercase text-xs transition-all duration-300"
            >
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}