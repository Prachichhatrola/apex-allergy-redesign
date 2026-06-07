import Btn from "./Btn";
import PropTypes from "prop-types";

const AboutUs = ({ className = "" }) => {
  return (
    <section
      className={`w-num-1584 flex items-end gap-[100px] mq900:gap-[50px] mq450:gap-[25px] ${className}`}
    >
      <img
        className="w-[715px] relative rounded-2xl max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/image 4@2x.png"
      />
      <div className="self-stretch flex-1 flex flex-col items-start justify-center !pt-num-0 !pb-num-0 !pl-num-0 !pr-20 gap-[38px] mq900:!pr-10 mq900:box-border mq450:gap-[19px]">
        <section className="self-stretch flex flex-col items-center gap-[13px] text-left text-num-25 text-steelblue font-lato">
          <div className="self-stretch flex items-end justify-center gap-1.5">
            <div className="h-2 w-2 relative rounded-num-50 bg-steelblue" />
            <h2 className="!m-0 h-num-25 flex-1 relative text-[length:inherit] leading-[30px] capitalize font-bold font-[inherit] inline-block">
              about us
            </h2>
          </div>
          <h1 className="!m-0 self-stretch relative text-num-55 leading-num-66 capitalize font-bold font-[inherit] text-gray-400 mq900:text-num-44 mq900:leading-num-53 mq450:text-num-33 mq450:leading-num-40">
            Helping You Breathe Easier, Every Day
          </h1>
        </section>
        <section className="self-stretch flex flex-col items-start gap-5 text-left text-num-18 text-dimgray-200 font-source-sans-3">
          <div className="self-stretch relative leading-[30px]">{`At Apex Allergy & Asthma, we provide expert care for allergies, asthma, eczema, food allergies, and immune-related conditions. Our specialists focus on personalized treatment plans that improve your health and quality of life.`}</div>
          <div className="self-stretch flex items-center text-num-20 text-black">
            <div className="flex-1 flex flex-col items-start gap-1.5">
              <h3 className="!m-0 self-stretch relative text-[length:inherit] leading-[28.48px] capitalize font-semibold font-[inherit] mq450:text-num-16 mq450:leading-[23px]">
                our vision
              </h3>
              <div className="self-stretch relative text-num-18 leading-num-25_63 text-dimgray-200">
                To be a trusted leader in allergy and asthma care.
                <br /> To provide compassionate, patient-centered treatment for
                every family.
                <br /> To help our community live healthier, more comfortable
                lives.
              </div>
            </div>
          </div>
          <Btn property1="Default" />
        </section>
      </div>
    </section>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
