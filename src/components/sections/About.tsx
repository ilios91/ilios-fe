import Image from "next/image";
import AboutImage from "@/assets/images/about.svg";

export default function About() {
  return (
    <section id="about" className="h-[640p] w-[90%] mx-auto relative">
      <div className="flex items-center w-full gap-x-10 mt-24 mb-8">
        <div className="flex-1 max-w-[604px] max-h-[627.47px]">
          <Image 
            src={AboutImage} 
            alt="about-image" 
            // fill
            priority
            objectFit="cover"
          />
        </div>
        <div className="w-[584px]">
          <h2 className="text-[36px] font-bold text-main-black leading-8">
            About us
          </h2>
          <h6 className="text-2xl font-medium leading-7 mt-4">
            Why Choose Us?
          </h6>

          <div className="flex gap-y-10 flex-col mt-9">
            <p className="text-[18px] font-normal leading-7">
              We are redefining the healthcare supply chain by bringing together
              suppliers and buyers on a trusted platform.
            </p>
            <p className="text-[18px] font-normal leading-7">
              Our marketplace ensures reliable access to quality products,
              helping healthcare providers focus on what they do best saving
              lives.
            </p>
            <p className="text-[18px] font-normal leading-7">
              From seamless onboarding to verified partnerships, we provide
              solutions that save time, reduce costs, and build trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
