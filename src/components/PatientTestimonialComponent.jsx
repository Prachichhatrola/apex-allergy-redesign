import PropTypes from "prop-types";

const PatientTestimonialComponent = ({
  className = "",
  property1 = "Frame 350",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center relative isolate ${className}`}
    >
      <div className="self-stretch h-[702px] relative rounded-num-40 overflow-hidden z-[0]">
        <img
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          alt=""
          src="/Rectangle 155@2x.png"
          style={{ transformOrigin: "center center" }}
        />
      </div>
      <section className="w-[780px] h-[304px] !!m-[0 important] absolute top-[calc(50%_-_48px)] bg-steelblue flex flex-col items-start justify-center !pt-num-12 !pb-num-12 !pl-num-36 !pr-num-36 box-border z-[1] text-left text-[68px] text-white font-coustard">
        <div className="w-num-696 flex flex-col items-center gap-[23px]">
          <div className="w-num-696 h-num-178 relative">
            <h1 className="!m-0 absolute text-[length:inherit] leading-[95.49px] capitalize font-normal font-[inherit]">
              “
            </h1>
            <div className="absolute flex items-end gap-[74px] text-num-18 font-source-sans-3">
              <div className="w-[111px] flex flex-col items-start gap-4">
                <img
                  className="self-stretch h-num-104 relative rounded-[19px] max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/Rectangle 157@2x.png"
                />
                <div className="self-stretch relative leading-num-25_63 capitalize">
                  alexa manhoss
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-[511px] flex flex-col items-start gap-[19px]">
                  <div className="self-stretch h-num-104 relative leading-num-25_63 inline-block">
                    Lorem ipsum dolor sit amet consectetur. Sit sagittis velit
                    orci elementum. Mauris rhoncus viverra blandit adipiscing
                    sed dui cursus. Dignissim laoreet volutpat sit ultrices
                    parturient sem in. Blandit id facilisis lorem molestie
                    consectetur rutrum ridiculus.
                  </div>
                  <div className="self-stretch relative leading-num-25_63 capitalize font-semibold">
                    Kidney transplant
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-[19px] w-num-19 relative rounded-num-50 bg-white" />
            <div className="h-[19px] w-num-19 relative rounded-num-50 bg-lightskyblue" />
            <div className="h-[19px] w-num-19 relative rounded-num-50 bg-lightskyblue" />
          </div>
        </div>
      </section>
    </div>
  );
};

PatientTestimonialComponent.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default PatientTestimonialComponent;
