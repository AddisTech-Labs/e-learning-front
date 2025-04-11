import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import SubjectSelector from "./components/SubjectSelector";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <SubjectSelector />
      <ContactUs />
      <Footer />
    </div>
  );
}
