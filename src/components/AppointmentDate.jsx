import PropTypes from "prop-types";

const AppointmentDate = ({ className = "" }) => {
  return (
    <div
      className={`h-num-52 flex-1 bg-white flex items-center justify-between !pt-num-18 !pb-num-18 !pl-num-20 !pr-num-20 box-border gap-5 text-left text-[17px] text-dimgray-100 font-lato ${className}`}
    >
      <div className="relative leading-num-20_4 capitalize font-medium shrink-0">
        select appointment date *
      </div>
      <img
        className="h-5 w-5 relative shrink-0"
        alt=""
        src="/mdi-light-chevron-down.svg"
      />
    </div>
  );
};

AppointmentDate.propTypes = {
  className: PropTypes.string,
};

export default AppointmentDate;
