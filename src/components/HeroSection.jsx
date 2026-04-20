// src/components/HeroSection.jsx
"use client";
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function HeroSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse movement maps to side-angled isometric rotations
  const rotateX = useTransform(y, [-300, 300], [55, 65]); 
  const rotateZ = useTransform(x, [-300, 300], [-45, -25]); 

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function resetMouse() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-background text-text-main overflow-hidden px-6 pb-16 pt-20" aria-label="Main Hero Section">
      
      {/* Soft Minimalist Glow */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[150px] z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8 w-full">
        
        {/* Left Side: Premium Copywriting */}
        <div className="flex-1 text-center lg:text-left z-20">
          
          {/* SEO Optimized H2 for Location Targeting */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-primary border border-accent/20 shadow-premium px-5 py-2.5 rounded-full mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
            </span>
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-secondary m-0">
              Delhi NCR's Premium Hardware Lab
            </h2>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl xl:text-[4.5rem] font-black leading-[1.1] tracking-tighter mb-6 text-text-main uppercase"
          >
            DEAD LAPTOP? <br />
            <span className="text-accent">
              WE RESTORE IT.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-text-main/80 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
          >
            Say no to local 'jugaad'. We bring dead motherboards and shattered displays back to life with <strong className="text-secondary font-black">chip-level micro-soldering</strong> and <strong className="text-secondary font-black">Data Privacy Respected</strong>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-12"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-secondary tracking-wide uppercase">
              <svg aria-hidden="true" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              OEM Parts
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-secondary tracking-wide uppercase">
              <svg aria-hidden="true" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Data Secure
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-secondary tracking-wide uppercase">
              <svg aria-hidden="true" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Fast Turnaround
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <a href="tel:+918557065447" className="bg-secondary text-primary hover:bg-black font-bold py-4 px-8 rounded-full tracking-[0.1em] uppercase text-sm transition-all duration-300 shadow-premium hover:shadow-2xl hover:-translate-y-1 text-center flex items-center justify-center gap-2">
              <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call Hardware Expert
            </a>
            <a href="/contact" className="bg-primary border border-accent/30 hover:border-secondary text-secondary font-bold py-4 px-8 rounded-full transition-all duration-300 tracking-[0.1em] uppercase text-sm text-center shadow-sm hover:shadow-premium flex items-center justify-center gap-2">
              Book Free Diagnostics
              <span className="text-lg leading-none" aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: 3D Side/Isometric Premium Laptop Animation */}
        <div 
          className="flex-1 w-full max-w-2xl aspect-square flex items-center justify-center relative z-10 hidden md:flex"
          style={{ perspective: "1500px" }} 
          onMouseMove={handleMouse}
          onMouseLeave={resetMouse}
        >
          {/* Main 3D Container rotated isometrically */}
          <motion.div 
            style={{ rotateX, rotateZ, transformStyle: "preserve-3d" }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ type: "tween", duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-48"
          >
            {/* Soft Shadow underneath */}
            <div className="absolute inset-0 bg-black/15 blur-2xl rounded-2xl" style={{ translateZ: -60, transform: "scale(1.15)" }}></div>

            {/* --- LAPTOP BASE (Keyboard Deck) --- */}
            <div className="absolute inset-0 bg-[#E5E5EA] border border-[#FFFFFF] rounded-2xl shadow-xl flex flex-col items-center justify-end p-2 pb-4" style={{ transformStyle: "preserve-3d" }}>
               
               {/* Recessed Keyboard Area */}
               <div className="w-[85%] h-[55%] bg-[#D1D1D6] rounded-md shadow-inner p-1.5 grid grid-cols-7 gap-1">
                  {[...Array(28)].map((_, i) => (
                    <div key={i} className={`bg-[#F9F9FB] rounded-[2px] shadow-sm ${i === 14 ? 'border border-[#8E8E93]/30' : ''}`}></div>
                  ))}
               </div>
               
               {/* Trackpad */}
               <div className="w-[35%] h-[20%] bg-[#D1D1D6] rounded-md shadow-inner mt-2"></div>

               {/* Base Side Edges (Gives 3D Thickness to the base) */}
               <div className="absolute top-full left-0 w-full h-1.5 bg-[#C7C7CC] rounded-b-2xl" style={{ transformOrigin: "top", rotateX: -90 }}></div>
               <div className="absolute top-0 -left-1.5 w-1.5 h-full bg-[#FFFFFF] rounded-l-2xl" style={{ transformOrigin: "right", rotateY: -90 }}></div>
            </div>

            {/* --- LAPTOP SCREEN LID --- */}
            <div 
              className="absolute bottom-full left-0 w-full h-52 bg-[#E5E5EA] border-x border-t border-[#FFFFFF] rounded-t-2xl shadow-2xl"
              style={{ 
                 transformOrigin: "bottom", 
                 rotateX: -105, // Angled slightly back
                 transformStyle: "preserve-3d"
              }}
            >
              {/* Inner Screen Bezel & Display */}
              <div className="absolute inset-1.5 bg-[#1A1A1A] rounded-t-xl rounded-b-sm p-1.5 flex flex-col" style={{ transformStyle: "preserve-3d" }}>
                 <div className="w-full h-full bg-[#000000] border border-[#333333] rounded-md relative overflow-hidden flex flex-col justify-center items-center shadow-inner">
                    
                    {/* Minimal Scanning Glow */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30 shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-[scan_3s_ease-in-out_infinite]"></div>
                    
                    {/* Premium Boot Screen */}
                    <div className="w-8 h-8 border border-white/60 rounded-full flex items-center justify-center mb-3 relative">
                      <div className="w-2.5 h-2.5 bg-white/80 rounded-full animate-pulse shadow-[0_0_10px_#FFF]"></div>
                      <svg aria-hidden="true" className="absolute w-12 h-12 text-white/10 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="1" strokeDasharray="4 4" /></svg>
                    </div>
                    <div className="text-white/60 font-mono text-[7px] tracking-widest font-bold">SYSTEM DIAGNOSTICS</div>
                 </div>
              </div>

              {/* Lid Top Edge (Thickness) */}
              <div className="absolute bottom-full left-0 w-full h-1 bg-[#FFFFFF] rounded-t-xl" style={{ transformOrigin: "bottom", rotateX: 90 }}></div>
            </div>

            {/* Floating Premium Badge */}
            <motion.div 
              className="absolute -top-4 -right-12"
              style={{ translateZ: 80, transformStyle: "preserve-3d" }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-primary/90 backdrop-blur-md border border-accent/20 px-4 py-2 rounded-full shadow-premium flex items-center gap-2">
                <svg aria-hidden="true" className="w-3.5 h-3.5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-[9px] font-black text-secondary uppercase tracking-widest">Diagnostics Running</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}