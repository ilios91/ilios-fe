import Image from "next/image";
import HeroImage from "@/assets/images/hero.svg";
// import styles from "@/components/styles/hero.module.scss";

export default function Hero() {
  return (
    <section className={`relative h-[280px] sm:h-[320px] md:h-[480px] tablet:h-[calc(100vh-90px)] top-[90px] overflow-hidden bg-red-500`}>
      <Image
        fill={true}
        src={HeroImage}
        alt="hero"
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"> </div>

      {/* Content */}

      <div className="text-white absolute inset-0 max-w-[1192px] mx-auto flex flex-col justify-center items-center text-center">
        {/* ... content ... */}
        <h1 className="font-bold align-center leading-[21px] w-[85%] text-[18px] sm:text-2xl md:w-[90%] md:text-3xl md:leading-[38px] tablet:text-5xl tablet:leading-[58px]"> Simplifying Healthcare Procurement for Facilities and Suppliers
        </h1>
        <p className="font-normal text-sm sm:text-[18px] mt-5 w-[90%] md:text-2xl lg:max-w-[1022px]">
          Find reliable suppliers, place orders, and ensure delivery with trusted logistics partners.
        </p>
        <div className="mt-6 md:mt-14 tablet:mt-24">
          <button className="text-base w-[170px] sm:h-11 sm:w-[150px] h-10 md:w-[274px] md:h-14 text-blue-normal bg-white font-bold md:text-[20px] leading-6 rounded-lg"> Get started </button>
        </div>
      </div>
    </section>
  );
}
