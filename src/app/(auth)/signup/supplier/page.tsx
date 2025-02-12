"use client";

import AuthLogo from "@/components/auth/AuthLogo";
import FormGroup from "@/components/common/input/FormGroup";
import Link from "next/link";
import { useActionState } from "react";
import { registerSupplier } from "@/actions/authentication/auth";
import { SupplierInterface } from "@/actions/authentication/auth.types";
import Button from "@/components/common/buttons/Button";

const initialState: SupplierInterface = {
  business_name: "",
  email: "",
  phone_number: "",
  address: "",
  password: "",
  confirm_password: "",
};

export default function SupplierSignup() {
  const [state, action, isPending] = useActionState(
    registerSupplier,
    initialState
  );

  return (
    <main className="h-[100vh] w-full flex bg-blue-light">
      <div className="bg-blue-normal/70 w-1/2 h-full flex rounded-2xl">
        <div className="flex mx-auto md:w-[90%] tablet:w-[85%]">
          <AuthLogo />
        </div>
      </div>
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
              name="business_name"
              id="business_name"
              label="Business Name:"
              defaultValue={state?.business_name}
              placeholder="Emzor Pharm"
              type="text"
              errors={state?.errors?.business_name}
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
              name="address"
              id="address"
              label="Registration Number:"
              defaultValue={state?.address}
              placeholder="ADC12-DEF34-GHI56-JKL78"
              type="text"
              errors={state?.errors?.address}
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
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
