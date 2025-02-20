"use client";

import FormGroup from "@/components/common/input/FormGroup";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import image from "@/assets/icons/reset-password.svg";
import AuthImagePanel from "@/components/auth/AuthImagePanel";

export default function CreateNewPasswordPage() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/reset-password-success");
  };

  return (
    <main className="h-[100vh] w-full flex bg-blue-light">
      {/* Auth Hero Panel */}
      <AuthImagePanel
        title="Reset Password to regain access"
        image={image}
        imageAlt="reset password"
      />

      {/* Form */}
      <div className="bg-blue-light w-1/2 h-full my-auto flex">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] flex justify-center flex-col mx-auto"
        >
          <h4 className="text-2xl text-black text-center leading-[39px] font-bold mb-6">
            Forgot Password?
          </h4>

          <h1 className="text-blue-normal font-semibold text-2xl text-center leading-[39px] max-w-[328px] mx-auto">
            Create a new password to secure your account
          </h1>

          {/* input fields */}
          <div className="flex flex-col w-[90%] mx-auto gap-y-2 mt-8">
            <FormGroup
              name="password"
              id="password"
              label="New Password"
              // defaultValue={state?.email}
              placeholder="emzorpharm@gmail.com"
              type="password"
            />

            <FormGroup
              name="confirm-password"
              id="confirm-password"
              label="Confirm Password"
              // defaultValue={state?.email}
              placeholder="emzorpharm@gmail.com"
              type="password"
            />

            <button
              type="submit"
              className="mt-10 text-sm w-full h-10 rounded-lg text-white bg-blue-normal font-bold"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
