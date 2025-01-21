import Image from "next/image";
import HeroImage from "@/assets/images/hero.svg";

export default function Hero() {
  return (
    <section className="h-[866px] w-full bg-[#EEF5FF]">
      <div className="w-[90%] mx-auto flex">
        <div className="flex items-center w-full">
          <div className="flex-1">
            <h2 className="text-[40px] font-bold text-blue-normal leading-[48px]">
              Simplifying Healthcare Procurement for Facilities and Suppliers
            </h2>
            <div className="w-[588px] mt-5">
              <p className="text-base font-normal leading-7 text-[#1E1E1E]">
                To be proactive in providing a stable framework for the economic
                development of Nigeria, through effective, efficient, and
                transparent implementation of monetary and exchange rate policy,
                and management of the financial sector
              </p>
            </div>

            <div>
              <button className="w-[304px] h-16 rounded-lg bg-blue-normal text-white "> Get Started</button>
            </div>
          </div>
          <div className="w-[628px] h-[856px]">
            <Image src={HeroImage} alt="hero-image" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
