import Logo from "../icons/Logo";

export default function AuthLogo() {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col items-center w-[55.52px] h-[55.52px] gap-y-1">
        <Logo className="w-full h-full"/>
        <p className="text-bold text-[#FAFAFA] text-base leading-[18px]">ILIOS</p>
      </div>
    </div>
  );
}