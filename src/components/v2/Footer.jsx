import { motion } from "framer-motion";

const LINKS = {
  Services: [
    "Allergy Testing",
    "Food Allergy Care",
    "Asthma Treatment",
    "Immunotherapy",
    "Eczema Management",
  ],
  "Quick Links": [
    "Home",
    "About Us",
    "Our Doctors",
    "Testimonials",
    "FAQ",
    "Contact",
  ],
};

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: "M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 001-1V4a1 1 0 00-1-1z",
  },
  {
    label: "Instagram",
    href: "#",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

const handleScroll = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1e6099] text-white" aria-label="Site footer">
      {/* CTA Banner */}
      <div className="bg-[#174d7a] py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-black font-lato mb-1">
              Ready to Breathe Easier?
            </h2>
            <p className="text-white/70 text-[15px] font-source-sans-3">
              Book your appointment today — same-day slots available.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:2104902051"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 border border-white/25 text-white text-[14px] font-bold rounded-xl hover:bg-white/25 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
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
            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1e6099] text-[14px] font-bold rounded-xl hover:bg-blue-50 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Book an appointment"
            >
              Book Appointment
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
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2v-5h2v5zm0-7h-2V7h2v2z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-[15px] font-lato">
                  Apex Allergy
                </div>
                <div className="text-[11px] text-white/60 font-medium">
                  &amp; Asthma
                </div>
              </div>
            </div>
            <p className="text-[14px] text-white/70 leading-relaxed font-source-sans-3">
              San Antonio's trusted specialists providing comprehensive,
              compassionate care for allergies, asthma, and immunological
              conditions.
            </p>
            {/* Social links */}
            <div
              className="flex gap-2"
              role="list"
              aria-label="Follow us on social media"
            >
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  role="listitem"
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#1e6099] active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
                  aria-label={label}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <nav key={group} aria-label={`${group} links`}>
              <h3 className="font-bold text-[14px] text-white mb-4 uppercase tracking-wider">
                {group}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="text-[14px] text-white/65 hover:text-white transition-colors duration-200 font-source-sans-3 focus-visible:outline-2 focus-visible:outline-white focus-visible:rounded"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-bold text-[14px] text-white mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-4">
              {[
                {
                  icon: (
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  ),
                  label: "Phone",
                  value: "210-490-2051",
                  href: "tel:2104902051",
                },
                {
                  icon: (
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  ),
                  label: "Email",
                  value: "info@apexallergysa.com",
                  href: "mailto:info@apexallergysa.com",
                },
                {
                  icon: (
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  ),
                  label: "Address",
                  value:
                    "5718 University Heights, Suite 202, San Antonio, TX 78249",
                  href: "https://maps.google.com",
                },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-start gap-3 focus-visible:outline-2 focus-visible:outline-white focus-visible:rounded"
                  aria-label={`${label}: ${value}`}
                >
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 fill-white"
                      aria-hidden="true"
                    >
                      {icon}
                    </svg>
                  </div>
                  <span className="text-[13px] text-white/70 group-hover:text-white leading-snug transition-colors duration-200 font-source-sans-3">
                    {value}
                  </span>
                </a>
              ))}
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-[13px] text-white/50 font-source-sans-3">
            &copy; {year} Apex Allergy &amp; Asthma. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "HIPAA Notice"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[12px] text-white/40 hover:text-white/70 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-white focus-visible:rounded"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
