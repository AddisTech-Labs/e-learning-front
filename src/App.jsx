import React from "react";
import Navbar from "./components/ui/Navbar";
import HeroSection from "./components/ui/HeroSection";
import WhyChooseUs from "./components/ui/WhyChooseUs";
import SubjectSelector from "./components/ui/SubjectSelector";
import ContactUs from "./components/ui/ContactUs";
import Footer from "./components/ui/Footer";

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
