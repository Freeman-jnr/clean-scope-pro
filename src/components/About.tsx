import SectionBadge from "./SectionBadge";
import aboutImg from "@/assets/cleaner-thumbsup.jpg";

const features = [
  { icon: "📋", title: "Structured Checklists", text: "Every job completed to a detailed, consistent standard." },
  { icon: "🔍", title: "Quality Checks", text: "Scheduled inspections to maintain professional standards." },
  { icon: "⏰", title: "Flexible Availability", text: "Scheduling built around your turnaround requirements." },
  { icon: "🤝", title: "Reliable Communication", text: "Clear updates and confirmation at every stage." },
];

export default function About() {
  return (
    <section id="about" className="relative bg-glow-soft py-24 px-6 sm:px-8 overflow-hidden">
      <div className="absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full bg-sky/15 blur-[120px] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 nav:grid-cols-2 gap-16 items-center">
        <div className="fade-up">
          <SectionBadge>About Us</SectionBadge>
          <h2 className="font-outfit font-extrabold text-3xl md:text-5xl text-navy leading-[1.1] tracking-[-0.025em] mb-6">
            Coventry's Property{" "}
            <span className="text-gradient-sky">Cleaning Specialists</span>
          </h2>
          <p className="text-gray-600 leading-[1.7] mb-4">
            We are a Coventry-based property cleaning and support company
            specialising in Airbnb turnovers, end-of-tenancy cleaning, domestic
            cleaning and void property services.
          </p>
          <p className="text-gray-600 leading-[1.7] mb-8">
            We support landlords, housing providers, letting agents, and
            short-let operators with dependable cleaning solutions designed
            around fast turnaround times, quality control, and operational
            efficiency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="glow-ring relative bg-white/70 backdrop-blur-md border border-sky-light/60 rounded-xl p-5 card-hover hover:border-sky"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <h3 className="font-outfit font-bold text-navy text-sm mb-1">
                  {f.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up">
          <div className="relative rounded-2xl overflow-hidden group shadow-[0_30px_80px_-20px_rgba(2,132,199,0.35)]">
            <img
              src={aboutImg}
              alt="Smiling Spark Pro Cleaning Limited cleaner with supplies, ready to serve Coventry"
              className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-outfit font-extrabold text-2xl mb-1">
                Clean. Reliable. Professional.
              </p>
              <p className="text-white/80 text-sm">Serving Coventry & Surrounding Areas</p>
            </div>
            <div className="absolute top-6 left-6 glass-light rounded-full px-4 py-2 text-xs font-semibold text-sky-deeper shadow-[0_8px_24px_rgba(2,132,199,0.2)] animate-float-pill">
              ✓ Photo Verification
            </div>
            <div
              className="absolute top-6 right-6 glass-light rounded-full px-4 py-2 text-xs font-semibold text-sky-deeper shadow-[0_8px_24px_rgba(2,132,199,0.2)] animate-float-pill"
              style={{ animationDelay: "-2s" }}
            >
              Coventry Based
            </div>
            {/* glow accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-sky/40 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
