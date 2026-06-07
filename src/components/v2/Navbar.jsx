import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact", route: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Observe sections for active highlighting
  useEffect(() => {
    const observers = [];
    NAV_LINKS.forEach(({ label, href }) => {
      const el = document.querySelector(href);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(label);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback(
    (e, href, label, isRoute) => {
      e.preventDefault();
      setActive(label);
      setMenuOpen(false);
      if (isRoute) {
        navigate(href);
      } else {
        const target = document.querySelector(href);
        if (target) {
          const navH = 72;
          const top =
            target.getBoundingClientRect().top + window.scrollY - navH;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    },
    [navigate]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg shadow-blue-900/10"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home", "Home")}
          className="flex items-center gap-3 shrink-0"
          aria-label="Apex Allergy & Asthma — Home"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1e6099] flex items-center justify-center shadow-md shadow-blue-800/30">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-white"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2v-5h2v5zm0-7h-2V7h2v2z" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-[15px] text-[#1e6099] tracking-tight font-lato">
              Apex Allergy
            </span>
            <span className="text-[11px] text-gray-500 font-medium tracking-wide">
              & Asthma
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ label, href, route: isRoute }) => {
            const isActive = isRoute
              ? location.pathname === href
              : active === label;
            return (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href, label, isRoute)}
                  className={`relative px-3 py-2 text-[14px] font-semibold rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#1e6099] focus-visible:outline-offset-2 ${
                    isActive
                      ? "text-[#1e6099]"
                      : "text-gray-600 hover:text-[#1e6099] hover:bg-blue-50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1e6099] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:2104902051"
            className="flex items-center gap-2 text-[13px] font-semibold text-gray-600 hover:text-[#1e6099] transition-colors duration-200"
            aria-label="Call us at 210-490-2051"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            210-490-2051
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact", "Contact")}
            className="btn-primary px-5 py-2.5 text-[14px] font-bold rounded-lg bg-[#1e6099] text-white hover:bg-[#174d7a] active:scale-95 transition-all duration-200 shadow-md shadow-blue-800/25 focus-visible:outline-2 focus-visible:outline-[#1e6099] focus-visible:outline-offset-2"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-11 h-11 rounded-xl border border-gray-200 gap-[5px] hover:bg-gray-50 active:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#1e6099]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl shadow-blue-900/10"
          >
            <ul className="flex flex-col px-4 py-4 gap-1" role="list">
              {NAV_LINKS.map(({ label, href, route: isRoute }, i) => {
                const isActive = isRoute
                  ? location.pathname === href
                  : active === label;
                return (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href, label, isRoute)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-[#1e6099]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#1e6099]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1e6099] shrink-0" />
                      )}
                      {label}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04, duration: 0.2 }}
                className="mt-2 pt-3 border-t border-gray-100"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact", "Contact")}
                  className="flex justify-center items-center px-4 py-3 rounded-xl text-[15px] font-bold bg-[#1e6099] text-white hover:bg-[#174d7a] active:scale-95 transition-all duration-200"
                >
                  Book Appointment
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
