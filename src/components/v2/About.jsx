import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const slideIn = (dir = "left", delay = 0) => ({
  hidden: { opacity: 0, x: dir === "left" ? -48 : 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const FEATURES = [
  {
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    ),
    title: "Board-Certified Specialists",
    desc: "Our physicians hold board certifications in Allergy, Asthma & Immunology with decades of combined experience.",
  },
  {
    icon: (
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
    ),
    title: "Personalized Treatment Plans",
    desc: "Every patient receives a tailored plan based on their unique allergic profile, lifestyle, and health goals.",
  },
  {
    icon: (
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z" />
    ),
    title: "Safe & Proven Therapies",
    desc: "We use the latest evidence-based protocols including immunotherapy, biologics, and advanced allergy testing.",
  },
  {
    icon: (
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    ),
    title: "Same-Day Appointments",
    desc: "We prioritize your health with flexible scheduling including same-day slots and telehealth consultations.",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 lg:py-28 bg-white overflow-hidden"
      aria-label="About us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image collage */}
          <motion.div
            variants={slideIn("left", 0)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] shadow-2xl shadow-blue-900/15">
              <img
                src="/image 4@2x.png"
                alt="Doctor consulting with patient at Apex Allergy clinic"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#1e6099]/30 to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
              className="absolute -top-5 -right-5 bg-[#1e6099] text-white rounded-2xl p-5 shadow-xl shadow-blue-800/30 text-center min-w-[110px]"
              aria-label="20 plus years of experience"
            >
              <div className="text-[2rem] font-black leading-none">20+</div>
              <div className="text-[11px] font-semibold opacity-90 mt-1 leading-tight">
                Years
                <br />
                Experience
              </div>
            </motion.div>

            {/* Floating satisfaction badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.65, duration: 0.5, ease: "backOut" }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl shadow-blue-900/15 flex items-center gap-3 min-w-[180px]"
              aria-label="95 percent patient satisfaction"
            >
              <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-green-600"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <div className="text-[18px] font-black text-gray-800">95%</div>
                <div className="text-[11px] text-gray-500 font-semibold">
                  Patient Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center gap-2"
            >
              <span
                className="w-2 h-2 rounded-full bg-[#1e6099]"
                aria-hidden="true"
              />
              <span className="text-[13px] font-bold text-[#1e6099] uppercase tracking-widest">
                About Us
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp(0.18)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-[clamp(2rem,4vw,3rem)] font-black text-gray-900 leading-[1.1] font-lato"
            >
              Helping You Breathe Easier,{" "}
              <span className="text-[#1e6099]">Every Day</span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.26)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-[16px] text-gray-600 leading-relaxed font-source-sans-3"
            >
              At Apex Allergy &amp; Asthma, we provide expert care for
              allergies, asthma, eczema, food allergies, and immune-related
              conditions. Our board-certified specialists create personalized
              treatment plans that improve your health and quality of life —
              because every breath matters.
            </motion.p>

            {/* Feature grid */}
            <motion.div
              variants={fadeUp(0.34)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 gap-4"
              role="list"
              aria-label="Our key features"
            >
              {FEATURES.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  role="listitem"
                  className="group flex gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#1e6099]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1e6099]/20 transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-[#1e6099]"
                      aria-hidden="true"
                    >
                      {icon}
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-gray-800 mb-0.5">
                      {title}
                    </div>
                    <div className="text-[13px] text-gray-500 leading-snug font-source-sans-3">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp(0.42)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#1e6099] text-white text-[15px] font-bold rounded-xl shadow-lg shadow-blue-800/25 hover:bg-[#174d7a] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#1e6099] focus-visible:outline-offset-2"
                aria-label="Read more about us and book an appointment"
              >
                Read More
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
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
