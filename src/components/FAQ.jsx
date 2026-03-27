// src/components/FAQ.jsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Aapke Business ke liye sabse zyada pooche jane wale questions
  const faqs = [
    {
      question: "Do you charge for hardware diagnostics?",
      answer: "Our initial physical inspection is completely free. If your device requires deep motherboard-level diagnostics (micro-soldering testing), we will inform you of any minimal diagnostic fee before proceeding."
    },
    {
      question: "Will my data be safe during a dead motherboard repair?",
      answer: "Absolutely. We follow a strict 'No Data Snooping' policy. Your data remains untouched on your storage drive during the hardware repair process. However, we always recommend keeping a backup."
    },
    {
      question: "How long does a chip-level repair usually take?",
      answer: "Standard repairs like screen or battery replacements take 24-48 hours. Complex chip-level motherboard repairs can take 3 to 5 business days depending on the severity of the damage and OEM part availability."
    },
    {
      question: "Do you use original (OEM) parts for replacements?",
      answer: "Yes, we strictly use original equipment manufacturer (OEM) or the highest-grade equivalent parts to ensure the longevity and premium performance of your restored device."
    },
    {
      question: "Is LPCARE.TECH an authorized Apple or HP service center?",
      answer: "We are a premium independent hardware laboratory. This allows us to perform component-level repairs (like fixing a single chip) rather than forcing you to buy a highly expensive, entirely new motherboard as authorized centers often do."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // 👇 GOOGLE SEO FAQ SCHEMA GENERATOR 👇
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Injecting SEO Schema into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary border border-secondary/10 px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Clear Your Doubts
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-secondary uppercase tracking-tight"
          >
            Frequently Asked <span className="text-accent">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary border border-secondary/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-sm md:text-base font-bold text-secondary tracking-wide pr-8">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border ${activeIndex === index ? 'border-accent bg-accent/10 text-accent' : 'border-secondary/20 text-secondary/50'} flex items-center justify-center transition-colors duration-300`}>
                  <svg 
                    className={`w-4 h-4 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-sm text-text-main/70 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}