// src/components/Navbar.jsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-primary/95 backdrop-blur-md border-b border-secondary/10 text-text-main sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section - Logo ka size bada (h-10 md:h-16) kar diya gaya hai */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" onClick={closeMenu} className="flex items-center cursor-pointer">
              <Image 
                src="/logo/lpcaretech.png" 
                alt="LPCARE.TECH Logo" 
                width={250} 
                height={80} 
                priority 
                // Yahan h-8 md:h-12 se badhakar h-10 md:h-16 kar diya hai (Mobile par thoda bada, desktop par kaafi bada)
                className="w-auto h-10 md:h-16 object-contain hover:opacity-90 transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <Link href="/" className="text-text-main/70 hover:text-secondary transition-colors font-bold text-xs uppercase tracking-[0.15em]">Home</Link>
            <Link href="/services" className="text-text-main/70 hover:text-secondary transition-colors font-bold text-xs uppercase tracking-[0.15em]">Services</Link>
            <Link href="/about" className="text-text-main/70 hover:text-secondary transition-colors font-bold text-xs uppercase tracking-[0.15em]">About</Link>
            <Link href="/contact" className="text-text-main/70 hover:text-secondary transition-colors font-bold text-xs uppercase tracking-[0.15em]">Contact Us</Link>
            
            {/* Call Button */}
            <a href="tel:+918557065447" className="relative group bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-[0.15em] uppercase overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                CALL NOW
              </span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-main/70 hover:text-secondary focus:outline-none z-50 relative transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-primary border-b border-secondary/10 overflow-hidden shadow-sm"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link href="/" onClick={closeMenu} className="block px-3 py-4 text-text-main/80 hover:text-secondary hover:bg-background rounded-md font-bold text-sm uppercase tracking-widest transition-colors">Home</Link>
              <Link href="/services" onClick={closeMenu} className="block px-3 py-4 text-text-main/80 hover:text-secondary hover:bg-background rounded-md font-bold text-sm uppercase tracking-widest transition-colors">Services</Link>
              <Link href="/about" onClick={closeMenu} className="block px-3 py-4 text-text-main/80 hover:text-secondary hover:bg-background rounded-md font-bold text-sm uppercase tracking-widest transition-colors">About</Link>
              <Link href="/contact" onClick={closeMenu} className="block px-3 py-4 text-text-main/80 hover:text-secondary hover:bg-background rounded-md font-bold text-sm uppercase tracking-widest transition-colors">Contact Us</Link>
              
              <div className="pt-4 pb-2">
                <a href="tel:+918557065447" onClick={closeMenu} className="flex items-center justify-center gap-2 w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-4 rounded-full tracking-[0.15em] uppercase text-sm shadow-sm transition-colors">
                  CALL FOR REPAIR
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}