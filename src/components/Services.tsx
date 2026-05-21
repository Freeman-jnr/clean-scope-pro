import SectionBadge from "./SectionBadge";
import type { ServiceCardProps } from "@/types";

const services: ServiceCardProps[] = [
  {
    icon: "🏠",
    title: "Airbnb & Short-Let Cleaning",
    description:
      "Fast and reliable turnover cleaning designed for Airbnb hosts and serviced accommodation providers.",
    checklistItems: [
      "Same-day turnovers",
      "Full property cleaning",
      "Bathroom & kitchen sanitising",
      "Bed making and linen changes",
      "Restocking essentials (if required)",
      "Photo verification after each clean",
    ],
    suitableLabel: "Suitable For",
    tags: ["Airbnb Hosts", "Short-Let Operators", "Booking.com"],
  },
  {
    icon: "🧼",
    title: "End of Tenancy Cleaning",
    description:
      "Deep cleaning services designed to meet landlord and letting agent standards before new tenants move in.",
    checklistItems: [
      "Full property deep clean",
      "Oven cleaning",
      "Bathroom descaling",
      "Kitchen appliance cleaning",
      "Floor and skirting board cleaning",
      "Internal window cleaning",
    ],
    suitableLabel: "Suitable For",
    tags: ["Landlords", "Letting Agents", "Tenants"],
  },
  {
    icon: "🏢",
    title: "Void Property Cleaning",
    description:
      "Professional cleaning for empty properties requiring fast turnaround before new occupancy.",
    checklistItems: [
      "Full property cleans",
      "Rubbish removal coordination",
      "Deep sanitising",
      "Fast turnaround scheduling",
    ],
    suitableLabel: "Suitable For",
    tags: ["Housing Associations", "Property Managers", "Local Authority"],
  },
  {
    icon: "🧽",
    title: "Deep Cleaning Services",
    description:
      "Comprehensive deep cleaning for properties requiring extra attention and high cleaning standards.",
    checklistItems: [
      "Kitchens and appliances",
      "Bathrooms and tiles",
      "High-touch surfaces",
      "Dust and stain removal",
      "Full room sanitising",
    ],
    suitableLabel: "Suitable For",
    tags: ["All Property Types", "Post-Tenancy"],
  },
];

function ServiceCard({ service, index }: { service: ServiceCardProps; index: number }) {
  return (
    <div
      className="fade-up group relative bg-white rounded-lg p-8 border border-gray-200 hover:border-sky-light hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(2,132,199,0.12)] transition-all overflow-hidden"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: "linear-gradient(90deg, #38BDF8, #0284C7)",
        }}
      />
      <div className="w-14 h-14 bg-sky-lighter group-hover:bg-sky-light rounded-md flex items-center justify-center text-2xl mb-5 transition-colors">
        {service.icon}
      </div>
      <h3 className="font-outfit font-bold text-navy text-lg mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-5">
        {service.description}
      </p>
      <ul className="space-y-2 mb-6 list-none">
        {service.checklistItems.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="w-[18px] h-[18px] bg-sky-lighter text-sky-deeper text-xs font-bold rounded-full inline-flex items-center justify-center flex-shrink-0 mt-0.5">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-gray-100">
        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-2">
          {service.suitableLabel}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map((t) => (
            <span
              key={t}
              className="bg-sky-lighter text-sky-deeper text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up text-center max-w-2xl mx-auto mb-12">
          <SectionBadge>What We Do</SectionBadge>
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl text-navy leading-[1.15] tracking-[-0.02em] mb-4">
            Cleaning Services <span className="text-sky-dark">Tailored to You</span>
          </h2>
          <p className="text-gray-600 leading-[1.7]">
            Reliable and professional property cleaning for Airbnb hosts,
            landlords, letting agents, property managers, and housing providers
            across Birmingham.
          </p>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
