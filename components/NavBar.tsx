"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about-us" },
  { label: "MARKETPLACE", href: "#marketplace" },
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <header
         className="w-full px-6 py-4 shadow-sm bg-white fixed top-0 left-0 right-0 z-50 border-b border-gray-200/20 will-change-transform"
         style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative group">
            <div className="relative h-10 w-10">
              <Image
                src="/logo.png"
                alt="Ilios Logo"
                width={40}
                height={40}
                className="rounded-lg object-cover"
              />
            </div>
            <span className="font-bold text-xl bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent">
              ILIOS
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-10 text-sm font-semibold text-gray-800">
            {navItems.map((item) => (
              <li key={item.href} className="relative group">
                <a
                  href={item.href}
                  className="transition-colors hover:text-blue-600"
                >
                  {item.label}
                </a>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Right Side (Desktop): CTA + Cart */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/cart"
              className="relative flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="text-blue-600" size={22} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5">
                  {cart.length}
                </span>
              )}
            </Link>
            <Link
              href="/role-selection"
              className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
          </div>

          {/* Mobile Right Side */}
          <div className="md:hidden flex items-center gap-4">
            <Link
              href="/cart"
              className="relative flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="text-blue-600" size={22} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5">
                  {cart.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Spacer */}
      <div className="h-20" />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <span className="font-bold text-lg text-gray-800">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-1 px-4 py-4 bg-white">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/role-selection"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
