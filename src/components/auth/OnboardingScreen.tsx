// import { ReactNode } from "react";
import FacilityIcon from "../icons/FacilityIcon";
import SupplierIcon from "../icons/SupplierIcon";

// type UserRole = "facility" | 'supplier';


function OnboardingScreen() {

  return (
    <section className="h-[100vh] bg-blue-normal">
      <div className="flex items-center mx-auto h-full md:w-[90%] tablet:w-[85%] ">
        <div className="max-w-[447px] text-[#FAFAFA]">
          <h1 className="text-5xl font-bold mb-10 leading-[58px]">Choose Your Role to Get Started</h1>
          <p className="text-[32px] font-medium max-w-[400px] leading-[39px]">Select the option that best describes you!</p>
        </div>
        <div className="flex flex-1 justify-end gap-x-10">
          <div className="cursor-pointer flex items-center justify-center border-[#CEDFF9] border-4 rounded-[20px] bg-white w-[329px] max-w-[329px] max-h-[474px] h-[474px]">
            <FacilityIcon className="w-[305px] h-[195.25px]"/>
          </div>
          <div className="cursor-pointer flex items-center justify-center border-[#CEDFF9] border-4 rounded-[20px] bg-white w-[329px] max-w-[329px] max-h-[474px] h-[474px]">
            <SupplierIcon className="w-[225.55px] h-[224.8px]"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnboardingScreen;