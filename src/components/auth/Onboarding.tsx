"use client";

import FacilityIcon from "../icons/FacilityIcon";
import SupplierIcon from "../icons/SupplierIcon";
import Button from "../common/buttons/Button";
import OnboardingCard from "./OnboardingCard";
import AuthLogo from "./AuthLogo";
import { Role } from "./auh.types";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

interface CardProps {
  text: string;
  icon: ReactNode;
  userRole: Role;
}

const OnboardingCards: CardProps[] = [
  {
    text: "Facility",
    icon: <FacilityIcon className="w-[275px] h-[195.25px]" />,
    userRole: "facility",
  },
  {
    text: "Supplier",
    icon: <SupplierIcon className="w-[225.55px] h-[224.8px]" />,
    userRole: "supplier",
  },
];

function Onboarding() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const router = useRouter();

  const handleRoleSelect = (selectedRole: Role) => {
    setSelectedRole(selectedRole);
  };

  const navigateToRegistrationPage = () => {
    if (selectedRole === null) return;
    router.push(`/signup/${selectedRole}`);
    // router.push(`/signup?role=${selectedRole}`);
  };

  return (
    <main className="h-[100vh] bg-blue-normal/70 pt-6">
      {/* Logo */}
      <div className="flex mx-auto md:w-[90%] tablet:w-[85%]">
        <AuthLogo />
      </div>

      {/* Content */}
      <div className="flex items-center mx-auto md:w-[90%] tablet:w-[85%] mt-10">
        {/* Choose role text */}
        <div className="w-1/2 text-[#FAFAFA]">
          <h1 className="max-w-[447px] text-5xl font-bold mb-10 leading-[58px]">
            Choose Your Role to Get Started
          </h1>
          <p className="text-[32px] font-medium max-w-[400px] leading-[39px]">
            Select the option that best describes you!
          </p>
        </div>

        {/* Cards */}
        <div className="flex-1 flex flex-col">
          <div className="flex gap-x-10 justify-center">
            {OnboardingCards.map(({ userRole, text, icon }) => {
              return (
                <OnboardingCard
                  key={userRole}
                  userRole={userRole}
                  text={text}
                  icon={icon}
                  selectedRole={selectedRole}
                  handleRoleSelect={() => handleRoleSelect(userRole)}
                />
              );
            })}
          </div>
          {/* Continue Button */}
          <Button
            onClick={navigateToRegistrationPage}
            disabled={selectedRole === null}
            text="Continue"
            className={`mt-14 mx-auto w-[518px] h-12 ${
              selectedRole !== null ? "bg-blue-normal" : "bg-blue-normal/40"
            } font-bold text-white text-[18px] rounded-lg`}
          />
        </div>
      </div>
    </main>
  );
}

export default Onboarding;
