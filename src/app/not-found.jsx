// src/app/not-found.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-max mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-[10rem] md:text-[15rem] font-black leading-none text-secondary tracking-tighter select-none">
            4<span className="text-accent">0</span>4
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-text-main uppercase tracking-widest mb-4">
            Hardware Not Found
          </h2>
          <p className="text-sm font-medium text-text-main/60 max-w-md mx-auto mb-10 leading-relaxed uppercase tracking-widest">
            The page or sector you are looking for has been disconnected or does not exist in our system.
          </p>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 bg-secondary text-primary hover:bg-black font-bold py-4 px-10 rounded-full tracking-[0.2em] uppercase text-xs transition-all duration-300 shadow-premium hover:shadow-2xl hover:-translate-y-1"
          >
            <svg className="w-4 h-4 text-accent rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            Return To Base
          </Link>
        </motion.div>
      </div>
    </div>
  );
}