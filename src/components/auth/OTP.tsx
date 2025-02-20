"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/create-new-password");
  };

  // const resendOtp = () => {
  //   router.push("");
  // };

  return (
    <div className="w-full max-h-[481px] mt-10 my-16">
      <h2 className="max-w-[320px] mx-auto text-2xl text-blue-normal font-medium text-center">
        Enter OTP code below
      </h2>

      <p className="max-w-[340px] mx-auto text-center text-sm text-[#171717] mt-6 mb-7">
        A 6-digit code has been sent to your email. Enter it to verify your
        account
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-[370px] mt-10 mx-auto flex flex-col justify-center"
      >
        <input
          onChange={(e) => setOtp(e.target.value)}
          name="otp"
          id="otp"
          type="text"
          className="text-[10px] h-10 w-full p-2 rounded-lg border-none outline-none text-[#BABABA] font-medium leading-[17px] bg-white"
          placeholder="Enter OTP"
          required
          value={otp}
        />
        {/* <button
          onClick={resendOtp}
          type="button"
          className="text-blue-normal font-bold text-xs w-auto rounded-lg text-center mx-auto my-6"
        >
          Resend
        </button> */}
        <button
          type="submit"
          className="h-10 text-white font-bold bg-blue-normal text-xs w-full rounded-lg p-2.5 text-center mx-auto"
        >
          Verify
        </button>
      </form>
    </div>
  );
}
