import { MouseEvent, ReactNode, useState } from "react";
interface OnboardingCardProps {
  text: string,
  icon: ReactNode,
  role: string,
}

type UserRole = "facility" | 'supplier' | undefined;

export default function OnboardingCard({ text, icon, role }: OnboardingCardProps) {

  const [userRole, setUserRole] = useState<UserRole>(undefined);

  const handleRoleSelect = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.role);
  }

  return (
    <div
      onClick={(e) => handleRoleSelect(e)} 
      role={role} 
      className="cursor-pointer flex flex-col items-center justify-center border-[#CEDFF9] border-4 rounded-[20px] bg-white w-[299px] max-w-[299px] max-h-[424px] h-[424px]"
    >
      <div className="flex items-center justify-center h-[80%] w-full"> {icon}</div>
      <div className="h-[20%]">
        <h5 className="text-[20px] font-bold leading-[24px] text-[#171717]">{text}</h5>
      </div>
    </div>
  );
}