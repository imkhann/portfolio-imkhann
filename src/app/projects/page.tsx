'use client';

import { useEffect } from 'react';

function injectEmbedHTML(containerId: string, html: string) {
  const host = document.getElementById(containerId);
  if (!host) return;
  host.innerHTML = html;
}

function ensureTableauScript() {
  return new Promise<void>((resolve) => {
    const existing = document.getElementById('tableau-api');
    if (existing) return resolve();
    const s = document.createElement('script');
    s.id = 'tableau-api';
    s.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    s.onload = () => resolve();
    document.body.appendChild(s);
  });
}

export default function ProjectsPage() {
  useEffect(() => {
    // 1) Dashboard: Konsumsi & Tagihan Air (Isolation Forest)
    injectEmbedHTML(
      'viz1',
      `<div class='tableauPlaceholder' id='viz1763002010821' style='position: relative'>
         <noscript><a href='#'>
           <img alt='Konsumsi dan Tagihan Air per Wilayah Bulan  Tahun  ' src='https://public.tableau.com/static/images/Bu/BusinessIntelligenceDashboardDeteksiAnomaliPolaKonsumsiAirmenggunakanIsoaltionForest_17629204939610/DashboardKonsumsidanTagihanAIr/1_rss.png' style='border: none' />
         </a></noscript>
         <object class='tableauViz'  style='display:none;'>
           <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
           <param name='embed_code_version' value='3' />
           <param name='site_root' value='' />
           <param name='name' value='BusinessIntelligenceDashboardDeteksiAnomaliPolaKonsumsiAirmenggunakanIsoaltionForest_17629204939610/DashboardKonsumsidanTagihanAIr' />
           <param name='tabs' value='no' />
           <param name='toolbar' value='no' />
           <param name='static_image' value='https://public.tableau.com/static/images/Bu/BusinessIntelligenceDashboardDeteksiAnomaliPolaKonsumsiAirmenggunakanIsoaltionForest_17629204939610/DashboardKonsumsidanTagihanAIr/1.png' />
           <param name='animate_transition' value='yes' />
           <param name='display_static_image' value='yes' />
           <param name='display_spinner' value='yes' />b
           <param name='display_overlay' value='yes' />
           <param name='display_count' value='yes' />
           <param name='language' value='en-US' />
         </object>
       </div>`
    );

    // 2) Dashboard: Praktik Modul 5
    injectEmbedHTML(
      'viz2',
      `<div class='tableauPlaceholder' id='viz1763003574315' style='position: relative'>
         <noscript><a href='#'>
           <img alt='Dashboard ' src='https://public.tableau.com/static/images/Im/ImamMuhannad__Kelompok3_Praktik1_Modul5/Dashboard/1_rss.png' style='border: none' />
         </a></noscript>
         <object class='tableauViz'  style='display:none;'>
           <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
           <param name='embed_code_version' value='3' />
           <param name='site_root' value='' />
           <param name='name' value='ImamMuhannad__Kelompok3_Praktik1_Modul5/Dashboard' />
           <param name='tabs' value='no' />
           <param name='toolbar' value='no' />
           <param name='static_image' value='https://public.tableau.com/static/images/Im/ImamMuhannad__Kelompok3_Praktik1_Modul5/Dashboard/1.png' />
           <param name='animate_transition' value='yes' />
           <param name='display_static_image' value='yes' />
           <param name='display_spinner' value='yes' />
           <param name='display_overlay' value='yes' />
           <param name='display_count' value='yes' />
           <param name='language' value='en-US' />
         </object>
       </div>`
    );

    // 3) Dashboard: Finpro Kelompok 3C
    injectEmbedHTML(
      'viz3',
      `<div class='tableauPlaceholder' id='viz1763003977610' style='position: relative'>
         <noscript><a href='#'>
           <img alt=' ' src='https://public.tableau.com/static/images/Ke/Kelompok3CFinproproject2_17630035054610/Dashboard1/1_rss.png' style='border: none' />
         </a></noscript>
         <object class='tableauViz'  style='display:none;'>
           <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
           <param name='embed_code_version' value='3' />
           <param name='site_root' value='' />
           <param name='name' value='Kelompok3CFinproproject2_17630035054610/Dashboard1' />
           <param name='tabs' value='no' />
           <param name='toolbar' value='no' />
           <param name='static_image' value='https://public.tableau.com/static/images/Ke/Kelompok3CFinproproject2_17630035054610/Dashboard1/1.png' />
           <param name='animate_transition' value='yes' />
           <param name='display_static_image' value='yes' />
           <param name='display_spinner' value='yes' />
           <param name='display_overlay' value='yes' />
           <param name='display_count' value='yes' />
           <param name='language' value='en-US' />
         </object>
       </div>`
    );

    // Muat API Tableau sekali, lalu biarkan script menginisialisasi ketiga placeholder.
    ensureTableauScript().then(() => {
      // Terapkan rumus ukuran yang kamu kirim agar tampil maksimal.
      const sizer1 = () => {
        const div = document.getElementById('viz1763002010821') as HTMLElement | null;
        if (!div) return;
        const obj = div.getElementsByTagName('object')[0] as HTMLElement | undefined;
        if (!obj) return;
        if (div.offsetWidth > 800 || div.offsetWidth > 500) {
          obj.style.width = '1000px';
          obj.style.height = '827px';
        } else {
          obj.style.width = '100%';
          obj.style.height = '1477px';
        }
        obj.style.display = 'block';
      };

      const sizer2 = () => {
        const div = document.getElementById('viz1763003574315') as HTMLElement | null;
        if (!div) return;
        const obj = div.getElementsByTagName('object')[0] as HTMLElement | undefined;
        if (!obj) return;
        if (div.offsetWidth > 800 || div.offsetWidth > 500) {
          obj.style.width = '100%';
          obj.style.height = `${Math.round(div.offsetWidth * 0.75)}px`;
        } else {
          obj.style.width = '100%';
          obj.style.height = '1927px';
        }
        obj.style.display = 'block';
      };

      const sizer3 = () => {
        const div = document.getElementById('viz1763003977610') as HTMLElement | null;
        if (!div) return;
        const obj = div.getElementsByTagName('object')[0] as HTMLElement | undefined;
        if (!obj) return;
        if (div.offsetWidth > 800 || div.offsetWidth > 500) {
          obj.style.minWidth = '1169px';
          obj.style.maxWidth = '100%';
          obj.style.minHeight = '877px';
          obj.style.maxHeight = `${Math.round(div.offsetWidth * 0.75)}px`;
        } else {
          obj.style.width = '100%';
          obj.style.minHeight = '2050px';
          obj.style.maxHeight = `${Math.round(div.offsetWidth * 1.77)}px`;
        }
        obj.style.display = 'block';
      };

      const resizeAll = () => {
        sizer1();
        sizer2();
        sizer3();
      };

      resizeAll();
      window.addEventListener('resize', resizeAll);
      return () => window.removeEventListener('resize', resizeAll);
    });
  }, []);

  return (
    <main className="pt-16">
      {/* ===== DASHBOARD ===== */}
      <section id="dashboards" className="py-12">
        <div className="container-pro mb-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
            </svg>
            <h2 className="font-heading text-2xl md:text-3xl font-bold">Dashboard</h2>
          </div>
          <p className="mt-2 text-sm text-[color:var(--text-muted)]">
            Beberapa dashboard interaktif yang dibuat menggunakan Tableau. Ukuran penuh untuk pengalaman baca dan eksplorasi yang maksimal.
          </p>
        </div>

        {/* 1) Full-width block */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="px-4 lg:px-6">
            <div className="max-w-[1400px] mx-auto">
              <h3 className="font-heading font-semibold text-lg mb-2">Business Intelligence Dashboard Deteksi Anomali Pola Konsumsi Air (Isolation Forest)</h3>
              <div id="viz1" className="overflow-x-auto"></div>
              <p className="text-sm text-[color:var(--text-muted)] mt-3">
                Dashboard ini memberikan gambaran menyeluruh mengenai pola konsumsi air pelanggan dari berbagai wilayah dalam satu periode operasional. Visualisasi yang disusun meliputi tren konsumsi harian, total konsumsi per wilayah, distribusi jumlah pelanggan, serta hubungan antara konsumsi dan tagihan air. Pendekatan analitis dilengkapi dengan model Isolation Forest untuk mendeteksi adanya outlier atau pola penggunaan yang tidak wajar, seperti lonjakan pemakaian tiba-tiba atau penurunan ekstrem yang berpotensi mengindikasikan kebocoran, manipulasi, atau kesalahan pencatatan.
                <br /> <br />
                Dashboard ini dirancang untuk membantu pengambil keputusan memahami dinamika pemakaian air secara cepat dan akurat, sekaligus mempercepat proses identifikasi anomali operasional. Dengan penyajian KPI ringkas, grafik interaktif, serta peta distribusi wilayah, dashboard ini mendukung proses evaluasi kinerja jaringan, estimasi kebutuhan pemeliharaan, serta perencanaan perbaikan layanan berbasis data.
              </p>
            </div>
          </div>
        </div>

        {/* 2) Full-width block */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10">
          <div className="px-4 lg:px-6">
            <div className="max-w-[1400px] mx-auto">
              <h3 className="font-heading font-semibold text-lg mb-2">Dashboard Praktik Business Intelligence – Modul 5 Eksplorasi Metrik Penjualan</h3>
              <div id="viz2" className="overflow-x-auto"></div>
              <p className="text-sm text-[color:var(--text-muted)] mt-3">
                Dashboard ini menyajikan analisis operasional dari sebuah studi kasus yang menekankan pemahaman terhadap performa bisnis melalui visualisasi data multi-dimensi. Komponen di dalamnya meliputi trend penjualan, segmentasi pelanggan, kontribusi pendapatan per kategori, dan indikator utama lainnya yang mencerminkan kondisi kinerja perusahaan pada periode tertentu. Fokus dashboard terletak pada bagaimana data mentah dapat diubah menjadi insight strategis melalui penyusunan grafik interaktif yang mudah dipahami.
                <br /> <br />
                Melalui kombinasi garis tren, bar chart per kategori, dan komponen KPI utama, dashboard ini membantu pengguna mengidentifikasi pola pertumbuhan, area yang membutuhkan optimalisasi, serta potensi peluang bisnis. Secara keseluruhan, dashboard ini menggambarkan pemahaman mendalam mengenai penerapan prinsip Business Intelligence dalam analisis operasional perusahaan dengan pendekatan visual yang sistematis dan terstruktur.
              </p>
            </div>
          </div>
        </div>

        {/* 3) Full-width block */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10">
          <div className="px-4 lg:px-6">
            <div className="max-w-[1400px] mx-auto">
              <h3 className="font-heading font-semibold text-lg mb-2">Dashboard Final Project – Kelompok 3C Performa Produk & Segmentasi</h3>
              <div id="viz3" className="overflow-x-auto"></div>
              <p className="text-sm text-[color:var(--text-muted)] mt-3">
                Dashboard ini merupakan hasil integrasi analisis data dalam skala proyek akhir yang menekankan penyajian visualisasi komprehensif terhadap performa entitas usaha atau layanan tertentu. Dashboard dirancang dengan beberapa tab analisis yang berfokus pada tren periode, distribusi performa berdasarkan kategori, serta breakdown kontribusi berdasarkan faktor-faktor yang relevan. Setiap bagian dashboard menyajikan hubungan antarvariabel secara intuitif, sehingga memudahkan interpretasi baik oleh manajemen maupun analis.
                <br /> <br />
                Dengan struktur visual yang lebih kompleks dan interaktif, dashboard ini memungkinkan pengguna melakukan eksplorasi data secara mendalam, termasuk perbandingan antar segmen, evaluasi indikator kinerja, serta penarikan kesimpulan strategis dari pola yang teridentifikasi. Dashboard ini menampilkan pemahaman matang terhadap konsep BI, storytelling data, serta kemampuan mengolah insight menjadi rekomendasi yang relevan terhadap kebutuhan keputusan bisnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DESAIN ===== */}
      <section id="design" className="container-pro py-12">
        <div className="flex items-center gap-2 mb-6">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">
            Desain & Publikasi Visual
          </h2>
        </div>

        <div className="space-y-10">

          {/* Feed IG – Organisasi & Kegiatan Kampus */}
          <section aria-labelledby="feed-organisasi">
            <h3
              id="feed-organisasi"
              className="font-heading text-lg md:text-xl font-semibold mb-3"
            >
              Feed Instagram – Organisasi & Kegiatan Kampus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* KPUM */}
              <figure className="group">
                <div className="overflow-hidden rounded-md border border-[var(--line)]">
                  <img
                    src="/assets/img/portfolio/feed/igKPUM.webp"
                    alt="Feed Instagram kampanye KPUM"
                    className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Desain feed Instagram KPUM Universitas Narotama sebagai media
                  kampanye dan informasi rangkaian pemilihan umum mahasiswa.
                </figcaption>
              </figure>

              {/* KKN */}
              <figure className="group">
                <div className="overflow-hidden rounded-md border border-[var(--line)]">
                  <img
                    src="/assets/img/portfolio/feed/igKKN.webp"
                    alt="Feed Instagram KKN Bolodewo"
                    className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Feed Instagram KKN Bolodewo yang merangkum tema, lokasi, dan fokus
                  program kerja lapangan.
                </figcaption>
              </figure>

              {/* PKKMB */}
              <figure className="group">
                <div className="overflow-hidden rounded-md border border-[var(--line)]">
                  <img
                    src="/assets/img/portfolio/feed/igPKKMB.webp"
                    alt="Feed Instagram PKKMB"
                    className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Desain feed PKKMB untuk memperkenalkan rangkaian kegiatan dan pesan
                  utama bagi mahasiswa baru.
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Feed IG – LKMM-TM (Carousel) */}
          <section aria-labelledby="feed-lkmm">
            <h3
              id="feed-lkmm"
              className="font-heading text-lg md:text-xl font-semibold mb-3"
            >
              Feed Instagram – LKMM-TM (Carousel)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
              {/* Slide 1 */}
              <figure className="group">
                <div className="overflow-hidden rounded-md border border-[var(--line)]">
                  <img
                    src="/assets/img/portfolio/feed/lkmm/1.webp"
                    alt="Slide 1 carousel LKMM-TM"
                    className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Slide pembuka carousel LKMM-TM yang menampilkan nama-nama pemateri yang akan mengisi pada acara tersebut.
                </figcaption>
              </figure>

              {/* Slide 2 */}
              <figure className="group">
                <div className="overflow-hidden rounded-md border border-[var(--line)]">
                  <img
                    src="/assets/img/portfolio/feed/lkmm/2.webp"
                    alt="Slide 2 carousel LKMM-TM"
                    className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Slide isi dengan ajakan untuk mengikuti kegiatan Technical Meeting LKMM-TM.
                </figcaption>
              </figure>

              {/* Slide 3 */}
              <figure className="group">
                <div className="overflow-hidden rounded-md border border-[var(--line)]">
                  <img
                    src="/assets/img/portfolio/feed/lkmm/3.webp"
                    alt="Slide 3 carousel LKMM-TM"
                    className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Slide penutup yang merangkum poin penting materi dan informasi teknis
                  kegiatan LKMM-TM.
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Feed IG – Explorasi Desain */}
          <section aria-labelledby="feed-explore">
            <h3
              id="feed-explore"
              className="font-heading text-lg md:text-xl font-semibold mb-3"
            >
              Feed Instagram – Dental Care
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Feed 1 */}
              <figure className="group flex flex-col items-center">
                <div className="overflow-hidden rounded-md border border-[var(--line)] w-full max-w-[350px]">
                  <img
                    src="/assets/img/portfolio/feed/feed1.webp"
                    alt="Feed Instagram eksplorasi desain 1"
                    className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Eksplorasi layout feed Instagram bertema promosi digital dengan
                  fokus pada tipografi dan hirarki informasi.
                </figcaption>
              </figure>

              {/* Feed 2 */}
              <figure className="group flex flex-col items-center">
                <div className="overflow-hidden rounded-md border border-[var(--line)] w-full max-w-[350px]">
                  <img
                    src="/assets/img/portfolio/feed/feed2.webp"
                    alt="Feed Instagram eksplorasi desain 2"
                    className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Desain feed yang menonjolkan kombinasi warna, ikon, dan komposisi
                  grid untuk kebutuhan konten informasi singkat.
                </figcaption>
              </figure>
            </div>
          </section>
          {/* Feed IG – Explorasi Desain */}
          <section aria-labelledby="feed-explore">
            <h3
              id="feed-explore"
              className="font-heading text-lg md:text-xl font-semibold mb-3"
            >
              Instagram Story – Dental Care
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {/* Story IG */}
              <figure className="group flex flex-col items-center">
                <div className="overflow-hidden rounded-md border border-[var(--line)] w-full max-w-[320px]">
                  <img
                    src="/assets/img/portfolio/feed/storyig.webp"
                    alt="Story Instagram eksplorasi desain"
                    className="w-full aspect-[2/3] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Desain Story Instagram format vertikal untuk kebutuhan promosi
                  singkat dengan visual yang tetap terbaca di layar ponsel.
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Poster */}
          <section aria-labelledby="poster-section">
            <h3
              id="poster-section"
              className="font-heading text-lg md:text-xl font-semibold mb-3"
            >
              Poster Kegiatan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Poster KPUM */}
              <figure className="group">
                <div className="overflow-hidden rounded-md border border-[var(--line)]">
                  <img
                    src="/assets/img/portfolio/poster/kpum.webp"
                    alt="Poster KPUM pembukaan pendaftaran"
                    className="w-full aspect-[3/4] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Poster resmi Komisi Pemilihan Umum Mahasiswa untuk membuka
                  pendaftaran calon pimpinan BEM dan himpunan mahasiswa.
                </figcaption>
              </figure>

              {/* Poster UKKI */}
              <figure className="group">
                <div className="overflow-hidden rounded-md border border-[var(--line)]">
                  <img
                    src="/assets/img/portfolio/poster/ukki.webp"
                    alt="Poster kegiatan UKKI"
                    className="w-full aspect-[3/4] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Poster publikasi kegiatan UKKI yang menekankan nuansa visual islami
                  dan informasi acara secara ringkas.
                </figcaption>
              </figure>

              {/* Poster BEM */}
              <figure className="group">
                <div className="overflow-hidden rounded-md border border-[var(--line)]">
                  <img
                    src="/assets/img/portfolio/poster/bem.webp"
                    alt="Poster kegiatan BEM"
                    className="w-full aspect-[3/4] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Poster BEM untuk publikasi kegiatan organisasi mahasiswa dengan
                  komposisi visual yang tegas dan informatif.
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Banner */}
          <section aria-labelledby="banner-section">
            <h3
              id="banner-section"
              className="font-heading text-lg md:text-xl font-semibold mb-3"
            >
              Banner Kegiatan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Banner LKMM-TM */}
              <figure className="group overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)]">
                <img
                  src="/assets/img/portfolio/banner/bannerLkmmTm.webp"
                  alt="Banner LKMM-TM Universitas Narotama 2023"
                  className="w-full h-auto aspect-[16/9] md:aspect-[21/9] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="px-3 pb-3 pt-2 text-sm text-[color:var(--text-muted)]">
                  Banner utama LKMM-TM 2023 dengan komposisi horizontal lebar untuk layar proyektor dan idenditas acara.
                </figcaption>
              </figure>

              {/* Banner PBI */}
              <figure className="group overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)]">
                <img
                  src="/assets/img/portfolio/banner/pbi.webp"
                  alt="Banner Pengkaderan Bidang Ilmu Fakultas Ilmu Komputer 2024"
                  className="w-full h-auto aspect-[16/9] md:aspect-[21/9] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="px-3 pb-3 pt-2 text-sm text-[color:var(--text-muted)]">
                  Banner Pengkaderan Bidang Ilmu 2024 dengan layout bersih dan hierarki teks yang jelas untuk kebutuhan backdrop.
                </figcaption>
              </figure>
            </div>
          </section>

          {/* ID Card */}
          <section aria-labelledby="idcard-section">
            <h3
              id="idcard-section"
              className="font-heading text-lg md:text-xl font-semibold mb-3"
            >
              ID Card Panitia
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* ID Card LKMM-TD */}
              <figure className="group flex flex-col items-center">
                <div className="overflow-hidden rounded-md border border-[var(--line)] w-full max-w-[220px]">
                  <img
                    src="/assets/img/portfolio/idc/lkmmTd.webp"
                    alt="ID Card panitia LKMM-TD"
                    className="w-full aspect-[2/3] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)] text-center">
                  Desain ID card panitia LKMM-TD dengan penekanan pada identitas nama,
                  peran, dan identitas acara.
                </figcaption>
              </figure>

              {/* ID Card LKMM-TM */}
              <figure className="group flex flex-col items-center">
                <div className="overflow-hidden rounded-md border border-[var(--line)] w-full max-w-[220px]">
                  <img
                    src="/assets/img/portfolio/idc/lkmmTm.webp"
                    alt="ID Card panitia LKMM-TM"
                    className="w-full aspect-[2/3] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)] text-center">
                  ID card panitia LKMM-TM dengan layout vertikal yang disesuaikan
                  untuk kejelasan identitas saat digunakan di lapangan.
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Sertifikat */}
          <section aria-labelledby="certificate-section">
            <h3
              id="certificate-section"
              className="font-heading text-lg md:text-xl font-semibold mb-3"
            >
              Sertifikat Kegiatan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Sertifikat PBI */}
              <figure className="card p-4 flex flex-col items-center">
                <img
                  src="/assets/img/portfolio/sertifikat/pbi.webp"
                  alt="Sertifikat Panitia PBI"
                  className="w-full aspect-[4/3] object-cover rounded-md border border-[var(--line)]"
                  loading="lazy"
                />
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)] text-center">
                  Sertifikat panitia Pengkaderan Bidang Ilmu (PBI) dengan tema Symphony of Science.
                </figcaption>
              </figure>

              {/* Sertifikat KKN */}
              <figure className="card p-4 flex flex-col items-center">
                <img
                  src="/assets/img/portfolio/sertifikat/kkn.webp"
                  alt="Sertifikat KKN Pengabdian Masyarakat"
                  className="w-full aspect-[4/3] object-cover rounded-md border border-[var(--line)]"
                  loading="lazy"
                />
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)] text-center">
                  Sertifikat pengabdian masyarakat KKN dengan fokus pada pelatihan digitalisasi UMKM di Desa Kepuharjo.
                </figcaption>
              </figure>

              {/* Sertifikat KPUM */}
              <figure className="card p-4 flex flex-col items-center">
                <img
                  src="/assets/img/portfolio/sertifikat/kpum.webp"
                  alt="Sertifikat Panitia KPUM"
                  className="w-full aspect-[4/3] object-cover rounded-md border border-[var(--line)]"
                  loading="lazy"
                />
                <figcaption className="mt-2 text-sm text-[color:var(--text-muted)] text-center">
                  Sertifikat panitia KPUM Universitas Narotama untuk kegiatan kampanye terbuka pemilihan mahasiswa.
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      </section>

      {/* ===== VIDEO (placeholder sementara) ===== */}
      <section id="video" className="container-pro py-12">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">Video</h2>
        </div>

        <div className="card p-4">
          <div className="relative w-full aspect-video overflow-hidden rounded-md border border-[var(--line)]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/aNE7_Pi9Bw4?si=eHxzzlHTGRCqjexC"
              title="After Movie KKN"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-[color:var(--text-muted)] mt-3">
            After Movie KKN. Rangkuman kegiatan dari awal hingga penutupan, fokus pada alur cerita dan momen inti.
          </p>
        </div>
      </section>
    </main>
  );
}
