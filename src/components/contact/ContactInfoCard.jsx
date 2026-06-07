import { motion } from "framer-motion";

/**
 * Reusable contact info card that shows an icon, label, value and optional link.
 */
const ContactInfoCard = ({ icon, label, value, href = "#", delay = 0 }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ x: 4 }}
    className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100
               shadow-sm hover:shadow-md hover:border-[#1e6099]/20 transition-all duration-300
               focus-visible:outline-2 focus-visible:outline-[#1e6099] focus-visible:rounded-2xl"
    aria-label={`${label}: ${value}`}
  >
    {/* Icon bubble */}
    <div
      className="w-11 h-11 rounded-xl bg-[#1e6099]/10 flex items-center justify-center shrink-0
                 group-hover:bg-[#1e6099] transition-colors duration-300"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-[#1e6099] group-hover:fill-white transition-colors duration-300"
        aria-hidden="true"
      >
        {icon}
      </svg>
    </div>

    {/* Text */}
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
        {label}
      </span>
      <span className="text-[14px] font-semibold text-gray-700 group-hover:text-[#1e6099] transition-colors duration-200 truncate">
        {value}
      </span>
    </div>

    {/* Arrow indicator */}
    <svg
      viewBox="0 0 20 20"
      className="w-4 h-4 fill-gray-300 group-hover:fill-[#1e6099] shrink-0 ml-auto
                 group-hover:translate-x-1 transition-all duration-200"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  </motion.a>
);

export default ContactInfoCard;
