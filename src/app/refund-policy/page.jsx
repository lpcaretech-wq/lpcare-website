// src/app/refund-policy/page.jsx
"use client";

import { motion } from "framer-motion";

export default function RefundPolicy() {
  const currentDate = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Premium Header Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

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
            Refund & <span className="text-accent">Cancellation</span>
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
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">1. Diagnostic Fees</h2>
            <p className="leading-relaxed text-sm">
              In cases where a physical diagnostic is performed, the diagnostic fee (if applicable and communicated beforehand) is non-refundable, regardless of whether you choose to proceed with the actual repair or not. This covers our technicians' time and lab resources.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">2. Repair Cancellation</h2>
            <p className="leading-relaxed text-sm">
              You may cancel a repair request at any time before the actual repair process begins. If any custom parts were specifically ordered for your device prior to cancellation, a restocking fee may apply. Once a successful repair is completed, the service cost cannot be cancelled or refunded.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">3. Refund Policy on Repairs</h2>
            <ul className="list-disc pl-5 space-y-3 text-sm leading-relaxed">
              <li><strong>Unsuccessful Repairs:</strong> If we are unable to repair your device (e.g., severe motherboard damage beyond economical repair), you will not be charged for the repair service.</li>
              <li><strong>Post-Repair Issues:</strong> We provide a limited warranty on specific replaced parts (duration provided on your invoice). If the installed part fails within this warranty period due to manufacturing defects, we will replace it free of charge. Refunds are not issued for successful repairs once the device leaves our premises.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">4. Processing Refunds</h2>
            <p className="leading-relaxed text-sm">
              If an eligible refund is approved (e.g., advance payment for a part that went out of stock), it will be processed to the original method of payment within 5-7 business days.
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
}