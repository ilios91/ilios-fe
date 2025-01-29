import { WindowSizeProvider } from "@/contexts/WindowSizeContext";
import About from "@/components/landing-page/About";
import Faq from "@/components/landing-page/Faq";
import Hero from "@/components/landing-page/Hero";
import Service from "@/components/landing-page/Service";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <WindowSizeProvider>
        <Service/>
      </WindowSizeProvider>
      <Faq/>
    </main>
  );
}
