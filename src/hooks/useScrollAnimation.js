import { useEffect, useRef } from "react";

/**
 * Observes elements with .fade-up, .fade-in, .slide-left, .slide-right classes
 * and adds .visible when they enter the viewport.
 */
const useScrollAnimation = () => {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".fade-up, .fade-in, .slide-left, .slide-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
