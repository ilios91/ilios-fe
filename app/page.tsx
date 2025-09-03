import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Marketplace from "@/components/Marketplace";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <AboutUs />
        <Marketplace />
        <HowItWorks />
        <FAQSection />
        <ContactUs />
        <Footer />
    </div>
  );
}
