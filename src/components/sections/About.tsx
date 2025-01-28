'use client';

import Image from "next/image";
import AboutImage from "@/assets/images/about.svg";
import AboutImageMobile from "@/assets/images/about-m.svg";import useWindowSize from "../hooks/useWindowSize";
import { screenSizes } from "../utils/functions";

export default function About() {
const { screenWidth, screenHeight } = useWindowSize();

const imageWidth = screenSizes("width", screenWidth, screenHeight);
const imageHeight = screenSizes("height", screenWidth, screenHeight);

const width = () => {
  if(screenWidth < 360 ) return 197
    else if(screenWidth >= 360 && screenWidth < 480) return 297
    else if(screenWidth >= 480 && screenWidth < 576) return 197
    else if(screenWidth >= 576 && screenWidth < 768) return 197
    else if(screenWidth >= 768 && screenWidth < 992) return 197
    else if(screenWidth >= 992 && screenWidth < 1280) return 197
    else if (screenWidth >= 1280 ) return 197  
}

console.log(imageWidth);
console.log(imageHeight);

  
  return (
    <section id="about" className="w-[90%] mx-auto relative">
      <div className="flex flex-col md:flex-row items-center w-full gap-x-10 gap-y-10 mt-24 mb-8 h-full">
        {/* <div className="relative xs:w-[300px] xs:h-[380px] sm:w-[520px] sm:h-[520px] tablet:w-[600px] tablet:h-[600px] lg:w-[604px] lg:h-[627px]"> */}
        <div className="relative flex justify-center w-full sm:w-[520px] sm:h-[520px] tablet:w-[600px] tablet:h-[600px] lg:w-[604px] lg:h-[627px]">
          <Image 
            src={screenWidth < 576 ? AboutImageMobile : AboutImage} 
            alt="about-image" 
            // fill={true}
            className="object-cover"
            priority
            width={imageWidth}
            height={204}
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-4xl font-bold text-main-black leading-8"> About us </h2>
          <h6 className="text-[18px] sm:text-2xl font-medium leading-7 mt-4"> Why Choose Us? </h6>

          <div className="text-sm sm:text-[18px] font-normal flex gap-y-4 sm:gap-y-10 md:gap-y-5 tablet:gap-y-10 flex-col mt-5 sm:mt-9">
            <p className="leading-7">
              We are redefining the healthcare supply chain by bringing together
              suppliers and buyers on a trusted platform.
            </p>
            <p className="leading-7">
              From seamless onboarding to verified partnerships, we provide solutions that save time, reduce costs, and build trust.
            </p>
            <p className="leading-7">
              Our marketplace ensures reliable access to quality products, helping healthcare providers focus on what they do best saving lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
