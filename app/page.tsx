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
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Add top padding equal to header height so content never overlaps */}
      <div className="pt-20">
        <HeroSection />
        <Marketplace />
        <HowItWorks />
        <ContactUs />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}
