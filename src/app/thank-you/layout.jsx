// src/app/thank-you/layout.jsx

export const metadata = {
  title: "Request Received | LPCARE.TECH",
  description: "Thank you for contacting LPCARE.TECH. Our hardware diagnostic team will get back to you shortly.",
  robots: {
    // CRITICAL: Hum is page ko Google search mein index nahi hone denge taaki false conversions record na hon.
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({ children }) {
  return <section className="thank-you-layout-wrapper w-full h-full">{children}</section>;
}