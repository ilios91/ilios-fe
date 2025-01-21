import Image from "next/image";
import serviceImage1 from "@/assets/images/service-image-1.svg";
import serviceImage2 from "@/assets/images/service-image-2.svg";

export default function Service() {
  return (
    <div id="service" className="relative">
      <h2 className="text-4xl font-bold text-center leading-[43px] text-main-black mt-9">
        Our Services
      </h2>
      <div className="h-[665px] bg-red-500 max-w-[100vw] relative">
        <Image
          src={serviceImage1}
          alt="service image"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
      </div>
      <div className="h-[665px] bg-red-500 max-w-[100vw] relative">
        <Image
          src={serviceImage2}
          alt="service image"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
      </div>
    </div>
  );
}
