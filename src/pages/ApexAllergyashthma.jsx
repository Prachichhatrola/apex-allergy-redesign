import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ServicesProvided from "../components/ServicesProvided";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import OurExpertDoctors from "../components/OurExpertDoctors";
import BookingAppointmentSection from "../components/BookingAppointmentSection";
import OurBlogs from "../components/OurBlogs";
import WhatPatientSay from "../components/WhatPatientSay";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const useScrollAnimation = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll(
        ".fade-up, .fade-in, .slide-left, .slide-right"
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add("visible"), 50);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
      );
      targets.forEach((el) => observer.observe(el));
    }, 100);
    return () => clearTimeout(timer);
  }, []);
};

const ApexAllergyashthma = () => {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <div
        className="w-full relative bg-whitesmoke-100 flex flex-col items-center gap-[140px] leading-[normal] tracking-[normal] mq1300:gap-[70px] mq900:gap-[35px]"
        style={{ paddingTop: "70px" }}
      >
        <HeroSection />

        <ServicesProvided className="fade-up w-full max-w-[1584px] px-5" />

        <AboutUs className="fade-up w-full max-w-[1584px] px-5" />

        <Services
          className="fade-up w-full max-w-[1584px] px-5"
          id="services"
        />

        <OurExpertDoctors
          className="fade-up w-full max-w-[1584px] px-5"
          id="specialist"
        />

        <BookingAppointmentSection
          className="fade-up w-full max-w-[1585px] mx-5"
          id="appointments"
        />

        <OurBlogs className="fade-up w-full max-w-[1584px] px-5" />

        <WhatPatientSay className="fade-up w-full max-w-[1585px] px-5" />

        {/* Stats Section */}
        <section className="fade-up w-full max-w-[1584px] mx-5 rounded-num-40 [background:linear-gradient(0deg,_#cedbe7,_#9bb6ce_47.6%,_#7da6ca_94.22%)] flex items-center justify-around flex-wrap pt-[70px] pb-[70px] px-8 gap-6 text-left font-lato">
          {[
            { value: "20 +", label: "Years Of Experience" },
            { value: "95 %", label: "Patient's Level Of Satisfaction" },
            { value: "7,000 +", label: "Patient's Served Annually" },
            { value: "15 +", label: "Healthcare Staff Providers" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2.5 text-gray-400"
            >
              <h2 className="!m-0 text-num-55 leading-num-66 capitalize font-bold mq900:text-num-44 mq450:text-num-33">
                {stat.value}
              </h2>
              <b className="text-num-18 leading-num-21_6 capitalize text-center">
                {stat.label}
              </b>
            </div>
          ))}
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ApexAllergyashthma;
