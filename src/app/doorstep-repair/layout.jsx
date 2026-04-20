// src/app/doorstep-repair/layout.jsx

export const metadata = {
  title: "Doorstep Laptop Hardware Repair | Free Pickup & Drop | LPCARE.TECH",
  description: "Book your doorstep physical laptop hardware repair. We offer free pickup and drop across Delhi NCR. Specialized in dead motherboard and screen replacements.",
  // Agar aap is page ko sirf Ads ke liye use karna chahte hain aur SEO mein nahi laana chahte, toh niche wali 2 lines uncomment kar dein:
  // robots: { index: false, follow: false },
};

export default function DoorstepRepairLayout({ children }) {
  return <section className="doorstep-repair-wrapper w-full h-full">{children}</section>;
}