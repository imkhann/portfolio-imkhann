// src/components/header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header
      data-site-header
      className="fixed top-0 left-0 right-0 z-[70] border-b border-[var(--line)] bg-[color:var(--glass)] backdrop-blur-md"
    >
      <div className="max-w-[1200px] mx-auto h-16 flex items-center gap-3 px-4 lg:px-6">
        <Link href="/#home" className="font-heading font-extrabold text-lg leading-none select-none">
          <span className="logo-animate">IMKHANN.</span>
        </Link>

        <div className="flex-1" />

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-2">
            <li><Link href="/#about" className="nav-btn">Tentang saya</Link></li>
            <li><Link href="/#skills" className="nav-btn">Skills</Link></li>
            <li><Link href="/#portfolio" className="nav-btn">Portfolio</Link></li>
            <li><Link href="/#experience" className="nav-btn">Pengalaman</Link></li>
            <li><Link href="/#organization" className="nav-btn">Organisasi</Link></li>
            <li><Link href="/#contact" className="nav-btn">Contact</Link></li>
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
          <nav className="px-4 pb-4 mt-4">
            <ul className="flex flex-col gap-2 text-[15px]">
              <li><Link className="mobile-link" href="/#about">Tentang saya</Link></li>
              <li><Link className="mobile-link" href="/#skills">Skills</Link></li>
              <li><Link className="mobile-link" href="/#portfolio">Portfolio</Link></li>
              <li><Link className="mobile-link" href="/#experience">Pengalaman</Link></li>
              <li><Link className="mobile-link" href="/#organization">Organisasi</Link></li>
              <li><Link className="mobile-link" href="/#contact">Contact</Link></li>
            </ul>

            <div className="mt-2">
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
  );
}
