import { useMemo } from "react";
import Btn from "./Btn";
import PropTypes from "prop-types";

const Blog = ({
  className = "",
  blog1Width,
  image5,
  image5IconAlignSelf,
  image5IconOverflow,
  image5IconWidth,
  blogInfoHeight,
  successfulKidneyTransplant,
  dec,
  property1,
  readMoreFontWeight,
  tablerarrowRightIconHeight,
  tablerarrowRightIconMaxHeight,
}) => {
  const blog1Style = useMemo(() => {
    return {
      width: blog1Width,
    };
  }, [blog1Width]);

  const image5IconStyle = useMemo(() => {
    return {
      alignSelf: image5IconAlignSelf,
      overflow: image5IconOverflow,
      width: image5IconWidth,
    };
  }, [image5IconAlignSelf, image5IconOverflow, image5IconWidth]);

  const blogInfoStyle = useMemo(() => {
    return {
      height: blogInfoHeight,
    };
  }, [blogInfoHeight]);

  return (
    <section
      className={`card-hover h-num-654 w-[534px] rounded-num-40 bg-white flex flex-col items-start !pt-num-20 !pb-10 !pl-num-20 !pr-num-20 box-border relative isolate gap-[27px] max-w-full text-left text-num-18 text-dimgray-100 font-source-sans-3 mq900:!pb-num-26 mq900:box-border ${className}`}
      style={blog1Style}
    >
      <img
        className="self-stretch relative rounded-num-40 max-w-full overflow-hidden max-h-full object-cover z-[0]"
        loading="lazy"
        alt=""
        src={image5}
        style={image5IconStyle}
      />
      <div
        className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-20 !pr-num-20 gap-[27px] z-[1]"
        style={blogInfoStyle}
      >
        <div className="self-stretch flex flex-col items-start gap-2.5">
          <div className="self-stretch relative tracking-num-1_44 leading-num-25_63 uppercase font-medium">
            treatment
          </div>
          <h2 className="!m-0 self-stretch relative text-num-25 leading-[30px] font-bold font-lato text-gray-400 mq450:text-num-20 mq450:leading-num-24">
            {successfulKidneyTransplant}
          </h2>
        </div>
        <Btn
          property1={property1}
          readMoreFontWeight={readMoreFontWeight}
          tablerarrowRightIconHeight={tablerarrowRightIconHeight}
          tablerarrowRightIconMaxHeight={tablerarrowRightIconMaxHeight}
        />
      </div>
      <div className="!!m-[0 important] absolute rounded-num-5 bg-steelblue flex flex-col items-center justify-center !pt-num-10 !pb-num-10 !pl-num-20 !pr-num-20 z-[2] text-center text-num-25 text-white font-lato">
        <b className="self-stretch relative tracking-num-4 leading-[30px] capitalize mq450:text-num-20 mq450:leading-num-24">
          {dec}
        </b>
      </div>
    </section>
  );
};

Blog.propTypes = {
  className: PropTypes.string,
  image5: PropTypes.string,
  successfulKidneyTransplant: PropTypes.string,
  dec: PropTypes.string,
  property1: PropTypes.any,
  readMoreFontWeight: PropTypes.any,
  tablerarrowRightIconHeight: PropTypes.any,
  tablerarrowRightIconMaxHeight: PropTypes.any,

  /** Style props */
  blog1Width: PropTypes.string,
  image5IconAlignSelf: PropTypes.string,
  image5IconOverflow: PropTypes.string,
  image5IconWidth: PropTypes.string,
  blogInfoHeight: PropTypes.string,
};

export default Blog;
