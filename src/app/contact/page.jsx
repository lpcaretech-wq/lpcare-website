// src/app/contact/page.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
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
        window.location.href = "/thank-you"; // Form bharne ke baad seedha thank you page par redirect!
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

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden" aria-label="Hardware Repair Booking Page">
      
      {/* Background Soft Glow */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent rounded-full blur-[120px] z-0 pointer-events-none"
      />

      <div className="max-w-6xl w-full relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-primary border border-accent/20 px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-secondary">Hardware Diagnostic Booking</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-text-main uppercase"
          >
            BOOK YOUR <span className="text-accent">REPAIR</span>
          </motion.h1>
          <p className="text-text-main/70 mt-4 max-w-2xl mx-auto font-medium">
            Schedule a physical hardware diagnostic at our Noida lab or request a pickup across Delhi NCR. We specialize exclusively in component-level physical repairs.
          </p>
        </div>

        {/* Main Contact Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="bg-primary rounded-3xl shadow-premium overflow-hidden flex flex-col lg:flex-row border border-secondary/5"
        >
          
          {/* Left Side Information Panel */}
          <div className="bg-secondary text-primary p-10 lg:p-14 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[60px] pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-4 tracking-tight uppercase">Visit Our <br/><span className="text-accent">Laboratory</span></h2>
              <p className="text-primary/70 font-medium mb-12 text-sm leading-relaxed">
                Delhi NCR's premium physical hardware laboratory. We do not provide remote software support. Please bring your device for physical inspection.
              </p>

              <div className="space-y-10">
                {/* Address */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-5 flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold text-primary/50 uppercase tracking-[0.15em] mb-1">Hardware Lab Address</h3>
                    <p className="text-sm font-medium leading-relaxed">
                      Shop LPCARE.TECH<br />
                      Noida sec-168 chhapraoli<br />
                      Near SK Homes<br />
                      UP, Pincode 201305
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-5 flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold text-primary/50 uppercase tracking-[0.15em] mb-1">Contact Diagnostics Team</h3>
                    <p className="text-sm font-medium">+91 8557065447</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-5 flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold text-primary/50 uppercase tracking-[0.15em] mb-1">Email Inquiry</h3>
                    <p className="text-sm font-medium">Lpcaretech@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Hardware Booking Form */}
          <div className="p-10 lg:p-14 lg:w-3/5 bg-primary">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <input type="hidden" name="subject" value="Hardware Diagnostic Request from LPCARE.TECH" />
              <input type="hidden" name="from_name" value="Hardware Lab Website Booking" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-[10px] font-bold text-text-main/60 uppercase tracking-[0.15em] mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength="2"
                    className="w-full bg-background border border-secondary/10 rounded-lg px-5 py-3.5 text-sm text-text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-[10px] font-bold text-text-main/60 uppercase tracking-[0.15em] mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-background border border-secondary/10 rounded-lg px-5 py-3.5 text-sm text-text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="phone" className="block text-[10px] font-bold text-text-main/60 uppercase tracking-[0.15em] mb-2">Phone Number * (10 Digits)</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-sm font-medium text-text-main/60">+91</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      onInput={handlePhoneInput}
                      pattern="[0-9]{10}"
                      title="Please enter exactly 10 digits"
                      maxLength="10"
                      className="w-full bg-background border border-secondary/10 rounded-lg pl-12 pr-5 py-3.5 text-sm text-text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                      placeholder="9876543210"
                    />
                  </div>
                </div>
                <div className="relative">
                  {/* FIX: Removed selected from option and added defaultValue to select */}
                  <label htmlFor="issue_type" className="block text-[10px] font-bold text-text-main/60 uppercase tracking-[0.15em] mb-2">Hardware Issue Type *</label>
                  <select
                    id="issue_type"
                    name="issue_type"
                    required
                    defaultValue=""
                    className="w-full bg-background border border-secondary/10 rounded-lg px-5 py-3.5 text-sm text-text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 appearance-none"
                  >
                    <option value="" disabled>Select Physical Damage</option>
                    <option value="Dead Motherboard / Micro-soldering">Dead Motherboard / Logic Board</option>
                    <option value="Broken Display Screen">Physically Broken Display/Screen</option>
                    <option value="Battery / Charging Port">Battery / Charging Port Failure</option>
                    <option value="Liquid Damage Hardware Cleaning">Liquid Damage Physical Cleaning</option>
                    <option value="Keyboard / Trackpad Replacement">Keyboard / Trackpad Replacement</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-[10px] font-bold text-text-main/60 uppercase tracking-[0.15em] mb-2">Device Details & Symptoms *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  minLength="10"
                  className="w-full bg-background border border-secondary/10 rounded-lg px-5 py-3.5 text-sm text-text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
                  placeholder="E.g. MacBook Pro M1, spilled coffee, device won't turn on..."
                />
              </div>

              {/* Google Ads Compliance: Privacy Policy Consent Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="w-4 h-4 border border-secondary/20 rounded bg-background text-accent focus:ring-accent/50 focus:ring-2 cursor-pointer"
                  />
                </div>
                <label htmlFor="consent" className="text-[11px] text-text-main/70 leading-relaxed cursor-pointer">
                  I agree to the <Link href="/privacy-policy" className="text-accent hover:underline font-semibold">Privacy Policy</Link> and understand that LPCARE.TECH provides independent physical hardware repairs and does not offer remote software technical support.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 py-4 px-8 rounded-full font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-premium hover:shadow-2xl ${
                    isSubmitting ? "bg-secondary/50 text-primary cursor-not-allowed" : "bg-secondary text-primary hover:bg-black hover:-translate-y-1"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      PROCESSING...
                    </>
                  ) : (
                    <>
                      BOOK HARDWARE DIAGNOSTICS
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </>
                  )}
                </button>
              </div>

              {/* Error Message */}
              {submitStatus === "error" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 border border-red-200 rounded-xl mt-4">
                  <p className="text-red-800 text-xs text-center font-bold tracking-[0.1em] uppercase">
                    ⚠ Network error. Please call our hardware lab directly.
                  </p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
        
        {/* Strict Ads Policy Legal Disclaimer Footer */}
        <div className="mt-12 text-center border-t border-secondary/10 pt-6">
           <p className="text-[10px] text-text-main/50 uppercase tracking-wide max-w-4xl mx-auto leading-relaxed font-bold">
             Compliance Notice: This form is exclusively for booking physical hardware diagnostics and logic board micro-soldering. We are an independent repair facility and do not provide remote consumer technical support or software assistance.
           </p>
        </div>
      </div>
    </div>
  );
}