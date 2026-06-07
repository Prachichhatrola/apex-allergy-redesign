import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const LOCATIONS = [
  "Stone Oak – 18707 Hardy Oak Blvd, Suite 230",
  "University Heights – 5718 University Heights, Suite 202",
];

const REASONS = [
  "Allergy Testing",
  "Asthma Evaluation",
  "Food Allergy Consultation",
  "Immunotherapy",
  "Eczema / Skin Allergy",
  "Other",
];

const CLINIC_LOCATIONS = [
  {
    tag: "281 CLIN",
    doctor: "Mark C Stahl, DO",
    address: "14635 San Pedro Ave, Suite 250",
    city: "San Antonio, TX 78232",
    maps: "https://maps.google.com",
  },
  {
    tag: "I-10 CLINIC",
    doctor: "Mark C Stahl, DO",
    address: "5718 University Heights, Suite 202",
    city: "San Antonio, TX 78249",
    maps: "https://maps.google.com",
  },
];

const FAQ_ITEMS = [
  { q: "Do I Need A Referral?" },
  { q: "Do You Accept Insurance?" },
  { q: "How Should I Prepare For Allergy Testing?" },
  { q: "What Conditions Do You Treat?" },
];

const FOOTER_LINKS = {
  Services: [
    "Allergy Testing",
    "Asthma Treatment",
    "Sinus care",
    "Immunotherapy",
    "Food Allergy Care",
  ],
  About: ["Home", "Conditions", "Locations", "Contact"],
  Product: ["Terms of Use", "Privacy Policy", "Log In"],
  Contact: ["Profile", "More!", "Locations"],
};

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  reason: "",
};

// ─── Validation ───────────────────────────────────────────────────────────────

const validate = (fields) => {
  const errs = {};
  if (!fields.fullName.trim()) errs.fullName = "Full name is required.";
  if (!fields.email.trim()) errs.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errs.email = "Please enter a valid email.";
  if (!fields.phone.trim()) errs.phone = "Phone number is required.";
  if (!fields.location) errs.location = "Please select a preferred location.";
  if (!fields.reason.trim()) errs.reason = "Reason for visit is required.";
  return errs;
};

// ─── Input / Textarea styles ──────────────────────────────────────────────────

const fieldClass = (hasError = false) =>
  `w-full h-[42px] px-3 text-[13px] text-gray-800 placeholder:text-gray-400 bg-white border outline-none transition-all duration-150 rounded-sm ${
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-[#d0d8e0] focus:border-[#1e6099]"
  }`;

const taClass = (hasError = false) =>
  `w-full px-3 py-2.5 text-[13px] text-gray-800 placeholder:text-gray-400 bg-white border outline-none resize-none transition-all duration-150 rounded-sm ${
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-[#d0d8e0] focus:border-[#1e6099]"
  }`;

