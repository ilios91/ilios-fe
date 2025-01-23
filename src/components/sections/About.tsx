import Image from "next/image";
import AboutImage from "@/assets/images/about.svg";

export default function About() {
  return (
    <section id="about" className="w-[90%] mx-auto relative">
      <div className="flex flex-col md:flex-row items-center w-full gap-x-10 gap-y-10 mt-24 mb-8 h-full">
        <div className="relative w-full h-[400px] md:w-[450px] md:h-[450px] tablet:w-[600px] tablet:h-[600px] lg:w-[604px] lg:h-[627px] bg-green-500">
          <Image 
            src={AboutImage} 
            alt="about-image" 
            fill={true}
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-main-black leading-8"> About us </h2>
          <h6 className="text-2xl font-medium leading-7 mt-4"> Why Choose Us? </h6>

          <div className="flex gap-y-10 flex-col mt-9">
            <p className="text-[18px] font-normal leading-7">
              We are redefining the healthcare supply chain by bringing together
              suppliers and buyers on a trusted platform.
            </p>
            <p className="text-[18px] font-normal leading-7">
              From seamless onboarding to verified partnerships, we provide solutions that save time, reduce costs, and build trust.
            </p>
            <p className="text-[18px] font-normal leading-7">
              Our marketplace ensures reliable access to quality products, helping healthcare providers focus on what they do best saving lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
