"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in form submitted:", formData);
    // TODO: call backend API (e.g., POST /api/auth/signin)
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div
        className="hidden md:flex flex-col justify-center items-center w-1/2 bg-blue-500 text-white relative"
        style={{ fontFamily: "var(--font-sfpro)" }}
      >
        <div className="absolute top-6 left-6">
          <Image src="/logo1.png" alt="ILIOS Logo" width={40} height={40} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 mt-20">
          Welcome Back to Illios
        </h2>
        <p className="text-lg text-center mb-6">
          Log in to your account to continue managing your healthcare procurement.
        </p>
        <Image
          src="/signup-illustration.png"
          alt="Sign in Illustration"
          width={400}
          height={300}
          priority
        />
      </div>

      {/* RIGHT SIDE */}
      <div
        className="flex-1 flex flex-col justify-center items-center bg-gray-50 px-6 md:px-16 py-8 relative"
        style={{ fontFamily: "var(--font-sfpro)" }}
      >
        {/* LOGO (Visible only on small screens) */}
        <div className="absolute top-6 left-6 md:hidden">
          <Image src="/logo.png" alt="ILIOS Logo" width={40} height={40} />
        </div>

        {/* WELCOME MESSAGE (Visible only on small screens) */}
        <div className="md:hidden text-center mt-20 mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            Welcome Back to Illios
          </h2>
          <p className="text-gray-400 text-base">
            Log in to your account to continue managing your healthcare procurement.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6 bg-transparent"
        >
          <h1 className="text-2xl font-bold text-gray-600 mb-6">Sign In</h1>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium mb-1">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* REMEMBER ME + FORGOT PASSWORD */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>Remember me</span>
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-md font-medium shadow-md transition"
          >
            Sign In
          </button>

          {/* SIGN UP LINK */}
          <p className="text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <Link href="/role-selection" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
