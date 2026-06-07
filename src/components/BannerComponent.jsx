import PropTypes from "prop-types";

const BannerComponent = ({ className = "", property1 = "Frame 290" }) => {
  return (
    <div
      className={`self-stretch flex items-stretch text-left font-lato overflow-hidden ${className}`}
      style={{ minHeight: "560px" }}
    >
      {/* Left content */}
      <div
        className="flex flex-col items-start justify-center gap-[45px] px-16 py-16 hero-left"
        style={{ flex: "0 0 50%", backgroundColor: "#d6e8f5" }}
      >
        <section className="flex flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-[5px]">
            <h3
              className="!m-0 leading-[27.6px] capitalize font-medium"
              style={{ fontSize: "22px", color: "#555" }}
            >
              A Place Where Care Comes Naturally.
            </h3>
            <h1
              className="!m-0 tracking-[2px] leading-[90%] capitalize font-bold hero-title"
              style={{ fontSize: "58px", color: "#1a1a2e" }}
            >
              Breathe Better. <br /> Live Better. 
            </h1>
          </div>
          <p
            className="!m-0 font-source-sans-3"
            style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}
          >
            San Antonio's Trusted Specialists for Comprehensive Allergy, Asthma,
            and Immunological Care.
          </p>
        </section>
        <div className="flex items-center gap-[25px] flex-wrap">
          <button
            className="btn-primary rounded-[5px] bg-steelblue border-0 cursor-pointer font-lato font-bold capitalize"
            style={{
              padding: "14px 24px",
              fontSize: "20px",
              color: "#fff",
              lineHeight: "30px",
            }}
          >
            Book An Appointment
          </button>
          <button
            className="btn-outline rounded-[5px] bg-transparent border-solid border-steelblue cursor-pointer flex items-center gap-2.5 font-lato font-bold capitalize"
            style={{
              padding: "14px 24px",
              borderWidth: "2px",
              fontSize: "20px",
              color: "#444",
              lineHeight: "30px",
            }}
          >
            <img className="h-6 w-6" alt="" src="/ic-outline-search.svg" />
            Explore Services
          </button>
        </div>
      </div>

      {/* Right — real hero photo */}
      <div
        className="hero-right"
        style={{
          flex: "0 0 50%",
          backgroundColor: "#b8d4ec",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src="/hero-mother-child.png"
          alt="Mother and child with nebulizer"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

BannerComponent.propTypes = {
  className: PropTypes.string,
  property1: PropTypes.string,
};

export default BannerComponent;
