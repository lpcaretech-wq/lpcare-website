// src/app/page.tsx
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

// --- NEW ICONIC COMPONENTS ---
import TestimonialSlider from '@/components/TestimonialSlider';
import TrustedBy from '@/components/TrustedBy';
import CTABanner from '@/components/CTABanner';

// JSON-LD Schema for SEO
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Laptop Screen Replacement Noida",
      "provider": { "@type": "ComputerStore", "name": "LPCARE.TECH" },
      "areaServed": { "@type": "City", "name": "Noida" },
      "description": "High-quality physical laptop screen replacement with OEM panels in Noida."
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Chip-level Motherboard Repair",
      "provider": { "@type": "ComputerStore", "name": "LPCARE.TECH" },
      "areaServed": { "@type": "State", "name": "Delhi NCR" },
      "description": "Expert micro-soldering and logic board repair for dead laptops."
    }
  ]
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-main selection:bg-secondary/10 selection:text-secondary">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. NEW: Trusted By Ticker (B2B Trust Signal) */}
      <TrustedBy />

      {/* 3. Business Metrics */}
      <section className="py-16 px-6 bg-background border-b border-primary relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary">
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-black text-secondary">10K+</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-text-main/60">Repaired</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-black text-secondary">98%</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-text-main/60">Success Rate</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-black text-secondary">24H</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-text-main/60">Turnaround</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-black text-secondary">10+</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-text-main/60">Years Exp.</p>
          </div>
        </div>
      </section>

      {/* 4. Operational Protocol (How It Works) */}
      <section className="py-24 px-6 bg-primary relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Our Repair Process
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-text-main">How We <span className="text-secondary">Work</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-secondary/20 z-0"></div>

            <article className="relative z-10 bg-background border border-secondary/10 p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 border border-secondary/10">01</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Hardware Check</h3>
              <p className="text-text-main/70 text-sm font-light leading-relaxed">Drop off at our Noida facility or schedule a secure Delhi NCR pickup. Initial physical inspection begins.</p>
            </article>

            <article className="relative z-10 bg-background border border-secondary/10 p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 border border-secondary/10">02</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Micro-Repair</h3>
              <p className="text-text-main/70 text-sm font-light leading-relaxed">We focus on component-level fixes like motherboard soldering and screen swaps to save you heavy costs.</p>
            </article>

            <article className="relative z-10 bg-background border border-secondary/10 p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 border border-secondary/10">03</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Stress Test</h3>
              <p className="text-text-main/70 text-sm font-light leading-relaxed">After hardware benchmarks, your device is handed back with a service warranty and data intact.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="relative py-24 px-6 bg-background border-y border-primary z-10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-text-main">
              LAPTOP HARDWARE <span className="text-secondary">REPAIR.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Screen Replacement"
              description="Cracked displays physically replaced with OEM compatible panels. Professional bezel seating."
              sysCode="Hardware"
              isPremium={true}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            />
            <ServiceCard 
              title="Battery & Power"
              description="Swollen battery extraction, new installation, and physical soldering for broken DC Jacks."
              sysCode="Power"
              isPremium={true}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            />
            <ServiceCard 
              title="Motherboard Repair"
              description="Chip-level repairs, liquid damage cleaning, and component-level rework on logic boards."
              sysCode="Component"
              isPremium={true}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            />
          </div>
        </div>
      </section>

      {/* 6. NEW: Animated Testimonial Slider */}
      <section className="py-24 px-6 bg-primary z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-text-main">
              Customer <span className="text-secondary">Feedback</span>
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* 7. Liquid Damage Alert Section */}
      <section className="relative py-16 px-6 bg-[#FFF5F5] border-y border-[#FED7D7]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-wider mb-2">Liquid Spill or Fall?</h2>
            <p className="text-gray-600 font-light max-w-xl">Disconnect power immediately. Bring it for immediate physical cleaning to prevent permanent board failure.</p>
          </div>
          <a href="tel:+918557065447" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full tracking-widest uppercase shadow-md flex items-center gap-2 transition-all">
            Call Emergency Expert
          </a>
        </div>
      </section>

      {/* 8. Dynamic FAQ */}
      <FAQ />

      {/* 9. NEW: FINAL CTA BANNER (Universal) */}
      <CTABanner />
      
    </div>
  );
}