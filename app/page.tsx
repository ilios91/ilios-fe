import ContactUs from "@/components/ContactUs";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Marketplace from "@/components/Marketplace";
import Header from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Marketplace />
      <HowItWorks />
      <ContactUs />
      <FAQSection />
      <Footer />
    </div>
  );
}
