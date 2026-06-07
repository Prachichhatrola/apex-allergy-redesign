import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  {
    icon: (
      <path d="M19.5 12c0-4.14-3.36-7.5-7.5-7.5S4.5 7.86 4.5 12c0 2.62 1.35 4.93 3.38 6.27L9 20.6V22h6v-1.4l1.12-2.33C18.15 16.93 19.5 14.62 19.5 12zm-6 8h-3v-1h3v1zm.94-3.07l-.44.97H10l-.44-.97C8.07 15.86 7 14.05 7 12c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.05-1.07 3.86-2.56 4.93z" />
    ),
    color: "#1e6099",
    bg: "#dae6f1",
    title: "Allergy Testing",
    desc: "Comprehensive skin prick tests, intradermal tests, and blood panels to pinpoint your exact triggers for accurate diagnosis.",
  },
  {
    icon: (
      <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
    ),
    color: "#0f7c5e",
    bg: "#d1fae5",
    title: "Food Allergy Care",
    desc: "Expert management of food allergies including oral food challenges, desensitization protocols, and nutritional guidance.",
  },
  {
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    ),
    color: "#7c3aed",
    bg: "#ede9fe",
    title: "Asthma Treatment",
    desc: "Advanced asthma management combining bronchodilators, inhaled corticosteroids, biologic therapies, and breathing exercises.",
  },
  {
    icon: (
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z" />
    ),
    color: "#b45309",
    bg: "#fef3c7",
    title: "Immunotherapy",
    desc: "Long-term allergy relief through subcutaneous or sublingual immunotherapy — desensitizing your immune system naturally.",
  },
  {
    icon: (
      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z" />
    ),
    color: "#dc2626",
    bg: "#fee2e2",
    title: "Eczema Management",
    desc: "Holistic eczema care including topical therapies, trigger identification, biologic treatments, and skincare education.",
  },
  {
    icon: (
      <path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85C20.49 4.72 18.95 4.5 17.5 4.5zM21 18.42c0 .45-.43.77-.86.66-.98-.26-2.04-.38-3.14-.38-1.56 0-3.94.32-5.5 1.3V8c1.56-.98 3.94-1.3 5.5-1.3 1.1 0 2.16.12 3.14.38.43.11.86-.2.86-.66V18.42z" />
    ),
    color: "#0369a1",
    bg: "#e0f2fe",
    title: "Patient Education",
    desc: "Empowering patients with knowledge about their conditions, triggers, medication management, and self-care strategies.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 lg:py-28 bg-[#eff3f6]"
      aria-label="Our services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3"
            >
              <span
                className="w-2 h-2 rounded-full bg-[#1e6099]"
                aria-hidden="true"
              />
              <span className="text-[13px] font-bold text-[#1e6099] uppercase tracking-widest">
                Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-black text-gray-900 leading-tight font-lato"
            >
              Our Core Services
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#1e6099] text-white text-[14px] font-bold rounded-xl hover:bg-[#174d7a] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-md shadow-blue-800/20 focus-visible:outline-2 focus-visible:outline-[#1e6099] focus-visible:outline-offset-2"
            aria-label="View all services"
          >
            View All Services
            <svg
              viewBox="0 0 20 20"
              className="w-4 h-4 fill-current"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </div>

        {/* Cards grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          role="list"
          aria-label="List of services"
        >
          {SERVICES.map((svc, i) => (
            <motion.article
              key={svc.title}
              role="listitem"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group relative bg-white rounded-[28px] p-7 flex flex-col gap-5 border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-blue-900/12 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
              aria-label={svc.title}
            >
              {/* Hover bg tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[28px]"
                style={{
                  background: `linear-gradient(135deg, ${svc.bg}80, transparent 70%)`,
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col gap-5 h-full">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: svc.bg }}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    style={{ fill: svc.color }}
                    aria-hidden="true"
                  >
                    {svc.icon}
                  </svg>
                </div>

                <div className="flex-1">
                  <h3 className="text-[18px] font-bold text-gray-900 mb-2 font-lato group-hover:text-[#1e6099] transition-colors duration-200">
                    {svc.title}
                  </h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed font-source-sans-3">
                    {svc.desc}
                  </p>
                </div>

                {/* Arrow button */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: svc.color }}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="w-4 h-4 fill-white"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