// ─── Contact Form ─────────────────────────────────────────────────────────────

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-green-500">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            Message Sent!
          </h3>
          <p className="text-[14px] text-gray-500">
            Our team will get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm(INITIAL_FORM);
            setErrors({});
          }}
          className="px-6 py-2.5 bg-[#1e6099] text-white text-[13px] font-bold rounded-sm hover:bg-[#174d7a] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3.5">
      {/* Full Name */}
      <div>
        <input
          name="fullName"
          type="text"
          placeholder="Full Name *"
          value={form.fullName}
          onChange={handleChange}
          className={fieldClass(!!errors.fullName)}
        />
        {errors.fullName && (
          <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          name="email"
          type="email"
          placeholder="Email Address *"
          value={form.email}
          onChange={handleChange}
          className={fieldClass(!!errors.email)}
        />
        {errors.email && (
          <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={handleChange}
          className={fieldClass(!!errors.phone)}
        />
        {errors.phone && (
          <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Preferred Location */}
      <div className="relative">
        <select
          name="location"
          value={form.location}
          onChange={handleChange}
          className={`${fieldClass(
            !!errors.location
          )} appearance-none cursor-pointer pr-8 ${
            form.location === "" ? "text-gray-400" : "text-gray-800"
          }`}
        >
          <option value="" disabled>
            Preferred Location *
          </option>
          {LOCATIONS.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 fill-gray-400"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
        {errors.location && (
          <p className="text-[11px] text-red-500 mt-1">{errors.location}</p>
        )}
      </div>

      {/* Reason for Visit */}
      <div>
        <textarea
          name="reason"
          rows={3}
          placeholder="Reason For Visit *"
          value={form.reason}
          onChange={handleChange}
          className={taClass(!!errors.reason)}
        />
        {errors.reason && (
          <p className="text-[11px] text-red-500 mt-1">{errors.reason}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-[#1e6099] text-white text-[15px] font-bold rounded-sm hover:bg-[#174d7a] transition-colors duration-200 disabled:opacity-70 mt-1"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin w-4 h-4 fill-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="white"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Submitting...
          </span>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

const FAQItem = ({ q }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 py-4 text-left hover:text-[#1e6099] transition-colors duration-150"
        aria-expanded={open}
      >
        <span className="w-5 h-5 rounded-full border-2 border-[#1e6099] flex items-center justify-center shrink-0 text-[#1e6099]">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
            {open ? (
              <path d="M19 13H5v-2h14v2z" />
            ) : (
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            )}
          </svg>
        </span>
        <span className="text-[14px] font-semibold text-gray-800">{q}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="pl-9 pb-4 text-[13px] text-gray-500 leading-relaxed">
              Please contact our office directly for more information about this
              topic. Our staff is happy to answer your questions.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Main Contact Page ────────────────────────────────────────────────────────

const ContactPage = () => {
  const heroRef = useRef(null);
  const inView = useInView(heroRef, { once: true, margin: "-40px" });

  return (
    <div
      className="min-h-screen flex flex-col bg-[#f2f5f8]"
      style={{ fontFamily: "Lato, sans-serif", paddingTop: "80px" }}
    >
      <Navbar />

      {/* ── Hero / Contact Section ───────────────────────────────────────────── */}
      <section ref={heroRef} className="bg-[#f2f5f8] py-12 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 xl:gap-14 items-start">
            {/* Left panel */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-gray-900 leading-[1.2] mb-4"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Contact Our Allergy &amp; Asthma Specialists
              </h1>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-8 max-w-[340px]">
                Have questions about allergy testing, asthma treatment, or
                scheduling an appointment? Our team is here to help.
              </p>

              {/* Contact info rows */}
              <div className="flex flex-col gap-4">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1e6099]">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:info@apexallergysa.com"
                    className="text-[14px] text-gray-700 hover:text-[#1e6099] transition-colors"
                  >
                    info@apexallergysa.com
                  </a>
                </div>

                {/* Locations */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1e6099]">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span className="text-[14px] text-gray-700">
                    2 Convenient San Antonio Locations
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1e6099]">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <a
                    href="tel:2104902051"
                    className="text-[14px] text-gray-700 hover:text-[#1e6099] transition-colors"
                  >
                    (210) 490-2051
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right panel — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
            >
              <p className="text-[13px] text-gray-600 mb-5 leading-snug">
                Fill Out The Form Below And Our Team Will Contact You Shortly.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Clinic Location Cards ─────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {CLINIC_LOCATIONS.map((clinic, i) => (
              <motion.a
                key={clinic.tag}
                href={clinic.maps}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 8px 24px rgba(30,96,153,0.15)",
                }}
                className="flex items-start gap-4 bg-white rounded-lg p-5 border border-gray-200 hover:border-[#1e6099]/40 transition-colors duration-200"
              >
                {/* Location pin icon */}
                <div className="w-9 h-9 rounded-full bg-[#1e6099]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1e6099]">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-black text-gray-900 tracking-widest uppercase mb-0.5">
                    {clinic.tag}
                  </p>
                  <p className="text-[13px] font-semibold text-[#1e6099] underline underline-offset-2">
                    {clinic.doctor}
                  </p>
                  <p className="text-[13px] text-gray-600 mt-0.5 underline underline-offset-2">
                    {clinic.address}
                  </p>
                  <p className="text-[13px] text-gray-600 underline underline-offset-2">
                    {clinic.city}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ───────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[16px] font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 px-5 divide-y divide-gray-200">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.q} q={item.q} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#2c5f8a] text-white mt-auto">
        <div className="max-w-[1100px] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Brand column */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-3">
              <p className="text-[12px] font-bold text-white tracking-wide leading-tight">
                APEX ALLERGY &amp; ASHTHMA
              </p>
              <div className="flex flex-col gap-1 mt-1">
                <p className="text-[12px] text-white/80">Mark C Stahl, DO</p>
                <p className="text-[12px] text-white/80">
                  5718 University Heights, Suite
                </p>
                <p className="text-[12px] text-white/80">
                  San Antonio, TX 78249
                </p>
              </div>
              {/* Social icons */}
              <div className="flex items-center gap-2 mt-2">
                {[
                  {
                    label: "Instagram",
                    src: "/ri-instagram-line.svg",
                    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                  },
                  {
                    label: "LinkedIn",
                    src: null,
                    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                  },
                  {
                    label: "Facebook",
                    src: "/line-md:facebook.svg",
                    path: "M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 001-1V4a1 1 0 00-1-1z",
                  },
                  {
                    label: "Twitter",
                    src: "/line-md-twitter-filled.svg",
                    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                  },
                ].map(({ label, path }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-[13px] font-bold text-white mb-3">
                  {title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[12px] text-white/70 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Get In Touch */}
            <div>
              <h3 className="text-[13px] font-bold text-white mb-3">
                Get In Touch
              </h3>
              <div className="flex flex-col gap-2.5">
                <a
                  href="mailto:info@apexallergysa.com"
                  className="flex items-center gap-2 text-[12px] text-white/70 hover:text-white transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 fill-white/70 shrink-0"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  info@apexallergysa.com
                </a>
                <a
                  href="tel:2104902051"
                  className="flex items-center gap-2 text-[12px] text-white/70 hover:text-white transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 fill-white/70 shrink-0"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  (210) 490-2051
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15">
          <div className="max-w-[1100px] mx-auto px-6 py-4">
            <p className="text-[12px] text-white/50 text-center">
              &copy; {new Date().getFullYear()} Apex Allergy &amp; Asthma. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
