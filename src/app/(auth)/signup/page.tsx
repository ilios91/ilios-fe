"use client";

import AuthLogo from "@/components/auth/AuthLogo";
import { Role } from "@/components/auth/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function Signup() {
  const role = useSearchParams().get("role") as Role;
  const Roles = useMemo<readonly Role[]>(() => ["facility", "supplier"] as const, [])

  useEffect(() => {
    if(!role || !Roles.includes(role)){
      window.location.href = "/auth/onboarding"
    }
    
  }, [role, Roles])
  

  return (
    <main className="h-[100vh] w-full flex bg-blue-light">
      <div className="bg-blue-normal/70 w-1/2 h-full flex rounded-2xl">
        <div className="flex mx-auto md:w-[90%] tablet:w-[85%]">
          <AuthLogo/>
        </div>
      </div>
      <div className="bg-blue-light w-1/2 h-full my-auto flex">
        <form className="w-[90%] flex justify-center flex-col mx-auto bg-red-400" action="">
          <h4 className="text-[32px] text-black text-center leading-[39px] font-bold">Create an Account</h4>
          
          {/* input fields */}
          <div className="flex flex-col">
            <div></div>
          </div>
        </form>
      </div>
    </main>
  );
}