// src/app/enterprise-support/page.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EnterpriseSupport() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "3e6b6c0e-c53d-48a9-b6ce-f4c3c4b80fe1"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      });
      
      const result = await response.json();
      
      if (result.success) {
        window.location.href = "/thank-you"; 
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
  };

  return (
    <div className="min-h-screen bg-background text-text-main selection:bg-secondary/10 selection:text-secondary relative pb-12">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Copywriting */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left pt-4"
          >
            <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Enterprise-Grade Hardware Lab
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-text-main mb-6 leading-[1.1]">
              PREMIUM <br />
              <span className="text-secondary">HARDWARE LAB.</span>
            </h1>

            <p className="text-text-main/70 text-sm md:text-lg font-medium leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Trusted by corporations and individual professionals. Our Noida lab specializes in micro-soldering, dead motherboard recovery, and high-quality physical component replacements.
            </p>

            {/* DIRECT CTA BUTTONS - ONLY ONCE HERE */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 justify-center lg:justify-start">
              <a href="tel:+918557065447" className="bg-secondary text-primary hover:bg-black font-bold py-3.5 px-8 rounded-full tracking-[0.1em] uppercase text-xs transition-all duration-300 shadow-premium flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Lab Expert
              </a>
              <a href="https://wa.me/918557065447?text=Hi%20LPCARE%20Lab!%20I%20would%20like%20to%20book%20a%20hardware%20diagnostic." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-green-600 font-bold py-3.5 px-8 rounded-full tracking-[0.1em] uppercase text-xs transition-all duration-300 shadow-premium flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
                WhatsApp Lab
              </a>
            </div>

            <div className="bg-primary/50 border border-secondary/10 rounded-2xl p-6 shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <p className="text-sm text-text-main/80 font-medium"><strong>B2B Fleet Support:</strong> Optimized for corporate IT assets.</p>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <p className="text-sm text-text-main/80 font-medium"><strong>Premium Individual Care:</strong> For pro users & personal devices.</p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary border border-secondary/10 p-6 sm:p-10 rounded-3xl shadow-2xl relative"
          >
            <div className="absolute -top-4 -right-4 bg-accent text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg z-20">
              Lab Registration
            </div>
            
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-1">Book Hardware <span className="text-secondary">Diagnostics</span></h2>
            <p className="text-[11px] md:text-xs text-text-main/60 mb-6 font-medium">Secure handling for corporate & personal hardware.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="subject" value="URGENT: Premium Lab Booking (B2B/B2C)" />
              
              <div>
                <input type="text" name="name" required className="w-full bg-background border border-secondary/10 rounded-xl px-4 py-3 text-sm text-text-main focus:border-accent outline-none" placeholder="Name / Company Name *" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" name="email" required className="w-full bg-background border border-secondary/10 rounded-xl px-4 py-3 text-sm text-text-main focus:border-accent outline-none" placeholder="Email Address *" />
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-sm font-medium text-text-main/60">+91</span>
                  <input type="tel" name="phone" required onInput={handlePhoneInput} pattern="[0-9]{10}" maxLength="10" className="w-full bg-background border border-secondary/10 rounded-xl pl-12 pr-4 py-3 text-sm text-text-main focus:border-accent outline-none" placeholder="Phone Number *" />
                </div>
              </div>

              <div>
                <textarea name="message" rows={3} required className="w-full bg-background border border-secondary/10 rounded-xl px-4 py-3 text-sm text-text-main focus:border-accent outline-none resize-none" placeholder="Describe the physical hardware issue... *"></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="policy_consent" required className="mt-1 w-4 h-4 text-accent border-secondary/30 rounded" />
                <label htmlFor="policy_consent" className="text-[10px] md:text-[11px] text-text-main/70 leading-relaxed font-medium cursor-pointer">
                  I understand this is an independent physical hardware lab. No remote software/tech support is provided.
                </label>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-black text-xs md:text-sm tracking-[0.15em] uppercase transition-all duration-300 shadow-premium flex items-center justify-center gap-2 ${isSubmitting ? "bg-secondary/50 text-primary cursor-not-allowed" : "bg-secondary text-primary hover:bg-black"}`}>
                {isSubmitting ? "Processing..." : "Submit Lab Inquiry"}
              </button>

              {submitStatus === "error" && (
                <p className="text-red-800 text-[10px] font-bold text-center uppercase">Network Error. Please call us.</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Compliance Notice */}
      <div className="mt-10 text-center border-t border-secondary/10 pt-6 px-4 max-w-4xl mx-auto">
         <p className="text-[9px] sm:text-[10px] text-text-main/50 uppercase tracking-widest leading-relaxed font-bold bg-primary p-4 rounded-lg">
           Independent hardware facility. We do NOT provide remote consumer software assistance. All inquiries are for physical hardware inspection and micro-soldering only.
         </p>
      </div>

    </div>
  );
}