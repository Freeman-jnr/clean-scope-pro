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
      className={`fixed top-0 left-0 right-0 z-[100] h-[68px] px-8 flex items-center justify-between bg-white/90 backdrop-blur-md border-b border-gray-200 transition-shadow ${
        scrolled ? "shadow-[0_2px_24px_rgba(56,189,248,0.12)]" : ""
      }`}
    >
      <a
        href="#hero"
        className="font-outfit font-extrabold text-[1.45rem] text-navy tracking-[-0.03em]"
      >
        Spark<span className="text-sky-dark">Pro</span> Cleaning Ltd
      </a>

      <ul className="hidden nav:flex gap-8 items-center list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-sky-dark transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#booking"
            className="bg-sky-dark text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-sky-deeper hover:-translate-y-0.5 transition-all inline-block"
          >
            Book Now
          </a>
        </li>
      </ul>

      <button
        aria-label="Toggle menu"
        onClick={() => setMobileOpen((v) => !v)}
        className="nav:hidden flex flex-col gap-[5px] p-1 bg-transparent border-0 cursor-pointer"
      >
        <span className="block w-6 h-[2px] bg-gray-800 rounded" />
        <span className="block w-6 h-[2px] bg-gray-800 rounded" />
        <span className="block w-6 h-[2px] bg-gray-800 rounded" />
      </button>

      {mobileOpen && (
        <div className="nav:hidden fixed top-[68px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg flex flex-col py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="px-8 py-3 text-sm font-medium text-gray-600 hover:text-sky-dark hover:bg-sky-lighter"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="mx-8 mt-2 bg-sky-dark text-white px-5 py-2 rounded-full text-sm font-semibold text-center"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
