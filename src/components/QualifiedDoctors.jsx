import { useMemo } from "react";
import PropTypes from "prop-types";

const QualifiedDoctors = ({
  className = "",
  qualifiedDoctorsBoxShadow,
  healthiconsdoctorMale,
  qualifiedDoctors,
}) => {
  const qualifiedDoctorsStyle = useMemo(() => {
    return {
      boxShadow: qualifiedDoctorsBoxShadow,
    };
  }, [qualifiedDoctorsBoxShadow]);

  return (
    <div
      className={`card-hover flex-1 rounded-num-40 bg-gray-100 flex items-start !pt-num-70 !pb-num-70 !pl-10 !pr-10 gap-5 text-left text-num-25 text-steelblue font-lato mq450:flex-wrap ${className}`}
      style={qualifiedDoctorsStyle}
    >
      <img
        className="w-num-54 relative max-h-full"
        loading="lazy"
        alt=""
        src={healthiconsdoctorMale}
      />
      <div className="flex-1 flex flex-col items-start gap-5 min-w-num-235">
        <h2 className="!m-0 self-stretch relative text-[length:inherit] leading-[30px] capitalize font-bold font-[inherit] mq450:text-num-20 mq450:leading-num-24">
          {qualifiedDoctors}
        </h2>
        <div className="self-stretch relative text-num-18 leading-num-25_63 font-source-sans-3 text-dimgray-200">
          Lorem ipsum dolor sit amet consectetur. Commodo massa faucibus cras
          sagittis nec sit. Sit at rhoncus sed duis tristique facilisi .
        </div>
      </div>
    </div>
  );
};

QualifiedDoctors.propTypes = {
  className: PropTypes.string,
  healthiconsdoctorMale: PropTypes.string,
  qualifiedDoctors: PropTypes.string,

  /** Style props */
  qualifiedDoctorsBoxShadow: PropTypes.string,
};

export default QualifiedDoctors;
