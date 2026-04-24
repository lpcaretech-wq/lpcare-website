// src/app/doorstep-repair/page.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// --- NATIVE SVG ICONS (No external library needed) ---
const PhoneCall = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
);
const MessageCircle = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
);
const Star = ({ size = 24, fill = "none", className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);
const ShieldCheck = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);
const Clock = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);
const MapPin = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const CheckCircle2 = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
);
const Monitor = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
);
const Cpu = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
);
// -----------------------------------------------------

export default function DoorstepRepair() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const PHONE_NUMBER = "+918557065447"; 
  const DISPLAY_PHONE = "085570 65447";
  const WHATSAPP_URL = `https://wa.me/918557065447?text=${encodeURIComponent("Hi, I need urgent doorstep laptop repair service.")}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "3e6b6c0e-c53d-48a9-b6ce-f4c3c4b80fe1"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        event.target.reset();
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 1500);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12 font-sans relative">
      
      {/* 🚨 TOP URGENCY ALERT BAR */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-bold flex items-center justify-center gap-2 z-50 relative">
        <span className="animate-pulse">🔴</span> Urgent Repair? Call directly for a free 2-minute estimate!
      </div>

      {/* 📱 MOBILE STICKY CALL BUTTON */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-3 bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.1)] flex gap-2">
        <a 
          href={`tel:${PHONE_NUMBER}`} 
          className="flex-2 bg-blue-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 animate-bounce-slight"
        >
          <PhoneCall size={22} className="animate-pulse" />
          Tap To Call Now
        </a>
        <a 
          href={WHATSAPP_URL} 
          className="flex-1 bg-[#25D366] text-white font-bold py-3.5 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust Badges */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span className="text-sm font-bold text-gray-700">4.9/5 Rating (150+ Repairs in Noida)</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              MacBook or Laptop Dead? We Fix It <span className="text-blue-600 border-b-4 border-blue-600">At Your Home.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
              Don't leave your data at a shop. Get certified hardware repair directly in front of you in Noida, Greater Noida & Ghaziabad.
            </p>
            
            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-xl shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-1"
              >
                <PhoneCall size={24} />
                {DISPLAY_PHONE}
              </a>
              <a 
                href={WHATSAPP_URL}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20b858] text-white text-lg font-bold rounded-xl shadow-xl shadow-green-500/20 transition-all hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                WhatsApp Us
              </a>
            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-800 font-bold bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <span className="flex items-center gap-2"><ShieldCheck className="text-blue-600" size={20}/> No Fix, No Fee</span>
              <span className="flex items-center gap-2"><Clock className="text-blue-600" size={20}/> 60-Min Response</span>
              <span className="flex items-center gap-2"><MapPin className="text-blue-600" size={20}/> Local Lab Experts</span>
            </div>
          </motion.div>

          {/* SUPER SIMPLE BOOKING FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border-[3px] border-gray-50 relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap shadow-md">
              Prefer a Call Back?
            </div>
            
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-2 mt-4">Get A Quick Estimate</h3>
            <p className="text-gray-500 text-center mb-6 text-sm">Enter your number and our technician will call you in 5 minutes.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="subject" value="URGENT: Call Back Request (Doorstep)" />
              
              <div>
                <input type="text" name="name" required className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium" placeholder="Your Name" />
              </div>

              <div>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  minLength="10" 
                  maxLength="10" 
                  pattern="[0-9]{10}"
                  onInput={handlePhoneInput}
                  className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-lg tracking-wider" 
                  placeholder="Mobile Number *" 
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl shadow-xl transition-all flex justify-center items-center gap-2 disabled:opacity-70 text-lg mt-2"
              >
                {isSubmitting ? "Connecting..." : "Request Call Back"}
              </button>

              {submitStatus === "success" && (
                <div className="bg-green-50 text-green-700 p-3 rounded-lg text-center text-sm font-bold flex justify-center items-center gap-2 mt-4">
                  <CheckCircle2 size={18} /> Call scheduled! Redirecting...
                </div>
              )}
            </form>
          </motion.div>
        </div>

        {/* TRUST SIGNALS FOR HARDWARE */}
        <div className="py-8 text-center border-t border-gray-200 opacity-70">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Expert level hardware diagnostics for</p>
          <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
             <span className="font-bold text-gray-400 text-xl flex items-center gap-2"><Monitor size={20}/> Display Panels</span>
             <span className="font-bold text-gray-400 text-xl flex items-center gap-2"><Cpu size={20}/> Logic Boards</span>
             <span className="font-bold text-gray-400 text-xl font-mono">Micro-Soldering</span>
          </div>
        </div>

      </div>
    </div>
  );
}