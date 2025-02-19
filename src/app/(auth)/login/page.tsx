"use client";

import AuthLogo from "@/components/auth/AuthLogo";
import FormGroup from "@/components/common/input/FormGroup";
import Link from "next/link";
// import { useActionState } from "react";
// import { LoginInterface } from "@/actions/authentication/auth.types";
// import { login } from "@/actions/authentication/auth";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

import image from "@/assets/icons/signup.svg";
import Image from "next/image";

// const initialState: LoginInterface = { email: "", password: "" };

export default function Login() {
  // const [state, action, isPending] = useActionState(login, initialState);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/2fa");
  };

  return (
    <main className="h-[100vh] w-full flex bg-blue-light">
      <div className="bg-[#428BF8] w-1/2 h-full flex rounded-r-2xl">
        {/* Image Container */}
        <div className="flex flex-col h-full w-[90%] mx-auto py-4 gap-y-3.5">
          <AuthLogo />
          <h2 className="text-[#FAFAFA] text-2xl text-center font-bold leading-[33px] max-w-[319px] mx-auto">
            {"Let's Get you started with Ilios"}
          </h2>
          <div className="relative flex-1 flex w-full h-[430px]">
            <Image className="object-contain" fill src={image} alt="reset password image" />
          </div>
        </div>
      </div>
      <div className="bg-blue-light w-1/2 h-full my-auto flex">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] flex justify-center flex-col mx-auto"
        >
          <h4 className="text-2xl text-black text-center leading-[39px] font-bold mb-6">
            Log in to your account
          </h4>

          <h1 className="text-blue-normal font-medium text-[32px] text-center">
            Welcome back to Ilios!
          </h1>
          <h6 className="text-base text-[#171717] text-center mx-auto max-w-[470px]">
            Thank you for trusting us! Enter your login details below
          </h6>

          {/* input fields */}
          <div className="flex flex-col w-[90%] mx-auto gap-y-2 mt-8">
            <FormGroup
              name="email"
              id="email"
              label="Email"
              // defaultValue={state?.email}
              placeholder="emzorpharm@gmail.com"
              type="email"
            />
            <FormGroup
              name="password"
              id="password"
              label="Password"
              type="password"
            />

            <div className="flex items-center justify-between w-full">
              <FormGroup
                label="Remember me"
                type="checkbox"
                name="remember_me"
                id="remember_me"
              />
              <Link
                className="text-xs underline decoration-black decoration-solid decoration-1"
                href="/"
              >
                Forgot Password
              </Link>
            </div>

            <button
              type="submit"
              className="mt-8 text-sm w-full h-10 rounded-lg text-white bg-blue-normal"
            >
              Log in
            </button>

            <p className="text-black text-xs max-w-[496px] text-center mx-auto mt-6">
              Two-Factor Authentication is enabled for this account. After
              logging in, you’ll be prompted to enter your 2FA code.
            </p>

            <hr className="border-[#BABABA] border-[1px] w-full my-8" />

            <p className="text-xs text=black leading-4 max-w-[403px] mx-auto text-center">
              Want to add an extra layer of security?{" "}
              <Link className="text-blue-normal" href="/">
                {" "}
                Enable Two-Factor Authentication{" "}
              </Link>
              in your account settings.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
