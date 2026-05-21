import SectionBadge from "./SectionBadge";
import areasImg from "@/assets/supplies-bucket.jpg";

const areas = [
  "Birmingham City Centre", "Edgbaston", "Moseley", "Harborne",
  "Erdington", "Solihull", "Sutton Coldfield", "Handsworth",
  "Ladywood", "Selly Oak", "Aston", "& More",
];

export default function Areas() {
  return (
    <section id="areas" className="bg-white py-20 px-8 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up">
          <SectionBadge>Service Coverage</SectionBadge>
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl text-navy leading-[1.15] tracking-[-0.02em] mb-4">
            Areas We <span className="text-sky-dark">Cover</span>
          </h2>
          <p className="text-gray-600 leading-[1.7] max-w-[600px] mx-auto mb-10">
            We provide professional property cleaning services across Birmingham
            and surrounding areas. Get in touch to confirm coverage for your
            location.
          </p>
        </div>

        <div className="fade-up relative max-w-[700px] mx-auto rounded-xl overflow-hidden mb-8" style={{ height: 300 }}>
          <img
            src={areasImg}
            alt="ClearSpace Pro cleaner with supplies ready for Birmingham bookings"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/75 via-navy/45 to-sky-deeper/55" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <div className="text-5xl mb-3">📍</div>
            <p className="font-outfit font-extrabold text-2xl text-white mb-2">
              Birmingham & Surrounding Areas
            </p>
            <p className="text-white/85 font-medium text-sm">
              Contact us to confirm coverage for your specific location
            </p>
          </div>
        </div>

        <div className="fade-up flex flex-wrap justify-center gap-2.5 max-w-[600px] mx-auto">
          {areas.map((a) => (
            <span
              key={a}
              className="bg-sky-lighter border-[1.5px] border-sky-light text-sky-deeper text-sm font-semibold px-5 py-2 rounded-full hover:bg-sky-light hover:-translate-y-0.5 transition-all cursor-default"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
