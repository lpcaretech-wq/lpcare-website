// src/app/page.tsx
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

// JSON-LD Schema for Specific Services SEO
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Laptop Screen Replacement Noida",
      "provider": {
        "@type": "ComputerStore",
        "name": "LPCARE.TECH"
      },
      "areaServed": {
        "@type": "City",
        "name": "Noida"
      },
      "description": "High-quality physical laptop screen replacement with OEM compatible panels in Noida."
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Chip-level Motherboard Repair",
      "provider": {
        "@type": "ComputerStore",
        "name": "LPCARE.TECH"
      },
      "areaServed": {
        "@type": "State",
        "name": "Delhi NCR"
      },
      "description": "Expert micro-soldering and logic board repair for dead laptops and liquid damage."
    }
  ]
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-main selection:bg-secondary/10 selection:text-secondary">
      
      {/* Injecting Service Schema for Google Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. Top Hero Section */}
      <HeroSection />

      {/* 2. Professional Trust Banner */}
      <section className="border-y border-primary bg-primary relative z-20 shadow-sm" aria-label="Trust Factors">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center md:justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <span className="text-sm font-bold tracking-widest uppercase text-text-main/80">Data Privacy Ensured</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-background"></div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-sm font-bold tracking-widest uppercase text-text-main/80">No Fix, No Fee</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-background"></div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-sm font-bold tracking-widest uppercase text-text-main/80">Quality Spare Parts</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-background"></div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            <span className="text-sm font-bold tracking-widest uppercase text-text-main/80">Service Warranty</span>
          </div>
        </div>
      </section>

      {/* 3. Business Metrics */}
      <section className="py-16 px-6 bg-background border-b border-primary relative z-10" aria-label="Company Metrics">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary">
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-black text-secondary">10K+</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-text-main/60">Laptops Repaired</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-black text-secondary">High</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-text-main/60">Success Rate</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-black text-secondary">24H</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-text-main/60">Avg. Turnaround</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-black text-secondary">10+</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-text-main/60">Years Experience</p>
          </div>
        </div>
      </section>

      {/* 4. Operational Protocol (How It Works) */}
      <section className="py-24 px-6 bg-primary relative z-10" aria-label="Repair Process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Our Repair Process
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-text-main">How We <span className="text-secondary">Work</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-secondary/20 z-0"></div>

            <article className="relative z-10 bg-background border border-secondary/10 p-8 text-center rounded-lg shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-sm border border-secondary/10">01</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider text-text-main">Hardware Check</h3>
              <p className="text-text-main/70 text-sm font-light leading-relaxed">Drop off your laptop at our Noida facility or schedule a secure Delhi NCR pickup. We perform a physical inspection to identify the issue.</p>
            </article>

            <article className="relative z-10 bg-background border border-secondary/10 p-8 text-center rounded-lg shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-sm border border-secondary/10">02</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider text-text-main">Component Repair</h3>
              <p className="text-text-main/70 text-sm font-light leading-relaxed">We focus on physical repairs like screen replacements, battery swaps, and motherboard micro-soldering to save you money.</p>
            </article>

            <article className="relative z-10 bg-background border border-secondary/10 p-8 text-center rounded-lg shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-sm border border-secondary/10">03</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider text-text-main">Secure Delivery</h3>
              <p className="text-text-main/70 text-sm font-light leading-relaxed">After hardware stress testing, your laptop is handed back with your data exactly as you left it, along with a service warranty.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="relative py-24 px-6 bg-background border-y border-primary overflow-hidden z-10" aria-label="Main Services">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-text-main">
              LAPTOP HARDWARE <span className="text-secondary">REPAIR.</span>
            </h2>
            <p className="text-text-main/70 text-base max-w-2xl mx-auto font-light tracking-wide">
              We specialize in physical hardware damage and component replacements. Note: We do not offer remote software technical support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Screen Replacement"
              description="Cracked or bleeding displays physically replaced with high-quality compatible panels. Professional bezel seating."
              sysCode="Hardware"
              delay={0.1}
              isPremium={true}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            />
            <ServiceCard 
              title="Battery & Power"
              description="Swollen battery extraction, new battery installation, and physical soldering for broken charging ports DC Jacks."
              sysCode="Power"
              delay={0.2}
              isPremium={true}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            />
            <ServiceCard 
              title="Motherboard Repair"
              description="Chip-level physical repairs, liquid damage cleaning, and keyboard/trackpad hardware replacement."
              sysCode="Component"
              delay={0.3}
              isPremium={true}
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block text-secondary hover:text-accent font-bold uppercase tracking-widest text-sm transition-colors border-b border-transparent hover:border-accent pb-1">
              [ View All Hardware Services ]
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Liquid Damage Alert */}
      <section className="relative py-16 px-6 bg-[#FFF5F5] border-y border-[#FED7D7] overflow-hidden" aria-label="Emergency Alert">
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm">Quick Advice</h3>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-wider mb-2">Liquid Spill or Fall Damage?</h2>
            <p className="text-gray-600 font-light max-w-xl">Do not try to turn it on or charge it. Bring it in for immediate physical cleaning to prevent further motherboard short-circuits.</p>
          </div>
          <a href="tel:+918557065447" className="shrink-0 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full tracking-[0.1em] uppercase shadow-md transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            Call For Help
          </a>
        </div>
      </section>

      {/* 7. Customer Reviews */}
      <section className="py-24 px-6 bg-background relative z-10" aria-label="Testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-text-main">Customer <span className="text-secondary">Reviews</span></h2>
            <p className="text-text-main/70 mt-4 max-w-xl mx-auto font-light">Real feedback from clients in Delhi NCR who chose our physical repair services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { letter: 'R', name: 'Rahul M.', location: 'Noida, Sector 62', text: 'Authorized center told me the motherboard was dead and quoted very high. These guys fixed the shorted hardware component for a fraction of the cost.' },
              { letter: 'S', name: 'Sneha K.', location: 'South Delhi', text: 'Dropped my laptop and the hinges broke. Local shops used cheap glue which failed. LPCARE rebuilt the physical mounts properly. Solid work.' },
              { letter: 'V', name: 'Vikram S.', location: 'Gurugram', text: 'Spilled coffee on my keyboard. Thought it was over. Physical cleaning and a replaced keyboard module saved my laptop.' }
            ].map((review, index) => (
              <article key={index} className="bg-primary border border-secondary/10 p-8 rounded-lg hover:shadow-lg transition-shadow relative">
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p className="text-text-main/80 text-sm italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-bold">{review.letter}</div>
                  <div>
                    <h4 className="font-bold text-sm text-text-main">{review.name}</h4>
                    <p className="text-[10px] text-text-main/50 uppercase tracking-widest">{review.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Dynamic FAQ Component */}
      <FAQ />

      {/* 9. Service Areas */}
      <section className="py-16 px-6 bg-background border-y border-primary relative z-10" aria-label="Locations Served">
        <div className="max-w-7xl mx-auto text-center">
           <h3 className="text-xl font-black uppercase tracking-widest text-text-main/60 mb-8">Areas We Serve</h3>
           <div className="flex flex-wrap justify-center gap-4">
              {['Noida Storefront', 'Greater Noida', 'Gurugram', 'South Delhi', 'East Delhi', 'Ghaziabad', 'Faridabad'].map((area) => (
                <div key={area} className="px-5 py-2 bg-primary border border-secondary/10 rounded-full text-sm text-text-main/70 uppercase font-medium flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 bg-[#25D366] rounded-full"></span>
                  {area}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 10. Bottom CTA Banner */}
      <section className="relative py-24 px-6 text-center border-t border-primary bg-primary overflow-hidden z-10" aria-label="Call to Action">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-widest text-text-main">
            Need Hardware <span className="text-secondary">Repair?</span>
          </h2>
          <p className="text-text-main/70 mb-10 max-w-xl mx-auto font-light tracking-wide">
            Visit our repair shop in Noida or contact us to check physical part availability and schedule a pickup in Delhi NCR.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+918557065447" className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-widest w-full sm:w-auto flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Contact Us Today
            </a>
            
            <Link href="/contact" className="inline-flex items-center gap-2 text-secondary hover:text-accent font-bold uppercase tracking-widest text-sm transition-colors w-full sm:w-auto justify-center py-4">
              View Store Location <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}