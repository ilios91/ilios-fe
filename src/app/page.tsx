import { WindowSizeProvider } from "@/contexts/WindowSizeContext";
import About from "@/components/landing-page/About";
import Faq from "@/components/landing-page/Faq";
import Hero from "@/components/landing-page/Hero";
import Service from "@/components/landing-page/Service";
import Navbar from '@/components/layout/Navbar';
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <About/>
      <WindowSizeProvider>
        <Service/>
      </WindowSizeProvider>
      <Faq/>
      <Footer />
    </main>
  );
}
