import PropTypes from "prop-types";

const DoctorSlider = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={`w-[2674px] h-[701px] overflow-hidden shrink-0 flex items-start !pt-num-0 !pb-10 !pl-num-0 !pr-num-0 box-border text-center text-num-18 text-white font-lato ${className}`}
    >
      <div className="!ml-[-60px] h-[661px] w-[4860px] overflow-hidden shrink-0 flex items-start !pt-num-0 !pb-num-0 !pl-num-60 !pr-num-60 box-border">
        <div className="flex items-center gap-6">
          <section className="w-num-512 flex flex-col items-start shrink-0 text-center text-num-18 text-white font-lato">
            <img
              className="self-stretch h-num-431 relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/Rectangle 1588@2x.png"
            />
            <div className="self-stretch bg-white flex flex-col items-center !pt-num-0 !pb-10 !pl-num-0 !pr-num-0 gap-[26px]">
              <div className="bg-steelblue flex items-center justify-center !pt-num-10 !pb-num-10 !pl-num-30 !pr-num-30">
                <div className="relative leading-num-21_6 capitalize">{`Board-Certified Allergy & Immunology Specialist`}</div>
              </div>
              <div className="self-stretch flex flex-col items-center gap-[7px] text-num-25 text-gray-400 !px-4 !py-2">
                <h2 className="!m-0 self-stretch relative text-[length:inherit] leading-[30px] capitalize font-bold font-[inherit]">
                  Mark C Stahl, DO
                </h2>
                <div className="flex items-center gap-[7px] text-num-16 text-dimgray-200">
                  <div className="h-num-7 w-num-7 relative rounded-num-50 bg-steelblue" />
                  <div className="relative leading-num-19_2 capitalize">
                    10 + years experience
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[9px]">
                <div className="h-10 w-10 rounded-num-20 bg-whitesmoke-200 flex items-center justify-center !p-num-8 box-border">
                  <img
                    className="w-5 relative max-h-full"
                    loading="lazy"
                    alt=""
                    src="/line-md:facebook3.svg"
                  />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-whitesmoke-200 flex items-center justify-center !p-num-8 box-border">
                  <img
                    className="w-5 relative max-h-full"
                    loading="lazy"
                    alt=""
                    src="/ri-instagram-line.svg"
                  />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-whitesmoke-200 flex items-center justify-center !p-num-8 box-border">
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/line-md-twitter-filled.svg"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="w-num-512 flex flex-col items-start shrink-0 text-center text-num-18 text-white font-lato">
            <img
              className="self-stretch h-num-431 relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/Rectangle 1584@2x.png"
            />
            <div className="self-stretch bg-white flex flex-col items-center !pt-num-0 !pb-10 !pl-num-0 !pr-num-0 gap-[26px]">
              <div className="bg-steelblue flex items-center justify-center !pt-num-10 !pb-num-10 !pl-num-30 !pr-num-30">
                <div className="relative leading-num-21_6 capitalize">{`Board-Certified Allergy & Asthma Specialist`}</div>
              </div>
              <div className="self-stretch flex flex-col items-center gap-[7px] text-num-25 text-gray-400 !px-4 !py-2">
                <h2 className="!m-0 self-stretch relative text-[length:inherit] leading-[30px] capitalize font-bold font-[inherit]">
                  Dr. David E. Hrncir, MD
                </h2>
                <div className="flex items-center gap-[7px] text-num-16 text-dimgray-200">
                  <div className="h-num-7 w-num-7 relative rounded-num-50 bg-steelblue" />
                  <div className="relative leading-num-19_2 capitalize">
                    20 + years experience
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[9px]">
                <div className="h-10 w-10 rounded-num-20 bg-whitesmoke-200 flex items-center justify-center !p-num-8 box-border">
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/line-md:facebook2.svg"
                  />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-whitesmoke-200 flex items-center justify-center !p-num-8 box-border">
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/ri-instagram-line.svg"
                  />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-whitesmoke-200 flex items-center justify-center !p-num-8 box-border">
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/line-md-twitter-filled.svg"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="w-num-512 hidden flex-col items-start shrink-0">
            <img
              className="self-stretch h-num-431 relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/Rectangle 158@2x.png"
            />
            <div className="self-stretch bg-white flex flex-col items-center !pt-num-0 !pb-10 !pl-num-0 !pr-num-0 gap-[26px]">
              <div className="bg-steelblue flex items-center justify-center !pt-num-10 !pb-num-10 !pl-num-30 !pr-num-30">
                <div className="relative leading-num-21_6 capitalize">
                  dermatologist
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center gap-[7px] text-num-25 text-gray-400">
                <b className="self-stretch relative leading-[30px] capitalize">
                  dr. javeda shrestha, MD
                </b>
                <div className="flex items-center gap-[7px] text-num-16 text-dimgray-200">
                  <div className="h-num-7 w-num-7 relative rounded-num-50 bg-steelblue" />
                  <div className="relative leading-num-19_2 capitalize">
                    15 + years experience
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[9px]">
                <div className="h-10 w-10 rounded-num-20 bg-whitesmoke-200 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-whitesmoke-200 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-whitesmoke-200 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-num-512 hidden flex-col items-start shrink-0">
            <img
              className="self-stretch h-num-431 relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/Rectangle 1587@2x.png"
            />
            <div className="self-stretch bg-white flex flex-col items-center !pt-num-0 !pb-10 !pl-num-0 !pr-num-0 gap-[26px]">
              <div className="bg-steelblue flex items-center justify-center !pt-num-10 !pb-num-10 !pl-num-30 !pr-num-30">
                <div className="relative leading-num-21_6 capitalize">
                  orthologist
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center gap-[7px] text-num-25 text-gray-400">
                <b className="self-stretch relative leading-[30px] capitalize">
                  dr. rameshwor maharjan, MD
                </b>
                <div className="flex items-center gap-[7px] text-num-16 text-dimgray-200">
                  <div className="h-num-7 w-num-7 relative rounded-num-50 bg-steelblue" />
                  <div className="relative leading-num-19_2 capitalize">
                    10 + years experience
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[9px]">
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-num-512 hidden flex-col items-start shrink-0">
            <img
              className="w-num-512 h-num-431 relative max-w-full overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/Rectangle 1585@2x.png"
            />
            <div className="self-stretch bg-white flex flex-col items-center !pt-num-0 !pb-10 !pl-num-0 !pr-num-0 gap-[26px]">
              <div className="bg-steelblue flex items-center justify-center !pt-num-10 !pb-num-10 !pl-num-30 !pr-num-30">
                <div className="relative leading-num-21_6 capitalize">
                  cardiologist
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center gap-[7px] text-num-25 text-gray-400">
                <b className="self-stretch relative leading-[30px] capitalize">
                  dr. shyam gopal, MD
                </b>
                <div className="flex items-center gap-[7px] text-num-16 text-dimgray-200">
                  <div className="h-num-7 w-num-7 relative rounded-num-50 bg-steelblue" />
                  <div className="relative leading-num-19_2 capitalize">
                    20 + years experience
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[9px]">
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-num-512 hidden flex-col items-start shrink-0">
            <img
              className="self-stretch h-num-431 relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/Rectangle 1583@2x.png"
            />
            <div className="self-stretch bg-white flex flex-col items-center !pt-num-0 !pb-10 !pl-num-0 !pr-num-0 gap-[26px]">
              <div className="bg-steelblue flex items-center justify-center !pt-num-10 !pb-num-10 !pl-num-30 !pr-num-30">
                <div className="relative leading-num-21_6 capitalize">
                  neurologist
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center gap-[7px] text-num-25 text-gray-400">
                <b className="self-stretch relative leading-[30px] capitalize">
                  dr. heera manandhar, MD
                </b>
                <div className="flex items-center gap-[7px] text-num-16 text-dimgray-200">
                  <div className="h-num-7 w-num-7 relative rounded-num-50 bg-steelblue" />
                  <div className="relative leading-num-19_2 capitalize">
                    15 + years experience
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[9px]">
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-num-512 hidden flex-col items-start shrink-0">
            <img
              className="self-stretch h-num-431 relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/Rectangle 1586@2x.png"
            />
            <div className="self-stretch bg-white flex flex-col items-center !pt-num-0 !pb-10 !pl-num-0 !pr-num-0 gap-[26px]">
              <div className="bg-steelblue flex items-center justify-center !pt-num-10 !pb-num-10 !pl-num-30 !pr-num-30">
                <div className="relative leading-num-21_6 capitalize">
                  cardiologist
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center gap-[7px] text-num-25 text-gray-400">
                <b className="self-stretch relative leading-[30px] capitalize">
                  dr. Smriti bajracharya, MD
                </b>
                <div className="flex items-center gap-[7px] text-num-16 text-dimgray-200">
                  <div className="h-num-7 w-num-7 relative rounded-num-50 bg-steelblue" />
                  <div className="relative leading-num-19_2 capitalize">
                    10 + years experience
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[9px]">
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-num-512 hidden flex-col items-start shrink-0">
            <img
              className="self-stretch h-num-431 relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/Rectangle 1582@2x.png"
            />
            <div className="w-num-512 bg-white hidden flex-col items-center !pt-num-0 !pb-10 !pl-num-0 !pr-num-0 box-border gap-[26px]">
              <div className="bg-steelblue flex items-center justify-center !pt-num-10 !pb-num-10 !pl-num-30 !pr-num-30">
                <div className="relative leading-num-21_6 capitalize">
                  neurologist
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center gap-[7px] text-num-25 text-gray-400">
                <b className="self-stretch relative leading-[30px] capitalize">
                  dr. raj kunwar, MD
                </b>
                <div className="flex items-center gap-[7px] text-num-16 text-dimgray-200">
                  <div className="h-num-7 w-num-7 relative rounded-num-50 bg-steelblue" />
                  <div className="relative leading-num-19_2 capitalize">
                    20 + years experience
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[9px]">
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-num-512 hidden flex-col items-start shrink-0">
            <img
              className="self-stretch h-num-431 relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/Rectangle 158@2x.png"
            />
            <div className="self-stretch bg-white flex flex-col items-center !pt-num-0 !pb-10 !pl-num-0 !pr-num-0 gap-[26px]">
              <div className="bg-steelblue flex items-center justify-center !pt-num-10 !pb-num-10 !pl-num-30 !pr-num-30">
                <div className="relative leading-num-21_6 capitalize">
                  dermatologist
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center gap-[7px] text-num-25 text-gray-400">
                <b className="self-stretch relative leading-[30px] capitalize">
                  dr. javeda shrestha, MD
                </b>
                <div className="flex items-center gap-[7px] text-num-16 text-dimgray-200">
                  <div className="h-num-7 w-num-7 relative rounded-num-50 bg-steelblue" />
                  <div className="relative leading-num-19_2 capitalize">
                    15 + years experience
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[9px]">
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
                <div className="h-10 w-10 rounded-num-20 bg-gainsboro-100 flex items-center justify-center !p-num-8 box-border">
                  <div className="h-5 w-5 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DoctorSlider.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default DoctorSlider;
