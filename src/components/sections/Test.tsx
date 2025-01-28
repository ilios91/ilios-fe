"use client"

import Image from "next/image";
import serviceImage2 from "@/assets/images/service-image-2.svg";

export default function Service() {

  return (
    <div id="service" className="relative mt-5">
          
      {/* Image 2 */}
      <div className="h-[665px] max-w-[100vw] relative">
        {/* Opacity */}
        <div className="absolute left-0 top-0 w-full h-full z-10">
          <div className="max-w-[626px] bg-[#000000] opacity-60 h-full"></div>
        </div>

        {/* Text content */}
        <div className="absolute left-0 top-0 w-full h-full z-40">
          <div className="w-[90%] flex mx-auto mt-[79px]">
            <div>
            <h2 className="text-xl sm:text-[32px] leading-[39.01px] font-bold text-white">For Buyers</h2>
              <p className="font-normal w-full md:w-[421px] text-base sm:text-2xl leading-7 text-white mt-7">
                Streamline Your Procurement :-Access verified suppliers and
                high-quality products at competitive prices. Simplify
                procurement processes, manage orders, and ensure on-time
                delivery for your healthcare needs
              </p>
              <button className="font-bold leading-[24.38px] w-[214px] text-base sm:text-[20px] sm:w-[304px] h-16 rounded-lg bg-white text-blue-normal mt-[52px]"> Sign up as a Buyer </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
