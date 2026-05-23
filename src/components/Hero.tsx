import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[68px] flex items-center overflow-hidden bg-navy-deep"
    >
      {/* slideshow with subtle Ken Burns */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <img
              src={src}
              alt=""
              className={`w-full h-full object-cover ${
                i === index ? "scale-110" : "scale-100"
              } transition-transform duration-[8000ms] ease-out`}
            />
          </div>
        ))}
        {/* cinematic lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/40 to-navy-deep/85" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(56,189,248,0.18),transparent_60%)]" />
        {/* aurora orbs */}
        <div className="absolute -top-20 -left-32 w-[480px] h-[480px] rounded-full bg-sky/30 blur-[120px] animate-aurora" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-sky-deeper/40 blur-[140px] animate-aurora" style={{ animationDelay: "-6s" }} />
        {/* grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wider mb-6"
        >
          <span className="relative w-[7px] h-[7px] bg-sky rounded-full">
            <span className="absolute inset-0 rounded-full bg-sky animate-ping" />
          </span>
          Coventry's Trusted Cleaners
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-outfit font-extrabold text-white leading-[1.05] tracking-[-0.035em] mb-6 mx-auto max-w-4xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.8rem)" }}
        >
          Coventry's Premier Property{" "}
          <em className="not-italic text-gradient-sky">Cleaning Company</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[1.05rem] sm:text-[1.15rem] text-white/85 leading-[1.7] mb-10 max-w-2xl mx-auto"
        >
          Specialists in Airbnb turnovers, end-of-tenancy, domestic, and void
          property cleaning. Reliable, structured, and built around your
          schedule.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#booking"
            className="btn-shine group inline-flex items-center gap-2 bg-gradient-to-r from-sky to-sky-deeper text-white font-semibold px-8 py-4 rounded-full shadow-[0_12px_40px_rgba(56,189,248,0.45)] hover:shadow-[0_18px_60px_rgba(56,189,248,0.6)] hover:-translate-y-0.5 transition-all"
          >
            Book a Clean
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
          <a
            href="#services"
            className="glass inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/15 hover:-translate-y-0.5 transition-all"
          >
            Our Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-14 mx-auto max-w-2xl glass rounded-2xl px-6 py-5 flex gap-6 sm:gap-10 justify-around flex-wrap"
        >
          {[
            { num: "100%", label: "Checklist-based" },
            { num: "24hr", label: "Fast Turnaround" },
            { num: "5★", label: "Quality Standard" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="font-outfit font-extrabold text-2xl sm:text-3xl text-gradient-sky leading-none">
                {s.num}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/75 font-medium mt-1.5">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* slide indicators */}
        <div className="flex gap-2 justify-center mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-10 bg-gradient-to-r from-sky to-sky-light" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/60 text-[10px] uppercase tracking-[0.3em]">
        Scroll
        <span className="block w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
