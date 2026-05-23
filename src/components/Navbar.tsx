import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Areas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] h-[68px] px-6 sm:px-8 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl border-b border-white/60 shadow-[0_8px_32px_rgba(2,132,199,0.08)]"
          : "bg-white/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <a
        href="#hero"
        className="font-outfit font-extrabold text-[1.35rem] sm:text-[1.45rem] text-navy tracking-[-0.03em] flex items-center gap-2 group"
      >
        <span className="relative inline-flex w-7 h-7 rounded-lg bg-gradient-to-br from-sky to-sky-deeper shadow-[0_4px_16px_rgba(56,189,248,0.5)] items-center justify-center text-white text-sm group-hover:rotate-6 transition-transform">
          ✦
          <span className="absolute inset-0 rounded-lg bg-sky/40 blur-md -z-10 animate-glow-pulse" />
        </span>
        Spark<span className="text-gradient-sky">Pro</span>
      </a>

      <ul className="hidden nav:flex gap-8 items-center list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="relative text-sm font-medium text-gray-600 hover:text-navy transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-sky after:to-sky-deeper after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#booking"
            className="btn-shine relative inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-dark to-sky-deeper text-white px-5 py-2 rounded-full text-sm font-semibold shadow-[0_8px_24px_rgba(2,132,199,0.35)] hover:shadow-[0_12px_32px_rgba(2,132,199,0.5)] hover:-translate-y-0.5 transition-all"
          >
            Book Now <span aria-hidden>→</span>
          </a>
        </li>
      </ul>

      <button
        aria-label="Toggle menu"
        onClick={() => setMobileOpen((v) => !v)}
        className="nav:hidden flex flex-col gap-[5px] p-2 bg-transparent border-0 cursor-pointer"
      >
        <span className={`block w-6 h-[2px] bg-gray-800 rounded transition-all ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block w-6 h-[2px] bg-gray-800 rounded transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[2px] bg-gray-800 rounded transition-all ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {mobileOpen && (
        <div className="nav:hidden fixed top-[68px] left-0 right-0 bg-white/85 backdrop-blur-xl border-b border-gray-200 shadow-[0_12px_40px_rgba(2,132,199,0.12)] flex flex-col py-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="px-8 py-3 text-sm font-medium text-gray-700 hover:text-sky-dark hover:bg-sky-lighter/60"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="mx-8 mt-2 bg-gradient-to-r from-sky-dark to-sky-deeper text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center shadow-[0_8px_24px_rgba(2,132,199,0.35)]"
          >
            Book Now →
          </a>
        </div>
      )}
    </nav>
  );
}
