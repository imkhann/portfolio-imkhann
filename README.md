# 🌐 Portfolio – Imam Muhannad

Proyek ini merupakan website **personal portfolio** yang dikembangkan menggunakan **Next.js** (React Framework) dengan **TypeScript** dan **Tailwind CSS**.  
Website ini menampilkan profil, keahlian, pengalaman, pendidikan, serta proyek-proyek yang pernah dikerjakan oleh **Imam Muhannad** — seorang *Data Analyst • Web Developer • Visual Designer*.

---

## ✨ Fitur Utama

- **Tampilan Responsif**  
  Desain menyesuaikan ukuran layar (mobile, tablet, desktop) dengan layout yang tetap rapi dan ringan.
- **Navigasi Dinamis & Smooth Scrolling**  
  Transisi antar section halus dan mudah diakses.
- **Mode Tema (Light/Dark)**  
  Pengguna dapat mengubah tema sesuai preferensi visual.
- **Formulir Kontak Terintegrasi**  
  Form dikirim melalui [Formspree](https://formspree.io), memudahkan pengunjung untuk menghubungi langsung.
- **Ikon Sosial Interaktif**  
  Termasuk LinkedIn, Instagram, Email, Telepon, WhatsApp, dan Telegram.
- **Struktur Data Profesional**  
  Section terorganisir: Tentang, Skills, Portfolio, Pengalaman, Organisasi, Pendidikan, dan Kontak.
- **Optimasi Gambar Modern (WebP)**  
  Gambar menggunakan format `.webp` agar ringan dan cepat dimuat.

---

## 🧩 Teknologi yang Digunakan

| Kategori | Teknologi |
|-----------|------------|
| **Framework Utama** | [Next.js 15+](https://nextjs.org/) |
| **Bahasa Pemrograman** | TypeScript |
| **Frontend Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Runtime Environment** | Node.js |
| **Deployment** | [Vercel](https://vercel.com/) |
| **Form Handling** | [Formspree](https://formspree.io) |

---

## 🏗️ Struktur Proyek

```
portfolio-imkhann/
├── public/
│   ├── assets/
│   │   └── img/
│   │       ├── hero/
│   │       │   └── imam-standing.webp
│   │       └── icons/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── page.tsx           # Halaman utama (Home)
│   │   ├── globals.css        # Global style
│   │   ├── layout.tsx         # Root layout Next.js
│   │   └── components/        # Komponen tambahan (jika ada)
│   └── styles/
│       └── style.css
├── .gitignore
├── README.md
├── next.config.mjs
├── package.json
└── tsconfig.json
```

---

## ⚙️ Cara Instalasi & Menjalankan Proyek

### 1. Clone Repository
```bash
git clone https://github.com/username/portfolio-imkhann.git
cd portfolio-imkhann
```

### 2. Install Dependencies
Pastikan **Node.js LTS** sudah terpasang (disarankan versi ≥ 18).  
Lalu jalankan:
```bash
npm install
```

### 3. Jalankan Server Development
```bash
npm run dev
```
Website akan tersedia di:  
👉 `http://localhost:3000`

### 4. Build untuk Produksi
```bash
npm run build
npm start
```

---

## 🚀 Deployment ke Vercel

1. Buat akun di [Vercel](https://vercel.com/).  
2. Hubungkan repository GitHub kamu.  
3. Vercel akan otomatis mendeteksi proyek Next.js dan melakukan deployment.  
4. Setelah proses selesai, website akan bisa diakses melalui domain:  
   ```
   https://portfolio-imkhann.vercel.app
   ```

---

## 📄 Struktur Halaman

| Section | Deskripsi |
|----------|------------|
| **Home** | Menampilkan nama, deskripsi singkat, dan foto. |
| **Tentang Saya** | Cerita singkat mengenai latar belakang dan minat di bidang teknologi, data, serta visual. |
| **Skills** | Menampilkan daftar kemampuan teknis dan pendukung yang relevan. |
| **Portfolio** | Proyek-proyek pilihan yang menunjukkan hasil kerja dan keahlian. |
| **Pengalaman** | Riwayat pengalaman kerja dan magang. |
| **Organisasi** | Kegiatan organisasi dan posisi yang pernah diemban. |
| **Pendidikan** | Latar belakang akademik dan pelatihan profesional. |
| **Kontak** | Formulir pesan dan tautan sosial (LinkedIn, Instagram, Email, Telepon, WhatsApp, Telegram). |

---

## 🎨 Desain & UX

Website ini dibuat dengan pendekatan minimalis dan fokus pada **keterbacaan, hierarki visual, serta kesederhanaan interaksi**.  
Setiap elemen menggunakan sistem **Tailwind utility class** agar performa tetap cepat tanpa file CSS besar.

---

## 💡 Tujuan Proyek

Portfolio ini dibuat sebagai:
- Representasi profesional dari kemampuan Imam Muhannad di bidang *Data Analysis, Web Development, dan Visual Design*.
- Media untuk menampilkan proyek, pengalaman, dan hasil karya secara interaktif.
- Bukti kemampuan mengimplementasikan framework modern dalam pengembangan web.

---

## 👤 Profil Pembuat

**Imam Muhannad**  
Data Analyst • Web Developer • Visual Designer  
📍 Surabaya, Indonesia  
📧 [imammuhannad.gg@gmail.com](mailto:imammuhannad.gg@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/imam-muhannad/) | [Instagram](https://instagram.com/imkhann_) | [Telegram](https://t.me/imkhann)

---

## 🪪 Lisensi

Proyek ini dilisensikan di bawah **MIT License** — bebas digunakan dan dimodifikasi dengan tetap mencantumkan kredit pembuat asli.

---

> “Menggabungkan data, desain, dan teknologi untuk menghadirkan karya visual yang informatif, fungsional, dan mudah dipahami.”
