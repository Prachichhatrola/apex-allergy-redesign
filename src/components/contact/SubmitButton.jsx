import { motion } from "framer-motion";

/**
 * Reusable animated submit button with ripple, shimmer and loading state.
 */
const SubmitButton = ({
  loading = false,
  label = "Submit",
  loadingLabel = "Submitting...",
  onClick,
}) => (
  <motion.button
    type="submit"
    disabled={loading}
    onClick={onClick}
    whileHover={
      !loading ? { y: -2, boxShadow: "0 12px 32px rgba(30,96,153,0.45)" } : {}
    }
    whileTap={!loading ? { scale: 0.97 } : {}}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    className={[
      "relative w-full flex items-center justify-center gap-2.5",
      "py-4 px-6 rounded-xl overflow-hidden",
      "bg-[#1e6099] text-white text-[16px] font-bold",
      "shadow-lg shadow-blue-800/30",
      "focus-visible:outline-2 focus-visible:outline-[#1e6099] focus-visible:outline-offset-2",
      loading ? "opacity-75 cursor-not-allowed" : "cursor-pointer",
    ].join(" ")}
    aria-label={loading ? loadingLabel : label}
  >
    {/* Shimmer overlay — only when not loading */}
    {!loading && (
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent
                   group-hover:translate-x-full transition-transform duration-700 pointer-events-none shimmer-sweep"
        aria-hidden="true"
      />
    )}

    {loading ? (
      <>
        {/* Spinner */}
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
        <span>{loadingLabel}</span>
      </>
    ) : (
      <>
        <span>{label}</span>
        {/* Arrow */}
        <svg
          viewBox="0 0 20 20"
          className="w-5 h-5 fill-current transition-transform duration-200 group-hover:translate-x-1"
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
  </motion.button>
);

export default SubmitButton;
