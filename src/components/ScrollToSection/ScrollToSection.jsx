import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      // console.log(location.hash)
      const sectionToScrollIn = document.querySelector(location.hash);
      if (sectionToScrollIn) {
        sectionToScrollIn.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } // if used without if block it will potentially crash the website as it will always look for #location.hash && sectionToScrollIn
  }, [location]);
};

export default ScrollToSection;
