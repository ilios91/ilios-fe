import Image from "next/image";
import HeroImage from "@/assets/images/hero.svg";
// import styles from "@/components/styles/hero.module.scss";

export default function Hero() {
  return (
    <section className={`relative w-full top-[90px] h-[calc(100vh-90px)]`}>
      <Image
        fill={true}
        src={HeroImage}
        alt="hero"
        objectFit="cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}

      <div className="text-white absolute inset-0 max-w-[1192px] mx-auto flex flex-col justify-center items-center text-center">
        {/* ... content ... */}
        <h1 className="font-bold align-center max-xs:leading-[40px] w-[90%] text-2xl sm:text-4xl md:w-full md:text-5xl md:leading-[58px]">
          Simplifying Healthcare Procurement for Facilities and Suppliers
        </h1>
        <p className="font-normal text-[18px] mt-6 max-w-[1022px]">
          To be proactive in providing a stable framework for the economic
          development of Nigeria, through effective, efficient, and transparent
          implementation of monetary and exchange rate policy, and management of
          the financial sector
        </p>
        <div className="mt-24">
          <button className="w-[274px] h-16 text-blue-normal bg-white font-bold text-[20px] leading-6 rounded-lg">
            {" "}
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}
