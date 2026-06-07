import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const DOCTORS = [
  {
    name: "Dr. Mark C Stahl, DO",
    title: "Board-Certified Allergy & Immunology Specialist",
    experience: "10+ Years Experience",
    image: "/Rectangle 1588@2x.png",
    socials: { facebook: true, instagram: true, twitter: true },
    bio: "Dr. Stahl specializes in comprehensive allergy and immunology care, offering cutting-edge diagnostic testing and personalized immunotherapy programs.",
  },
  {
    name: "Dr. David E. Hrncir, MD",
    title: "Board-Certified Allergy & Asthma Specialist",
    experience: "20+ Years Experience",
    image: "/Rectangle 1584@2x.png",
    socials: { facebook: true, instagram: true, twitter: true },
    bio: "Dr. Hrncir brings decades of expertise in asthma and allergy management, pioneering biologic therapies for complex respiratory conditions.",
  },
  {
    name: "Dr. Javeda Shrestha, MD",
    title: "Dermatology & Allergy Specialist",
    experience: "15+ Years Experience",
    image: "/Rectangle 158@2x.png",
    socials: { facebook: true, instagram: true, twitter: true },
    bio: "Dr. Shrestha focuses on the intersection of dermatology and allergy, specializing in eczema, contact dermatitis, and skin allergy conditions.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const SocialIcon = ({ type }) => {
  const paths = {
    facebook:
      "M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 001-1V4a1 1 0 00-1-1z",
    instagram:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    twitter:
      "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  };
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 fill-current"
      aria-hidden="true"
    >
      <path d={paths[type]} />
    </svg>
  );
};

const DoctorCard = ({ doctor, index, inView }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group bg-white rounded-[28px] overflow-hidden shadow-lg shadow-blue-900/8 hover:shadow-2xl hover:shadow-blue-900/16 hover:-translate-y-2 transition-all duration-400 border border-gray-100 hover:border-blue-100"
      aria-label={`${doctor.name}, ${doctor.title}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={doctor.image}
          alt={`Portrait of ${doctor.name}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Bio overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
            >
              <p className="text-white text-[13px] leading-snug font-source-sans-3">
                {doctor.bio}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-4">
        {/* Title badge */}
        <div className="bg-[#1e6099] text-white text-[12px] font-semibold text-center py-2 px-3 rounded-xl leading-snug -mx-1">
          {doctor.title}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-[18px] font-bold text-gray-900 font-lato">
            {doctor.name}
          </h3>
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#1e6099]"
              aria-hidden="true"
            />
            <span className="text-[13px] text-gray-500 font-semibold">
              {doctor.experience}
            </span>
          </div>
        </div>

        {/* Social links */}
        <div
          className="flex items-center gap-2 pt-1 border-t border-gray-100"
          role="list"
          aria-label={`${doctor.name}'s social media`}
        >
          {Object.keys(doctor.socials).map((platform) => (
            <a
              key={platform}
              href="#"
              role="listitem"
              className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1e6099] hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#1e6099]"
              aria-label={`${doctor.name} on ${platform}`}
            >
              <SocialIcon type={platform} />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Doctors = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="doctors"
      ref={ref}
      className="py-20 lg:py-28 bg-white overflow-hidden"
      aria-label="Our specialist doctors"
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
                Our Expert Doctors
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-black text-gray-900 leading-tight font-lato"
            >
              Meet The Specialist Team
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
            aria-label="View all specialists"
          >
            View All Specialists
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

        {/* Doctor cards */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Specialist doctors"
        >
          {DOCTORS.map((doc, i) => (
            <DoctorCard key={doc.name} doctor={doc} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
