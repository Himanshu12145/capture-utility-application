import React from "react";
// Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
// Importing the animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Default scrolling to top
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;