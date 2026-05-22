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
    <section
      id="quality"
      className="py-20 px-8"
      style={{ background: "linear-gradient(135deg, #0C2D48 0%, #0C4A6E 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="fade-up text-center max-w-[600px] mx-auto">
          <SectionBadge variant="dark">Our Standard</SectionBadge>
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl text-white leading-[1.15] tracking-[-0.02em] mb-4">
            Quality Control at <span style={{ color: "#38BDF8" }}>Every Step</span>
          </h2>
          <p className="text-white/60 leading-[1.7]">
            We don't just clean — we operate to a professional standard with
            systems in place to ensure consistency every single time.
          </p>
        </div>

        <div className="fade-up mt-12 relative rounded-2xl overflow-hidden h-[220px]">
          <img src={qualityImg} alt="ClearSpace Pro team member with cleaning trolley" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-transparent" />
          <div className="relative h-full flex items-center px-8 max-w-md">
            <div>
              <p className="font-outfit font-extrabold text-white text-2xl leading-tight mb-2">Trained. Equipped. Consistent.</p>
              <p className="text-white/75 text-sm">Every team member arrives fully equipped and follows our quality standard end to end.</p>
            </div>
          </div>
        </div>


        <div className="grid gap-6 mt-12 grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="fade-up text-center rounded-lg p-8 transition-all hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-outfit font-bold text-white text-base mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
