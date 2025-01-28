"use client"

import Image from "next/image";
import serviceImage1 from "@/assets/images/service-image-1.svg";
import serviceImage2 from "@/assets/images/service-image-2.svg";
import useWindowSize from "../hooks/useWindowSize";

export default function Service() {
const { screenWidth } = useWindowSize();

  return (
    <div id="service" className="relative mt-5">
      <h2 className="text-2xl sm:text-4xl font-bold text-center leading-[43px] text-main-black mt-9">Our Services</h2>
      
      {/* Image 1 */}
      <div className="relative mt-7 h-[320px] sm:h-[255px] md:h-[665px]">
        
        {/* Overlay Opacity */}
        <div className="absolute left-0 top-0 w-full h-full z-10">
          <div className="w-[52%] md:max-w-[626px] bg-[#000000] opacity-60 h-full"></div>
        </div>

        {/* Text content */}
        <div className="absolute left-0 top-0 w-full h-full z-40">
          <div className={`w-[90%] flex mx-auto ${screenWidth < 768 && 'mt-6'} md:mt-[79px]`}>
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl md:text-[32px] leading-[39.01px] font-bold text-white">For Suppliers</h2>
              <p className={`font-normal ${screenWidth < 768 && 'mt-2'} max-w-[154px] leading-4 w-full sm:max-w-[258px] md:max-w-[358px] text-sm sm:text-base md:text-2xl md:leading-7 text-white md:mt-7`}>
                Expand Your Reach :-List your products on a trusted platform
                where healthcare providers shop for quality and reliability.
                Manage inventory, track sales, and grow your business all in one place
              </p>
              <button 
                className={`font-bold leading-[24.38px] ${screenWidth < 768 && 'w-[136px] h-10 mt-4'} text-base md:text-[20px] md:w-[304px] rounded-lg bg-white text-blue-normal md:h-16 md:mt-[52px]`}>
                <span className="block md:hidden">Join us</span> <span className="hidden md:block">Sign up as a Supplier</span>
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <Image
          src={serviceImage1}
          alt="service image"
          fill
          priority
          objectFit="cover"
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Image 2 */}
      <div className="relative h-[320px] sm:h-[275px] md:h-[665px]">
        
        {/* Overlay Opacity */}
        <div className="absolute left-0 top-0 w-full h-full z-10">
          <div className="w-[52%] md:max-w-[626px] bg-[#000000] opacity-60 h-full"></div>
        </div>

        {/* Text content */}
        <div className="absolute left-0 top-0 w-full h-full z-40">
          <div className={`w-[90%] flex mx-auto ${screenWidth < 768 && 'mt-6'} md:mt-[79px]`}>
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl md:text-[32px] leading-[39.01px] font-bold text-white">For Buyers</h2>
              <p className={`font-normal ${screenWidth < 768 && 'mt-2'} max-w-[170px] leading-4 w-full text-sm sm:text-base md:text-2xl sm:max-w-[258px] md:max-w-[351px] md:leading-7 text-white md:mt-7 tablet:max-w-[421px]`}>
                Streamline Your Procurement :-Access verified suppliers and
                high-quality products at competitive prices. Simplify
                procurement processes, manage orders, and ensure on-time
                delivery for your healthcare needs
              </p>
              <button 
                className={`font-bold leading-[24.38px] ${screenWidth < 768 && 'w-[136px] h-10 mt-4'} text-base md:text-[20px] md:w-[304px] rounded-lg bg-white text-blue-normal md:h-16 md:mt-[52px]`}>
                <span className="block md:hidden">Join us</span> <span className="hidden md:block">Sign up as a Buyer</span>
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <Image
          src={serviceImage2}
          alt="service image"
          fill
          priority
          objectFit="cover"
          sizes="100vw"
          quality={100}
        />
      </div>

    </div>
  );
}
