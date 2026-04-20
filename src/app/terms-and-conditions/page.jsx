// src/app/terms-and-conditions/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | LPCARE.TECH",
  description: "Terms of service for LPCARE.TECH hardware laboratory. Read our policies regarding physical repairs, warranties, and independent service operations.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background text-text-main py-24 px-6 relative selection:bg-secondary/10 selection:text-secondary">
      <div className="max-w-4xl mx-auto bg-primary border border-secondary/10 p-8 md:p-14 rounded-3xl shadow-sm">
        
        <div className="mb-12 border-b border-secondary/10 pb-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
            Legal Compliance
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Terms <span className="text-secondary">& Conditions</span></h1>
          <p className="text-text-main/60 text-sm font-medium">Last Updated: April 2026</p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-text-main/80">
          
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">1. Independent Service Provider</h2>
            <p>
              LPCARE.TECH operates as a fully independent physical hardware diagnostic and micro-soldering laboratory. We are NOT affiliated with, authorized by, sponsored by, or endorsed by any Original Equipment Manufacturer (OEM) such as Apple, Dell, HP, Lenovo, or Asus. All trademarks and brand names are the property of their respective owners and are used strictly for compatibility identification purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">2. Scope of Services (Hardware Only)</h2>
            <p className="mb-3">Our laboratory exclusively provides physical hardware interventions. By bringing your device to us, you acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-main/70">
              <li>We perform physical component replacements (e.g., screens, batteries, keyboards).</li>
              <li>We perform chip-level logic board repairs and micro-soldering.</li>
              <li><strong className="text-text-main">We DO NOT provide remote technical support, software troubleshooting, virus removal, or consumer helpdesk services.</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">3. Data Backup Responsibility</h2>
            <p>
              While we strictly adhere to a "No Snooping" policy, hardware repairs inherently carry a risk to storage drives. It is the sole responsibility of the customer to securely back up all data, software, and files prior to handing over the device for physical repair. LPCARE.TECH is not liable for any data loss that occurs during the hardware diagnostic or repair process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">4. "No Fix, No Fee" & Diagnostics</h2>
            <p>
              Our initial physical inspection is free. If a device requires deep micro-soldering diagnostics and is ultimately deemed unrepairable at the hardware level, we operate on a "No Fix, No Fee" basis for the labor, minus any pre-agreed minimal diagnostic or shipping fees which will be communicated beforehand.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">5. Component Warranty</h2>
            <p>
              Physical hardware parts replaced by LPCARE.TECH carry a limited service warranty specific to that component (e.g., a replacement screen). This warranty covers physical hardware defects of the installed part only and does not cover subsequent accidental damage, liquid spills, or separate software failures.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">6. Device Abandonment</h2>
            <p>
              If a physically repaired or diagnosed device is not collected within 60 days of our notification to the customer, it will be considered abandoned. LPCARE.TECH reserves the right to recycle or dispose of the hardware to recover repair and storage costs.
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