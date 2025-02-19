import Image from "next/image";
import AuthLogo from "./AuthLogo";

export default function AuthImagePanel({
  title,
  image,
  imageAlt
}: {
  title: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="bg-[#428BF8] w-1/2 h-full flex rounded-r-2xl">
      {/* Image Container */}
      <div className="flex flex-col h-full w-[90%] mx-auto py-4 gap-y-3.5">
        <AuthLogo />
        <h2 className="text-[#FAFAFA] text-2xl text-center font-bold leading-[33px] max-w-[319px] mx-auto">
          {title}
        </h2>
        <div className="relative flex-1 flex w-full max-h-[calc(100vh-150px)]">
          <Image
            className="object-contain"
            fill
            src={image}
            alt={imageAlt}
          />
        </div>
      </div>
    </div>
  );
}
