export default function DesignSection() {
  return (
    <section id="design" className="container-pro py-12" aria-labelledby="design-heading">
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
          {/* Pen tool untuk desain grafis */}
          <circle cx="5" cy="7" r="2" />
          <circle cx="19" cy="7" r="2" />
          <path d="M7 7h10" />
          <path d="M12 3l4 8-4 10-4-10 4-8z" />
          <circle cx="12" cy="11" r="1.5" />
        </svg>
        <h2
          id="design-heading"
          className="font-heading text-2xl md:text-3xl font-bold"
        >
          Desain Grafis
        </h2>
      </div>

      <div className="space-y-10">
        {/* Feed IG – Organisasi & Kegiatan Kampus */}
        <section aria-labelledby="feed-organisasi-heading">
          <h3
            id="feed-organisasi-heading"
            className="font-heading text-lg md:text-xl font-semibold mb-3"
          >
            Feed Instagram – Organisasi &amp; Kegiatan Kampus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* KPUM */}
            <figure className="group">
              <div className="overflow-hidden rounded-md border border-[var(--line)]">
                <img
                  src="/assets/img/portfolio/feed/igKPUM.webp"
                  alt="Feed Instagram kampanye KPUM Universitas Narotama"
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
                Feed Instagram KKN Bolodewo yang merangkum tema, lokasi, dan
                fokus program kerja lapangan.
              </figcaption>
            </figure>

            {/* PKKMB */}
            <figure className="group">
              <div className="overflow-hidden rounded-md border border-[var(--line)]">
                <img
                  src="/assets/img/portfolio/feed/igPKKMB.webp"
                  alt="Feed Instagram PKKMB Universitas Narotama"
                  className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                Desain feed PKKMB untuk memperkenalkan rangkaian kegiatan dan
                pesan utama bagi mahasiswa baru.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Feed IG – LKMM-TM (Carousel) */}
        <section aria-labelledby="feed-lkmm-heading">
          <h3
            id="feed-lkmm-heading"
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
                  alt="Slide 1 carousel LKMM-TM berisi daftar pemateri"
                  className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                Slide pembuka carousel LKMM-TM yang menampilkan nama-nama pemateri
                yang akan mengisi acara.
              </figcaption>
            </figure>

            {/* Slide 2 */}
            <figure className="group">
              <div className="overflow-hidden rounded-md border border-[var(--line)]">
                <img
                  src="/assets/img/portfolio/feed/lkmm/2.webp"
                  alt="Slide 2 carousel LKMM-TM dengan ajakan mengikuti kegiatan"
                  className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                Slide isi dengan ajakan untuk mengikuti kegiatan Technical
                Meeting LKMM-TM.
              </figcaption>
            </figure>

            {/* Slide 3 */}
            <figure className="group">
              <div className="overflow-hidden rounded-md border border-[var(--line)]">
                <img
                  src="/assets/img/portfolio/feed/lkmm/3.webp"
                  alt="Slide 3 carousel LKMM-TM berisi rangkuman informasi teknis"
                  className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                Slide penutup yang merangkum poin penting materi dan informasi
                teknis kegiatan LKMM-TM.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Feed IG – Explorasi Desain */}
        <section aria-labelledby="feed-explore-dental-heading">
          <h3
            id="feed-explore-dental-heading"
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
                  alt="Feed Instagram eksplorasi desain promosi dental care 1"
                  className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                Eksplorasi layout feed Instagram bertema promosi layanan dental
                care dengan fokus pada tipografi dan hirarki informasi.
              </figcaption>
            </figure>

            {/* Feed 2 */}
            <figure className="group flex flex-col items-center">
              <div className="overflow-hidden rounded-md border border-[var(--line)] w-full max-w-[350px]">
                <img
                  src="/assets/img/portfolio/feed/feed2.webp"
                  alt="Feed Instagram eksplorasi desain promosi dental care 2"
                  className="w-full aspect-square object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                Desain feed yang menonjolkan kombinasi warna, ikon, dan komposisi
                grid untuk kebutuhan konten informasi singkat bertema kesehatan gigi.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Story IG – Dental Care */}
        <section aria-labelledby="story-explore-dental-heading">
          <h3
            id="story-explore-dental-heading"
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
                  alt="Desain Story Instagram bertema dental care format vertikal"
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
        <section aria-labelledby="poster-section-heading">
          <h3
            id="poster-section-heading"
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
                  alt="Poster KPUM pembukaan pendaftaran calon pimpinan BEM dan himpunan"
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
                  alt="Poster kegiatan UKKI Universitas Narotama"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-2 text-sm text-[color:var(--text-muted)]">
                Poster publikasi kegiatan UKKI yang menekankan nuansa visual
                islami dan informasi acara secara ringkas.
              </figcaption>
            </figure>

            {/* Poster BEM */}
            <figure className="group">
              <div className="overflow-hidden rounded-md border border-[var(--line)]">
                <img
                  src="/assets/img/portfolio/poster/bem.webp"
                  alt="Poster kegiatan BEM Universitas Narotama"
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
        <section aria-labelledby="banner-section-heading">
          <h3
            id="banner-section-heading"
            className="font-heading text-lg md:text-xl font-semibold mb-3"
          >
            Banner Kegiatan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Banner LKMM-TM */}
            <figure className="group overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)]">
              <img
                src="/assets/img/portfolio/banner/bannerLkmmTm.webp"
                alt="Banner LKMM-TM Universitas Narotama 2023 untuk layar proyektor"
                className="w-full h-auto aspect-[16/9] md:aspect-[21/9] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="px-3 pb-3 pt-2 text-sm text-[color:var(--text-muted)]">
                Banner utama LKMM-TM 2023 dengan komposisi horizontal lebar
                untuk layar proyektor dan identitas acara.
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
                Banner Pengkaderan Bidang Ilmu 2024 dengan layout bersih dan
                hierarki teks yang jelas untuk kebutuhan backdrop.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ID Card */}
        <section aria-labelledby="idcard-section-heading">
          <h3
            id="idcard-section-heading"
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
                  alt="ID Card panitia LKMM-TD Universitas Narotama"
                  className="w-full aspect-[2/3] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-2 text-sm text-[color:var(--text-muted)] text-center">
                Desain ID card panitia LKMM-TD dengan penekanan pada identitas
                nama, peran, dan identitas acara.
              </figcaption>
            </figure>

            {/* ID Card LKMM-TM */}
            <figure className="group flex flex-col items-center">
              <div className="overflow-hidden rounded-md border border-[var(--line)] w-full max-w-[220px]">
                <img
                  src="/assets/img/portfolio/idc/lkmmTm.webp"
                  alt="ID Card panitia LKMM-TM Universitas Narotama"
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
        <section aria-labelledby="certificate-section-heading">
          <h3
            id="certificate-section-heading"
            className="font-heading text-lg md:text-xl font-semibold mb-3"
          >
            Sertifikat Kegiatan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Sertifikat PBI */}
            <figure className="card p-4 flex flex-col items-center">
              <img
                src="/assets/img/portfolio/sertifikat/pbi.webp"
                alt="Sertifikat panitia Pengkaderan Bidang Ilmu"
                className="w-full aspect-[4/3] object-cover rounded-md border border-[var(--line)]"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-2 text-sm text-[color:var(--text-muted)] text-center">
                Desain sertifikat panitia Pengkaderan Bidang Ilmu (PBI) dengan
                tema Symphony of Science.
              </figcaption>
            </figure>

            {/* Sertifikat KKN */}
            <figure className="card p-4 flex flex-col items-center">
              <img
                src="/assets/img/portfolio/sertifikat/kkn.webp"
                alt="Sertifikat KKN Pengabdian Masyarakat Desa Kepuharjo"
                className="w-full aspect-[4/3] object-cover rounded-md border border-[var(--line)]"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-2 text-sm text-[color:var(--text-muted)] text-center">
                Desain sertifikat pengabdian masyarakat KKN dengan fokus pada
                pelatihan digitalisasi UMKM di Desa Kepuharjo.
              </figcaption>
            </figure>

            {/* Sertifikat KPUM */}
            <figure className="card p-4 flex flex-col items-center">
              <img
                src="/assets/img/portfolio/sertifikat/kpum.webp"
                alt="Sertifikat panitia KPUM Universitas Narotama"
                className="w-full aspect-[4/3] object-cover rounded-md border border-[var(--line)]"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-2 text-sm text-[color:var(--text-muted)] text-center">
                Desain sertifikat panitia KPUM Universitas Narotama untuk
                kegiatan kampanye terbuka pemilihan mahasiswa.
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </section>
  );
}
