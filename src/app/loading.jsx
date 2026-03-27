// src/app/loading.jsx
"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Premium Tech Loader Animation */}
        <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
          {/* Outer Spinning Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-transparent border-t-accent border-r-accent/30 rounded-full"
          />
          
          {/* Inner Pulsing Core (Obsidian Black with Gold glow) */}
          <motion.div
            animate={{ scale: [0.85, 1.05, 0.85], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.2)]"
          >
            {/* Blinking Micro-Chip indicator */}
            <div className="w-2.5 h-2.5 bg-accent rounded-full animate-ping"></div>
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-sm font-black text-secondary tracking-[0.3em] uppercase mb-3">
            LPCARE<span className="text-accent">.TECH</span>
          </h2>
          <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-text-main/50 uppercase tracking-widest">
            <span>Initializing Diagnostics</span>
            <span className="flex gap-0.5">
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}>.</motion.span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}>.</motion.span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}>.</motion.span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}