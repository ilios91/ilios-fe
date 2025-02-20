"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function TwoFactorAuth() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="w-full max-h-[481px] ">
      {/* Logo */}

      {/* Content inside the box */}
      <h2 className=" text-2xl text-blue-normal font-medium text-center">
        Two-Factor Authentication
      </h2>
      <p className="text-center mt-1.5 text-xs text-[#171717] max-w-[320px] mx-auto">
        For your security, please enter the 2FA code sent to your email or
        generated by your authentication app.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-[370px] mt-10 mx-auto flex flex-col justify-center"
      >
        <div className="w-full">
          <label
            className="text-[20px] font-medium text-[#171717]"
            htmlFor="2fa"
          >
            2FA
          </label>
          <input
            className="text-[10px] h-10 w-full p-2 rounded-lg border-none outline-none text-[#BABABA] font-medium leading-[17px] bg-white"
            type="text"
            name="2fa"
            id="2fa"
            placeholder="Enter your 2FA code"
          />
        </div>

        <button
          type="submit"
          className="h-10 text-white font-bold bg-blue-normal text-xs w-full rounded-lg p-2.5 text-center mx-auto mt-8"
        >
          Open Email
        </button>

        <hr className="border-[#BABABA] border-[1px] w-full my-6" />

        <p className="text-xs text-center mb-1.5">
          {" "}
          Didn’t get a code?{" "}
          <Link href="" className="text-blue-normal">
            Resend code
          </Link>{" "}
        </p>
        <p className="text-xs text-center mb-12">
          {" "}
          Having trouble?{" "}
          <Link href="" className="text-blue-normal">
            Use a recovery method.
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
