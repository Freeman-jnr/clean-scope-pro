import { useEffect, useState } from "react";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";
import slide4 from "@/assets/hero-slide-4.jpg";
import slide5 from "@/assets/hero-slide-5.jpg";
import slide6 from "@/assets/hero-slide-6.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[68px] flex items-center overflow-hidden bg-navy"
    >
      {/* slideshow */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
        {/* subtle dark gradient for legibility (no white wash) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wider mb-6">
          <span className="w-[7px] h-[7px] bg-sky rounded-full animate-pulse-dot" />
          Birmingham's Trusted Cleaners
        </div>

        <h1
          className="font-outfit font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6 mx-auto max-w-4xl drop-shadow-lg"
          style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)" }}
        >
          Birmingham's Premier Property{" "}
          <em className="not-italic text-sky-light">Cleaning Company</em>
        </h1>

        <p className="text-[1.1rem] text-white/90 leading-[1.7] mb-10 max-w-2xl mx-auto drop-shadow">
          Specialists in Airbnb turnovers, end-of-tenancy, domestic, and void
          property cleaning. Reliable, structured, and built around your
          schedule.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-sky-dark text-white font-semibold px-8 py-3.5 rounded-full shadow-[0_4px_18px_rgba(2,132,199,0.4)] hover:bg-sky-deeper hover:-translate-y-0.5 transition-all"
          >
            Book a Clean ↗
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white font-semibold px-8 py-3.5 rounded-full border-2 border-white/40 hover:bg-white/20 hover:-translate-y-0.5 transition-all"
          >
            Our Services
          </a>
        </div>

        <div className="flex gap-10 mt-12 justify-center flex-wrap">
          {[
            { num: "100%", label: "Checklist-based" },
            { num: "24hr", label: "Fast Turnaround" },
            { num: "5★", label: "Quality Standard" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="font-outfit font-extrabold text-2xl text-white leading-none drop-shadow">
                {s.num}
              </span>
              <span className="text-xs uppercase tracking-wider text-white/80 font-medium mt-1">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* slide indicators */}
        <div className="flex gap-2 justify-center mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
