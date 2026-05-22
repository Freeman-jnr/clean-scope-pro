import heroImg from "@/assets/hero-clean.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[68px] flex items-center overflow-hidden"
    >
      {/* full-width background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Professional cleaning of a Birmingham living room"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.35) 50%, rgba(186,230,253,0.55) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur border-[1.5px] border-sky-light rounded-full px-4 py-1.5 text-xs font-semibold text-sky-deeper uppercase tracking-wider mb-6">
          <span className="w-[7px] h-[7px] bg-sky rounded-full animate-pulse-dot" />
          Birmingham's Trusted Cleaners
        </div>

        <h1
          className="font-outfit font-extrabold text-navy leading-[1.1] tracking-[-0.03em] mb-6 mx-auto max-w-4xl drop-shadow-sm"
          style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)" }}
        >
          Birmingham's Premier Property{" "}
          <em className="not-italic text-sky-dark relative inline-block">
            Cleaning Company
            <span
              className="absolute left-0 right-0 bottom-[2px] h-1 bg-sky-light rounded"
              style={{ zIndex: -1 }}
            />
          </em>
        </h1>

        <p className="text-[1.1rem] text-gray-800 leading-[1.7] mb-10 max-w-2xl mx-auto">
          Specialists in Airbnb turnovers, end-of-tenancy, domestic, and void
          property cleaning. Reliable, structured, and built around your
          schedule.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-sky-dark text-white font-semibold px-8 py-3.5 rounded-full shadow-[0_4px_18px_rgba(2,132,199,0.28)] hover:bg-sky-deeper hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(2,132,199,0.36)] transition-all"
          >
            Book a Clean ↗
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-white/95 backdrop-blur text-sky-dark font-semibold px-8 py-3.5 rounded-full border-2 border-sky-light hover:border-sky-dark hover:-translate-y-0.5 transition-all"
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
              <span className="font-outfit font-extrabold text-2xl text-navy leading-none">
                {s.num}
              </span>
              <span className="text-xs uppercase tracking-wider text-gray-600 font-medium mt-1">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
