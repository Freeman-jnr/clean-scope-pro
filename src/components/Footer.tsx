export default function Footer() {
  return (
    <footer className="bg-navy text-white px-8 pt-12 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 nav:grid-cols-[2fr_1fr_1fr] gap-12 pb-10 border-b border-white/10">
          <div>
            <p className="font-outfit font-extrabold text-xl mb-4">
              Spark<span className="text-sky">Pro</span> Cleaning Ltd
            </p>
            <p className="text-sm text-white/50 leading-relaxed max-w-[280px] mb-5">
              Coventry-based property cleaning specialists. Reliable,
              structured, and built for landlords, letting agents, Airbnb
              hosts, and housing providers.
            </p>
            <ul className="space-y-2 list-none">
              <li className="flex items-center gap-2 text-xs text-white/55">
                📍 <span><strong className="text-white/75">Location:</strong> Coventry, UK</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/55">
                📞 <span><strong className="text-white/75">Phone:</strong> Available on booking</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/55">
                ✉️ <span><strong className="text-white/75">Email:</strong> <a href="mailto:info@sparkprocleaninglimited.co.uk" className="hover:text-sky transition-colors">info@sparkprocleaninglimited.co.uk</a></span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-outfit font-bold uppercase tracking-wider text-white/45 mb-4">
              Services
            </p>
            <ul className="space-y-2 list-none">
              {[
                "Airbnb & Short-Let Cleaning",
                "End of Tenancy Cleaning",
                "Void Property Cleaning",
                "Deep Cleaning",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/65 hover:text-sky transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-outfit font-bold uppercase tracking-wider text-white/45 mb-4">
              Company
            </p>
            <ul className="space-y-2 list-none">
              <li><a href="#about" className="text-sm text-white/65 hover:text-sky transition-colors">About Us</a></li>
              <li><a href="#quality" className="text-sm text-white/65 hover:text-sky transition-colors">Our Standards</a></li>
              <li><a href="#areas" className="text-sm text-white/65 hover:text-sky transition-colors">Areas We Cover</a></li>
              <li><a href="#booking" className="text-sm text-white/65 hover:text-sky transition-colors">Book a Clean</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <p className="text-xs text-white/35">
            © 2025 Spark Pro Cleaning Limited. All rights reserved. Coventry, UK.
          </p>
          <div className="flex flex-wrap gap-2">
            {["✓ Insured", "✓ Checklist-Based", "✓ Coventry Based"].map((b) => (
              <span
                key={b}
                className="bg-white/[0.08] border border-white/10 text-white/50 text-xs px-3 py-1 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
