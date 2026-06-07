import PatientTestimonialComponent from "./PatientTestimonialComponent";
import PropTypes from "prop-types";

const WhatPatientSay = ({ className = "" }) => {
  return (
    <section
      className={`w-[1585px] flex flex-col items-center gap-[52px] text-left text-num-25 text-steelblue font-lato mq900:gap-[26px] ${className}`}
    >
      <div className="h-num-104 flex flex-col items-center gap-[13px]">
        <div className="self-stretch flex items-end justify-center gap-1.5">
          <div className="h-2 w-2 relative rounded-num-50 bg-steelblue" />
          <h2 className="!m-0 h-num-25 relative text-[length:inherit] leading-[30px] capitalize font-bold font-[inherit] inline-block shrink-0 whitespace-nowrap mq450:text-num-20 mq450:leading-num-24">
            what our patients say
          </h2>
        </div>
        <h2 className="!m-0 self-stretch relative text-num-55 leading-num-66 capitalize font-bold font-[inherit] text-gray-400 mq900:text-num-44 mq900:leading-num-53 mq450:text-num-33 mq450:leading-num-40">
          Why Choose Apex Allergy?
        </h2>
      </div>
      <PatientTestimonialComponent property1="Frame 350" />
    </section>
  );
};

WhatPatientSay.propTypes = {
  className: PropTypes.string,
};

export default WhatPatientSay;
