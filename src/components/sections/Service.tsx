import Image from "next/image";
import serviceImage1 from "@/assets/images/service-image-1.svg";
import serviceImage2 from "@/assets/images/service-image-2.svg";

export default function Service() {
  return (
    <div id="service" className="relative mt-5">
      <h2 className="text-4xl font-bold text-center leading-[43px] text-main-black mt-9">
        Our Services
      </h2>
      <div className="h-[665px] max-w-[100vw] relative mt-7">
        {/* Opacity */}
        <div className="absolute left-0 top-0 w-full h-full z-10">
          <div className="max-w-[626px] bg-[#000000] opacity-60 h-full"></div>
        </div>

        {/* Text content */}
        <div className="absolute left-0 top-0 w-full h-full z-40">
          <div className="w-[90%] flex mx-auto mt-[79px]">
            <div>
              <h2 className="text-[32px] leading-[39.01px] font-bold text-white">
                For Suppliers
              </h2>
              <p className="font-normal w-[358px] text-2xl leading-7 text-white mt-7">
                Expand Your Reach :-List your products on a trusted platform
                where healthcare providers shop for quality and reliability.
                Manage inventory, track sales, and grow your business all in one
                place
              </p>
              <button className="font-bold leading-[24.38px] text-[20px] w-[304px] h-16 rounded-lg bg-white text-blue-normal mt-[52px]">
                Sign up as a Supplier
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
      <div className="h-[665px] max-w-[100vw] relative">
        {/* Opacity */}
        <div className="absolute left-0 top-0 w-full h-full z-10">
          <div className="max-w-[626px] bg-[#000000] opacity-60 h-full"></div>
        </div>

        {/* Text content */}
        <div className="absolute left-0 top-0 w-full h-full z-40">
          <div className="w-[90%] flex mx-auto mt-[79px]">
            <div>
              <h2 className="text-[32px] leading-[39.01px] font-bold text-white">
                For Buyers
              </h2>
              <p className="font-normal w-[421px] text-2xl leading-7 text-white mt-7">
                Streamline Your Procurement :-Access verified suppliers and
                high-quality products at competitive prices. Simplify
                procurement processes, manage orders, and ensure on-time
                delivery for your healthcare needs
              </p>
              <button className="font-bold leading-[24.38px] text-[20px] w-[304px] h-16 rounded-lg bg-white text-blue-normal mt-[52px]">
                Sign up as a Buyer
              </button>
            </div>
          </div>
        </div>

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
