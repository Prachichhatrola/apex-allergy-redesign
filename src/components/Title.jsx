import { useMemo } from "react";
import PropTypes from "prop-types";

const Title = ({
  className = "",
  titleFlexWrap,
  titleAlignContent,
  headingMinWidth,
  serviceHeadingAlignSelf,
  services,
  servicesWidth,
  servicesFlex,
  servicesMinWidth,
  ourCoreServices,
  viewAllServices,
}) => {
  const titleStyle = useMemo(() => {
    return {
      flexWrap: titleFlexWrap,
      alignContent: titleAlignContent,
    };
  }, [titleFlexWrap, titleAlignContent]);

  const headingStyle = useMemo(() => {
    return {
      minWidth: headingMinWidth,
    };
  }, [headingMinWidth]);

  const serviceHeadingStyle = useMemo(() => {
    return {
      alignSelf: serviceHeadingAlignSelf,
    };
  }, [serviceHeadingAlignSelf]);

  const servicesStyle = useMemo(() => {
    return {
      width: servicesWidth,
      flex: servicesFlex,
      minWidth: servicesMinWidth,
    };
  }, [servicesWidth, servicesFlex, servicesMinWidth]);

  return (
    <section
      className={`self-stretch flex items-end justify-between gap-0 [row-gap:20px] text-left text-num-25 text-steelblue font-lato mq1300:flex-wrap mq1300:gap-0 ${className}`}
      style={titleStyle}
    >
      <div
        className="flex-1 flex flex-col items-start gap-[13px] min-w-[909px] mq1300:min-w-full"
        style={headingStyle}
      >
        <div className="flex items-end gap-1.5" style={serviceHeadingStyle}>
          <div className="h-2 w-2 relative rounded-num-50 bg-steelblue" />
          <h2
            className="!m-0 h-num-25 w-[93px] relative text-[length:inherit] leading-[30px] capitalize font-bold font-[inherit] inline-block shrink-0 mq450:text-num-20 mq450:leading-num-24"
            style={servicesStyle}
          >
            {services}
          </h2>
        </div>
        <h2 className="!m-0 self-stretch relative text-num-55 leading-num-66 capitalize font-bold font-[inherit] text-gray-400 mq900:text-num-44 mq900:leading-num-53 mq450:text-num-33 mq450:leading-num-40">
          {ourCoreServices}
        </h2>
      </div>
      <div
        className="rounded-num-5 bg-steelblue inline-flex items-center justify-center gap-2 text-center text-[14px] text-white font-source-sans-3 cursor-pointer hover:bg-[#174d7a] transition-colors duration-200 shrink-0"
        style={{ padding: "8px 20px", margin: "0 0 8px 16px" }}
      >
        <div className="relative leading-snug capitalize font-semibold">
          {viewAllServices}
        </div>
        <img
          className="h-[15px] w-[15px] relative"
          alt=""
          src="/tabler-arrow-right.svg"
        />
      </div>
    </section>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  services: PropTypes.string,
  ourCoreServices: PropTypes.string,
  viewAllServices: PropTypes.string,

  /** Style props */
  titleFlexWrap: PropTypes.string,
  titleAlignContent: PropTypes.string,
  headingMinWidth: PropTypes.string,
  serviceHeadingAlignSelf: PropTypes.string,
  servicesWidth: PropTypes.string,
  servicesFlex: PropTypes.string,
  servicesMinWidth: PropTypes.string,
};

export default Title;
