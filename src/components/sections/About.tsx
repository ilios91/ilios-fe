import Image from "next/image";
import AboutUsImage from "@/assets/images/about.svg";

export default function About() {
  return (
    <section className="h-[640p] bg-red-500 w-[90%] mx-auto">
      <div className="flex items-center w-full gap-x-10">
        <div className="w-[629px] h-[451p] bg-yellow-500">
          <Image src={AboutUsImage} alt="about-us-image" className="w-full" />
        </div>
        <div className="w-[584px]">
          <h2 className="text-[36px] font-bold ">About us</h2>
          <h6>Why Choose Us?</h6>
          <div className="">
            <p>
              We are redefining the healthcare supply chain by bringing together
              suppliers and buyers on a trusted platform.
            </p>
            <p>
              Our marketplace ensures reliable access to quality products,
              helping healthcare providers focus on what they do best saving
              lives.
            </p>
            <p>
              From seamless onboarding to verified partnerships, we provide
              solutions that save time, reduce costs, and build trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
