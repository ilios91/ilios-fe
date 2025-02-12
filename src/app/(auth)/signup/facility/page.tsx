"use client";

import AuthLogo from "@/components/auth/AuthLogo";
import FormGroup from "@/components/common/input/FormGroup";
import Link from "next/link";
import { useActionState } from "react";
import { registerFacility } from "@/actions/authentication/auth";
import { FacilityInterface } from "@/actions/authentication/auth.types";
import Button from "@/components/common/buttons/Button";
import SignupImage from "@/components/icons/SignupImage";
import signupFacility from "@/assets/icons/signup-facility.svg";
import Image from "next/image";

const initialState: FacilityInterface = {
  company_name: "",
  email: "",
  phone_number: "",
  registration_number: "",
  password: "",
  confirm_password: "",
};

export default function FacilitySignup() {
  const [state, action, isPending] = useActionState(
    registerFacility,
    initialState
  );

  return (
    <main className="h-[100vh] w-full flex bg-blue-light">
      <div className="bg-[#428BF8] w-1/2 h-full flex rounded-2xl">
        {/* Image Container */}
        <div className="flex flex-col h-full w-[90%] mx-auto py-8 gap-y-2.5">
          <AuthLogo />
          <h2 className="text-[#FAFAFA] text-4xl text-center font-bold leading-[43px] w-[70%] mx-auto">
            {"Let's Get you started with Ilios"}
          </h2>
          <div className="relative flex-1 flex w-full h-[430px]">
            <SignupImage className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      <div className="bg-blue-light w-1/2 h-full my-auto flex">
        <form
          action={action}
          className="w-[90%] flex justify-center flex-col mx-auto"
        >
          <h4 className="text-2xl text-black text-center leading-[39px] font-bold">
            {" "}
            Create an Account{" "}
          </h4>

          {/* input fields */}
          <div className="flex flex-col w-[90%] mx-auto gap-y-2 mt-4 ">
            <FormGroup
              name="company_name"
              id="company_name"
              label="Company Name:"
              defaultValue={state?.company_name}
              placeholder="Emzor Pharm"
              type="text"
              errors={state?.errors?.company_name}
            />
            <FormGroup
              name="email"
              id="email"
              label="Email"
              defaultValue={state?.email}
              placeholder="emzorpharm@gmail.com"
              type="email"
              errors={state?.errors?.email}
            />
            <FormGroup
              name="phone_number"
              id="phone_number"
              label="Phone Number:"
              defaultValue={state?.phone_number}
              placeholder="0806332222"
              type="text"
              errors={state?.errors?.phone_number}
            />
            <FormGroup
              name="registration_number"
              id="registration_number"
              label="Registration Number:"
              defaultValue={state?.registration_number}
              placeholder="ADC12-DEF34-GHI56-JKL78"
              type="text"
              errors={state?.errors?.registration_number}
            />
            <FormGroup
              name="password"
              id="password"
              label="Password"
              type="password"
              errors={state?.errors?.password}
            />
            <FormGroup
              name="confirm_password"
              id="confirm_password"
              label="Confirm Password:"
              type="password"
              errors={state?.errors?.confirm_password}
            />
            <Button
              disabled={isPending}
              className="mt-8 text-sm w-[518px] h-10 rounded-lg text-white bg-blue-normal"
              text={isPending ? "Loading..." : "Sign Up"}
            />
          </div>
          <div className="mt-6 flex gap-x-1 items-center justify-center text-xs font-semibold">
            <p className="text-center">Already have an account? </p>
            <Link className="text-blue-normal" href="/login">
              {" "}
              Sign in{" "}
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
