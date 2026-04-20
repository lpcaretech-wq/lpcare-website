// src/app/privacy-policy/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | LPCARE.TECH",
  description: "Read the privacy policy of LPCARE.TECH. We strictly maintain data privacy during our physical hardware repairs and micro-soldering services.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-text-main py-24 px-6 relative selection:bg-secondary/10 selection:text-secondary">
      <div className="max-w-4xl mx-auto bg-primary border border-secondary/10 p-8 md:p-14 rounded-3xl shadow-sm">
        
        <div className="mb-12 border-b border-secondary/10 pb-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
            Legal Compliance
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Privacy <span className="text-secondary">Policy</span></h1>
          <p className="text-text-main/60 text-sm font-medium">Last Updated: April 2026</p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-text-main/80">
          
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">1. Introduction & Scope</h2>
            <p className="mb-4">
              Welcome to LPCARE.TECH. We are an independent physical hardware diagnostic and micro-soldering laboratory. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website or bring your device to our laboratory for physical repairs.
            </p>
            <p className="p-4 bg-background border-l-4 border-l-secondary rounded-r-lg font-medium text-xs">
              <strong className="uppercase">Notice:</strong> We do not provide remote technical support, software troubleshooting, or online helpdesk services. Our services are strictly limited to physical hardware interventions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">2. Information We Collect</h2>
            <p className="mb-3">When you book a hardware diagnostic or contact us, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-main/70">
              <li><strong>Contact Details:</strong> Full name, email address, phone number, and physical address for pickup/drop-off.</li>
              <li><strong>Device Information:</strong> Hardware model, serial number, and physical symptoms of the device.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">3. Device Data Privacy (No Snooping Policy)</h2>
            <p>
              Your data security is our highest priority. As a hardware repair laboratory, our focus is strictly on the physical components of your device (motherboard, screen, battery). We follow a strict "No Snooping" protocol. We do not access, copy, or browse the personal files, photos, or documents stored on your hard drive unless explicitly requested by you for data recovery purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">4. How We Use Your Information</h2>
            <p className="mb-3">The information collected is used solely for:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-main/70">
              <li>Scheduling hardware diagnostics and physical repair appointments.</li>
              <li>Communicating updates regarding the repair status of your physical device.</li>
              <li>Processing billing and warranty for hardware components replaced.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">5. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We are an independent entity and do not share your lead data with major manufacturers (OEMs) or software technical support agencies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">6. Contact Information</h2>
            <p>
              If you have any questions about this physical hardware repair Privacy Policy, please contact our laboratory at:
            </p>
            <p className="mt-3 font-bold text-text-main/90">
              Email: Lpcaretech@gmail.com<br/>
              Phone: +91 8557065447<br/>
              Address: Noida sec-168 chhapraoli, Near SK Homes, UP, 201305
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