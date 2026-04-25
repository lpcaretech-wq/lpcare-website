// src/components/BookingForm.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm({ 
  title = "Get A Quick Estimate", 
  subtitle = "Enter your details and our lab technician will call you in 5 minutes.",
  subject = "New General Lead",
  buttonText = "Request Call Back",
  showEmail = false, 
  isPremium = false 
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(event.target);
    // Universal Web3Forms Key
    formData.append("access_key", "3e6b6c0e-c53d-48a9-b6ce-f4c3c4b80fe1"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // --- GOOGLE ADS CONVERSION TRACKING (UPDATED) ---
        // Naya "Doorstep Lead Form" Conversion Label
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag('event', 'conversion', {
              'send_to': 'AW-18044724364/bIVQCOuSq6IcEIzJspxD', // <-- Updated Label
              'value': 1.0,
              'currency': 'INR'
          });
        }

        setSubmitStatus("success");
        event.target.reset();
        
        // Success ke baad Thank You page par redirect
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 8000); 
    }
  };

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl shadow-2xl p-6 md:p-8 relative ${isPremium ? 'bg-primary border border-secondary/20' : 'bg-white border-[3px] border-gray-50'}`}
    >
      {/* Visual Indicator */}
      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap shadow-md ${isPremium ? 'bg-secondary text-primary' : 'bg-gray-900 text-white'}`}>
        Priority Support
      </div>
      
      <h3 className={`text-2xl font-black text-center mt-4 mb-2 tracking-tight ${isPremium ? 'text-text-main uppercase' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`text-center mb-6 text-sm ${isPremium ? 'text-text-main/60' : 'text-gray-500'}`}>
        {subtitle}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="subject" value={subject} />
        
        <div>
          <input 
            type="text" 
            name="name" 
            required 
            className={`w-full px-4 py-4 rounded-xl outline-none transition-all font-medium border ${isPremium ? 'bg-background border-secondary/10 text-text-main focus:border-secondary' : 'bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900'}`} 
            placeholder="Your Name / Company" 
          />
        </div>

        {showEmail && (
          <div>
            <input 
              type="email" 
              name="email" 
              required 
              className={`w-full px-4 py-4 rounded-xl outline-none transition-all font-medium border ${isPremium ? 'bg-background border-secondary/10 text-text-main focus:border-secondary' : 'bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900'}`} 
              placeholder="Email Address *" 
            />
          </div>
        )}

        <div className="relative flex items-center">
          <span className={`absolute left-4 font-bold ${isPremium ? 'text-text-main/50' : 'text-gray-500'}`}>+91</span>
          <input 
            type="tel" 
            name="phone" 
            required 
            minLength="10" 
            maxLength="10" 
            pattern="[0-9]{10}"
            onInput={handlePhoneInput}
            className={`w-full pl-14 pr-4 py-4 rounded-xl outline-none transition-all font-medium text-lg tracking-wider border ${isPremium ? 'bg-background border-secondary/10 text-text-main focus:border-secondary' : 'bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900'}`} 
            placeholder="Mobile Number *" 
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl font-black shadow-xl transition-all flex justify-center items-center gap-2 disabled:opacity-70 text-lg mt-2 ${isPremium ? 'bg-secondary text-primary hover:bg-white tracking-widest uppercase text-sm' : 'bg-gray-900 hover:bg-black text-white'}`}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
               Connecting...
            </span>
          ) : (
            buttonText
          )}
        </button>

        {submitStatus === "success" && (
          <div className="bg-green-50/10 border border-green-500/30 text-green-500 p-3 rounded-lg text-center text-sm font-bold flex justify-center items-center gap-2 mt-4">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 13 4 4L19 7" /></svg>
             Lead Recorded! Calling you back...
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="bg-red-50/10 border border-red-500/30 text-red-500 p-3 rounded-lg text-center text-sm font-bold mt-4">
            Submission failed. Please call us directly!
          </div>
        )}
      </form>
    </motion.div>
  );
}