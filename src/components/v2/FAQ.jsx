import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What conditions do you treat at Apex Allergy & Asthma?",
    a: "We treat a wide range of conditions including seasonal and year-round allergies, asthma, food allergies, eczema, hives (urticaria), insect sting allergies, drug allergies, sinusitis, and immune deficiency disorders. Our board-certified specialists provide comprehensive evaluation and personalized treatment plans.",
  },
  {
    q: "How does allergy testing work?",
    a: "Allergy testing typically involves skin prick tests, where small amounts of allergens are introduced to the skin, or blood tests (IgE tests) that measure your immune response. Results are usually available the same day for skin tests. Our specialists will review results with you and create a customized treatment plan.",
  },
  {
    q: "What is immunotherapy and how long does it take?",
    a: "Immunotherapy (allergy shots or sublingual drops) gradually desensitizes your immune system to specific allergens. The build-up phase involves weekly injections over 6-12 months, followed by a maintenance phase of monthly injections for 3-5 years. Most patients experience significant symptom reduction within the first year.",
  },
  {
    q: "Do you accept my insurance?",
    a: "We accept most major insurance plans including BlueCross BlueShield, Aetna, Cigna, United Healthcare, Medicare, and many others. Please contact our office with your insurance information and we'll verify your benefits before your first appointment. We also offer flexible payment options.",
  },
  {
    q: "How soon can I get an appointment?",
    a: "We strive to offer same-day and next-day appointments for urgent concerns. Routine new patient appointments are typically available within 1-2 weeks. You can call our office at 210-490-2051 or use our online booking system to schedule at your convenience.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Please bring a photo ID, insurance card, list of current medications and supplements, previous allergy test results if available, and a list of your symptoms including when they started and what makes them better or worse. Arrive 15 minutes early to complete paperwork.",
  },
  {
    q: "Do you offer telehealth consultations?",
    a: "Yes! We offer secure video consultations for follow-up appointments, medication reviews, and certain initial consultations. Telehealth visits are covered by most insurance plans. Contact our office to determine if your condition is appropriate for a telehealth visit.",
  },
];

const FAQItem = ({ item, index, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-[#1e6099]/30 shadow-md shadow-blue-800/8"
          : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#1e6099] focus-visible:outline-offset-2 ${
          isOpen ? "bg-blue-50" : "bg-white hover:bg-gray-50"
        }`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span
          className={`text-[15px] font-bold leading-snug transition-colors duration-200 ${
            isOpen ? "text-[#1e6099]" : "text-gray-900"
          }`}
        >
          {item.q}
        </span>
        <span
          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen ? "bg-[#1e6099] rotate-180" : "bg-gray-100"
          }`}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className={`w-4 h-4 transition-colors duration-300 ${
              isOpen ? "fill-white" : "fill-gray-500"
            }`}
            aria-hidden="true"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-5 bg-white border-t border-blue-100">
              <p className="text-[15px] text-gray-600 leading-relaxed font-source-sans-3">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      ref={ref}
      className="py-20 lg:py-28 bg-white overflow-hidden"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-28 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-2"
            >
              <span
                className="w-2 h-2 rounded-full bg-[#1e6099]"
                aria-hidden="true"
              />
              <span className="text-[13px] font-bold text-[#1e6099] uppercase tracking-widest">
                FAQ
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-black text-gray-900 leading-[1.1] font-lato"
            >
              Frequently Asked <span className="text-[#1e6099]">Questions</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[15px] text-gray-500 leading-relaxed font-source-sans-3"
            >
              Have more questions? Our team is happy to help. Reach out to us
              directly and we'll get back to you within 24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              {/* Call card */}
              <a
                href="tel:2104902051"
                className="group flex items-center gap-4 p-4 bg-[#eff3f6] rounded-2xl border border-gray-200 hover:border-[#1e6099]/30 hover:bg-blue-50 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#1e6099]"
                aria-label="Call us at 210-490-2051"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1e6099] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] text-gray-500 font-semibold">
                    Call us directly
                  </div>
                  <div className="text-[15px] font-bold text-gray-800">
                    210-490-2051
                  </div>
                </div>
              </a>

              {/* Email card */}
              <a
                href="mailto:info@apexallergysa.com"
                className="group flex items-center gap-4 p-4 bg-[#eff3f6] rounded-2xl border border-gray-200 hover:border-[#1e6099]/30 hover:bg-blue-50 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#1e6099]"
                aria-label="Email us at info@apexallergysa.com"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1e6099] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] text-gray-500 font-semibold">
                    Send us an email
                  </div>
                  <div className="text-[14px] font-bold text-gray-800 break-all">
                    info@apexallergysa.com
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right — accordion */}
          <div
            className="flex flex-col gap-3"
            role="list"
            aria-label="FAQ items"
          >
            {FAQS.map((item, i) => (
              <div role="listitem" key={i}>
                <FAQItem
                  item={item}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
