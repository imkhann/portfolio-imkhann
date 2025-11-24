# Portfolio Website – Imam Muhannad

Repository ini berisi website portfolio lengkap yang dirancang sebagai representasi profesional dari kompetensi dalam pengembangan web, analisis data, desain visual, serta pengalaman organisasi dan kegiatan kampus. Website ini dibangun sebagai pusat informasi terstruktur yang memudahkan siapa pun menilai kemampuan teknis maupun kreativitas secara langsung melalui karya nyata yang ditampilkan.

Seluruh halaman dan komponen visual dirancang agar memiliki alur yang konsisten dan mudah dinavigasi. Fokus utama situs ini adalah menampilkan karya dan pengalaman secara jujur, rapi, dan jelas, bukan sekadar menonjolkan tampilan.

---

## Teknologi Utama

### Next.js 15 (App Router)

Menjadi fondasi arsitektur website. Struktur App Router dimanfaatkan untuk efisiensi routing, performa, dan pembagian komponen client/server yang terukur.

### React Components

Semua elemen dibangun dengan pendekatan modular. Komponen seperti header, navbar, drawer, footer, gallery grid, dan komponen embed digunakan ulang untuk menjaga konsistensi visual dan memudahkan pemeliharaan.

### TailwindCSS + Custom CSS

Tailwind digunakan sebagai sistem styling utama untuk kecepatan dan kemudahan skalabilitas. Beberapa animasi dan interaksi UI tetap memakai custom CSS untuk mempertahankan gaya visual yang sudah direncanakan dari awal.

### Embed Interaktif

Website ini menampilkan berbagai konten eksternal tanpa mengorbankan proporsi media asli, termasuk:

* Tableau Public untuk dashboard data interaktif
* YouTube video player
* Instagram Reels dan Feed
* Google Drive video preview

---

## Struktur Halaman Utama

### 1. Home (Landing Page)

Menampilkan identitas singkat, bidang keahlian utama, navigasi cepat, dan hero section untuk memberikan gambaran profesional sejak tampilan pertama.

### 2. Tentang Saya

Ringkasan latar belakang dan pendekatan kerja, ditulis untuk memberi konteks terhadap kemampuan yang ditampilkan pada halaman portfolio.

### 3. Skills

Daftar keahlian yang dikategorikan meliputi:

* Analisis dan visualisasi data
* Frontend development
* Desain grafis
* Business Intelligence
* Publikasi dokumen visual

### 4. Portfolio (Projects Page)

Halaman pusat portofolio dengan tiga kategori utama:

#### a. Dashboard Analytics (Tableau)

Tiga dashboard interaktif ditampilkan dalam ukuran full layout desktop agar tetap akurat secara komposisi dan analisis:

* Dashboard analisis konsumsi dan tagihan air (Isolation Forest)
* Dashboard modul praktikum
* Dashboard final project kelompok

#### b. Desain Grafis

Konten desain dikelompokkan berdasarkan jenis publikasinya:

* Feed Instagram kampus
* Carousel LKMM
* Feed proyek pribadi
* Story IG
* Poster
* Banner
* ID Card
* Sertifikat kegiatan

Semua ditampilkan menggunakan ukuran asli dan tidak dipaksakan responsif penuh.

#### c. Video Dokumentasi

Kumpulan dokumentasi video acara dan kegiatan kampus:

* Reel Instagram
* After Movie KKN
* Dokumentasi kegiatan internal
* Preview Google Drive
* Video publikasi resmi

### 5. Pengalaman

Menampilkan pengalaman organisasi, kepanitiaan, program kegiatan, dan kontribusi nyata dalam event kampus yang disusun dalam format timeline.

### 6. Organisasi

Menampilkan riwayat jabatan dan kontribusi dalam organisasi mahasiswa yang dianggap relevan dengan kompetensi profesional.

### 7. Contact

Halaman sederhana untuk menghubungi pemilik portfolio dengan menyediakan email dan tautan media sosial.

### 8. Navigasi & UI Interaktif

Memanfaatkan header fixed, drawer mobile custom, theme switcher (light/dark), dan interaksi UI yang sudah disesuaikan untuk pengalaman penggunaan yang familiar.

---

## Tujuan Proyek

Website ini dibangun untuk menjadi:

* Portofolio profesional yang layak untuk kebutuhan lamaran kerja maupun presentasi formal
* Dokumentasi terpusat karya visual dan teknis agar mudah dievaluasi oleh HR, dosen, atau klien
* Contoh implementasi Next.js modern dalam pembuatan portfolio tingkat lanjut
* Platform yang menunjukkan kompetensi lintas bidang secara terstruktur dan terbuka
