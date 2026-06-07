import BannerComponent from "./BannerComponent";
import PropTypes from "prop-types";

const HeroSection = ({ className = "" }) => {
  return (
    <main
      className={`self-stretch flex flex-col items-start text-left text-num-25 text-white font-lato ${className}`}
    >
      <BannerComponent property1="Frame 290" />
    </main>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
