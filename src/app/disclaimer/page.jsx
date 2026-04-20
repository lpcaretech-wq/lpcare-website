// src/app/disclaimer/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Disclaimer | LPCARE.TECH",
  description: "Legal disclaimer for LPCARE.TECH regarding independent hardware laboratory operations, OEM trademarks, and scope of physical repair services.",
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background text-text-main py-24 px-6 relative selection:bg-secondary/10 selection:text-secondary">
      <div className="max-w-4xl mx-auto bg-primary border border-secondary/10 p-8 md:p-14 rounded-3xl shadow-sm">
        
        <div className="mb-12 border-b border-secondary/10 pb-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
            Legal Compliance
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Legal <span className="text-secondary">Disclaimer</span></h1>
          <p className="text-text-main/60 text-sm font-medium">Last Updated: April 2026</p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-text-main/80">
          
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">1. Independent Laboratory Status</h2>
            <p className="mb-4">
              LPCARE.TECH is a strictly independent, third-party physical hardware diagnostic and micro-soldering laboratory. <strong>We are NOT an authorized service provider, nor are we affiliated with, sponsored by, or endorsed by Apple Inc., Dell Technologies, HP, Lenovo, Asus, Acer, or any other Original Equipment Manufacturer (OEM).</strong>
            </p>
            <p>
              All trademarks, logos, brand names, and product images mentioned on this website are the registered properties of their respective owners. Their use on this website is solely for the purpose of identifying the hardware compatibility of the physical repair services we offer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">2. Strict Scope of Operations</h2>
            <p className="mb-3">To comply strictly with global advertising policies regarding third-party consumer technology support:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-main/70">
              <li>LPCARE.TECH <strong>does not</strong> offer remote technical support, online troubleshooting, or consumer helpdesk services.</li>
              <li>LPCARE.TECH <strong>does not</strong> provide software installation, virus removal, or operating system support.</li>
              <li>All services require the device to be physically present at our laboratory for component-level hardware repair or part replacement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">3. Out-of-Warranty Repairs</h2>
            <p>
              Our physical hardware interventions are designed for devices that are outside their original manufacturer warranty. You acknowledge that having third-party physical repairs, micro-soldering, or hardware replacements performed on your device by LPCARE.TECH may void any remaining official manufacturer warranty.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">4. Limitation of Liability</h2>
            <p>
              While we exercise the highest professional standards in micro-soldering and physical repairs, working with severely damaged hardware (such as liquid-damaged motherboards) carries inherent risks. LPCARE.TECH is not liable for further degradation of a physically unstable device during the diagnostic process, nor are we responsible for any incidental data loss. Data backup remains the sole responsibility of the device owner.
            </p>
          </section>

        </div>
        
        <div className="mt-16 pt-8 border-t border-secondary/10 text-center">
          <Link href="/" className="inline-block text-xs font-bold text-secondary hover:text-text-main uppercase tracking-widest transition-colors">
            &larr; Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}