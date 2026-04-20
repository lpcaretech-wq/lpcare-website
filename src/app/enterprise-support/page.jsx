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
    // Live Web3Forms Access Key
    formData.append("access_key", "3e6b6c0e-c53d-48a9-b6ce-f4c3c4b80fe1"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Redirecting to the Thank You page for accurate Google Ads Conversion Tracking
        window.location.href = "/thank-you";
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
  };

  // Structured Data specifically for B2B Corporate IT Services in Noida
  const b2bServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate IT Hardware Diagnostics and Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LPCARE.TECH B2B",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201305"
      }
    },
    "areaServed": ["Noida", "Delhi NCR", "Gurugram"],
    "audience": {
      "@type": "BusinessAudience"
    },
    "description": "Enterprise hardware maintenance and micro-soldering lab for corporate IT fleets."
  };

  return (
    <div className="min-h-screen bg-background text-text-main selection:bg-secondary/10 selection:text-secondary relative">
      
      {/* Injecting B2B Service Schema into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(b2bServiceSchema) }}
      />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Hero Section Split Layout for Lead Generation */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10" aria-label="Corporate IT Services Noida">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Copy and Offers */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8"
          >
            <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Verified B2B IT Partner in Noida
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-text-main mb-6 leading-[1.1]">
              Corporate <span className="text-secondary">IT Asset</span> <br />
              Diagnostics Lab.
            </h1>

            <p className="text-text-main/70 text-base md:text-lg font-medium leading-relaxed mb-8 max-w-lg">
              Outsource your enterprise hardware maintenance to Delhi NCR and Noida's premier micro-soldering lab. We specialize in logic board rework for corporate fleets, effectively reducing your IT procurement costs.
            </p>

            {/* B2B Offers Section */}
            <div className="bg-primary/50 border border-secondary/20 rounded-2xl p-6 mb-8 shadow-sm">
              <h3 className="text-sm font-black text-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                Exclusive Corporate Offers
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-secondary/10 p-1 rounded-md text-secondary"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                  <p className="text-sm text-text-main/80 font-medium"><strong>Free Initial Fleet Audit:</strong> Complimentary diagnostics for your first 5 enterprise workstations.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-secondary/10 p-1 rounded-md text-secondary"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                  <p className="text-sm text-text-main/80 font-medium"><strong>15% Off AMC:</strong> Flat discount on Annual Maintenance Contracts for 50 or more devices.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-secondary/10 p-1 rounded-md text-secondary"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                  <p className="text-sm text-text-main/80 font-medium"><strong>Priority SLA:</strong> Dedicated account manager with 24 to 48 hour turnaround time in Noida.</p>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                 <div className="w-10 h-10 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-secondary">B2B</div>
                 <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-xs font-bold text-accent">IT</div>
                 <div className="w-10 h-10 rounded-full bg-primary border-2 border-background flex items-center justify-center text-xs font-bold">✓</div>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-text-main/60">Trusted by 50+ Enterprises</p>
            </div>
          </motion.div>

          {/* Right Side: Lead Generation Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary border border-secondary/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative"
          >
            <div className="absolute -top-4 -right-4 bg-accent text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg z-20 animate-bounce">
              Fast Response
            </div>
            
            <h2 className="text-2xl font-black uppercase tracking-tight mb-2">Claim Your <span className="text-secondary">Corporate Offer</span></h2>
            <p className="text-sm text-text-main/60 mb-8 font-medium">Fill details to get a custom quote and free fleet audit in Noida.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="subject" value="URGENT: New B2B Lead from Landing Page Offers" />
              <input type="hidden" name="from_name" value="Enterprise B2B Page" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div>
                <label className="block text-[10px] font-bold text-text-main/60 uppercase tracking-[0.15em] mb-1.5">Company Name *</label>
                <input type="text" name="company" required className="w-full bg-background border border-secondary/10 rounded-lg px-4 py-3 text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="e.g. Acme Corp Pvt Ltd" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-text-main/60 uppercase tracking-[0.15em] mb-1.5">Contact Person *</label>
                <input type="text" name="name" required className="w-full bg-background border border-secondary/10 rounded-lg px-4 py-3 text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Your Name and Designation" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-bold text-text-main/60 uppercase tracking-[0.15em] mb-1.5">Work Email *</label>
                  <input type="email" name="email" required className="w-full bg-background border border-secondary/10 rounded-lg px-4 py-3 text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-text-main/60 uppercase tracking-[0.15em] mb-1.5">Corporate Phone *</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-sm font-medium text-text-main/60">+91</span>
                    <input type="tel" name="phone" required onInput={handlePhoneInput} pattern="[0-9]{10}" maxLength="10" className="w-full bg-background border border-secondary/10 rounded-lg pl-10 pr-4 py-3 text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="10-digit number" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-text-main/60 uppercase tracking-[0.15em] mb-1.5">Hardware Fleet Size and Requirement *</label>
                <textarea name="message" rows={3} required className="w-full bg-background border border-secondary/10 rounded-lg px-4 py-3 text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-none transition-all" placeholder="e.g. Need diagnostics for 20 Dell Latitude workstations..."></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-black text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-premium flex items-center justify-center gap-2 ${isSubmitting ? "bg-secondary/50 text-primary cursor-not-allowed" : "bg-secondary text-primary hover:bg-black hover:-translate-y-1"}`}>
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Submit B2B Inquiry"
                )}
              </button>

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg mt-2 text-center" role="alert">
                  <p className="text-red-800 text-[10px] sm:text-xs font-bold tracking-[0.1em] uppercase">Network Error. Please call us directly.</p>
                </div>
              )}
              
              {/* Google Ads Strict Compliance Disclaimer */}
              <div className="mt-4 text-[9px] sm:text-[10px] text-text-main/50 leading-relaxed text-center border-t border-secondary/10 pt-4">
                <strong>Policy Compliance:</strong> Services are strictly for registered businesses, corporate entities, and IT fleets. We do NOT provide technical support or consumer technology repairs to individuals.
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Why Partner With Us Value Props below fold */}
      <section className="py-16 px-6 bg-primary/50 border-t border-secondary/10" aria-label="Corporate IT Advantages">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 mx-auto bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Data Security Compliant</h4>
            <p className="text-xs text-text-main/60">Strict corporate protocols for physical hardware handling.</p>
          </div>
          <div>
            <div className="w-12 h-12 mx-auto bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Micro-Soldering Lab</h4>
            <p className="text-xs text-text-main/60">Component-level logic board rework to save replacement costs.</p>
          </div>
          <div>
            <div className="w-12 h-12 mx-auto bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Cost Effective</h4>
            <p className="text-xs text-text-main/60">Special B2B pricing and billing terms for bulk IT hardware in Noida.</p>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons Call and WhatsApp */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        
        {/* Floating Call Button */}
        <a 
          href="tel:+918557065447" 
          className="w-14 h-14 bg-secondary text-primary rounded-full flex items-center justify-center shadow-premium hover:scale-110 transition-all duration-300 group relative"
          aria-label="Call Us"
        >
          <span className="absolute right-16 bg-primary text-text-main text-xs font-bold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-secondary/10 shadow-sm pointer-events-none">
            Call Corporate Sales
          </span>
          <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        </a>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/918557065447?text=Hello%20LPCARE,%20we%20want%20to%20know%20more%20about%20your%20Corporate%20IT%20Hardware%20Offers." 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-premium hover:scale-110 transition-all duration-300 group relative"
          aria-label="WhatsApp Us"
        >
          <span className="absolute right-16 bg-primary text-text-main text-xs font-bold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-secondary/10 shadow-sm pointer-events-none">
            B2B WhatsApp
          </span>
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
        </a>

      </div>

    </div>
  );
}