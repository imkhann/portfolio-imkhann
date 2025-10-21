// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <body className="antialiased bg-[var(--bg)] text-[var(--text)] font-sans">
        {/* Tambahkan style.css lewat link, tapi dengan suppress lint */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/style.css" />

        <Header />
        {children}
        <Footer />

        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
