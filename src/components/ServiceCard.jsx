// src/components/ServiceCard.jsx
"use client";
import { motion } from 'framer-motion';

export default function ServiceCard({ title, description, sysCode, icon, delay = 0, isPremium = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      className="group relative bg-primary rounded-xl border border-secondary/10 p-8 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-md hover:border-secondary/30 overflow-hidden"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>

      {/* System Code Tag */}
      <div className="text-[10px] font-bold text-text-main/40 uppercase tracking-widest mb-6 flex justify-between items-center">
        <span>{sysCode}</span>
        {isPremium && (
           <span className="flex h-2 w-2 relative">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
           </span>
        )}
      </div>

      {/* Icon */}
      <div className="w-14 h-14 rounded-lg bg-background border border-secondary/10 flex items-center justify-center mb-6 text-secondary transition-colors duration-300 group-hover:bg-secondary/5 group-hover:border-secondary/30">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-black mb-3 uppercase tracking-wide text-text-main group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-text-main/70 font-light text-sm leading-relaxed mb-6">
        {description}
      </p>

    </motion.div>
  );
}