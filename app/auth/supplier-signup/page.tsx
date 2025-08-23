"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SupplierSignupPage() {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    address: "",
    certification: null as File | null,
    supplyType: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "certification" && files) {
      setFormData({ ...formData, certification: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Supplier form submitted:", formData);
    // TODO: Send to backend API (e.g., POST /api/signup/supplier)
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
          <Image src="/logo1.png" alt="ILIOS Logo" width={40} height={40} />
        </div>
        </Link>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Join Illios as a Supplier
        </h2>
        <p className="text-lg text-center mb-6">
            Fill out the form to create your supplier account and start supplying
            healthcare products.
        </p>
        <Image
          src="/signup-illustration.png"
          alt="Signup Illustration"
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

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4 bg-transparent mt-20 md:mt-0"
        >
          <h1 className="text-2xl font-bold text-gray-700 mb-6">
            Create an Account (Supplier)
          </h1>

          {/* COMPANY NAME */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Supplier Name:
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="Sagarpharm"
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="business@Sagarpharm.com"
              required
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="+2348012345678"
              required
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Supplier Address:
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="123 Main St, Lagos"
              required
            />
          </div>

          {/* SUPPLY TYPE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Supply Type:
            </label>
            <select
              name="supplyType"
              value={formData.supplyType}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-blue-600 outline-none"
              required
            >
              <option value="">Select a type</option>
              <option value="Pharmaceuticals">Pharmaceuticals</option>
              <option value="Consumables">Consumables</option>
              <option value="Blood">Blood</option>
              <option value="Equipment">Equipment</option>
            </select>
          </div>

          {/* CERTIFICATION UPLOAD */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Certification:
            </label>
            <input
              type="file"
              name="certification"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={handleChange}
              className="w-full text-sm text-gray-600 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 
                         file:rounded-md file:border-0 file:text-sm file:font-semibold
                         file:bg-blue-50 file:text-blue-700
                         hover:file:bg-blue-100 cursor-pointer"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Create Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
              required
            />
            <ul className="text-xs text-gray-500 mt-2 list-disc pl-5 space-y-1">
              <li>Must be 8 characters</li>
              <li>Must contain at least 1 Capital letter</li>
              <li>Must contain at least 1 Number</li>
            </ul>
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-md font-medium shadow-md transition"
          >
            Sign Up
          </button>

          {/* SIGN IN LINK */}
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
