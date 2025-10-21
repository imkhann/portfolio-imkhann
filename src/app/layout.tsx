// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "@/assets/css/style.css"; // ganti <link> jadi import
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
      <head>{/* tidak ada <link rel="stylesheet"> manual */}</head>
      <body className="antialiased bg-[var(--bg)] text-[var(--text)] font-sans">
        <Header />
        {/* Biarkan page.tsx yang atur <main className="pt-16"> */}
        {children}
        <Footer />

        {/* JS lama tetap jalan setelah halaman interaktif */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
