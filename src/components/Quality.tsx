import SectionBadge from "./SectionBadge";
import type { QualityCardProps } from "@/types";
import qualityImg from "@/assets/janitor-cart.jpg";

const cards: QualityCardProps[] = [
  { icon: "📋", title: "Structured Checklists", text: "Every clean follows a detailed checklist so nothing is ever missed." },
  { icon: "🔎", title: "Quality Control Checks", text: "Scheduled quality checks to maintain consistent, professional standards." },
  { icon: "📅", title: "Flexible Scheduling", text: "We work around your availability, including same-day bookings." },
  { icon: "💬", title: "Reliable Communication", text: "Clear updates from booking confirmation through to job completion." },
  { icon: "📸", title: "Photo Verification", text: "Post-clean photos provided for Airbnb and short-let clients." },
  { icon: "⭐", title: "Professional Standards", text: "All team members trained to meet landlord and agency requirements." },
];

export default function Quality() {
  return (
    <section id="quality" className="relative py-24 px-6 sm:px-8 bg-aurora overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-sky/20 blur-[140px] animate-aurora" />

      <div className="relative max-w-6xl mx-auto">
        <div className="fade-up text-center max-w-[640px] mx-auto">
          <SectionBadge variant="dark">Our Standard</SectionBadge>
          <h2 className="font-outfit font-extrabold text-3xl md:text-5xl text-white leading-[1.1] tracking-[-0.025em] mb-4">
            Quality Control at <span className="text-gradient-sky">Every Step</span>
          </h2>
          <p className="text-white/70 leading-[1.7]">
            We don't just clean — we operate to a professional standard with
            systems in place to ensure consistency every single time.
          </p>
        </div>

        <div className="fade-up mt-12 relative rounded-2xl overflow-hidden h-[240px] group">
          <img src={qualityImg} alt="Spark Pro Cleaning Limited team member with cleaning trolley" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/60 to-transparent" />
          <div className="relative h-full flex items-center px-8 max-w-md">
            <div>
              <p className="font-outfit font-extrabold text-white text-2xl md:text-3xl leading-tight mb-2">Trained. Equipped. Consistent.</p>
              <p className="text-white/75 text-sm">Every team member arrives fully equipped and follows our quality standard end to end.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 mt-12 grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="fade-up glow-ring relative text-center rounded-2xl p-7 glass card-hover hover:bg-white/10"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky/30 to-sky-deeper/10 border border-sky/30 mb-4 text-2xl">
                {c.icon}
                <span className="absolute inset-0 rounded-2xl bg-sky/30 blur-xl -z-10 animate-glow-pulse" />
              </div>
              <h3 className="font-outfit font-bold text-white text-base mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
