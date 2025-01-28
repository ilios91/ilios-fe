'use client';

import Image from "next/image";
import AboutImage from "@/assets/images/about.svg";

export default function About() {
// const { screenWidth, screenHeight } = useWindowSize();

return (
  <section id="about" className="w-[90%] mx-auto relative">
    <div className="flex flex-col md:flex-row items-center w-full gap-x-10 gap-y-10 mt-24 mb-8 h-full">
      <div className="w-full md:hidden">
        <h2 className="text-2xl sm:text-4xl font-bold text-main-black leading-8"> About us </h2>
        <h6 className="text-[18px] sm:text-2xl font-medium leading-7 mt-4"> Why Choose Us? </h6>
      </div>

      <div className="relative flex justify-center max-w-[80%] tablet:w-[600px] lg:w-[604px]">
        <Image 
          src={AboutImage} 
          alt="about-image" 
          // fill={true}          
          className="object-cover"
          priority
          // width={(screenWidth < 480) ? 297 : (screenWidth < 576) ? 397 : (screenWidth < 768) ? 497 : (screenWidth < 992) ? 350 : undefined }
          // height={204}
        />
      </div>

      <div className="-mt-8 md:mt-0 w-full tablet:w-1/2">
        <h2 className="hidden md:block text-2xl sm:text-4xl font-bold text-main-black leading-8"> About us </h2>
        <h6 className="hidden md:block text-[18px] sm:text-2xl font-medium leading-7 mt-4"> Why Choose Us? </h6>

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
