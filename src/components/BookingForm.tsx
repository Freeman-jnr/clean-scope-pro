import { useEffect, useState } from "react";
import SectionBadge from "./SectionBadge";
import type { BookingFeatureProps } from "@/types";
import bookingImg from "@/assets/cleaner-thumbsup.jpg";

interface FormData {
  fname: string; lname: string; email: string; phone: string;
  service: string; date: string; proptype: string; address: string; message: string;
}

const features: BookingFeatureProps[] = [
  { icon: "⚡", title: "Fast Response", text: "We reply within a few hours of your enquiry" },
  { icon: "📅", title: "Flexible Scheduling", text: "Same-day and advance bookings available" },
  { icon: "💷", title: "Transparent Pricing", text: "Clear quotes with no hidden charges" },
  { icon: "🔒", title: "Trusted & Insured", text: "Fully insured professional cleaning team" },
];

const fieldCls =
  "bg-white/60 backdrop-blur-sm border-[1.5px] border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 w-full outline-none transition-all focus:border-sky focus:bg-white focus:ring-4 focus:ring-sky/15 hover:border-sky-light";
const labelCls =
  "block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5";

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    fname: "", lname: "", email: "", phone: "",
    service: "", date: "", proptype: "", address: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  const update = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: string[] = [];
    if (!formData.fname.trim()) errs.push("First name is required");
    if (!formData.email.trim()) errs.push("Email is required");
    if (!formData.service) errs.push("Please select a service");
    setErrors(errs);
    if (errs.length === 0) setSubmitted(true);
  };

  return (
    <section id="booking" className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-6 sm:px-8 overflow-hidden">
      <div className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full bg-sky/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-sky-deeper/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 nav:grid-cols-[1fr_1.3fr] gap-14 items-start">
        <div className="fade-up">
          <SectionBadge>Get in Touch</SectionBadge>
          <h2 className="font-outfit font-extrabold text-3xl md:text-5xl text-navy leading-[1.1] tracking-[-0.025em] mb-4">
            Book Your <span className="text-gradient-sky">Clean Today</span>
          </h2>
          <p className="text-gray-600 leading-[1.7] mb-6">
            Fill in the form and our team will get back to you within a few
            hours to confirm your booking and discuss your specific
            requirements.
          </p>

          <div className="relative rounded-2xl overflow-hidden mb-6 h-48 shadow-[0_20px_60px_-20px_rgba(2,132,199,0.4)]">
            <img src={bookingImg} alt="Friendly Spark Pro Cleaning Limited cleaner ready to help" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-deeper/80 via-navy/30 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <p className="font-outfit font-bold text-lg">Real people. Real reply within hours.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="glow-ring flex items-center gap-4 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl px-5 py-4 card-hover hover:border-sky-light"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-sky-lighter to-sky-light rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="font-outfit font-bold text-navy text-sm">{f.title}</p>
                  <p className="text-xs text-gray-600">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up">
          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 sm:p-10 border border-white/80 shadow-[0_30px_80px_-20px_rgba(12,45,72,0.18)]">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-sky/30 via-transparent to-sky-deeper/20 -z-10 blur" />
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-sky to-sky-deeper text-white items-center justify-center text-3xl mb-5 shadow-[0_12px_32px_rgba(2,132,199,0.4)]">
                  ✓
                </div>
                <h3 className="font-outfit font-extrabold text-2xl text-navy mb-3">
                  Booking Request Sent!
                </h3>
                <p className="text-gray-600 leading-[1.7] mb-6">
                  Thank you — we've received your request and will be in touch
                  within a few hours to confirm your booking and discuss your
                  requirements.
                </p>
                <a
                  href="#services"
                  className="inline-flex bg-white text-sky-dark font-semibold px-8 py-3 rounded-full border-2 border-sky-light hover:border-sky-dark transition-all"
                >
                  Browse Our Services
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3 className="font-outfit font-bold text-xl text-navy border-b border-gray-100 pb-5 mb-7">
                  Request a Booking
                </h3>

                {errors.length > 0 && (
                  <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                    <ul className="list-disc list-inside space-y-1">
                      {errors.map((e) => <li key={e}>{e}</li>)}
                    </ul>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>First Name *</label>
                    <input className={fieldCls} type="text" value={formData.fname} onChange={update("fname")} placeholder="Jane" />
                  </div>
                  <div>
                    <label className={labelCls}>Last Name</label>
                    <input className={fieldCls} type="text" value={formData.lname} onChange={update("lname")} placeholder="Smith" />
                  </div>
                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <input className={fieldCls} type="email" value={formData.email} onChange={update("email")} placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className={labelCls}>Phone Number</label>
                    <input className={fieldCls} type="tel" value={formData.phone} onChange={update("phone")} placeholder="07700 000000" />
                  </div>

                  <div className="sm:col-span-2">
                    <label className={labelCls}>Service Required *</label>
                    <div className="relative">
                      <select className={`${fieldCls} appearance-none pr-10`} value={formData.service} onChange={update("service")}>
                        <option value="">Select a service…</option>
                        <option>Airbnb & Short-Let Cleaning</option>
                        <option>End of Tenancy Cleaning</option>
                        <option>Void Property Cleaning</option>
                        <option>Deep Cleaning Services</option>
                        <option>Not sure — please advise</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Preferred Date</label>
                    <input className={fieldCls} type="date" value={formData.date} onChange={update("date")} min={today} />
                  </div>
                  <div>
                    <label className={labelCls}>Property Type</label>
                    <div className="relative">
                      <select className={`${fieldCls} appearance-none pr-10`} value={formData.proptype} onChange={update("proptype")}>
                        <option value="">Select…</option>
                        <option>Studio / 1 Bed</option>
                        <option>2 Bedroom</option>
                        <option>3 Bedroom</option>
                        <option>4+ Bedroom</option>
                        <option>Commercial</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className={labelCls}>Property Address / Area</label>
                    <input className={fieldCls} type="text" value={formData.address} onChange={update("address")} placeholder="e.g. Earlsdon, Coventry" />
                  </div>

                  <div className="sm:col-span-2">
                    <label className={labelCls}>Additional Notes</label>
                    <textarea
                      className={`${fieldCls} resize-y`}
                      style={{ minHeight: 100 }}
                      value={formData.message}
                      onChange={update("message")}
                      placeholder="Any specific requirements, access instructions, or questions…"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-shine w-full bg-gradient-to-r from-sky to-sky-deeper text-white font-outfit font-bold text-base rounded-full py-4 mt-7 shadow-[0_12px_40px_rgba(56,189,248,0.4)] hover:shadow-[0_18px_60px_rgba(56,189,248,0.6)] hover:-translate-y-0.5 transition-all"
                >
                  Send Booking Request
                </button>
                <p className="text-xs text-gray-400 text-center mt-4">
                  Your details are secure and will only be used to process your booking.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
