// import { ReactNode } from "react";
import FacilityIcon from "../icons/FacilityIcon";
import Logo from "../icons/Logo";
import SupplierIcon from "../icons/SupplierIcon";
import Button from '../common/buttons/Button';

// type UserRole = "facility" | 'supplier';


function OnboardingScreen() {

  return (
    <section className="h-[100vh] bg-blue-normal/70 pt-5">
      <div className="flex mx-auto md:w-[90%] tablet:w-[85%]">
        <Logo className="w-[82px] h-[83px]"/>
      </div>
      <div className="flex items-center mx-auto md:w-[90%] tablet:w-[85%] mt-10">
        <div className="w-1/2 text-[#FAFAFA]">
          <h1 className="max-w-[447px] text-5xl font-bold mb-10 leading-[58px]">Choose Your Role to Get Started</h1>
          <p className="text-[32px] font-medium max-w-[400px] leading-[39px]">Select the option that best describes you!</p>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex gap-x-10 justify-center">
            <div className="cursor-pointer flex items-center justify-center border-[#CEDFF9] border-4 rounded-[20px] bg-white w-[329px] max-w-[329px] max-h-[474px] h-[474px]">
              <FacilityIcon className="w-[305px] h-[195.25px]"/>
            </div>
            <div className="flex flex-col items-center">
              <div className="cursor-pointer flex flex-col items-center justify-center border-[#CEDFF9] border-4 rounded-[20px] bg-white w-[329px] max-w-[329px] max-h-[474px] h-[474px]">
                <SupplierIcon className="w-[225.55px] h-[224.8px]"/>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <Button 
            text="Continue" 
            className="mt-10 mx-auto w-[518px] h-12 bg-blue-normal font-bold text-white text-[18px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default OnboardingScreen;