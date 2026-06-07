import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const STATS = [
  { value: "20+", label: "Years Experience" },
  { value: "95%", label: "Patient Satisfaction" },
  { value: "7K+", label: "Patients Annually" },
  { value: "15+", label: "Staff Providers" },
];

const Hero = () => {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#d6e8f5] pt-[72px]"
      aria-label="Hero section"
    >
      {/* Background decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#b8d4ec]" />
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-[#1e6099]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-72px)] py-12 lg:py-20">
          {/* Left — Text */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-blue-200 w-fit"
            >
              <span
                className="w-2 h-2 rounded-full bg-[#1e6099] animate-pulse"
                aria-hidden="true"
              />
              <span className="text-[13px] font-semibold text-[#1e6099] tracking-wide uppercase">
                San Antonio's Trusted Allergy Specialists
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[clamp(2.4rem,5vw,4rem)] font-black text-[#1a1a2e] leading-[1.05] tracking-tight font-lato"
            >
              Breathe Better.{" "}
              <span className="text-[#1e6099] relative">
                Live Better.
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden="true"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                >
                  <path
                    d="M2 9C50 3 100 1 150 5C200 9 250 3 298 7"
                    stroke="#1e6099"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[clamp(1rem,2vw,1.2rem)] text-gray-600 leading-relaxed max-w-lg font-source-sans-3"
            >
              Comprehensive, compassionate care for allergies, asthma, and
              immunological conditions. Our board-certified specialists deliver
              personalized treatment plans that change lives.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => handleScroll("#contact")}
                className="group px-7 py-3.5 bg-[#1e6099] text-white text-[15px] font-bold rounded-xl shadow-lg shadow-blue-800/30 hover:bg-[#174d7a] hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-800/35 active:scale-95 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#1e6099] focus-visible:outline-offset-2"
                aria-label="Book an appointment"
              >
                <span className="flex items-center gap-2">
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
                </span>
              </button>
              <button
                onClick={() => handleScroll("#services")}
                className="group px-7 py-3.5 bg-white/80 backdrop-blur-sm text-[#1e6099] text-[15px] font-bold rounded-xl border-2 border-[#1e6099]/30 hover:border-[#1e6099] hover:bg-white hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#1e6099] focus-visible:outline-offset-2"
                aria-label="Explore our services"
              >
                <span className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                  Explore Services
                </span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-blue-200/60"
              role="list"
              aria-label="Practice statistics"
            >
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center" role="listitem">
                  <div className="text-[clamp(1.5rem,3vw,2rem)] font-black text-[#1e6099] font-lato leading-none">
                    {value}
                  </div>
                  <div className="text-[12px] text-gray-500 font-semibold mt-1 leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Decorative ring */}
            <div
              className="absolute inset-0 -m-4 rounded-[40px] border-2 border-[#1e6099]/20"
              aria-hidden="true"
            />
            <div
              className="absolute -top-6 -right-6 w-24 h-24 bg-[#1e6099]/10 rounded-full"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/60 rounded-2xl"
              aria-hidden="true"
            />

            <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-blue-900/25 aspect-[4/5]">
              <img
                src="/hero-mother-child.png"
                alt="Mother helping child with nebulizer treatment at Apex Allergy & Asthma"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1e6099] flex items-center justify-center shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-white"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-[14px] text-gray-800">
                      Board-Certified Specialists
                    </div>
                    <div className="text-[12px] text-gray-500">
                      Comprehensive Allergy & Asthma Care
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[#1e6099]/60 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() => handleScroll("#about")}
        aria-hidden="true"
      >
        <span className="text-[11px] font-semibold uppercase tracking-widest">
          Scroll
        </span>
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-current"
          aria-hidden="true"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
