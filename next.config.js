/** @type {import('next').NextConfig} */
const onVercel = !!process.env.VERCEL
const isProd = process.env.NODE_ENV === 'production'
const repo = 'portfolio-imkhann' // GANTI kalau beda, tapi ya ini namanya

const nextConfig = {
  output: 'export',                 // KUNCI: static export
  images: { unoptimized: true },    // Tanpa server image optimizer
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true               // Hasil export jadi folder/index.html
}

module.exports = {
  output: !onVercel && isProd ? 'export' : undefined,
  images: { unoptimized: !onVercel && isProd },
  basePath: !onVercel && isProd ? `/${repo}` : '',
  assetPrefix: !onVercel && isProd ? `/${repo}/` : '',
  trailingSlash: !onVercel && isProd ? true : false
}