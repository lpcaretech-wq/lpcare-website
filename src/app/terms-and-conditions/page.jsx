// src/app/terms-and-conditions/page.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsAndConditions() {
  const currentDate = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Premium Header Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

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
            Terms & <span className="text-accent">Conditions</span>
          </h1>
          <p className="text-sm font-medium text-text-main/60 uppercase tracking-widest">
            Last Updated: {currentDate}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-primary rounded-3xl shadow-premium border border-secondary/5 p-8 md:p-14 text-text-main/80 space-y-10"
        >
          
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">1. Agreement to Terms</h2>
            <p className="leading-relaxed text-sm">
              By accessing our website and utilizing the hardware repair services of <strong>LPCARE.TECH</strong>, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">2. Repair Services & Diagnostics</h2>
            <ul className="list-disc pl-5 space-y-3 text-sm leading-relaxed">
              <li>All devices submitted for repair will undergo a thorough initial diagnostic process.</li>
              <li>We strive to use high-quality, OEM-grade parts for all repairs.</li>
              <li>Estimated repair times are approximations. Complex chip-level micro-soldering may require additional time depending on part availability and motherboard condition.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">3. Data Liability</h2>
            <p className="leading-relaxed text-sm">
              While we take extreme precautions to protect your data, <strong>we highly recommend backing up your data before submitting any device for repair.</strong> LPCARE.TECH is not liable for any data loss that occurs due to pre-existing hardware failures (such as a dying SSD/HDD) during the diagnostic or repair process.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">4. Independent Repair Laboratory</h2>
            <p className="leading-relaxed text-sm">
              LPCARE.TECH is an independent hardware repair laboratory. We are not officially affiliated with, endorsed by, or sponsored by brands such as Apple, Dell, HP, Lenovo, or any other Original Equipment Manufacturer (OEM). All trademarks belong to their respective owners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">5. Contact Information</h2>
            <p className="leading-relaxed text-sm">For any questions regarding these terms, please contact us at <a href="mailto:Lpcaretech@gmail.com" className="text-accent font-semibold hover:underline">Lpcaretech@gmail.com</a>.</p>
          </section>

        </motion.div>
      </div>
    </div>
  );
}