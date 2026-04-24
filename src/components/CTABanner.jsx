// src/components/CTABanner.jsx
"use client";
import { motion } from "framer-motion";

export default function CTABanner() {
  const PHONE_NUMBER = "+918557065447";
  const WHATSAPP_URL = `https://wa.me/918557065447?text=${encodeURIComponent("Hi LPCARE, I need to get my device fixed.")}`;

  return (
    <section className="relative py-24 px-6 text-center border-t border-secondary/10 bg-primary overflow-hidden z-10" aria-label="Call to Action">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-1/2 h-full bg-secondary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Grid Pattern overlay for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_#ef4444]"></span>
          Fast Response Guaranteed
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tighter text-text-main leading-[1.05]">
          DON'T LET A BROKEN DEVICE <br className="hidden md:block" />
          <span className="text-secondary">SLOW YOU DOWN.</span>
        </h2>

        {/* Subtext */}
        <p className="text-text-main/70 mb-10 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Whether it's a completely dead motherboard, a shattered screen, or an enterprise fleet needing urgent maintenance, our lab experts in Delhi NCR are ready to help.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a 
            href={`tel:${PHONE_NUMBER}`} 
            className="bg-secondary text-primary hover:bg-white hover:text-black font-black py-4 px-10 rounded-full shadow-[0_0_20px_rgba(var(--secondary),0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-1 uppercase tracking-widest text-sm w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Call Lab Expert
          </a>

          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#25D366] text-white hover:bg-green-500 font-bold py-4 px-10 rounded-full transition-all duration-300 uppercase tracking-widest text-sm shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2 border border-transparent hover:border-green-400"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}