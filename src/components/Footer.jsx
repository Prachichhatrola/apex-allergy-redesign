import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`w-full bg-[#2b6093] text-white font-lato ${className}`}>
      {/* Main footer content */}
      <div className="w-full px-10 py-12 flex flex-wrap items-start justify-between gap-8 max-w-[1400px] mx-auto">
        {/* Left: Logo + Follow Us */}
        <div className="flex flex-col items-start gap-5 min-w-[160px]">
          <img
            src="/apex-logo.png"
            alt="Apex Allergy & Asthma"
            className="h-[100px] object-contain"
          />
          <div className="flex flex-col gap-3">
            <span className="text-[15px] font-medium capitalize tracking-wide">
              Follow Us:
            </span>
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="/line-md:facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="/ri-instagram-line.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="/line-md-twitter-filled.svg"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Middle left: Main Clinic */}
        <div className="flex flex-col gap-3 min-w-[200px]">
          <div className="flex items-start gap-2">
            <div className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center shrink-0 mt-0.5">
              <img src="/tdesign:location.svg" alt="" className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[15px] font-bold uppercase tracking-wide">
                MAIN CLINIC
              </span>
              <span className="text-[14px] leading-relaxed text-white/90">
                Mark C Stahl, DO
              </span>
              <span className="text-[14px] leading-relaxed text-white/90">
                14635 San Pedro Ave, Suite 208
              </span>
              <span className="text-[14px] leading-relaxed text-white/90">
                San Antonio, TX 78232
              </span>
            </div>
          </div>
        </div>

        {/* Middle right: 1-10 Clinic */}
        <div className="flex flex-col gap-3 min-w-[220px]">
          <div className="flex items-start gap-2">
            <div className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center shrink-0 mt-0.5">
              <img src="/tdesign:location2.svg" alt="" className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[15px] font-bold uppercase tracking-wide">
                1-10 CLINIC
              </span>
              <span className="text-[14px] leading-relaxed text-white/90">
                Mark C Stahl, DO
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] leading-relaxed text-white underline hover:text-white/80 transition-colors"
              >
                5718 University Heights, Suite 202
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] leading-relaxed text-white underline hover:text-white/80 transition-colors"
              >
                San Antonio, TX 78249
              </a>
            </div>
          </div>
        </div>

        {/* Right: Get In Touch */}
        <div className="flex flex-col gap-4 min-w-[200px]">
          <span className="text-[18px] font-medium capitalize">
            Get In Touch:
          </span>
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] rounded-full bg-white/25 flex items-center justify-center shrink-0">
              <img src="/ic-outline-email.svg" alt="" className="w-4 h-4" />
            </div>
            <a
              href="mailto:info@apexallergysa.com"
              className="text-[15px] leading-relaxed text-white underline hover:text-white/80 transition-colors"
            >
              info@apexallergysa.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] rounded-full bg-white/25 flex items-center justify-center shrink-0">
              <img src="/line-md-phone.svg" alt="" className="w-4 h-4" />
            </div>
            <a
              href="tel:2104902051"
              className="text-[15px] leading-relaxed text-white underline hover:text-white/80 transition-colors"
            >
              210-490-2051
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="w-full bg-[#2b6093] border-t border-white/20 py-4 flex items-center justify-center">
        <p className="text-[15px] font-bold leading-relaxed capitalize text-center text-white">
          © 2026 Apex Allergy &amp; Asthma | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
