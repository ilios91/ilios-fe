import Image from "next/image";
import HeroImage from "@/assets/images/hero.svg";
import styles from "@/components/styles/hero.module.scss";

export default function Hero() {
  return (
    <section className={`${styles.hero} bg-red-700 h-[866px] relative top-[90px] max-w-screen`}>
      <div className="h-full w-full">
        <Image
          fill={true}
          src={HeroImage}
          alt="hero"
          objectFit="cover"
          priority
          quality={100}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}

      <div className="absolute inset-0 max-w-[1192px] mx-auto flex flex-col justify-center items-center text-center">
        {/* ... content ... */}
        <h1 className="font-bold text-5xl align-center leading-[58px] text-white">Simplifying Healthcare Procurement for Facilities and Suppliers</h1>
        <p className="font-normal text-white text-[18px] mt-6 max-w-[1022px]">To be proactive in providing a stable framework for the economic development of Nigeria, through effective, efficient, and transparent implementation of monetary and exchange rate policy, and management of the financial sector</p>
        <div className="mt-24">
          <button className="w-[274px] h-16 text-blue-normal bg-white font-bold text-[20px] leading-6 rounded-lg"> Get started</button>
        </div>
      </div>
    </section>
  );
}
