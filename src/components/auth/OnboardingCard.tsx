import { OnboardingCardProps } from "./types";

export default function OnboardingCard({ text, icon, role, selectedRole, onRoleSelect }: OnboardingCardProps) {
  
  return (
    <div
      onClick={onRoleSelect} 
      role="button"
      aria-label={`Select ${text} role`}
      className={`cursor-pointer flex flex-col items-center justify-center border-[#CEDFF9] ${role === selectedRole ? "border-[#FF2617]" : "border-[#CEDFF9]"} border-4 rounded-[20px] bg-white w-[299px] max-w-[299px] max-h-[424px] h-[424px]`}
      // className={`cursor-pointer flex flex-col items-center justify-center border-[#CEDFF9] border-4 rounded-[20px] bg-white w-[299px] max-w-[299px] max-h-[424px] h-[424px]`}
    >
      <div className="flex items-center justify-center h-[80%] w-full"> {icon}</div>
      <div className="h-[20%]">
        <h5 className="text-[20px] font-bold leading-[24px] text-[#171717]">{text}</h5>
      </div>
    </div>
  );
}