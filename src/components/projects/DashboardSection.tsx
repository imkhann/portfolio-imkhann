export default function DashboardSection() {
  return (
    <section
      id="dashboards"
      className="py-12"
      aria-labelledby="dashboards-heading"
    >
      <div className="container-pro mb-6">
        <div className="flex items-center gap-2">
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
            <path d="M4 20h16" />
            <rect x="5" y="12" width="3" height="6" rx="1" />
            <rect x="10.5" y="9" width="3" height="9" rx="1" />
            <rect x="16" y="6" width="3" height="12" rx="1" />
            <path d="M5 11l3-4 4 3 4-6 3 2" />
          </svg>
          <h2
            id="dashboards-heading"
            className="font-heading text-2xl md:text-3xl font-bold"
          >
            Dashboard
          </h2>
        </div>
        <p className="mt-2 text-sm text-[color:var(--text-muted)]">
          Beberapa dashboard interaktif yang dibuat menggunakan Tableau dengan
          layout desktop tetap untuk menjaga komposisi visual dan keterbacaan.
        </p>
      </div>

      <div className="container-pro">
        <div className="space-y-10 max-w-[1400px] mx-auto">
          {/* 1) Dashboard Isolation Forest */}
          <article>
            <h3 className="font-heading font-semibold text-lg mb-3">
              Business Intelligence Dashboard Deteksi Anomali Pola Konsumsi Air
              (Isolation Forest)
            </h3>

            {/* wrapper scroll horizontal di layar kecil */}
            <div className="overflow-x-auto rounded-md border border-[var(--line)] bg-[var(--surface)]">
              <div
                className="relative"
                style={{ width: 1000, height: 827 }}
              >
                <iframe
                  src="https://public.tableau.com/views/BusinessIntelligenceDashboardDeteksiAnomaliPolaKonsumsiAirmenggunakanIsoaltionForest_17629204939610/DashboardKonsumsidanTagihanAIr?:showVizHome=no&:toolbar=no&:embed=true"
                  width={1000}
                  height={827}
                  className="block"
                  frameBorder={0}
                  scrolling="no"
                  title="Dashboard Konsumsi dan Tagihan Air"
                />
              </div>
            </div>

            <p className="text-sm text-[color:var(--text-muted)] mt-3">
              Dashboard ini memberikan gambaran menyeluruh mengenai pola
              konsumsi air pelanggan dari berbagai wilayah dalam satu periode
              operasional. Visualisasi yang disusun meliputi tren konsumsi
              harian, total konsumsi per wilayah, distribusi jumlah pelanggan,
              serta hubungan antara konsumsi dan tagihan air. Pendekatan
              analitis dilengkapi dengan model Isolation Forest untuk mendeteksi
              adanya outlier atau pola penggunaan yang tidak wajar, seperti
              lonjakan pemakaian tiba-tiba atau penurunan ekstrem yang
              berpotensi mengindikasikan kebocoran, manipulasi, atau kesalahan
              pencatatan.
              <br />
              <br />
              Dashboard ini dirancang untuk membantu pengambil keputusan
              memahami dinamika pemakaian air secara cepat dan akurat, sekaligus
              mempercepat proses identifikasi anomali operasional. Dengan
              penyajian KPI ringkas, grafik interaktif, serta peta distribusi
              wilayah, dashboard ini mendukung proses evaluasi kinerja jaringan,
              estimasi kebutuhan pemeliharaan, serta perencanaan perbaikan
              layanan berbasis data.
            </p>
          </article>

          {/* 2) Dashboard Praktik BI Modul 5 */}
          <article>
            <h3 className="font-heading font-semibold text-lg mb-3">
              Dashboard Praktik Business Intelligence – Modul 5
            </h3>

            <div className="overflow-x-auto rounded-md border border-[var(--line)] bg-[var(--surface)]">
              <div
                className="relative"
                style={{ width: 1169, height: 877 }}
              >
                <iframe
                  src="https://public.tableau.com/views/ImamMuhannad__Kelompok3_Praktik1_Modul5/Dashboard?:showVizHome=no&:toolbar=no&:embed=true"
                  width={1169}
                  height={877}
                  className="block"
                  frameBorder={0}
                  scrolling="no"
                  title="Dashboard Praktik BI Modul 5"
                />
              </div>
            </div>

            <p className="text-sm text-[color:var(--text-muted)] mt-3">
              Dashboard ini menyajikan analisis operasional dari sebuah studi
              kasus yang menekankan pemahaman terhadap performa bisnis melalui
              visualisasi data multi-dimensi. Komponen di dalamnya meliputi
              tren penjualan, segmentasi pelanggan, kontribusi pendapatan per
              kategori, dan indikator utama lainnya yang mencerminkan kondisi
              kinerja perusahaan pada periode tertentu. Fokus dashboard terletak
              pada bagaimana data mentah dapat diubah menjadi insight strategis
              melalui penyusunan grafik interaktif yang mudah dipahami.
              <br />
              <br />
              Melalui kombinasi garis tren, bar chart per kategori, dan
              komponen KPI utama, dashboard ini membantu pengguna
              mengidentifikasi pola pertumbuhan, area yang membutuhkan
              optimalisasi, serta potensi peluang bisnis. Secara keseluruhan,
              dashboard ini menggambarkan pemahaman mendalam mengenai penerapan
              prinsip Business Intelligence dalam analisis operasional
              perusahaan dengan pendekatan visual yang sistematis dan
              terstruktur.
            </p>
          </article>

          {/* 3) Dashboard Final Project Kelompok 3C */}
          <article>
            <h3 className="font-heading font-semibold text-lg mb-3">
              Dashboard Final Project – Kelompok 3C
            </h3>

            <div className="overflow-x-auto rounded-md border border-[var(--line)] bg-[var(--surface)]">
              <div
                className="relative"
                style={{ width: 1169, height: 877 }}
              >
                <iframe
                  src="https://public.tableau.com/views/Kelompok3CFinproproject2_17630035054610/Dashboard1?:showVizHome=no&:toolbar=no&:embed=true"
                  width={1169}
                  height={877}
                  className="block"
                  frameBorder={0}
                  scrolling="no"
                  title="Dashboard Final Project Kelompok 3C"
                />
              </div>
            </div>

            <p className="text-sm text-[color:var(--text-muted)] mt-3">
              Dashboard ini merupakan hasil integrasi analisis data dalam skala
              proyek akhir yang menekankan penyajian visualisasi komprehensif
              terhadap performa entitas usaha atau layanan tertentu. Dashboard
              dirancang dengan beberapa tab analisis yang berfokus pada tren
              periode, distribusi performa berdasarkan kategori, serta breakdown
              kontribusi berdasarkan faktor-faktor yang relevan. Setiap bagian
              dashboard menyajikan hubungan antarvariabel secara intuitif,
              sehingga memudahkan interpretasi baik oleh manajemen maupun
              analis.
              <br />
              <br />
              Dengan struktur visual yang lebih kompleks dan interaktif,
              dashboard ini memungkinkan pengguna melakukan eksplorasi data
              secara mendalam, termasuk perbandingan antar segmen, evaluasi
              indikator kinerja, serta penarikan kesimpulan strategis dari pola
              yang teridentifikasi. Dashboard ini menampilkan pemahaman matang
              terhadap konsep BI, storytelling data, serta kemampuan mengolah
              insight menjadi rekomendasi yang relevan terhadap kebutuhan
              keputusan bisnis.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
