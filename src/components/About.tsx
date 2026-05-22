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
    <section id="about" className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 nav:grid-cols-2 gap-16 items-center">
        <div className="fade-up">
          <SectionBadge>About Us</SectionBadge>
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl text-navy leading-[1.15] tracking-[-0.02em] mb-6">
           Coventry's Property{" "}
            <span className="text-sky-dark">Cleaning Specialists</span>
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
                className="bg-sky-lighter border border-sky-light rounded-md p-5"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <h3 className="font-outfit font-bold text-navy text-sm mb-1">
                  {f.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={aboutImg}
              alt="Smiling ClearSpace Pro cleaner with supplies, ready to serve Coventry"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-outfit font-extrabold text-2xl mb-1">
                Clean. Reliable. Professional.
              </p>
              <p className="text-white/80 text-sm">Serving Coventry & Surrounding Areas</p>
            </div>
            <div
              className="absolute top-6 left-6 bg-white rounded-full px-4 py-2 text-xs font-semibold text-sky-deeper shadow-[0_4px_16px_rgba(2,132,199,0.15)] animate-float-pill"
            >
              ✓ Photo Verification
            </div>
            <div
              className="absolute top-6 right-6 bg-white rounded-full px-4 py-2 text-xs font-semibold text-sky-deeper shadow-[0_4px_16px_rgba(2,132,199,0.15)] animate-float-pill"
              style={{ animationDelay: "-2s" }}
            >
              Coventry Based
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
