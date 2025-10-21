// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Portfolio – Imam Muhannad",
  description: "Data Analyst • Web Developer • Visual Designer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`scroll-smooth ${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* CSS kustom kamu */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className="antialiased bg-[var(--bg)] text-[var(--text)] font-sans">
        {/* JS lama tetap jalan setelah halaman interaktif */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
