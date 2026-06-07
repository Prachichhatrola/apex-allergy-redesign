import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Alexa Manhoss",
    condition: "Allergy & Asthma Management",
    avatar: "/Rectangle 157@2x.png",
    rating: 5,
    text: "I struggled with severe allergies for years. After just 3 months of immunotherapy at Apex Allergy, my symptoms reduced dramatically. Dr. Stahl's personalized approach genuinely changed my life. I can finally enjoy outdoor activities without fear.",
  },
  {
    name: "Michael Torres",
    condition: "Food Allergy Care",
    avatar: "/Rectangle 153@2x.png",
    rating: 5,
    text: "My daughter has multiple food allergies and the team here has been incredible. They walked us through every step of the oral food challenge process with patience and expertise. We finally feel in control of her condition.",
  },
  {
    name: "Sandra Williams",
    condition: "Eczema Treatment",
    avatar: "/Rectangle 155@2x.png",
    rating: 5,
    text: "After years of suffering with eczema, Dr. Hrncir identified my triggers and created a biologic therapy plan that cleared my skin within weeks. The staff is compassionate and the facility is top-notch. Highly recommend!",
  },
];

const StarRating = ({ count }) => (
  <div
    className="flex gap-0.5"
    role="img"
    aria-label={`${count} out of 5 stars`}
  >
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-amber-400"
        aria-hidden="true"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 lg:py-28 bg-[#eff3f6] overflow-hidden"
      aria-label="Patient testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <span
              className="w-2 h-2 rounded-full bg-[#1e6099]"
              aria-hidden="true"
            />
            <span className="text-[13px] font-bold text-[#1e6099] uppercase tracking-widest">
              What Our Patients Say
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[clamp(2rem,4vw,3rem)] font-black text-gray-900 leading-tight font-lato"
          >
            Why Choose <span className="text-[#1e6099]">Apex Allergy?</span>
          </motion.h2>
        </div>

        {/* Main testimonial display */}
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-blue-900/15">
          <img
            src="/Rectangle 155@2x.png"
            alt="Happy patient at Apex Allergy clinic"
            className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover object-center"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1e6099]/90 via-[#1e6099]/70 to-transparent"
            aria-hidden="true"
          />

          {/* Testimonial content */}
          <div className="absolute inset-0 flex flex-col justify-end lg:justify-center p-6 sm:p-10 lg:p-16 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col gap-5"
              >
                <div
                  className="text-[5rem] text-white/30 font-serif leading-none -mb-4"
                  aria-hidden="true"
                >
                  "
                </div>
                <p className="text-white text-[clamp(1rem,2vw,1.2rem)] leading-relaxed font-source-sans-3">
                  {TESTIMONIALS[active].text}
                </p>

                <StarRating count={TESTIMONIALS[active].rating} />

                <div className="flex items-center gap-4">
                  <img
                    src={TESTIMONIALS[active].avatar}
                    alt={`Portrait of ${TESTIMONIALS[active].name}`}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white/40"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-white font-bold text-[16px]">
                      {TESTIMONIALS[active].name}
                    </div>
                    <div className="text-white/70 text-[13px] font-semibold">
                      {TESTIMONIALS[active].condition}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots navigation */}
            <div
              className="flex gap-2 mt-6"
              role="tablist"
              aria-label="Testimonial navigation"
            >
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1} of ${TESTIMONIALS.length}`}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 ${
                    i === active
                      ? "w-8 h-2.5 bg-white"
                      : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial cards below */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
          role="list"
          aria-label="More patient reviews"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              role="listitem"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.55 }}
              onClick={() => setActive(i)}
              className={`bg-white rounded-2xl p-5 flex flex-col gap-3 border-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                i === active
                  ? "border-[#1e6099] shadow-md shadow-blue-800/15"
                  : "border-gray-100 hover:border-blue-200"
              }`}
              aria-label={`Select testimonial from ${t.name}`}
            >
              <StarRating count={t.rating} />
              <p className="text-[13px] text-gray-600 leading-relaxed font-source-sans-3 line-clamp-3">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <img
                  src={t.avatar}
                  alt={`Portrait of ${t.name}`}
                  className="w-9 h-9 rounded-xl object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="text-[13px] font-bold text-gray-800">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-[#1e6099] font-semibold">
                    {t.condition}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
