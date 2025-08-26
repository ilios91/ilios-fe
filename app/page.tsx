import ContactUs from "@/components/ContactUs";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Marketplace from "@/components/Marketplace";
import Header from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-1">
        <HeroSection />
        <Marketplace />
        <HowItWorks />
        <ContactUs />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
