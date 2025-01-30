"use client";

import { Role } from "@/components/auth/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";



export default function Register() {
  const role = useSearchParams().get("role") as Role;
  const Roles = useMemo<readonly Role[]>(() => ["facility", "supplier"] as const, [])

  console.log(role);
  console.log(Roles);

  useEffect(() => {
    if(!role || !Roles.includes(role)){
      window.location.href = "/auth/onboarding"
    }
    
  }, [role, Roles])
  

  return (
    <main>
      Register
    </main>
  );
}