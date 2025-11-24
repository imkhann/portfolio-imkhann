import VideoEmbedFrame from "./VideoEmbedFrame";

export default function VideoSection() {
  return (
    <section id="video" className="container-pro py-12">
      <div className="flex items-center gap-2 mb-4">
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
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
        <h2 className="font-heading text-2xl md:text-3xl font-bold">Video</h2>
      </div>

      <div className="space-y-8">
        {/* KPUM */}
        <article className="card p-4">
          <h3 className="font-heading font-semibold text-lg mb-2">
            KPUM Universitas Narotama
          </h3>
          <VideoEmbedFrame
            platform="instagram"
            src="https://www.instagram.com/reel/DDJIHXIytvn/embed"
            title="Reel KPUM Universitas Narotama"
            ratioClass="aspect-[9/16]"
            maxWidthClass="max-w-xs sm:max-w-sm md:max-w-md"
            allow="clipboard-write; encrypted-media; picture-in-picture"
          />
          <p className="text-sm text-[color:var(--text-muted)] mt-3">
            Reel publikasi Komisi Pemilihan Umum Mahasiswa (KPUM) Universitas
            Narotama, menyorot ajakan partisipasi mendaftarkan diri sebagai
            calon pimpinan BEM dan himpunan mahasiswa.
          </p>
        </article>

        {/* KKN Desa Kepuharjo */}
        <article className="card p-4">
          <h3 className="font-heading font-semibold text-lg mb-2">
            KKN Desa Kepuharjo – Dokumentasi Program
          </h3>

          <div className="space-y-4">
            {/* Reel 1 KKN */}
            <VideoEmbedFrame
              platform="instagram"
              src="https://www.instagram.com/reel/C_j5QtUyBFt/embed"
              title="Reel KKN Desa Kepuharjo 1"
              ratioClass="aspect-[9/16]"
              maxWidthClass="max-w-xs sm:max-w-sm md:max-w-md"
              allow="clipboard-write; encrypted-media; picture-in-picture"
            />
            <p className="text-sm text-[color:var(--text-muted)]">
              Cuplikan kegiatan KKN di Desa Kepuharjo hari pertama, menampilkan
              suasana lapangan, interaksi dengan warga, dan dokumentasi visual
              program kerja utama.
            </p>

            {/* Reel 2 KKN */}
            <VideoEmbedFrame
              platform="instagram"
              src="https://www.instagram.com/reel/C_j6bxnyi_t/embed"
              title="Reel KKN Desa Kepuharjo 2"
              ratioClass="aspect-[9/16]"
              maxWidthClass="max-w-xs sm:max-w-sm md:max-w-md"
              allow="clipboard-write; encrypted-media; picture-in-picture"
            />
            <p className="text-sm text-[color:var(--text-muted)]">
              Reel lanjutan KKN yang merangkum aktivitas hari kedua, dokumentasi
              suasana kebersamaan tim selama program berlangsung.
            </p>

            {/* YouTube After Movie KKN */}
            <VideoEmbedFrame
              platform="youtube"
              src="https://www.youtube.com/embed/aNE7_Pi9Bw4?si=VX6O393K5xAf2SCV"
              title="After Movie KKN Desa Kepuharjo"
            />
            <p className="text-sm text-[color:var(--text-muted)]">
              After movie KKN yang merangkum perjalanan program dari persiapan,
              pelaksanaan, hingga penutupan, dengan fokus pada alur cerita,
              dampak kegiatan, dan momen kebersamaan dengan masyarakat.
            </p>

            {/* Drive 1 KKN */}
            <VideoEmbedFrame
              platform="drive"
              src="https://drive.google.com/file/d/177phLwL_WJ93hkPYQi01cJNWj-OGqVJj/preview"
              title="Video Dokumentasi KKN 1"
              allow="autoplay"
              allowFullScreen={true}
            />
            <p className="text-sm text-[color:var(--text-muted)]">
              Dokumentasi tambahan KKN yang menampilkan detail pelaksanaan
              program kerja, yaitu digitalisasi UMKM, dengan membuatkan konten
              yang akan diberikan kepada UMKM tersebut.
            </p>

            {/* Drive 2 KKN */}
            <VideoEmbedFrame
              platform="drive"
              src="https://drive.google.com/file/d/15AEVGkwbq4eO54aZbtqRLeINXQ_sws8H/preview"
              title="Video Dokumentasi KKN 2"
              allow="autoplay"
              allowFullScreen={true}
            />
            <p className="text-sm text-[color:var(--text-muted)]">
              Konten video salah satu UMKM, yang menampilkan proses pembuatan
              donat dari awal hingga akhir. Bertujuan untuk membantu UMKM dalam
              mempromosikan produknya secara digital.
            </p>
          </div>
        </article>

        {/* PKKMB Narotama */}
        <article className="card p-4">
          <h3 className="font-heading font-semibold text-lg mb-2">
            PKKMB Universitas Narotama
          </h3>

          <div className="space-y-4">
            {/* Reel 1 PKKMB */}
            <VideoEmbedFrame
              platform="instagram"
              src="https://www.instagram.com/reel/CipL-eHJ_tm/embed"
              title="Reel PKKMB 1"
              ratioClass="aspect-[9/16]"
              maxWidthClass="max-w-xs sm:max-w-sm md:max-w-md"
              allow="clipboard-write; encrypted-media; picture-in-picture"
            />
            <p className="text-sm text-[color:var(--text-muted)]">
              Dokumentasi kegiatan Technical Meeting PKKMB 2022, menampilkan
              rangkuman kegiatan selama acara berlangsung.
            </p>

            {/* Reel 2 PKKMB */}
            <VideoEmbedFrame
              platform="instagram"
              src="https://www.instagram.com/reel/CkpIWzJM79p/embed"
              title="Reel PKKMB 2"
              ratioClass="aspect-[9/16]"
              maxWidthClass="max-w-xs sm:max-w-sm md:max-w-md"
              allow="clipboard-write; encrypted-media; picture-in-picture"
            />
            <p className="text-sm text-[color:var(--text-muted)]">
              Dokumentasi kegiatan acara PKKMB hari kelima, menampilkan
              rangkaian sesi materi, hiburan, dan interaksi antar peserta.
            </p>

            {/* Reel 3 PKKMB */}
            <VideoEmbedFrame
              platform="instagram"
              src="https://www.instagram.com/reel/CksN4f8NCEc/embed"
              title="Reel PKKMB 3"
              ratioClass="aspect-[9/16]"
              maxWidthClass="max-w-xs sm:max-w-sm md:max-w-md"
              allow="clipboard-write; encrypted-media; picture-in-picture"
            />
            <p className="text-sm text-[color:var(--text-muted)]">
              Reel penutup yang merangkum kegiatan hari terakhir PKKMB, mulai
              dari agenda formal, hiburan, hingga dokumentasi kebersamaan
              panitia dan peserta.
            </p>
          </div>
        </article>

        {/* BEM Narotama */}
        <article className="card p-4">
          <h3 className="font-heading font-semibold text-lg mb-2">
            BEM Universitas Narotama
          </h3>

          <VideoEmbedFrame
            platform="instagram"
            src="https://www.instagram.com/reel/ClOu6CphqSx/embed"
            title="Reel BEM Universitas Narotama"
            ratioClass="aspect-[9/16]"
            maxWidthClass="max-w-xs sm:max-w-sm md:max-w-md"
            allow="clipboard-write; encrypted-media; picture-in-picture"
          />
          <p className="text-sm text-[color:var(--text-muted)] mt-3">
            Konten video untuk BEM Universitas Narotama yang menampilkan
            rangkaian kegiatan seleksi wawancara peserta magang BEM.
          </p>
        </article>

        {/* LKMM-TD */}
        <article className="card p-4">
          <h3 className="font-heading font-semibold text-lg mb-2">
            LKMM-TD Universitas Narotama
          </h3>

          <VideoEmbedFrame
            platform="drive"
            src="https://drive.google.com/file/d/1vqCCkb0JmZoYgUqiXB9jP_5xfB-uuzgP/preview"
            title="Video LKMM-TD"
            allow="autoplay"
            allowFullScreen={true}
          />
          <p className="text-sm text-[color:var(--text-muted)] mt-3">
            Dokumentasi kegiatan Latihan Keterampilan Manajemen Mahasiswa
            Tingkat Dasar (LKMM-TD), berisi rangkaian sesi materi, dinamika
            kelompok, dan suasana pelatihan kepemimpinan bagi mahasiswa.
          </p>
        </article>

        {/* Ekspedisi Paguyuban KIP-K */}
        <article className="card p-4">
          <h3 className="font-heading font-semibold text-lg mb-2">
            Ekspedisi Paguyuban KIP-K
          </h3>

          <VideoEmbedFrame
            platform="drive"
            src="https://drive.google.com/file/d/1PMqXJysaDvj_NViSEvNIueFnshAtFSJ1/preview"
            title="Video Ekspedisi Paguyuban KIP-K"
            allow="autoplay"
            allowFullScreen={true}
          />
          <p className="text-sm text-[color:var(--text-muted)] mt-3">
            Video ekspedisi Paguyuban KIP-K yang menampilkan rangkuman aktivitas
            para anggota paguyuban dalam menjalankan progam kerja pengabdian
            kepada masyarakat. Acara ini berlangsung selama 3 hari di Desa
            Somber Kecamatan Tambelangan Kabupaten Sampang.
          </p>
        </article>
        
        {/* Video Profile UKKI 2023 */}
        <article className="card p-4">
          <h3 className="font-heading font-semibold text-lg mb-2">
            Video Profile UKKI 2023
          </h3>

          <VideoEmbedFrame
            platform="drive"
            src="https://drive.google.com/file/d/1NlBc9UtH1T76o5XQBPNg4fGSvSigcMCg/preview"
            title="Video Profile UKKI 2023"
            allow="autoplay"
            allowFullScreen={true}
          />
          <p className="text-sm text-[color:var(--text-muted)] mt-3">
            Video profile Unit Kegiatan Kerohanian Islam (UKKI) Universitas
            Narotama tahun 2023 yang menampilkan berbagai aktivitas atau kegiatan
            yang dilakukan oleh anggota UKKI sekaligus memprosikan UKKI itu sendiri.
          </p>
        </article>

        {/* Video Testimoni KIP-K */}
        <article className="card p-4">
          <h3 className="font-heading font-semibold text-lg mb-2">
            Video Testimoni KIP-K
          </h3>

          <VideoEmbedFrame
            platform="drive"
            src="https://drive.google.com/file/d/1TNNOtdAGDyU4Sm6QS6oUJRjbOgnTnV42/preview"
            title="Video Testimoni KIP-K"
            allow="autoplay"
            allowFullScreen={true}
          />
          <p className="text-sm text-[color:var(--text-muted)] mt-3">
            Merupakan video tugas untuk testimoni saya sebagai kip-k di
            Universitas Narotama selama 4 tahun berkuliah. Berdurasi 5 menit
            yang merangkum beberapa kegiatan yang saya lakukan semasa kuliah.
          </p>
        </article>
      </div>
    </section>
  );
}
