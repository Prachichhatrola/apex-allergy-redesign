import { AnimatePresence, motion } from "framer-motion";

/**
 * Reusable form field wrapper with label, error message, and animation.
 * Wraps any input/select/textarea child.
 */
const FormField = ({ label, id, error, required = false, children }) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="text-[13px] font-semibold text-gray-600 tracking-wide"
    >
      {label}
      {required && (
        <span className="text-red-500 ml-1" aria-hidden="true">
          *
        </span>
      )}
    </label>

    {children}

    <AnimatePresence>
      {error && (
        <motion.p
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, y: -4, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -4, height: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1.5 text-[12px] text-red-500 font-medium overflow-hidden"
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

/**
 * Shared input class generator based on error state.
 */
export const inputClass = (hasError = false) =>
  [
    "w-full h-12 px-4 rounded-xl border text-[14px] text-gray-800 placeholder:text-gray-400",
    "bg-white outline-none transition-all duration-200",
    "focus:ring-2 focus:ring-[#1e6099]/25 focus:border-[#1e6099]",
    hasError
      ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
      : "border-gray-200 hover:border-gray-300",
  ].join(" ");

/**
 * Shared textarea class generator.
 */
export const textareaClass = (hasError = false) =>
  [
    "w-full px-4 py-3 rounded-xl border text-[14px] text-gray-800 placeholder:text-gray-400",
    "bg-white outline-none resize-none transition-all duration-200",
    "focus:ring-2 focus:ring-[#1e6099]/25 focus:border-[#1e6099]",
    hasError
      ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
      : "border-gray-200 hover:border-gray-300",
  ].join(" ");

/**
 * Chevron-decorated select wrapper.
 */
export const SelectWrapper = ({ children }) => (
  <div className="relative">
    {children}
    <svg
      viewBox="0 0 24 24"
      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 fill-gray-400"
      aria-hidden="true"
    >
      <path d="M7 10l5 5 5-5z" />
    </svg>
  </div>
);

export default FormField;
