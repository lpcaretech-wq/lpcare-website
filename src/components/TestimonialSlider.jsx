// src/components/TestimonialSlider.jsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { 
    letter: 'R', 
    name: 'Rahul M.', 
    location: 'Noida, Sector 62', 
    text: 'Authorized center told me the motherboard was dead and quoted very high. These guys fixed the shorted hardware component for a fraction of the cost.' 
  },
  { 
    letter: 'S', 
    name: 'Sneha K.', 
    location: 'South Delhi', 
    text: 'Dropped my laptop and the hinges broke. Local shops used cheap glue which failed. LPCARE rebuilt the physical mounts properly. Solid work.' 
  },
  { 
    letter: 'V', 
    name: 'Vikram S.', 
    location: 'Gurugram', 
    text: 'Spilled coffee on my keyboard. Thought it was over. Physical cleaning and a replaced keyboard module saved my laptop.' 
  },
  { 
    letter: 'A', 
    name: 'Amit P.', 
    location: 'Greater Noida', 
    text: 'Enterprise fleet support is top-notch. They repaired 15 of our office laptops in record time with zero data loss.' 
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Changes every 4 seconds
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[280px] sm:h-[220px] overflow-hidden rounded-2xl bg-primary border border-secondary/10 shadow-premium p-6 md:p-10">
        
        {/* Background Quotes Icon watermark */}
        <div className="absolute -top-4 -right-4 text-secondary/5 text-9xl font-serif pointer-events-none">
          "
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full flex flex-col justify-between relative z-10"
          >
            {/* Stars */}
            <div className="flex gap-1 text-secondary mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-text-main/80 text-sm md:text-base italic mb-6 leading-relaxed font-medium">
              "{testimonials[currentIndex].text}"
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-bold text-lg border border-secondary/20 shadow-sm">
                {testimonials[currentIndex].letter}
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-main uppercase tracking-wide">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[10px] text-text-main/50 uppercase tracking-widest mt-0.5">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index 
                ? "w-8 h-2.5 bg-secondary shadow-[0_0_10px_rgba(var(--secondary),0.5)]" 
                : "w-2.5 h-2.5 bg-secondary/20 hover:bg-secondary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}