import NewHeadr from "../components/ui/NewHeader";
import HeroSection from "../components/ui/HeroSection";
import WhyChooseUs from "../components/ui/WhyChooseUs";
import SubjectGrid from "@/components/ui/SubjectSelector";
import ContactUs from "../components/ui/ContactUs";
import NewFooter from "../components/ui/NewFooter";
import TestimonialsSection from "@/components/Testimonials";
function HomePage() {
  return (
    <>
      <NewHeadr />
      <HeroSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <SubjectGrid />
      <ContactUs />
      <NewFooter />
    </>
  );
}
export default HomePage;
