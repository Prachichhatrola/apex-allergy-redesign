import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const DEPARTMENTS = [
  "Allergy Testing",
  "Food Allergy Care",
  "Asthma Treatment",
  "Immunotherapy",
  "Eczema Management",
  "General Consultation",
];
const DOCTORS_LIST = [
  "Dr. Mark C Stahl, DO",
  "Dr. David E. Hrncir, MD",
  "Dr. Javeda Shrestha, MD",
  "No Preference",
];
const TIMES = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  department: "",
  doctor: "",
  date: "",
  time: "",
  message: "",
};
const initialErrors = {};

const validate = (fields) => {
  const errs = {};
  if (!fields.name.trim()) errs.name = "Full name is required.";
  if (!fields.email.trim()) errs.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errs.email = "Please enter a valid email.";
  if (!fields.phone.trim()) errs.phone = "Phone number is required.";
  else if (!/^\+?[\d\s\-().]{7,}$/.test(fields.phone))
    errs.phone = "Please enter a valid phone number.";
  if (!fields.department) errs.department = "Please select a department.";
  if (!fields.date) errs.date = "Please select a preferred date.";
  if (!fields.time) errs.time = "Please select a preferred time.";
  return errs;
};

const Field = ({ label, id, error, required, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-[13px] font-bold text-gray-700">
      {label}
      {required && (
        <span className="text-red-500 ml-0.5" aria-hidden="true">
          *
        </span>
      )}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          role="alert"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="text-[12px] text-red-500 font-semibold flex items-center gap-1"
        >
          <svg
            viewBox="0 0 16 16"
            className="w-3.5 h-3.5 fill-red-500 shrink-0"
            aria-hidden="true"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const inputClass = (hasError) =>
  `w-full h-12 px-4 rounded-xl border text-[14px] font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-[#1e6099]/30 font-source-sans-3 ${
    hasError
      ? "border-red-400 focus:border-red-400"
      : "border-gray-200 hover:border-gray-300 focus:border-[#1e6099]"
  }`;

const selectClass = (hasError) =>
  `w-full h-12 px-4 rounded-xl border text-[14px] font-medium text-gray-800 bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-[#1e6099]/30 appearance-none cursor-pointer font-source-sans-3 ${
    hasError
      ? "border-red-400 focus:border-red-400"
      : "border-gray-200 hover:border-gray-300 focus:border-[#1e6099]"
  }`;

const SelectWrapper = ({ children }) => (
  <div className="relative">
    {children}
    <svg
      viewBox="0 0 24 24"
      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 fill-gray-400 pointer-events-none"
      aria-hidden="true"
    >
      <path d="M7 10l5 5 5-5z" />
    </svg>
  </div>
);

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-28 bg-[#eff3f6] overflow-hidden"
      aria-label="Contact and appointment booking"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-10 lg:gap-16 items-start">
          {/* Left — info */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2 h-2 rounded-full bg-[#1e6099]"
                  aria-hidden="true"
                />
                <span className="text-[13px] font-bold text-[#1e6099] uppercase tracking-widest">
                  Fill The Form
                </span>
              </div>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-gray-900 leading-[1.1] font-lato">
                Book Your Appointment{" "}
                <span className="text-[#1e6099]">Today!</span>
              </h2>
            </motion.div>

            {/* Doctor image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="hidden lg:block rounded-[24px] overflow-hidden aspect-[4/5] shadow-xl shadow-blue-900/15"
            >
              <img
                src="/img@2x.png"
                alt="Doctor at Apex Allergy & Asthma ready to help"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              {[
                {
                  icon: (
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  ),
                  label: "Phone",
                  value: "210-490-2051",
                  href: "tel:2104902051",
                },
                {
                  icon: (
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  ),
                  label: "Email",
                  value: "info@apexallergysa.com",
                  href: "mailto:info@apexallergysa.com",
                },
                {
                  icon: (
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  ),
                  label: "Address",
                  value:
                    "5718 University Heights, Suite 202, San Antonio, TX 78249",
                  href: "#",
                },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-200 hover:border-[#1e6099]/30 hover:bg-blue-50 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#1e6099]"
                  aria-label={`${label}: ${value}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1e6099]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1e6099]/20 transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4.5 h-4.5 fill-[#1e6099]"
                      aria-hidden="true"
                    >
                      {icon}
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wide">
                      {label}
                    </div>
                    <div className="text-[13px] font-semibold text-gray-800">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white rounded-[28px] p-7 sm:p-10 shadow-xl shadow-blue-900/10 border border-gray-100"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-5 py-12 text-center"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-10 h-10 fill-green-600"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[24px] font-black text-gray-900 font-lato mb-2">
                      Appointment Requested!
                    </h3>
                    <p className="text-[15px] text-gray-500 font-source-sans-3 max-w-sm">
                      Thank you! We've received your appointment request. Our
                      team will contact you within 24 hours to confirm your
                      booking.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="px-6 py-3 bg-[#1e6099] text-white text-[14px] font-bold rounded-xl hover:bg-[#174d7a] active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#1e6099]"
                  >
                    Book Another Appointment
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  noValidate
                  aria-label="Appointment booking form"
                >
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Full Name"
                      id="name"
                      error={errors.name}
                      required
                    >
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                        className={inputClass(!!errors.name)}
                      />
                    </Field>
                    <Field
                      label="Email Address"
                      id="email"
                      error={errors.email}
                      required
                    >
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        className={inputClass(!!errors.email)}
                      />
                    </Field>
                  </div>

                  {/* Phone + Department */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Phone Number"
                      id="phone"
                      error={errors.phone}
                      required
                    >
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(210) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        className={inputClass(!!errors.phone)}
                      />
                    </Field>
                    <Field
                      label="Department"
                      id="department"
                      error={errors.department}
                      required
                    >
                      <SelectWrapper>
                        <select
                          id="department"
                          name="department"
                          value={form.department}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={!!errors.department}
                          className={selectClass(!!errors.department)}
                        >
                          <option value="" disabled>
                            Select Department
                          </option>
                          {DEPARTMENTS.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </SelectWrapper>
                    </Field>
                  </div>

                  {/* Doctor + Date */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Preferred Doctor"
                      id="doctor"
                      error={errors.doctor}
                    >
                      <SelectWrapper>
                        <select
                          id="doctor"
                          name="doctor"
                          value={form.doctor}
                          onChange={handleChange}
                          className={selectClass(false)}
                        >
                          <option value="" disabled>
                            Select Doctor
                          </option>
                          {DOCTORS_LIST.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </SelectWrapper>
                    </Field>
                    <Field
                      label="Preferred Date"
                      id="date"
                      error={errors.date}
                      required
                    >
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        aria-required="true"
                        aria-invalid={!!errors.date}
                        className={inputClass(!!errors.date)}
                      />
                    </Field>
                  </div>

                  {/* Time */}
                  <Field
                    label="Preferred Time"
                    id="time"
                    error={errors.time}
                    required
                  >
                    <SelectWrapper>
                      <select
                        id="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.time}
                        className={selectClass(!!errors.time)}
                      >
                        <option value="" disabled>
                          Select Appointment Time
                        </option>
                        {TIMES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </SelectWrapper>
                  </Field>

                  {/* Message */}
                  <Field label="Message" id="message" error={errors.message}>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Describe your symptoms or concerns..."
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-[14px] font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-[#1e6099]/30 border-gray-200 hover:border-gray-300 focus:border-[#1e6099] font-source-sans-3`}
                    />
                  </Field>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-center gap-2 py-4 bg-[#1e6099] text-white text-[16px] font-bold rounded-xl shadow-lg shadow-blue-800/25 hover:bg-[#174d7a] hover:-translate-y-0.5 hover:shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#1e6099] focus-visible:outline-offset-2"
                    aria-label={
                      loading
                        ? "Submitting appointment request"
                        : "Book appointment"
                    }
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Book An Appointment
                        <svg
                          viewBox="0 0 20 20"
                          className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform duration-200"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
