"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // if you don’t have this helper, just use string concatenation
import Link from "next/link";

type Role = "buyer" | "supplier" | null;

export default function RoleSelectionPage() {
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const router = useRouter();

  const roles = [
    {
      id: "buyer",
      label: "Buyer",
      img: "/buyer.png", // replace with your actual image path
      description: "Hospitals and organizations purchasing supplies",
    },
    {
      id: "supplier",
      label: "Supplier",
      img: "/supplier.png", // replace with your actual image path
      description: "Vendors providing equipment and resources",
    },
  ];

  const handleContinue = () => {
    if (!selectedRole) return;
    if (selectedRole === "buyer") {
      router.push("/auth/buyer-signup");
    } else if (selectedRole === "supplier") {
      router.push("/auth/supplier-signup");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 px-6 py-8 relative">
      {/* Top logo */}
      <Link href="/">
      <div className="absolute top-6 left-6">
        <Image
          src="/logo1.png"
          alt="ILIOS Logo"
          width={40}
          height={40}
          priority
        />
      </div>
      </Link>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-between flex-1 w-full max-w-6xl mx-auto">
        {/* Left side: Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left mt-20 md:mt-0 mb-10 md:mb-0 md:w-1/2"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-sm">
            Choose Your Role to Get Started
          </h1>
          <p className="mt-4 text-blue-100 text-base md:text-lg leading-relaxed">
            Select the option that best describes you!
          </p>
        </motion.div>

        {/* Right side: Role options + button */}
        <div className="flex flex-col items-center md:items-end md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
            {roles.map((role) => (
              <motion.button
                key={role.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedRole(role.id as Role)}
                className={cn(
                  "flex flex-col items-center justify-center rounded-2xl border-2 p-6 shadow-lg transition-all bg-white/90 backdrop-blur-md focus:outline-none",
                  selectedRole === role.id
                    ? "border-blue-600 shadow-xl scale-105"
                    : "border-gray-200 hover:border-blue-300"
                )}
              >
                <Image
                  src={role.img}
                  alt={role.label}
                  width={180}
                  height={140}
                  className="mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {role.label}
                </h2>
                <p className="text-sm text-gray-500 mt-1 text-center">
                  {role.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Continue button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleContinue}
            disabled={!selectedRole}
            className={cn(
              "mt-10 w-full max-w-md md:w-[calc(100%)] rounded-xl py-3 font-medium text-white shadow-md transition-all",
              selectedRole
                ? "bg-blue-700 hover:bg-blue-800"
                : "bg-blue-300 cursor-not-allowed"
            )}
          >
            Continue
          </motion.button>
        </div>
      </div>
    </div>
  );
}
