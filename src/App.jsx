import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ApexAllergyashthma from "./pages/ApexAllergyashthma";
import ContactPage from "./pages/ContactPage";

const PAGE_META = {
  "/": {
    title: "Apex Allergy & Asthma | San Antonio's Trusted Specialists",
    description:
      "Apex Allergy & Asthma — San Antonio's board-certified allergy and immunology specialists. Expert care for allergies, asthma, eczema, and food allergies. Book your appointment today.",
  },
  "/contact": {
    title: "Contact Us | Apex Allergy & Asthma",
    description:
      "Get in touch with Apex Allergy & Asthma specialists in San Antonio. Schedule appointments, ask questions, or find our convenient locations.",
  },
};

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    const meta = PAGE_META[pathname] || PAGE_META["/"];
    document.title = meta.title;
    const descTag = document.querySelector('head > meta[name="description"]');
    if (descTag) descTag.content = meta.description;
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ApexAllergyashthma />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
