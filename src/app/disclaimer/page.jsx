// src/app/disclaimer/page.jsx
"use client";

import { motion } from "framer-motion";

export default function Disclaimer() {
  const currentDate = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[700px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary border border-secondary/10 px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Legal Information
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-text-main uppercase mb-4">
            Legal <span className="text-accent">Disclaimer</span>
          </h1>
          <p className="text-sm font-medium text-text-main/60 uppercase tracking-widest">
            Last Updated: {currentDate}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-primary rounded-3xl shadow-premium border border-secondary/5 p-8 md:p-14 text-text-main/80 space-y-8"
        >
          
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">Independent Service Provider</h2>
            <p className="leading-relaxed text-sm">
              <strong>LPCARE.TECH</strong> is an independent third-party hardware repair and IT service center. We are <strong>not</strong> affiliated with, associated with, authorized, endorsed by, or in any way officially connected with Apple Inc., Dell, HP, Lenovo, Asus, Acer, Samsung, or any other computer/mobile Original Equipment Manufacturer (OEM).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">Trademarks</h2>
            <p className="leading-relaxed text-sm">
              All product and company names, logos, brands, and other trademarks or images featured or referred to within the LPCARE.TECH website are the property of their respective trademark holders. These trademark holders are not affiliated with LPCARE.TECH, our products, or our website. They do not sponsor or endorse our materials.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">Warranty Void Notice</h2>
            <p className="leading-relaxed text-sm">
              Please be advised that having your device diagnosed or repaired by an independent third-party repair center like LPCARE.TECH may void any existing manufacturer warranties. It is your responsibility to check your warranty status before handing over your device to us for repair.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">No Guarantees</h2>
            <p className="leading-relaxed text-sm">
              While we use our highest level of expertise to perform chip-level repairs, the nature of electronics means that some devices may be beyond economical or physical repair. We do not guarantee that every single device submitted can be restored to full working condition.
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
}