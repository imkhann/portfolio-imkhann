/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mode Vercel-native: JANGAN pakai output:'export'
  // JANGAN pakai basePath/assetPrefix (itu cuma buat GitHub Pages subpath)
  reactStrictMode: true,
  images: { unoptimized: false }, // biarkan optimizer Vercel bekerja
  trailingSlash: false,

  // Kalau kamu pakai App Router (folder `app/`), ini aman. Tidak perlu setting tambahan.
  // Kalau ada rewrites/redirects aneh di masa lalu, hapus dari config ini dulu.
};

module.exports = nextConfig;
