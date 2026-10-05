import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import BackgroundParticles from "./components/BackgroundParticles";
import SideNav from "./components/SideNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Projects from "./components/Projects";
import ProductionProjects from "./components/ProductionProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BharatPOSCaseStudy from "./components/BharatPOSCaseStudy";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const MainPortfolio = () => {
  const [showArrow, setShowArrow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-textBright font-sans selection:bg-accent/30 overflow-x-hidden relative">
      <BackgroundParticles />
      <main>
        <SideNav />
        <Hero />
        <About />
        <Process />
        <Projects />
        <ProductionProjects />
        <Contact />
      </main>
      <Footer />

      {showArrow && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() =>
            scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuart" })
          }
          className="fixed bottom-8 right-6 sm:right-10 z-50 p-4 rounded-full bg-darkBg border border-accent text-accent hover:bg-accent hover:text-darkBg hover:-translate-y-2 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}

      <Analytics />
      <SpeedInsights />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/bharatpos" element={<BharatPOSCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
