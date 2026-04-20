// src/app/doorstep-repair/page.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DoorstepLandingPage() {
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
        window.location.href = "/thank-you"; // Redirect to track Ads Conversion
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
    <div className="min-h-screen bg-background text-text-main relative overflow-hidden selection:bg-secondary/10 selection:text-secondary pb-12">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none z-0"></div>

      {/* Main Hero Section with Form (Above the Fold) */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Side: Copywriting & Trust */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-1 lg:order-none"
          >
            <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Free Doorstep Pickup 
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black uppercase tracking-tighter text-text-main mb-4 md:mb-6 leading-[1.15]">
              DEAD LAPTOP? <br />
              <span className="text-secondary text-[1.75rem] sm:text-3xl md:text-4xl xl:text-5xl block mt-1 md:mt-2">WE FIX IT FROM HOME.</span>
            </h1>

            <p className="text-text-main/70 text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
              Independent physical hardware lab specializing in micro-soldering, broken screens, and dead motherboards. Book a free pickup across Delhi NCR.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 mb-8">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-text-main/80 uppercase tracking-wide">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                No Fix, No Fee
              </div>
              <div className="hidden sm:block text-secondary/50">•</div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-text-main/80 uppercase tracking-wide">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                OEM Hardware
              </div>
            </div>

            {/* Direct CTA Buttons on Mobile & Desktop - ONLY ONCE */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="tel:+918557065447" className="w-full sm:w-auto bg-secondary text-primary hover:bg-black font-bold py-3.5 md:py-4 px-6 md:px-8 rounded-full tracking-[0.1em] uppercase text-xs transition-all duration-300 shadow-premium flex items-center justify-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Lab Expert
              </a>
              <a href="https://wa.me/918557065447?text=Hi%20LPCARE%20Lab!%20I%20need%20to%20book%20a%20Doorstep%20Laptop%20Pickup.%20Please%20share%20the%20details." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-green-600 font-bold py-3.5 md:py-4 px-6 md:px-8 rounded-full tracking-[0.1em] uppercase text-xs transition-all duration-300 shadow-premium flex items-center justify-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Right Side: High Converting Lead Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary border border-secondary/10 p-6 sm:p-8 rounded-3xl shadow-2xl relative order-2 lg:order-none"
          >
            <div className="absolute -top-3 -right-2 md:-top-4 md:-right-4 bg-accent text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg z-20 animate-bounce">
              Book Pickup Now
            </div>
            
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-1">Schedule <span className="text-secondary">Pickup</span></h2>
            <p className="text-[11px] md:text-xs text-text-main/60 mb-5 md:mb-6 font-medium">Fast, secure, and purely physical hardware diagnostics.</p>

            <form onSubmit={handleSubmit} className="space-y-3.5 md:space-y-4">
              <input type="hidden" name="subject" value="URGENT: Doorstep Pickup Lead from Ads" />
              <input type="hidden" name="from_name" value="Doorstep Landing Page" />
              
              <div>
                <input type="text" name="name" required className="w-full bg-background border border-secondary/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Your Full Name *" />
              </div>

              <div>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-sm font-medium text-text-main/60">+91</span>
                  <input type="tel" name="phone" required onInput={handlePhoneInput} pattern="[0-9]{10}" maxLength="10" className="w-full bg-background border border-secondary/10 rounded-xl pl-12 pr-4 py-3 md:py-3.5 text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Mobile Number *" />
                </div>
              </div>

              <div className="relative">
                <select name="issue_type" required defaultValue="" className="w-full bg-background border border-secondary/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none cursor-pointer">
                  <option value="" disabled>Select Physical Hardware Issue *</option>
                  <option value="Dead Motherboard">Dead Motherboard / Won't Turn On</option>
                  <option value="Broken Screen">Shattered Display / Screen Panel</option>
                  <option value="Battery/Charging">Battery / Charging Port Issue</option>
                  <option value="Liquid Damage">Liquid Spill / Water Damage</option>
                  <option value="Keyboard/Trackpad">Broken Keyboard / Trackpad</option>
                </select>
                {/* Custom mobile-friendly down arrow for select */}
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-text-main/40">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              <div>
                <input type="text" name="address" required className="w-full bg-background border border-secondary/10 rounded-xl px-4 py-3 md:py-3.5 text-sm text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="City & Locality (e.g., Sec 62, Noida) *" />
              </div>

              <div className="flex items-start gap-3 pt-1 pb-2">
                <input type="checkbox" id="policy_consent" required className="mt-0.5 w-4 h-4 text-accent border-secondary/30 rounded focus:ring-accent" />
                <label htmlFor="policy_consent" className="text-[10px] md:text-[11px] text-text-main/70 leading-relaxed font-medium cursor-pointer">
                  I understand this is an independent hardware lab. No remote software/tech support is provided.
                </label>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-black text-xs md:text-sm tracking-[0.15em] uppercase transition-all duration-300 shadow-premium flex items-center justify-center gap-2 ${isSubmitting ? "bg-secondary/50 text-primary cursor-not-allowed" : "bg-secondary text-primary hover:bg-black hover:-translate-y-1"}`}>
                {isSubmitting ? "Processing Request..." : "Request Doorstep Pickup"}
              </button>

              {submitStatus === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-center mt-2">
                  <p className="text-red-800 text-[10px] font-bold tracking-[0.1em] uppercase">Network Error. Please Call or WhatsApp.</p>
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-primary/30 border-y border-secondary/10 relative z-10" aria-label="How it works">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-10 md:mb-12">How Doorstep <span className="text-secondary">Repair Works</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-secondary/20 z-0"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary border-2 border-secondary text-secondary rounded-full flex items-center justify-center mb-4 text-lg md:text-xl font-black shadow-premium">1</div>
              <h3 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Book a Pickup</h3>
              <p className="text-[11px] md:text-xs text-text-main/60 max-w-[250px] md:max-w-xs text-center">Our runner will securely pick up your damaged laptop directly from your location.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary border-2 border-secondary text-secondary rounded-full flex items-center justify-center mb-4 text-lg md:text-xl font-black shadow-premium">2</div>
              <h3 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Lab Diagnostics</h3>
              <p className="text-[11px] md:text-xs text-text-main/60 max-w-[250px] md:max-w-xs text-center">Device arrives at our Noida lab for physical micro-soldering and hardware replacement.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary border-2 border-accent text-accent rounded-full flex items-center justify-center mb-4 text-lg md:text-xl font-black shadow-premium">3</div>
              <h3 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Safe Return Drop</h3>
              <p className="text-[11px] md:text-xs text-text-main/60 max-w-[250px] md:max-w-xs text-center">Once physically repaired and tested, the device is securely delivered back to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strict Ads Policy Legal Disclaimer */}
      <div className="mt-10 text-center pt-4 pb-6 max-w-4xl mx-auto px-4 relative z-10">
         <p className="text-[9px] sm:text-[10px] text-text-main/50 uppercase tracking-widest leading-relaxed font-bold border border-secondary/10 bg-primary/80 p-4 md:p-5 rounded-xl shadow-sm">
           Independent Physical Hardware Repair Laboratory. We are not officially affiliated with Apple, Dell, HP, or Lenovo. We do NOT provide remote software technical support, virus removal, or consumer helpdesk services.
         </p>
      </div>

    </div>
  );
}