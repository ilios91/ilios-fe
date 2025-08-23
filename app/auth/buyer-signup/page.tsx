"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BuyerSignupPage() {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    regNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Buyer form submitted:", formData);
    // TODO: Send to backend API (e.g., POST /api/signup/buyer)
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div
        className="hidden md:flex flex-col justify-center items-center w-1/2 bg-blue-500 text-white relative"
        style={{ fontFamily: "var(--font-sfpro)" }}
      >
        <div className="absolute top-6 left-6">
          <Image src="/logo1.png" alt="ILIOS Logo" width={40} height={40} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 mt-20">
          Let’s Get you started with <br /> Illios
        </h2>
        <p className="text-lg text-center mb-6">
          Fill out the form to create your buyer account and start managing your healthcare procurement.
        </p>
        <Image
          src="/signup-illustration.png"
          alt="Signup Illustration"
          width={400}
          height={250}
          priority
        />
      </div>

      {/* RIGHT SIDE */}
      <div
        className="flex-1 flex flex-col justify-center items-center bg-gray-50 px-6 md:px-16 py-8 relative w-full"
        style={{ fontFamily: "var(--font-sfpro)" }}
      >
        {/* ✅ Show logo on small screens */}
        <div className="absolute top-6 left-6 md:hidden">
          <Image src="/logo.png" alt="ILIOS Logo" width={50} height={50} />
        </div>

        {/* ✅ New welcoming header (only visible on small screens) */}
        <h1 className="block md:hidden text-3xl font-extrabold text-blue-900 mb-8 text-center mt-20">
          Welcome to Illios
        </h1>
        <p className="block md:hidden text-gray-400 text-base text-center mb-8">
          Create your account to start managing your healthcare procurement.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4 bg-transparent md:mt-0"
        >
          {/* ✅ Changed h1 → p */}
          <p className="text-xl font-semibold text-gray-700 mb-6">
            Create an Account (Buyer)
          </p>

          <div>
            <label className="block text-sm font-medium mb-1">
              Company Name:
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Company Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="@company"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="+2348077777777"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Registration Number:
            </label>
            <input
              type="text"
              name="regNumber"
              value={formData.regNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="123456789"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Create Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <ul className="text-xs text-gray-500 mt-2 list-disc pl-5 space-y-1">
              <li>Must be 8 characters</li>
              <li>Must contain at least 1 Capital letter</li>
              <li>Must contain at least 1 Number</li>
            </ul>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium shadow-md transition"
          >
            Sign Up
          </button>

          <p className="text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
