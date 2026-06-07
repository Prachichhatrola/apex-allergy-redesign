import QualifiedDoctors from "./QualifiedDoctors";
import PropTypes from "prop-types";

const ServicesProvided = ({ className = "" }) => {
  return (
    <section
      className={`w-num-1584 flex items-center gap-5 text-left text-num-25 text-steelblue font-lato ${className}`}
    >
      <QualifiedDoctors
        healthiconsdoctorMale="/healthicons:doctor-male.svg"
        qualifiedDoctors="qualified doctors"
      />
      <QualifiedDoctors
        qualifiedDoctorsBoxShadow="0px 0px 40px rgba(162, 188, 209, 0.44)"
        healthiconsdoctorMale="/uil-ambulance.svg"
        qualifiedDoctors="emergency care"
      />
      <div className="card-hover flex-1 rounded-num-40 bg-gray-100 flex items-start !pt-num-70 !pb-num-70 !pl-10 !pr-10 gap-5 mq450:flex-wrap">
        <img
          className="w-num-54 relative max-h-full"
          loading="lazy"
          alt=""
          src="/mdi-clock-outline.svg"
        />
        <div className="flex-1 flex flex-col items-start min-w-num-235">
          <div className="self-stretch flex flex-col items-start gap-5">
            <h2 className="!m-0 self-stretch relative text-[length:inherit] leading-[30px] capitalize font-bold font-[inherit] mq450:text-num-20 mq450:leading-num-24">
              24 hours service
            </h2>
            <div className="self-stretch relative text-num-18 leading-num-25_63 font-source-sans-3 text-dimgray-200">
              Lorem ipsum dolor sit amet consectetur. Commodo massa faucibus
              cras sagittis nec sit. Sit at rhoncus sed duis tristique facilisi
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ServicesProvided.propTypes = {
  className: PropTypes.string,
};

export default ServicesProvided;
