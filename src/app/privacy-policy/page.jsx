// src/app/privacy-policy/page.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Premium Header Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/10 blur-[120px] pointer-events-none z-0"></div>

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
            Privacy <span className="text-accent">Policy</span>
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
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">1. Introduction</h2>
            <p className="leading-relaxed text-sm">
              Welcome to <strong>LPCARE.TECH</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <Link href="/" className="text-accent hover:underline font-semibold">lpcare.tech</Link> and use our hardware repair services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">2. Information We Collect</h2>
            <p className="leading-relaxed text-sm">We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us, and may include:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Contact Data:</strong> Name, phone number, and email address.</li>
              <li><strong>Device Information:</strong> Details regarding your device (make, model, issue) for diagnostic and repair purposes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">3. How We Use Your Information</h2>
            <p className="leading-relaxed text-sm">We use personal information collected via our website for a variety of business purposes described below:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>To contact you regarding your repair inquiry.</li>
              <li>To provide customer service and respond to your requests.</li>
              <li>To send you administrative information, such as updates on your repair status.</li>
              <li><strong>For Analytics & Advertising:</strong> We may use cookies and tracking technologies (like Google Analytics and Google Ads) to analyze website traffic and deliver relevant advertisements.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">4. Cookies and Tracking Technologies</h2>
            <p className="leading-relaxed text-sm">
              We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. This is essential for Google Ads conversion tracking and remarketing to provide you with a tailored experience. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">5. Data Privacy in Repairs</h2>
            <p className="leading-relaxed text-sm">
              At LPCARE.TECH, we deeply respect your digital privacy. During hardware diagnostics and repairs (such as motherboard micro-soldering), your personal data stored on the device's storage drive remains completely untouched and confidential. We strictly adhere to a <strong>"No Data Snooping"</strong> policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-secondary tracking-tight uppercase">6. Contact Us</h2>
            <p className="leading-relaxed text-sm">If you have questions or comments about this notice, you may contact us at:</p>
            <div className="bg-background p-6 rounded-xl border border-secondary/10 mt-4">
              <p className="text-sm font-bold text-secondary mb-1">LPCARE.TECH</p>
              <p className="text-sm">Noida sec-168 chhapraoli, Near SK Homes, Pincode 201305</p>
              <p className="text-sm">Email: <a href="mailto:Lpcaretech@gmail.com" className="text-accent font-semibold hover:underline">Lpcaretech@gmail.com</a></p>
              <p className="text-sm">Phone: +91 8557065447</p>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}