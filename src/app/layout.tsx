import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Portfolio – Imam Muhannad",
  description: "Creative Enthusiast • Visual Storyteller • Data-minded visuals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Kalau HTML lamamu pakai Google Fonts, taruh link-nya di sini */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="...fonts..." rel="stylesheet" /> */}

        {/* global.css → style.css sesuai permintaanmu */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased">
        {/* JS lama tetap jalan setelah halaman interaktif */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
