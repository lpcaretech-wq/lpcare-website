// src/components/TrustedBy.jsx
"use client";
import { motion } from "framer-motion";

export default function TrustedBy() {
  // B2B aur Premium Trust signals jo scroll honge
  const trustSignals = [
    "Noida IT Parks",
    "Delhi NCR Startups",
    "Enterprise Fleets",
    "Corporate Professionals",
    "Co-Working Spaces",
    "Sector 62 Tech Hubs",
    "Gurugram Agencies"
  ];

  return (
    <div className="w-full bg-primary border-y border-secondary/10 py-8 overflow-hidden flex flex-col items-center justify-center relative">
      
      {/* Subtle fade effect on the left and right edges */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

      <p className="text-[10px] font-bold uppercase tracking-widest text-text-main/40 mb-6 text-center">
        Trusted by local businesses & professionals across
      </p>

      {/* Ticker Container */}
      <div className="flex whitespace-nowrap w-full items-center">
        <motion.div
          animate={{ x: ["0%", "-50%"] }} // Scrolls half of the duplicated content
          transition={{
            ease: "linear",
            duration: 25, // Speed of the scroll
            repeat: Infinity,
          }}
          className="flex items-center gap-12 md:gap-24 text-text-main/30 font-black uppercase tracking-widest text-sm md:text-xl w-max"
        >
          {/* We render the array TWICE to create a seamless infinite loop */}
          {[...trustSignals, ...trustSignals].map((signal, index) => (
            <div key={index} className="flex items-center gap-12 md:gap-24 hover:text-secondary/50 transition-colors duration-300">
              <span>{signal}</span>
              {/* Separator Dot */}
              <span className="w-1.5 h-1.5 rounded-full bg-secondary/20"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}