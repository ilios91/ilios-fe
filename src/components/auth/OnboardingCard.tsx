import { OnboardingCardProps } from "./types/auh.types";

export default function OnboardingCard({
  text,
  icon,
  userRole,
  selectedRole,
  handleRoleSelect,
}: OnboardingCardProps) {
  return (
    <div
      onClick={handleRoleSelect}
      role="button"
      aria-label={`Select ${text} role`}
      className={`cursor-pointer flex flex-col items-center justify-center border-[#CEDFF9] ${
        userRole === selectedRole ? "border-[#FF2617]" : "border-[#CEDFF9]"
      } border-4 rounded-[20px] bg-white w-[299px] max-w-[299px] max-h-[424px] h-[424px]`}
    >
      <div className="flex items-center justify-center h-[80%] w-full">
        {" "}
        {icon}
      </div>
      <div className="h-[20%]">
        <h5 className="text-[20px] font-bold leading-[24px] text-[#171717]">
          {text}
        </h5>
      </div>
    </div>
  );
}
