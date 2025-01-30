"use client";

import FacilityIcon from "../icons/FacilityIcon";
import SupplierIcon from "../icons/SupplierIcon";
import Button from '../common/buttons/Button';
import OnboardingCard from './OnboardingCard';
import AuthLogo from "./AuthLogo";



function OnboardingScreen() {

  
  return (
    <section className="h-[100vh] bg-blue-normal/70 pt-6">

      {/* Logo */}
      <div className="flex mx-auto md:w-[90%] tablet:w-[85%]">
        <AuthLogo />
      </div>

      {/* Content */}
      <div className="flex items-center mx-auto md:w-[90%] tablet:w-[85%] mt-10">

        {/* Choose role text */}
        <div className="w-1/2 text-[#FAFAFA]">
          <h1 className="max-w-[447px] text-5xl font-bold mb-10 leading-[58px]">Choose Your Role to Get Started</h1>
          <p className="text-[32px] font-medium max-w-[400px] leading-[39px]">Select the option that best describes you!</p>
        </div>

        {/* Cards */}
        <div className="flex-1 flex flex-col">
          <div className="flex gap-x-10 justify-center">
            <OnboardingCard role="supplier" text="Facility" icon={<FacilityIcon className="w-[275px] h-[195.25px]"/>} />
            <OnboardingCard role="facility" text="Supplier" icon={<SupplierIcon className="w-[225.55px] h-[224.8px]"/>} />
          </div>
          {/* Continue Button */}
          <Button text="Continue" className="mt-14 mx-auto w-[518px] h-12 bg-blue-normal font-bold text-white text-[18px] rounded-lg"/>
        </div>

      </div>
    </section>
  );
}

export default OnboardingScreen;