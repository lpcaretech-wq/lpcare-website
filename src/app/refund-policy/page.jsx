// src/app/refund-policy/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Refund Policy | LPCARE.TECH",
  description: "Read the refund and warranty policy for LPCARE.TECH's physical hardware repair services and component replacements.",
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background text-text-main py-24 px-6 relative selection:bg-secondary/10 selection:text-secondary">
      <div className="max-w-4xl mx-auto bg-primary border border-secondary/10 p-8 md:p-14 rounded-3xl shadow-sm">
        
        <div className="mb-12 border-b border-secondary/10 pb-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-secondary/5 text-secondary px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
            Legal Compliance
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Refund <span className="text-secondary">Policy</span></h1>
          <p className="text-text-main/60 text-sm font-medium">Last Updated: April 2026</p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-text-main/80">
          
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">1. General Policy Overview</h2>
            <p>
              At LPCARE.TECH, we provide physical hardware diagnostic and micro-soldering services. Due to the labor-intensive nature of chip-level repairs, labor charges are strictly non-refundable once a successful physical repair has been executed and the device is handed back to the customer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">2. "No Fix, No Fee" Condition</h2>
            <p>
              If you bring your device for a hardware issue and our laboratory determines that the physical logic board is beyond economical repair, or if our micro-soldering attempt is unsuccessful, you will not be charged the primary repair labor fee. Any pre-agreed minimal diagnostic fee or shipping costs, however, remain non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">3. Physical Parts Warranty & Returns</h2>
            <p className="mb-3">For physical components replaced by our laboratory (e.g., display panels, batteries, keyboards):</p>
            <ul className="list-disc pl-6 space-y-2 text-text-main/70">
              <li>A limited replacement warranty is provided, the duration of which is specified on your invoice.</li>
              <li>If the specific replaced part fails due to a manufacturing defect within the warranty period, we will physically replace it at no additional cost.</li>
              <li><strong>No Cash Refunds:</strong> We do not offer cash refunds for physical parts. Defective parts will be replaced.</li>
              <li>The warranty is immediately voided if the device suffers subsequent physical damage, liquid spills, or tampering by another party.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">4. Non-Refundable Services</h2>
            <p>
              We do not provide software technical support. Any issues related to operating system crashes, software bugs, lost passwords, or viruses occurring after a successful hardware repair are entirely unrelated to our services and do not qualify for a refund of the hardware repair costs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary mb-4">5. Claiming a Warranty Service</h2>
            <p>
              To claim a warranty replacement for a defective part, you must bring the device back to our physical laboratory in Noida along with the original printed or digital invoice. Remote claims are not accepted.
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