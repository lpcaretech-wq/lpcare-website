// src/app/enterprise-support/layout.jsx

export const metadata = {
  title: "Corporate IT Asset Diagnostics | LPCARE B2B",
  description: "Exclusive B2B hardware maintenance, micro-soldering, and IT fleet diagnostics for corporate clients. Not for individual consumers.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnterpriseLayout({ children }) {
  // Yahan humne fragment <></> ki jagah <section> use kiya hai taaki component perfectly render ho
  return <section className="enterprise-layout-wrapper">{children}</section>;
}