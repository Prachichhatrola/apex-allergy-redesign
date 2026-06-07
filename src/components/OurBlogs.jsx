import Title from "./Title";
import Blog from "./Blog";
import Btn from "./Btn";
import PropTypes from "prop-types";

const OurBlogs = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-col items-start gap-[52px] max-w-full mq900:gap-[26px] ${className}`}
    >
      <Title
        titleFlexWrap="wrap"
        titleAlignContent="flex-end"
        headingMinWidth="1019px"
        serviceHeadingAlignSelf="stretch"
        services="our blogs "
        servicesWidth="unset"
        servicesFlex="1"
        servicesMinWidth="87px"
        ourCoreServices={`featured news & blogs`}
        viewAllServices="view all blogs"
      />
      <div className="self-stretch flex items-center gap-6 max-w-full mq1650:flex-wrap">
        <Blog
          image5="/blog-image-1.png"
          successfulKidneyTransplant="Successful Kidney Transplant"
          dec={`29
dec`}
          property1="Default"
          readMoreFontWeight="unset"
          tablerarrowRightIconHeight="unset"
          tablerarrowRightIconMaxHeight="100%"
        />
        <section className="card-hover h-num-654 w-[576px] rounded-num-40 bg-white flex flex-col items-start !pt-num-20 !pb-10 !pl-num-20 !pr-num-20 box-border relative isolate gap-[27px] max-w-full text-center text-num-25 text-white font-lato mq900:!pb-num-26 mq900:box-border">
          <img
            className="self-stretch h-[402px] relative rounded-num-40 max-w-full overflow-hidden shrink-0 object-cover z-[0]"
            loading="lazy"
            alt=""
            src="/blog-image-2.png"
          />
          <div className="!!m-[0 important] absolute rounded-num-5 bg-steelblue flex flex-col items-center justify-center !pt-num-10 !pb-num-10 !pl-num-20 !pr-num-20 z-[1]">
            <b className="self-stretch relative tracking-num-4 leading-[30px] capitalize mq450:text-num-20 mq450:leading-num-24">
              09
              <br />
              Nov
            </b>
          </div>
          <div className="self-stretch h-[165px] flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-20 !pr-num-20 box-border gap-[27px] z-[2] text-left text-num-18 text-dimgray-100 font-source-sans-3">
            <div className="self-stretch flex flex-col items-start gap-2.5">
              <div className="self-stretch relative tracking-num-1_44 leading-num-25_63 uppercase font-medium">
                treatment
              </div>
              <h2 className="!m-0 self-stretch relative text-num-25 leading-[30px] font-bold font-lato text-gray-400 mq450:text-num-20 mq450:leading-num-24">
                Every Headache is not normal
              </h2>
            </div>
            <Btn
              property1="Default"
              readMoreFontWeight="unset"
              tablerarrowRightIconHeight="17px"
              tablerarrowRightIconMaxHeight="unset"
            />
          </div>
        </section>
        <Blog
          blog1Width="574px"
          image5="/blog-image-3.png"
          image5IconAlignSelf="unset"
          image5IconOverflow="unset"
          image5IconWidth="533px"
          blogInfoHeight="178px"
          successfulKidneyTransplant=" Successful operation on Stomach pain "
          dec={`17
aug`}
          property1="Default"
          readMoreFontWeight="unset"
          tablerarrowRightIconHeight="17px"
          tablerarrowRightIconMaxHeight="unset"
        />
      </div>
    </section>
  );
};

OurBlogs.propTypes = {
  className: PropTypes.string,
};

export default OurBlogs;
