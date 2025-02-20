"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function ForgotPasswordNotification() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/otp");
  };

  return (
    <div className="w-full max-h-[481px] mt-10 my-16">
      <h2 className="max-w-[320px] mx-auto text-2xl text-blue-normal font-medium text-center">
        A notification has been sent to your mail
      </h2>

      <p className="text-center text-sm text-[#171717] mt-2.5">
        {"Time left to access this link"}
      </p>
      <p className="text-center text-sm text-[#171717]">
        {"23hrs : 58m : 30s"}
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-[370px] mt-10 mx-auto flex flex-col justify-center"
      >
        <button className="h-10 text-white font-bold bg-blue-normal text-xs w-full rounded-lg p-2.5 text-center mx-auto">
          Open Email
        </button>
      </form>
    </div>
  );
}
