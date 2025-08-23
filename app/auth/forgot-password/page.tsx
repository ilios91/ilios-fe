"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forgot password email submitted:", email);
    // TODO: call backend API (e.g., POST /api/auth/forgot-password)
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div
        className="hidden md:flex flex-col justify-center items-center w-1/2 bg-blue-500 text-white relative"
        style={{ fontFamily: "var(--font-sfpro)" }}
      >
        <Link href="/">
        <div className="absolute top-6 left-6">
          <Image src="/logo1.png" alt="ILIOS Logo" width={40} height={40}/>
        </div>
        </Link>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 mt-20">
          Reset Your Password
        </h2>
        <p className="text-lg text-center mb-6">
          Enter your email and we’ll send you a link to reset your password.
        </p>
        <Image
          src="/signup-illustration.png"
          alt="Forgot password Illustration"
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
        <Link href="/">
        <div className="absolute top-6 left-6 md:hidden">
          <Image src="/logo.png" alt="ILIOS Logo" width={40} height={40} />
        </div>
        </Link>

        {/* WELCOME MESSAGE (Small screens only) */}
        <div className="md:hidden text-center mt-20 mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-2">
            Reset Your Password
          </h2>
          <p className="text-gray-400 text-base">
            Enter your email and we’ll send you a reset link.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6 bg-transparent"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Forgot Password
          </h1>

          {/* EMAIL FIELD */}
          <div>
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="your@email.com"
              required
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-md font-medium shadow-md transition"
          >
            Send Reset Link
          </button>

          {/* BACK TO SIGN IN */}
          <p className="text-sm text-gray-600 text-center">
            Remember your password?{" "}
            <Link href="/auth/signin" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
