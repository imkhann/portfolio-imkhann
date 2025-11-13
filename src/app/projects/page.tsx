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
           <param name='toolbar' value='yes' />
           <param name='static_image' value='https://public.tableau.com/static/images/Bu/BusinessIntelligenceDashboardDeteksiAnomaliPolaKonsumsiAirmenggunakanIsoaltionForest_17629204939610/DashboardKonsumsidanTagihanAIr/1.png' />
           <param name='animate_transition' value='yes' />
           <param name='display_static_image' value='yes' />
           <param name='display_spinner' value='yes' />
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
           <param name='toolbar' value='yes' />
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
           <param name='tabs' value='yes' />
           <param name='toolbar' value='yes' />
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
      {/* ===== DASHBOARD (Full width) ===== */}
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
            Tiga dashboard interaktif. Ukuran penuh untuk pengalaman baca dan eksplorasi yang maksimal.
          </p>
        </div>

        {/* 1) Full-width block */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="px-4 lg:px-6">
            <div className="max-w-[1400px] mx-auto">
              <h3 className="font-heading font-semibold text-lg mb-2">Konsumsi dan Tagihan Air</h3>
              <div id="viz1" className="overflow-x-auto"></div>
              <p className="text-sm text-[color:var(--text-muted)] mt-3">
                Ringkasan konsumsi dan tagihan air per wilayah, dilengkapi indikator anomali untuk membantu identifikasi pola tidak wajar secara cepat.
              </p>
            </div>
          </div>
        </div>

        {/* 2) Full-width block */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10">
          <div className="px-4 lg:px-6">
            <div className="max-w-[1400px] mx-auto">
              <h3 className="font-heading font-semibold text-lg mb-2">Eksplorasi Metrik Penjualan</h3>
              <div id="viz2" className="overflow-x-auto"></div>
              <p className="text-sm text-[color:var(--text-muted)] mt-3">
                Panel penjualan dengan filter waktu dan kategori, menyorot metrik utama serta pergeseran tren untuk bahan evaluasi cepat.
              </p>
            </div>
          </div>
        </div>

        {/* 3) Full-width block */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10">
          <div className="px-4 lg:px-6">
            <div className="max-w-[1400px] mx-auto">
              <h3 className="font-heading font-semibold text-lg mb-2">Performa Produk & Segmentasi</h3>
              <div id="viz3" className="overflow-x-auto"></div>
              <p className="text-sm text-[color:var(--text-muted)] mt-3">
                Tampilan tabulasi multi-panel untuk membandingkan performa produk lintas segmen, membantu prioritisasi dan fokus perbaikan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DESAIN (placeholder sementara) ===== */}
      <section id="design" className="container-pro py-12">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2l4 7H8l4-7zM2 22h20L12 13 2 22z"/>
          </svg>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">Desain</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <figure className="card p-3">
            <img
              src="/assets/img/portfolio/poster/kpum.webp"
              alt="Poster KPUM"
              className="w-full aspect-[3/4] object-cover rounded-md"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
              Poster KPUM. Media publikasi pembukaan pendaftaran kandidat BEM dan Himpunan.
            </figcaption>
          </figure>

          <figure className="card p-3">
            <img
              src="/assets/img/portfolio/idc/lkmm-tm.webp"
              alt="ID Card LKMM-TM"
              className="mx-auto w-2/3 aspect-[9/16] object-cover rounded-md"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
              ID Card panitia LKMM-TM. Tampilan ringkas, mudah dibaca di lapangan.
            </figcaption>
          </figure>

          <figure className="card p-3">
            <img
              src="/assets/img/portfolio/feed/igKKN.webp"
              alt="Feed IG KKN"
              className="w-full aspect-square object-cover rounded-md"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
              Feed IG KKN. Konten pengenalan program, lokasi, dan identitas visual.
            </figcaption>
          </figure>
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
