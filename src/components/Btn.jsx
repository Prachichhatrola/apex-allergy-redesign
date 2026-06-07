import { useMemo } from "react";
import PropTypes from "prop-types";

const Btn = ({
  className = "",
  property1 = "Default",
  readMoreFontWeight,
  tablerarrowRightIconHeight,
  tablerarrowRightIconMaxHeight,
}) => {
  const readMoreStyle = useMemo(() => {
    return {
      fontWeight: readMoreFontWeight,
    };
  }, [readMoreFontWeight]);

  const tablerarrowRightIconStyle = useMemo(() => {
    return {
      height: tablerarrowRightIconHeight,
      maxHeight: tablerarrowRightIconMaxHeight,
    };
  }, [tablerarrowRightIconHeight, tablerarrowRightIconMaxHeight]);

  return (
    <div
      className={`rounded-num-5 bg-steelblue inline-flex items-center justify-center !pt-1.5 !pb-1.5 !pl-4 !pr-4 gap-1.5 text-center text-num-14 text-white font-source-sans-3 cursor-pointer hover:bg-[#174d7a] transition-colors duration-200 ${className}`}
    >
      <div
        className="relative leading-snug capitalize font-semibold text-[14px]"
        style={readMoreStyle}
      >
        read more
      </div>
      <img
        className="h-3.5 w-3.5 relative"
        alt=""
        src="/tabler-arrow-right.svg"
        style={tablerarrowRightIconStyle}
      />
    </div>
  );
};

Btn.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  readMoreFontWeight: PropTypes.string,
  tablerarrowRightIconHeight: PropTypes.string,
  tablerarrowRightIconMaxHeight: PropTypes.string,
};

export default Btn;
