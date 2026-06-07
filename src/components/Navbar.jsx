import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Department", href: "#department" },
  { label: "Specialist", href: "#specialist" },
  { label: "Services", href: "#services" },
  { label: "Appointments", href: "#appointments" },
  { label: "Contact", href: "/contact", route: true },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Highlight "Contact" when on /contact page
  const getActiveLabel = (label) => {
    if (location.pathname === "/contact") return label === "Contact";
    if (location.pathname === "/") return label === "Home";
    return activeLink === label;
  };

  const handleLinkClick = (e, link) => {
    if (link.route) {
      e.preventDefault();
      setActiveLink(link.label);
      navigate(link.href);
    } else {
      setActiveLink(link.label);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "#ffffff" }}
    >
      <div
        className="flex items-center justify-between px-6 py-3"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <img
            src="/apex-logo.png"
            alt="Apex Allergy & Asthma"
            className="h-14 object-contain"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-desktop-links flex items-center gap-7 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="no-underline font-medium transition-colors duration-200"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontSize: "15px",
                  color: getActiveLabel(link.label) ? "#1e6099" : "#333333",
                  borderBottom: getActiveLabel(link.label)
                    ? "2px solid #1e6099"
                    : "2px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Search + Book + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            className="bg-transparent border-0 cursor-pointer p-1"
            aria-label="Search"
          >
            <img
              src="/ic-outline-search.svg"
              alt="Search"
              className="w-5 h-5"
            />
          </button>

          {/* Book button - desktop */}
          <a
            href="#appointments"
            onClick={() => setActiveLink("Appointments")}
            className="btn-primary no-underline nav-book-btn"
            style={{
              backgroundColor: "#1e6099",
              color: "#ffffff",
              borderRadius: "5px",
              padding: "10px 20px",
              fontFamily: "Lato, sans-serif",
              fontWeight: "700",
              fontSize: "14px",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
            }}
          >
            Book An Appointment
          </a>

          {/* Hamburger - mobile */}
          <button
            className="hamburger-btn bg-transparent border-0 cursor-pointer p-1 flex-col gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "#333",
                transition: "transform 0.3s",
                transform: menuOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "#333",
                transition: "opacity 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "#333",
                transition: "transform 0.3s",
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            backgroundColor: "#fff",
            borderTop: "1px solid #eee",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                handleLinkClick(e, link);
                setMenuOpen(false);
              }}
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                color: getActiveLabel(link.label) ? "#1e6099" : "#333",
                textDecoration: "none",
                padding: "6px 0",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#appointments"
            onClick={() => {
              setActiveLink("Appointments");
              setMenuOpen(false);
            }}
            className="btn-primary"
            style={{
              backgroundColor: "#1e6099",
              color: "#fff",
              borderRadius: "5px",
              padding: "12px 20px",
              fontFamily: "Lato, sans-serif",
              fontWeight: "700",
              fontSize: "15px",
              textAlign: "center",
              textDecoration: "none",
              marginTop: "4px",
            }}
          >
            Book An Appointment
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
