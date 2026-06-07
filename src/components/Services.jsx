import Title from "./Title";
import PropTypes from "prop-types";

const serviceData = [
  {
    title: "Allergy Testing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet eget a scelerisque lorem scelerisque interdum et mauris purus. Facilisi bibendum etiam aliquam",
  },
  {
    title: "Food Allergy Care",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet eget a scelerisque lorem scelerisque interdum et mauris purus. Facilisi bibendum etiam aliquam",
  },
  {
    title: "Asthma Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet eget a scelerisque lorem scelerisque interdum et mauris purus. Facilisi bibendum etiam aliquam",
  },
];

const Services = ({ className = "" }) => {
  return (
    <section
      className={`w-num-1584 flex flex-col items-start gap-[52px] max-w-full mq900:gap-[26px] ${className}`}
    >
      <Title
        services="services"
        ourCoreServices="Our Core Services"
        viewAllServices="view all services"
      />
      <div className="self-stretch flex items-center gap-6 max-w-full mq1650:flex-wrap">
        {serviceData.map((service, i) => (
          <section
            key={i}
            className={`card-hover fade-up delay-${
              (i + 1) * 100
            } w-num-512 rounded-num-40 bg-white flex flex-col items-center pt-[60px] pb-[60px] px-10 box-border gap-10 max-w-full text-center text-num-25 text-black font-lato mq900:gap-5 mq450:pt-[39px] mq450:pb-[39px]`}
          >
            <div className="self-stretch flex flex-col items-center gap-5">
              <div className="self-stretch flex flex-col items-center gap-[7px]">
                <div className="w-num-50 h-num-50 rounded-num-33_5 bg-steelblue flex items-center justify-center pt-[11px] pb-[11px] pl-[13px] pr-[13px] box-border">
                  <img
                    className="h-6 w-6 relative"
                    alt=""
                    src="/material-symbols-light-medical-services-outline.svg"
                  />
                </div>
                <h2 className="!m-0 self-stretch relative text-[length:inherit] leading-[30px] capitalize font-semibold font-[inherit] mq450:text-num-20 mq450:leading-num-24">
                  {service.title}
                </h2>
              </div>
              <div className="self-stretch relative text-num-18 leading-num-25_63 font-source-sans-3 text-dimgray-200">
                {service.description}
              </div>
            </div>
            <div className="rounded-num-5 bg-steelblue flex items-center justify-center pt-[10px] pb-[10px] pl-[20px] pr-[20px]">
              <img
                className="h-6 w-6 relative"
                alt=""
                src="/tabler-arrow-right.svg"
              />
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;
