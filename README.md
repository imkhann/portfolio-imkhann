# Portfolio – Imam Muhannad

Website ini merupakan versi modern dari portfolio pribadi Imam Muhannad. Dibangun menggunakan Next.js dengan struktur modular agar mudah dikembangkan dan dikelola. Tujuannya adalah menampilkan pengalaman, keterampilan, serta hasil karya dengan tampilan profesional dan mudah diakses.

## Struktur Proyek

portfolio-imkhann/
│
├── public/
│ ├── assets/
│ │ ├── css/style.css
│ │ ├── js/main.js
│ │ └── img/
│ │ └── portfolio/
│ │ ├── dashboard/
│ │ ├── poster/
│ │ ├── idc/
│ │ ├── feed/
│ │ └── video/
│
├── src/
│ ├── app/
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ └── globals.css
│ └── components/
│ ├── header.tsx
│ └── footer.tsx
│
└── README.md

## Instalasi

1. Pastikan Node.js dan npm sudah terpasang.
2. Clone repository:
   ```bash
   git clone https://github.com/imkhann/portfolio-imkhann.git
   cd portfolio-imkhann
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
4. Jalankan mode pengembangan:
   ```bash
   npm run dev
   ```
   Lalu buka http://localhost:3000 di browser.

## Build dan Deploy
Untuk build versi produksi:
```bash
npm run build
```
Menjalankan hasil build:
```bash
npm start
```
Deploy manual ke GitHub:
```bash
git add -A
git commit -m "update portfolio"
git push origin main
```
Versi produksi dideploy menggunakan Vercel.

## Teknologi yang Digunakan
- Next.js 15 (App Router)
- Tailwind CSS untuk layout dan utilitas
- Font Inter dan Montserrat dari Google Fonts
- JavaScript tambahan melalui main.js
- Hosting dan build otomatis di Vercel

## Komponen Utama
### layout.tsx
Mengatur struktur global halaman, memanggil Header dan Footer, serta memuat font dan script global.

### header.tsx
Navigasi utama situs dengan tautan menuju setiap bagian halaman. Termasuk kontrol tema terang/gelap dan drawer menu untuk tampilan seluler.

### footer.tsx
Bagian penutup halaman dengan tautan unduhan CV dan navigasi kembali ke bagian atas halaman.

## Section Halaman
### Hero
Menampilkan nama, profesi, dan pengantar singkat tentang Imam Muhannad.

### Tentang Saya
Berisi ringkasan perjalanan dan ketertarikan dalam teknologi, analisis data, dan desain visual.

### Skills
Menampilkan keahlian teknis dan pendukung dalam empat kategori utama: analisis data, pengembangan web, desain visual, dan soft skills.

### Portfolio
Menampilkan tiga kategori karya utama:

#### Dashboard Analitik
Cuplikan dashboard dari proyek skripsi “Pengembangan Business Intelligence Dashboard untuk Deteksi Anomali Pola Konsumsi Air dengan Isolation Forest”. Dashboard ini menampilkan analisis pola konsumsi air, deteksi anomali, dan visualisasi interaktif berbasis business intelligence.

#### Desain Grafis
Beberapa karya visual dari kegiatan organisasi:
- Poster KPUM 2024 sebagai media publikasi pendaftaran calon BEM dan HIMA.
- ID Card LKMM-TM 2023 digunakan sebagai identitas panitia acara.
- Feed Instagram KKN Bolodewo untuk publikasi kegiatan sosial universitas.

#### Dokumentasi Video
Preview After Movie KKN Bolodewo yang merangkum seluruh kegiatan KKN dari awal hingga penutupan.

### Pengalaman Organisasi
Menampilkan daftar organisasi dan peran aktif dalam bidang publikasi, desain, serta dokumentasi.

### Pendidikan
Riwayat pendidikan dari SMK hingga perguruan tinggi, termasuk partisipasi dalam program MSIB Data Analyst.

### Kontak
Berisi tautan langsung ke LinkedIn, Instagram, WhatsApp, Telegram, dan email resmi.

## Lisensi
Seluruh kode berada di bawah lisensi MIT.
Semua gambar, desain, dan video merupakan karya pribadi Imam Muhannad dan tidak diperkenankan digunakan ulang tanpa izin.
