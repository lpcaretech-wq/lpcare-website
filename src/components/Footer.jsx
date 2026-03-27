// src/components/Footer.jsx
"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary relative overflow-hidden border-t border-accent/20">
      
      {/* Subtle Premium Background Glow */}
      <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Section - Updated with Stylish Logo Container */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              {/* STYLISH LOGO CONTAINER 👇 */}
              {/* Humne ek Pearl Beige (bg-background) circle banaya hai shadow aur border ke sath */}
              <div className="bg-background w-20 h-20 rounded-full flex items-center justify-center p-3 shadow-premium border border-secondary/5 group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/logo/lpcaretech.png" 
                  alt="LPCARE.TECH Logo" 
                  width={150} 
                  height={50} 
                  className="w-auto h-auto object-contain" 
                  // Yahan humne filters hata diye hain kyunki background ab light hai
                />
              </div>
            </Link>
            <p className="text-primary/60 text-sm leading-relaxed font-medium">
              Delhi NCR's premium hardware diagnostic and repair laboratory. We specialize in chip-level micro-soldering, ensuring your devices are restored with original OEM parts and strict data privacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black text-primary/40 uppercase tracking-[0.2em] mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-primary/80 hover:text-accent transition-colors font-medium">Home</Link></li>
              <li><Link href="/services" className="text-sm text-primary/80 hover:text-accent transition-colors font-medium">Our Services</Link></li>
              <li><Link href="/about" className="text-sm text-primary/80 hover:text-accent transition-colors font-medium">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-primary/80 hover:text-accent transition-colors font-medium">Book Diagnostics</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-xs font-black text-primary/40 uppercase tracking-[0.2em] mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-sm text-primary/80 hover:text-accent transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-sm text-primary/80 hover:text-accent transition-colors font-medium">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="text-sm text-primary/80 hover:text-accent transition-colors font-medium">Refund Policy</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-primary/80 hover:text-accent transition-colors font-medium">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xs font-black text-primary/40 uppercase tracking-[0.2em] mb-6">Connect</h3>
            <ul className="space-y-4 text-sm text-primary/80 font-medium">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Noida sec-168 chhapraoli,<br/>Near SK Homes, Pincode 201305</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+918557065447" className="hover:text-accent transition-colors">+91 8557065447</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:Lpcaretech@gmail.com" className="hover:text-accent transition-colors">Lpcaretech@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary/40 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} LPCARE.TECH. All rights reserved.
          </p>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary/50 hover:text-accent hover:border-accent cursor-pointer transition-all duration-300">
               <span className="text-[10px] font-bold">IG</span>
             </div>
             <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary/50 hover:text-accent hover:border-accent cursor-pointer transition-all duration-300">
               <span className="text-[10px] font-bold">FB</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}