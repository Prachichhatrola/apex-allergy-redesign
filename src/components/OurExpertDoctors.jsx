import Title from "./Title";
import DoctorSlider from "./DoctorSlider";
import PropTypes from "prop-types";

const OurExpertDoctors = ({ className = "" }) => {
  return (
    <section
      className={`w-num-1584 flex flex-col items-start gap-[52px] text-center text-num-18 text-white font-lato mq900:gap-[26px] ${className}`}
    >
      <Title
        titleFlexWrap="unset"
        titleAlignContent="unset"
        headingMinWidth="902px"
        serviceHeadingAlignSelf="stretch"
        services="our expert doctors"
        servicesWidth="unset"
        servicesFlex="1"
        servicesMinWidth="174px"
        ourCoreServices="meet the specialist team"
        viewAllServices="view all specialist"
      />
      <DoctorSlider property1="Default" />
    </section>
  );
};

OurExpertDoctors.propTypes = {
  className: PropTypes.string,
};

export default OurExpertDoctors;
