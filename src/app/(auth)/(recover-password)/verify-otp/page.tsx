import Logo from "@/components/icons/Logo";
import VerifyOTP from "@/components/auth/VerifyOTP";

export default function VerifyOTPPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="p-6 w-[625px] flex flex-col border rounded-[20px] bg-[#EDF3FC] shadow-lg">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col items-center w-[55.52px] h-[55.52px] gap-y-1">
            <Logo variant="blue" className="w-full h-full" />
            <p className="font-bold text-blue-normal text-sm leading-[18px]">
              ILIOS
            </p>
          </div>
        </div>
        <VerifyOTP />
      </div>
    </div>
  );
}
