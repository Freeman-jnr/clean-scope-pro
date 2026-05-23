import SectionBadge from "./SectionBadge";
import areasImg from "@/assets/supplies-bucket.jpg";

const areas = [
  "Coventry City Centre", "Earlsdon", "Tile Hill", "Foleshill",
  "Canley", "Binley", "Stoke", "Wyken",
  "Radford", "Allesley", "Cheylesmore", "& More",
];

export default function Areas() {
  return (
    <section id="areas" className="relative bg-glow-soft py-24 px-6 sm:px-8 text-center overflow-hidden">
      <div className="absolute top-1/2 -left-32 w-[420px] h-[420px] rounded-full bg-sky/15 blur-[120px] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="fade-up">
          <SectionBadge>Service Coverage</SectionBadge>
          <h2 className="font-outfit font-extrabold text-3xl md:text-5xl text-navy leading-[1.1] tracking-[-0.025em] mb-4">
            Areas We <span className="text-gradient-sky">Cover</span>
          </h2>
          <p className="text-gray-600 leading-[1.7] max-w-[600px] mx-auto mb-10">
            We provide professional property cleaning services across Coventry
            and surrounding areas. Get in touch to confirm coverage for your
            location.
          </p>
        </div>

        <div className="fade-up relative max-w-[760px] mx-auto rounded-2xl overflow-hidden mb-10 shadow-[0_30px_80px_-20px_rgba(2,132,199,0.35)]" style={{ height: 320 }}>
          <img
            src={areasImg}
            alt="Spark Pro Cleaning Limited cleaner with supplies ready for bookings"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/85 via-navy/55 to-sky-deeper/55" />
          <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <div className="relative w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl mb-4">
              📍
              <span className="absolute inset-0 rounded-2xl bg-sky/40 blur-xl -z-10 animate-glow-pulse" />
            </div>
            <p className="font-outfit font-extrabold text-2xl md:text-3xl text-white mb-2">
              Coventry & Surrounding Areas
            </p>
            <p className="text-white/85 font-medium text-sm">
              Contact us to confirm coverage for your specific location
            </p>
          </div>
        </div>

        <div className="fade-up flex flex-wrap justify-center gap-2.5 max-w-[700px] mx-auto">
          {areas.map((a) => (
            <span
              key={a}
              className="bg-white/70 backdrop-blur-md border-[1.5px] border-sky-light text-sky-deeper text-sm font-semibold px-5 py-2 rounded-full hover:bg-gradient-to-r hover:from-sky hover:to-sky-deeper hover:text-white hover:border-transparent hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(2,132,199,0.3)] transition-all cursor-default"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
