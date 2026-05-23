export default function Footer() {
  return (
    <footer className="relative bg-aurora text-white px-6 sm:px-8 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-sky/20 blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 nav:grid-cols-[2fr_1fr_1fr] gap-12 pb-10 border-b border-white/10">
          <div>
            <p className="font-outfit font-extrabold text-xl mb-4 flex items-center gap-2">
              <span className="inline-flex w-7 h-7 rounded-lg bg-gradient-to-br from-sky to-sky-deeper items-center justify-center text-white text-sm shadow-[0_4px_16px_rgba(56,189,248,0.5)]">✦</span>
              Spark<span className="text-gradient-sky">Pro</span> Cleaning Ltd
            </p>
            <p className="text-sm text-white/60 leading-relaxed max-w-[300px] mb-5">
              Coventry-based property cleaning specialists. Reliable,
              structured, and built for landlords, letting agents, Airbnb
              hosts, and housing providers.
            </p>
            <ul className="space-y-2 list-none">
              <li className="flex items-center gap-2 text-xs text-white/55">
                📍 <span><strong className="text-white/80">Location:</strong> Coventry, UK</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/55">
                📞 <span><strong className="text-white/80">Phone:</strong> Available on booking</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-white/55">
                ✉️ <span><strong className="text-white/80">Email:</strong> <a href="mailto:info@sparkprocleaninglimited.co.uk" className="hover:text-sky transition-colors">info@sparkprocleaninglimited.co.uk</a></span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-outfit font-bold uppercase tracking-wider text-white/50 mb-4">
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
            <p className="text-xs font-outfit font-bold uppercase tracking-wider text-white/50 mb-4">
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
          <p className="text-xs text-white/40">
            © 2025 Spark Pro Cleaning Limited. All rights reserved. Coventry, UK.
          </p>
          <div className="flex flex-wrap gap-2">
            {["✓ Insured", "✓ Checklist-Based", "✓ Coventry Based"].map((b) => (
              <span
                key={b}
                className="glass text-white/70 text-xs px-3 py-1 rounded-full"
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
