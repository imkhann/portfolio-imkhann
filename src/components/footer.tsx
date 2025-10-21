// src/components/footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--line)]">
      <div className="container-pro py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
        <p>© 2025 Imam Muhannad.</p>
        <div className="flex items-center gap-3">
          <a
            className="btn btn-ghost"
            href="https://docs.google.com/document/d/18WYvun2jCcno1KxRFyvMuKTu-eo9_pGTdgtF6Ud9llQ/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>

          <Link className="btn btn-ghost" href="/#home">
            Kembali ke atas
          </Link>
        </div>
      </div>
    </footer>
  );
}
