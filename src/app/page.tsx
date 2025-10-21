export default function Home() {
  return (
    <main className="pt-16">
      {/* ===== Header ===== */}
      <header
        data-site-header
        className="fixed top-0 left-0 right-0 z-[70] border-b border-[var(--line)] bg-[color:var(--glass)] backdrop-blur-md"
      >
        <div className="max-w-[1200px] mx-auto h-16 flex items-center gap-3 px-4 lg:px-6">
          <a href="#home" className="font-heading font-extrabold text-lg leading-none select-none">
            <span className="logo-animate">IMKHANN.</span>
          </a>

          <div className="flex-1" />

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-2">
              <li><a href="#about" className="nav-btn">Tentang saya</a></li>
              <li><a href="#skills" className="nav-btn">Skills</a></li>
              <li><a href="#portfolio" className="nav-btn">Portfolio</a></li>
              <li><a href="#experience" className="nav-btn">Pengalaman</a></li>
              <li><a href="#organization" className="nav-btn">Organisasi</a></li>
              <li><a href="#contact" className="nav-btn">Contact</a></li>
            </ul>
          </nav>

          <button
            id="theme-switch"
            type="button"
            role="switch"
            aria-checked="false"
            aria-label="Ganti tema"
            className="hidden lg:inline-flex relative items-center h-7 w-16 rounded-full border border-[var(--line)] bg-[color:var(--switchRail)] focus-ring"
          >
            <span className="absolute left-2 text-[13px] leading-none select-none">☀️</span>
            <span className="absolute right-2 text-[13px] leading-none select-none">🌙</span>
            <span className="knob absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform will-change-transform" />
          </button>

          <button
            id="hamburger"
            type="button"
            aria-label="Buka menu"
            aria-expanded="false"
            className="ml-2 grid place-items-center lg:hidden w-10 h-10 rounded-md hover:bg-[var(--surface)] focus-ring relative"
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </div>

        <aside id="mobile-drawer" className="fixed inset-0 z-[40] pointer-events-none" aria-hidden="true">
          <div className="drawer-backdrop absolute inset-x-0 top-16 bottom-0 bg-transparent opacity-0 transition-opacity z-[41]" />
          <div
            className="drawer-panel absolute right-3 top-16 w-[260px] md:w-[320px]
            rounded-xl shadow-xl border border-[var(--line)]
            bg-[var(--bg)] z-[55]
            opacity-0 -translate-y-2 transition-all duration-200"
          >
            <nav className="px-4 pb-4">
              <ul className="flex flex-col gap-4 text-[15px]">
                <li><a className="mobile-link" href="#about">Tentang saya</a></li>
                <li><a className="mobile-link" href="#skills">Skills</a></li>
                <li><a className="mobile-link" href="#portfolio">Portfolio</a></li>
                <li><a className="mobile-link" href="#experience">Pengalaman</a></li>
                <li><a className="mobile-link" href="#organization">Organisasi</a></li>
                <li><a className="mobile-link" href="#contact">Contact</a></li>
              </ul>

              <div className="mt-6">
                <button
                  id="theme-switch-mobile"
                  type="button"
                  role="switch"
                  aria-checked="false"
                  aria-label="Ganti tema"
                  className="relative inline-flex items-center h-7 w-16 rounded-full border border-[var(--line)] bg-[color:var(--switchRail)] focus-ring"
                >
                  <span className="absolute left-2 text-[13px] leading-none select-none">☀️</span>
                  <span className="absolute right-2 text-[13px] leading-none select-none">🌙</span>
                  <span className="knob absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform will-change-transform" />
                </button>
              </div>
            </nav>
          </div>
        </aside>
      </header>

      {/* ===== Main ===== */}
      {/* Hero */}
      <section id="home" className="relative overflow-hidden pt-18 lg:pt-16">
        <div className="container-pro relative">
          <div className="flex flex-wrap items-center relative z-10">
            <div className="w-full px-4 lg:w-1/2 self-center">
              <p className="hero-kicker">Halo <span aria-hidden="true">✋</span>, saya</p>
              <h1 className="hero-title font-heading">Imam Muhannad</h1>g
              <h2 className="hero-sub">Data Analyst • Web Developer • Visual Designer</h2>
              <p className="hero-desc">Menggabungkan data, desain, dan teknologi untuk menghadirkan karya visual yang informatif, fungsional, dan mudah dipahami.</p>
              <a href="#contact" className="btn btn-accent focus-ring">Contact Me</a>
            </div>

            <div className="w-full px-4 lg:w-1/2 self-end">
              <div className="relative mt-10 lg:mt-0 flex justify-end">
                <span className="hero-blob" aria-hidden="true" />
                {/* Gambar hero tanpa event handler */}
                <img
                  id="hero-img"
                  src="/assets/img/hero/imam-standing.webp"
                  alt="Imam Muhannad"
                  className="w-auto h-auto max-h-[360px] md:max-h-[420px] lg:max-h-[460px] object-contain select-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang saya */}
      <section id="about" className="container-pro py-12">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"/>
            <path d="M4 21a8 8 0 0 1 16 0"/>
          </svg>
          <h3 className="font-heading text-2xl md:text-3xl font-bold">Tentang saya</h3>
        </div>
        <p className="max-w-[80ch] leading-relaxed text-[var(--text)] space-y-4">
          Ketertarikan pada dunia teknologi berawal dari rasa penasaran sederhana: bagaimana sebuah aplikasi bisa diubah tampilannya atau bahkan perilakunya. Dari situ saya mulai belajar membongkar struktur kode dan memahami logika di balik pengembangannya. Rasa ingin tahu itu akhirnya membawa saya ke dunia pengembangan web dan analisis data.
          <br /><br />
          Walau sempat menempuh jalur yang tidak sepenuhnya sesuai, saya terus mengejar minat di bidang teknologi melalui kegiatan yang berkaitan dengan elektronika, fotografi, dan videografi. Dari sanalah saya belajar memadukan cara berpikir sistematis dengan sisi kreatif dalam visual.
          <br /><br />
          Sekarang, saya fokus di bidang data analysis dan visualisasi informasi, menggunakan alat seperti Tableau, Power BI, Excel, dan Python. Pengalaman di dunia desain dan video editing membantu saya menampilkan hasil analisis dalam bentuk visual yang jelas, menarik, dan mudah dipahami.
          <br /><br />
          Saya dikenal sebagai pribadi yang adaptif, tekun, dan dapat diandalkan. Bagi saya, setiap proyek adalah kesempatan untuk belajar hal baru dan menggabungkan data, desain, serta teknologi menjadi karya yang bermanfaat.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="container-pro py-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v4"/>
              <path d="M17.657 6.343 14.828 9.17"/>
              <path d="M21 12h-4"/>
              <path d="M17.657 17.657 14.828 14.83"/>
              <path d="M12 21v-4"/>
              <path d="M6.343 17.657 9.17 14.83"/>
              <path d="M3 12h4"/>
              <path d="M6.343 6.343 9.17 9.17"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <h3 className="font-heading text-2xl md:text-3xl font-bold">Skills</h3>
          </div>
          <a className="btn btn-ghost" href="/skills">Lihat semua →</a>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <article className="card p-4">
            <h4 className="font-semibold mb-2">Analisis Data & Visualisasi</h4>
            <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
              <li>Python (Pandas, NumPy, Matplotlib, Seaborn)</li><li>SQL, Tableau, Power BI</li><li>Excel, Google Sheets</li>
            </ul>
          </article>
          <article className="card p-4">
            <h4 className="font-semibold mb-2">Pengembangan Web</h4>
            <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
              <li>Next.js (React), JavaScript (ES6+), TypeScript</li><li>Tailwind CSS, Node.js (dasar)</li>
            </ul>
          </article>
          <article className="card p-4">
            <h4 className="font-semibold mb-2">Desain & Produksi Visual</h4>
            <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
              <li>Figma, Canva, Adobe Photoshop, CorelDRAW</li><li>Adobe Premiere Pro, CapCut, OBS Studio, Prism Live Studio</li>
            </ul>
          </article>
          <article className="card p-4">
            <h4 className="font-semibold mb-2">Keterampilan Pendukung</h4>
            <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
              <li>Problem Solving, Analytical Thinking</li><li>Adaptif terhadap teknologi baru</li><li>Kolaboratif dan detail-oriented</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="container-pro py-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 7h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>
              <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
            </svg>
            <h3 className="font-heading text-2xl md:text-3xl font-bold">Portfolio</h3>
          </div>
          <a className="btn btn-ghost" href="/projects">Lihat semua →</a>
        </div>

        <div id="projects-preview" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <article className="card p-4">
            <div className="flex items-center gap-2 text-xs mb-2">
              <span className="px-2 py-0.5 rounded-full border border-[var(--line)]">Data Analyst</span>
              <span className="px-2 py-0.5 rounded-full border border-[var(--line)]">Dashboard</span>
            </div>
            <h4 className="font-semibold">Dashboard Deteksi Anomali Konsumsi Air</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Analisis pola konsumsi air menggunakan <em>Isolation Forest</em> dan visualisasi interaktif BI.
            </p>
          </article>

          <article className="card p-4">
            <div className="flex items-center gap-2 text-xs mb-2">
              <span className="px-2 py-0.5 rounded-full border border-[var(--line)]">Desain</span>
              <span className="px-2 py-0.5 rounded-full border border-[var(--line)]">Publikasi</span>
            </div>
            <h4 className="font-semibold">Desain Publikasi & Branding Kampus</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Produksi visual untuk publikasi acara kampus (KPUM, LKMM-TM, DevClass) secara konsisten.
            </p>
          </article>

          <article className="card p-4">
            <div className="flex items-center gap-2 text-xs mb-2">
              <span className="px-2 py-0.5 rounded-full border border-[var(--line)]">Videografi</span>
              <span className="px-2 py-0.5 rounded-full border border-[var(--line)]">Dokumentasi</span>
            </div>
            <h4 className="font-semibold">Dokumentasi & Editing Video KKN 2024</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Rekam dan edit video kegiatan KKN Bolodewo untuk publikasi dan dokumentasi.
            </p>
          </article>
        </div>
      </section>

      {/* Pengalaman */}
      <section id="experience" className="container-pro py-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 ">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 5h4v4H3zM10 10h4v4h-4zM17 15h4v4h-4z"/>
              <path d="M7 7h3M14 12h3M3 12h5M9 17h8"/>
            </svg>            
          <h3 className="font-heading text-2xl md:text-3xl font-bold">Pengalaman</h3>
          </div>
          <a className="btn btn-ghost" href="/experience">Lihat semua →</a>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <article className="card p-4"><h4 className="font-semibold mb-1">Driver</h4><p className="mb-1">Shopee Food</p><p className="text-sm">Januari 2025 – Sekarang</p></article>
          <article className="card p-4"><h4 className="font-semibold mb-1">Waiter & Kitchen Staff</h4><p className="mb-1">Spesial Soto Boyolali</p><p className="text-sm">Desember 2024 – Sekarang</p></article>
          <article className="card p-4"><h4 className="font-semibold mb-1">Crew Store</h4><p className="mb-1">Pentol Jeki</p><p className="text-sm">November 2023 – Agustus 2024</p></article>
          <article className="card p-4"><h4 className="font-semibold mb-1">Administrasi (Magang)</h4><p className="mb-1">Dishub Kota Surabaya</p><p className="text-sm">Mei 2024 – Agustus 2024</p></article>
        </div>
      </section>

      {/* Organisasi */}
      <section id="organization" className="container-pro py-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="6" r="3"/>
              <circle cx="5" cy="18" r="3"/>
              <circle cx="19" cy="18" r="3"/>
              <path d="M8 17l4-5 4 5"/>
              <path d="M12 11V9"/>
            </svg>           
          <h3 className="font-heading text-2xl md:text-3xl font-bold">Organisasi</h3>
          </div>
          <a className="btn btn-ghost" href="/organization">Lihat semua →</a>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <article className="card p-4">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-semibold mb-1">Komisi Pemilihan Umum Mahasiswa (KPUM)</h4>
              <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--line)]">2024</span>
            </div>
            <p className="mb-1">Universitas Narotama</p>
            <p className="text-sm">Publikasi, Desain & Dokumentasi</p>
          </article>
          <article className="card p-4">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-semibold mb-1">Kuliah Kerja Nyata (KKN)</h4>
            <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--line)]">2024</span>
          </div>
          <p className="mb-1">Kelompok Bolodewo</p>
          <p className="text-sm">Publikasi, Desain & Dokumentasi</p>
          </article>
          <article className="card p-4">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-semibold mb-1">DevClass (Langkah Awal Menjadi Web Developer)</h4>
              <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--line)]">2023</span>
            </div>
            <p className="mb-1">HIMA ILKOM</p>
            <p className="text-sm">Ketua Pelaksana</p>
          </article>
          <article className="card p-4">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-semibold mb-1">Latihan Keterampilan Manajemen Mahasiswa - Tingkat Menengah (LKMM-TM)</h4>
              <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--line)]">2023</span>
            </div>
            <p className="mb-1">Universitas Narotama</p>
            <p className="text-sm">Koordinator Publikasi, Desain & Dokumentasi</p>
          </article>
        </div>
      </section>

      {/* Pendidikan */}
      <section id="education" className="container-pro py-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 10 12 5 2 10l10 5 10-5Z"/>
              <path d="M6 12v5a2 2 0 0 0 1 1.73L12 21l5-2.27A2 2 0 0 0 18 17v-5"/>
            </svg>
            <h3 className="font-heading text-2xl md:text-3xl font-bold">Pendidikan</h3>
          </div>
          <a className="btn btn-ghost" href="/education">Lihat semua →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <article className="card p-4">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-semibold">S1 Teknik Informatika</h4>
              <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--line)]">2021–2025</span>
            </div>
            <p className="mb-1">Universitas Narotama</p>
            <p className="text-sm">IPK 3.77</p>
          </article>
          <article className="card p-4">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-semibold">Data Analyst</h4>
              <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--line)]">2023</span>
            </div>
            <p className="mb-1">Karier.mu by Sekolah.mu</p>
            <p className="mt-1 text-sm">MSIB</p>
          </article>
          <article className="card p-4">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-semibold">Teknik Kimia Industri</h4>
              <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--line)]">2017–2020</span>
            </div>
            <p className="mb-1">SMK Negeri 1 Grati</p>
            <p className="mt-1 text-sm">Nilai Rata-rata 80.66</p>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container-pro py-12">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>
              <path d="m22 6-10 7L2 6"/>
            </svg>
            <h3 className="font-heading text-2xl md:text-3xl font-bold">Contact</h3>
        </div>

          {/* Satu kolom: form di atas, ikon di bawah */}
          <div className="flex flex-col gap-4">
          {/* Form */}
          <form action="https://formspree.io/f/xeorvjbv" method="POST" className="card p-4">
            <input name="name" type="text" placeholder="Nama" required className="input" />
            <input name="email" type="email" placeholder="Email" required className="input" />
            <textarea name="message" placeholder="Pesan" rows={4} required className="input" />
            <button className="btn btn-accent mt-2 w-max">Kirim</button>
          </form>

          {/* Ikon kontak: rapat, responsif, label di bawah ikon */}
          <div className="card p-4">
            <p className="text-sm mb-3">Atau langsung terhubung melalui:</p>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 justify-items-center">
              {/* LinkedIn */}
              <a
                className="icon-link flex flex-col items-center text-center gap-1"
                href="https://www.linkedin.com/in/imam-muhannad/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path
                    fill="currentColor"
                    d="M6.94 7.5H3.75V21h3.19V7.5ZM5.35 3a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm6.35 6.79H8.57V21h3.13v-6.73c0-1.77 2.31-1.91 2.31 0V21h3.13v-7.81c0-4.06-4.63-3.91-5.52-1.91V9.79Z"
                  />
                </svg>
                <span className="text-xs">LinkedIn</span>
              </a>

              {/* Instagram */}
              <a
                className="icon-link flex flex-col items-center text-center gap-1"
                href="http://instagram.com/imkhann_"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path
                    fill="currentColor"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a5.5 5.5 0 1 0 0 11.01A5.5 5.5 0 0 0 12 7.5Zm0 1.8a3.7 3.7 0 1 1 0 7.4 3.7 3.7 0 0 1 0-7.4ZM18 5.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
                  />
                </svg>
                <span className="text-xs">Instagram</span>
              </a>

              {/* WhatsApp */}
              <a
                className="icon-link flex flex-col items-center text-center gap-1"
                href="https://wa.me/6282234899524"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
              >
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 0 0-8.94 14.47L2 22l5.7-1.5A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.07-1.12l-.29-.17-3.39.9.9-3.3-.18-.29A8 8 0 1 1 12 20Zm4.62-5.25c-.25-.13-1.48-.73-1.7-.81s-.4-.13-.57.12-.65.81-.8.98-.3.19-.55.06a6.56 6.56 0 0 1-1.93-1.19 7.24 7.24 0 0 1-1.34-1.67c-.14-.25 0-.38.1-.5s.25-.29.37-.44a1.63 1.63 0 0 0 .25-.41.46.46 0 0 0 0-.44c-.06-.13-.56-1.35-.76-1.85s-.4-.43-.55-.44h-.46a.88.88 0 0 0-.63.31 2.68 2.68 0 0 0-.83 2 4.69 4.69 0 0 0 1 2.5 10.91 10.91 0 0 0 4.23 3.52 13.4 13.4 0 0 0 1.32.49 3.17 3.17 0 0 0 1.47.09 2.38 2.38 0 0 0 1.57-1.09 1.93 1.93 0 0 0 .14-1.09c-.05-.1-.23-.17-.48-.29Z"
                />
              </svg>
              <span className="text-xs">WhatsApp</span>
              </a>

              {/* Telegram */}
              <a
                className="icon-link flex flex-col items-center text-center gap-1"
                href="https://t.me/imkhann"
                target="_blank"
                rel="noopener"
                aria-label="Telegram"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path
                    fill="currentColor"
                    d="M9.04 15.81 8.9 19.94a.8.8 0 0 0 1.26.64l2.46-1.81 3.94 2.88a.8.8 0 0 0 1.26-.48l4.06-17.13a.8.8 0 0 0-1.1-.92L1.83 9.44a.8.8 0 0 0 .03 1.49l4.93 1.5 10.92-6.9L9.04 15.81Z"
                  />
                </svg>
                <span className="text-xs">Telegram</span>
              </a>

              {/* Email */}
              <a
                className="icon-link flex flex-col items-center text-center gap-1"
                href="mailto:imammuhannad.gg@gmail.com"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="currentColor" d="M2 6h20v12H2V6Zm10 6 8-5H4l8 5Z" />
                </svg>
                <span className="text-xs">Email</span>
              </a>

              {/* Telepon */}
              <a
                className="icon-link flex flex-col items-center text-center gap-1"
                href="tel:+6282234899524"
                aria-label="Telepon"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path
                    fill="currentColor"
                    d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.2 11 11 0 0 0 3.5.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1 11 11 0 0 0 .6 3.5 1 1 0 0 1-.2 1.1l-2.2 2.2Z"
                  />
                </svg>
                <span className="text-xs">Telepon</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="mt-16 border-t border-[var(--line)]">
        <div className="container-pro py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <p>© 2025 Imam Muhannad.</p>
          <div className="flex items-center gap-3">
            <a className="btn btn-ghost" href="https://docs.google.com/document/d/18WYvun2jCcno1KxRFyvMuKTu-eo9_pGTdgtF6Ud9llQ/edit?usp=sharing" target="_blank" rel="noreferrer">Download CV</a>
            <a className="btn btn-ghost" href="#home">Kembali ke atas</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
