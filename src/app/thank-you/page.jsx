// src/app/thank-you/page.jsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ThankYouPage() {
  return (
    <div className="min-h-[80vh] bg-background text-text-main flex items-center justify-center relative overflow-hidden px-4 selection:bg-secondary/10 selection:text-secondary">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-xl border border-gray-200/50 p-8 md:p-12 rounded-3xl shadow-2xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
        >
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900">
          Request <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-800">Received!</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium leading-relaxed">
          Thank you for choosing LPCare. Our expert technician will contact you within the next <strong className="text-gray-900">5-10 minutes</strong> to confirm your requirement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link href="/" className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Home
          </Link>
          <a href="tel:+918742981501" className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-bold hover:border-gray-900 hover:bg-gray-50 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
             Call Us Now
          </a>
        </div>
      </motion.div>
    </div>
  );
}