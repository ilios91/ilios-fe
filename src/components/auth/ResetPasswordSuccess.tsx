"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function ResetPasswordSuccess() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="w-full max-h-[481px] mt-10 my-16">
      <h2 className="max-w-[320px] mx-auto text-2xl text-blue-normal font-medium text-center">
        Your password has been reset successfully!
      </h2>

      <p className="max-w-[220px] mx-auto text-center text-sm text-[#171717] mt-2.5">
        You’ve been logged in automatically. <span className="font-semibold">Welcome back!</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-[370px] mt-10 mx-auto flex flex-col justify-center"
      >
        <button className="h-10 text-white font-bold bg-blue-normal text-xs w-full rounded-lg p-2.5 text-center mx-auto">
          Go to Dashboard
        </button>
      </form>
    </div>
  );
}
