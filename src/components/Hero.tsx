import heroImg from "@/assets/hero-clean.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[68px] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(155deg, #F0F9FF 0%, #E0F2FE 40%, #BAE6FD 100%)",
      }}
    >
      {/* animated circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full opacity-[0.18] animate-float-circle"
          style={{
            width: 600,
            height: 600,
            top: -200,
            right: -100,
            background: "radial-gradient(circle, #38BDF8, transparent)",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute rounded-full opacity-[0.18] animate-float-circle"
          style={{
            width: 400,
            height: 400,
            bottom: -100,
            left: -80,
            background: "radial-gradient(circle, #0284C7, transparent)",
            animationDelay: "-4s",
          }}
        />
        <div
          className="absolute rounded-full opacity-[0.18] animate-float-circle"
          style={{
            width: 250,
            height: 250,
            top: "50%",
            right: "25%",
            background: "radial-gradient(circle, #7DD3FC, transparent)",
            animationDelay: "-2s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-8 py-20 grid grid-cols-1 nav:grid-cols-2 gap-16 items-center">
        {/* left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white border-[1.5px] border-sky-light rounded-full px-4 py-1.5 text-xs font-semibold text-sky-deeper uppercase tracking-wider mb-6">
            <span className="w-[7px] h-[7px] bg-sky rounded-full animate-pulse-dot" />
            Birmingham's Trusted Cleaners
          </div>

          <h1
            className="font-outfit font-extrabold text-navy leading-[1.1] tracking-[-0.03em] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
          >
            Professional Cleaning for{" "}
            <em className="not-italic text-sky-dark relative inline-block">
              Every Property
              <span
                className="absolute left-0 right-0 bottom-[2px] h-1 bg-sky-light rounded"
                style={{ zIndex: -1 }}
              />
            </em>
          </h1>

          <p className="text-[1.05rem] text-gray-600 leading-[1.7] mb-10 max-w-[480px]">
            Birmingham-based specialists in Airbnb turnovers, end-of-tenancy,
            domestic, and void property cleaning. Reliable, structured, and
            built around your schedule.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-sky-dark text-white font-semibold px-8 py-3.5 rounded-full shadow-[0_4px_18px_rgba(2,132,199,0.28)] hover:bg-sky-deeper hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(2,132,199,0.36)] transition-all"
            >
              Book a Clean ↗
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white text-sky-dark font-semibold px-8 py-3.5 rounded-full border-2 border-sky-light hover:border-sky-dark hover:-translate-y-0.5 transition-all"
            >
              Our Services
            </a>
          </div>

          <div className="flex gap-8 mt-10">
            {[
              { num: "100%", label: "Checklist-based" },
              { num: "24hr", label: "Fast Turnaround" },
              { num: "5★", label: "Quality Standard" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-outfit font-extrabold text-2xl text-navy leading-none">
                  {s.num}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* right image */}
        <div className="hidden nav:flex justify-center items-center animate-fade-in-right">
          <div className="relative w-[420px] h-[460px]">
            <div
              className="absolute inset-0 bg-sky-light/40 rounded-2xl"
              style={{ transform: "rotate(4deg)" }}
            />
            <img
              src={heroImg}
              alt="Professional cleaner mopping a Birmingham living room"
              className="relative w-full h-full object-cover rounded-2xl shadow-[0_20px_60px_rgba(12,45,72,0.25)]"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-5 py-3 shadow-[0_8px_24px_rgba(2,132,199,0.18)] flex items-center gap-3">
              <span className="w-9 h-9 bg-sky-lighter rounded-md flex items-center justify-center text-lg">✓</span>
              <div>
                <p className="font-outfit font-bold text-navy text-sm leading-tight">Checklist Verified</p>
                <p className="text-[11px] text-gray-500">Every single clean</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
