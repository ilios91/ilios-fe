import Logo from "../icons/Logo";

export default function AuthLogo() {
  return (
    <div className="flex flex-col gap-y-2">
      <Logo className="w-[55.52px] h-[55.52px]"/>
      <p className="text-bold text-[#FAFAFA] text-base leading-[18px]">ILIOS</p>
    </div>
  );
}