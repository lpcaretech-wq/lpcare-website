// src/components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary pt-20 pb-10 px-6 relative z-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand and Contact Information */}
          <div className="space-y-6">
            <Link href="/" className="inline-block text-2xl font-black tracking-tighter text-text-main">
              LPCARE<span className="text-secondary">.TECH</span>
            </Link>
            <p className="text-text-main/70 text-sm font-medium leading-relaxed max-w-xs">
              Delhi NCR's premium physical hardware diagnostic and repair laboratory. We specialize in chip-level micro-soldering and strict data privacy.
            </p>
            <div className="space-y-3 pt-2">
              <a href="tel:+918557065447" className="flex items-center gap-3 text-text-main/80 hover:text-secondary transition-colors text-sm font-bold">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 8557065447
              </a>
              <a href="mailto:Lpcaretech@gmail.com" className="flex items-center gap-3 text-text-main/80 hover:text-secondary transition-colors text-sm font-bold">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Lpcaretech@gmail.com
              </a>
              <div className="flex items-start gap-3 text-text-main/80 text-sm font-bold">
                <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Noida sec-168 chhapraoli,<br/>Near SK Homes, Pincode 201305</span>
              </div>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-text-main mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-text-main/70 hover:text-secondary transition-colors font-medium">Home</Link></li>
              <li><Link href="/services" className="text-sm text-text-main/70 hover:text-secondary transition-colors font-medium">Our Services</Link></li>
              <li><Link href="/enterprise-support" className="text-sm text-secondary hover:text-text-main transition-colors font-bold">Corporate B2B Support</Link></li>
              <li><Link href="/about" className="text-sm text-text-main/70 hover:text-secondary transition-colors font-medium">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-text-main/70 hover:text-secondary transition-colors font-medium">Book Diagnostics</Link></li>
            </ul>
          </div>

          {/* Hyper-Local SEO Service Areas */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-text-main mb-6 flex items-center gap-2">
               Service Areas
               <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            </h3>
            <ul className="space-y-4">
              <li><Link href="/locations/noida" className="text-sm text-text-main/70 hover:text-secondary transition-colors font-medium">Repair in Noida</Link></li>
              <li><Link href="/locations/delhi" className="text-sm text-text-main/70 hover:text-secondary transition-colors font-medium">Repair in Delhi NCR</Link></li>
              <li><Link href="/locations/greater-noida" className="text-sm text-text-main/70 hover:text-secondary transition-colors font-medium">Repair in Greater Noida</Link></li>
              <li><Link href="/locations/ghaziabad" className="text-sm text-text-main/70 hover:text-secondary transition-colors font-medium">Repair in Ghaziabad</Link></li>
            </ul>
          </div>

          {/* Legal Compliance Navigation */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-text-main mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-sm text-text-main/70 hover:text-secondary transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-sm text-text-main/70 hover:text-secondary transition-colors font-medium">Terms and Conditions</Link></li>
              <li><Link href="/refund-policy" className="text-sm text-text-main/70 hover:text-secondary transition-colors font-medium">Refund Policy</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-text-main/70 hover:text-secondary transition-colors font-medium">Disclaimer</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar and Copyright */}
        <div className="border-t border-primary pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-text-main/50 uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} LPCARE.TECH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-main/40 hover:text-secondary transition-colors text-sm font-bold uppercase">IG</a>
            <a href="#" className="text-text-main/40 hover:text-secondary transition-colors text-sm font-bold uppercase">FB</a>
          </div>
        </div>

        {/* Google Ads Compliance Footer Note */}
        <div className="mt-8 text-center border-t border-secondary/10 pt-6">
           <p className="text-[10px] text-text-main/40 uppercase tracking-wide max-w-4xl mx-auto leading-relaxed font-bold">
             Independent Physical Hardware Repair Laboratory. We are not officially affiliated with Apple, Dell, HP, Lenovo or any OEM. We do NOT provide remote software technical support or consumer helpdesk services.
           </p>
        </div>
      </div>
    </footer>
  );
}