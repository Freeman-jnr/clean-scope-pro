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
  "bg-gray-50 border-[1.5px] border-gray-200 rounded-sm px-4 py-2.5 text-sm text-gray-800 w-full outline-none transition-all focus:border-sky focus:bg-white focus:ring-4 focus:ring-sky/10";
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
    <section id="booking" className="bg-gray-50 py-20 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 nav:grid-cols-[1fr_1.3fr] gap-16 items-start">
        <div className="fade-up">
          <SectionBadge>Get in Touch</SectionBadge>
          <h2 className="font-outfit font-extrabold text-3xl md:text-4xl text-navy leading-[1.15] tracking-[-0.02em] mb-4">
            Book Your <span className="text-sky-dark">Clean Today</span>
          </h2>
          <p className="text-gray-600 leading-[1.7] mb-6">
            Fill in the form and our team will get back to you within a few
            hours to confirm your booking and discuss your specific
            requirements.
          </p>

          <div className="relative rounded-xl overflow-hidden mb-6 h-44">
            <img src={bookingImg} alt="Friendly Spark Pro Cleaning Limited cleaner ready to help" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-deeper/70 to-transparent" />
          </div>


          <div className="flex flex-col gap-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-md px-5 py-4"
              >
                <div className="w-10 h-10 bg-sky-lighter rounded-sm flex items-center justify-center text-xl flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="font-outfit font-bold text-navy text-sm">
                    {f.title}
                  </p>
                  <p className="text-xs text-gray-600">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up">
          <div
            className="bg-white rounded-xl p-10 border border-gray-200"
            style={{ boxShadow: "0 8px 48px rgba(12,45,72,0.08)" }}
          >
            {submitted ? (
              <div className="text-center py-8">
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
                  <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-sm text-sm text-red-700">
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
                    <input className={fieldCls} type="text" value={formData.address} onChange={update("address")} placeholder="e.g. Edgbaston, Birmingham" />
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
                  className="w-full bg-sky-dark text-white font-outfit font-bold text-base rounded-full py-4 mt-7 shadow-[0_4px_18px_rgba(2,132,199,0.3)] hover:bg-sky-deeper hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(2,132,199,0.4)] transition-all"
                >
                  Send Booking Request
                </button>
                <p className="text-xs text-gray-400 text-center mt-4">
                  Your details are secure and will only be used to process
                  your booking.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
