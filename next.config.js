/** @type {import('next').NextConfig} */
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
  output: 'export',                 // replaces the old `next export` CLI
  images: { unoptimized: true },    // static export has no image optimizer
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true
}