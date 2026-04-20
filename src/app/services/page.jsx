// src/app/services/page.jsx
import Link from 'next/link';

export const metadata = {
  title: 'Hardware Repair Services in Noida | LPCARE.TECH',
  description: 'Independent physical laptop hardware repair in Noida. Screen, battery, keyboard, and motherboard micro-soldering for all major laptops in Delhi NCR.',
};

export default function ServicesPage() {
  // SEO Schema specifically for individual services offered in Noida
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Physical Display Replacement",
        "provider": {
          "@type": "ComputerStore",
          "name": "LPCARE.TECH"
        },
        "areaServed": {
          "@type": "City",
          "name": "Noida"
        },
        "description": "Damaged display panels physically replaced with high-quality OEM-equivalent parts in Noida."
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "PCB Micro-Soldering",
        "provider": {
          "@type": "ComputerStore",
          "name": "LPCARE.TECH"
        },
        "areaServed": {
          "@type": "State",
          "name": "Delhi NCR"
        },
        "description": "Liquid damage physical cleaning, burnt IC replacement, and precision soldering for motherboards."
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Power & Peripherals Repair",
        "provider": {
          "@type": "ComputerStore",
          "name": "LPCARE.TECH"
        },
        "areaServed": {
          "@type": "City",
          "name": "Noida"
        },
        "description": "Swollen battery extraction, broken charging port replacements, and new laptop keyboards installation."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-text-main py-20 px-6 relative overflow-hidden selection:bg-secondary/10 selection:text-secondary">
      
      {/* Injecting Local Service SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Soft Light Theme Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/5 blur-[120px] z-0 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            Professional Hardware Services in Noida
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
            EXPERT <span className="text-secondary">HARDWARE</span> REPAIR
          </h1>
          <p className="text-text-main/70 text-lg max-w-3xl mx-auto font-light tracking-wide">
            We provide fast, reliable, and component-level physical repairs. No remote software support, just pure, hands-on hardware fixes at our lab in Delhi NCR.
          </p>
        </div>

        {/* Detailed Hardware Services List */}
        <div className="space-y-8 mb-24">
          
          {/* Service Item 1: Display Replacement */}
          <article className="group flex flex-col md:flex-row items-start md:items-center gap-8 bg-primary rounded-xl p-8 md:p-10 border border-secondary/10 hover:border-secondary/30 transition-all duration-500 shadow-sm hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
            
            <div className="w-20 h-20 shrink-0 bg-background border border-secondary/20 rounded-lg flex items-center justify-center group-hover:border-secondary/50 transition-colors relative">
              <div className="absolute inset-0 bg-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg aria-hidden="true" className="w-10 h-10 text-secondary transition-colors relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-3 uppercase tracking-wide text-text-main group-hover:text-secondary transition-colors">Physical Display Replacement</h2>
              <p className="text-text-main/70 font-light leading-relaxed">Dead pixels, physically cracked screens, bleeding LCD panels, or broken hinges. We replace damaged display components with high-quality OEM-equivalent physical parts in our Noida facility.</p>
            </div>
          </article>

          {/* Service Item 2: Micro-Soldering */}
          <article className="group flex flex-col md:flex-row items-start md:items-center gap-8 bg-primary rounded-xl p-8 md:p-10 border border-secondary/10 hover:border-secondary/30 transition-all duration-500 shadow-sm hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top delay-75"></div>

            <div className="w-20 h-20 shrink-0 bg-background border border-secondary/20 rounded-lg flex items-center justify-center group-hover:border-secondary/50 transition-colors relative">
              <div className="absolute inset-0 bg-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg aria-hidden="true" className="w-10 h-10 text-secondary transition-colors relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-3 uppercase tracking-wide text-text-main group-hover:text-secondary transition-colors">PCB Micro-Soldering</h2>
              <p className="text-text-main/70 font-light leading-relaxed">Liquid damage physical cleaning, burnt IC replacement, and precision logic board soldering. We diagnose and fix dead laptops at the raw hardware component level.</p>
            </div>
          </article>

          {/* Service Item 3: Power & Peripherals */}
          <article className="group flex flex-col md:flex-row items-start md:items-center gap-8 bg-primary rounded-xl p-8 md:p-10 border border-secondary/10 hover:border-secondary/30 transition-all duration-500 shadow-sm hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top delay-150"></div>

            <div className="w-20 h-20 shrink-0 bg-background border border-secondary/20 rounded-lg flex items-center justify-center group-hover:border-secondary/50 transition-colors relative">
              <div className="absolute inset-0 bg-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg aria-hidden="true" className="w-10 h-10 text-secondary transition-colors relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-3 uppercase tracking-wide text-text-main group-hover:text-secondary transition-colors">Power & Peripherals</h2>
              <p className="text-text-main/70 font-light leading-relaxed">Swollen battery extraction, broken charging port DC Jack physical replacements, and installing new laptop keyboards and precision trackpads.</p>
            </div>
          </article>

        </div>

        {/* Brands Supported Section Google Ads Safe */}
        <section className="bg-primary rounded-xl p-8 md:p-14 border border-secondary/10 text-center relative overflow-hidden shadow-sm" aria-label="Supported Laptop Brands">
          <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-widest text-text-main">Supported Devices</h2>
          <p className="text-text-main/70 mb-10 max-w-2xl mx-auto font-light">
            As an <strong className="text-secondary font-bold">independent service provider</strong>, we possess the tools and expertise for out-of-warranty hardware repairs on all major global architectures.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['All Windows Laptops', 'Apple MacBooks', 'Gaming Laptops', 'Business Notebooks', 'Chromebooks', 'Custom PC Builds'].map((brand) => (
              <span key={brand} className="px-6 py-3 bg-background border border-secondary/10 rounded-full text-xs font-bold tracking-widest text-text-main/60 uppercase hover:border-secondary hover:text-secondary transition-colors cursor-default shadow-sm">
                {brand}
              </span>
            ))}
          </div>

          <div className="p-5 bg-background border border-secondary/20 rounded-lg inline-block text-left max-w-3xl border-l-4 border-l-secondary">
            <p className="text-[11px] text-text-main/60 font-medium leading-relaxed">
              <span className="text-secondary font-bold uppercase block mb-1">Important Disclaimer:</span>
              We are NOT officially affiliated with, authorized by, or endorsed by any major laptop manufacturer. We are a completely independent, third-party hardware repair laboratory specializing in out-of-warranty physical damage.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Link href="/contact" className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-white font-bold py-5 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-widest hover:-translate-y-1 group">
            <svg aria-hidden="true" className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            Schedule Diagnostics
          </Link>
        </div>

      </div>
    </div>
  );
}