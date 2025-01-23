"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-[90px] w-[100vw] md:w-full fixed top-0 z-50 bg-white">
      <div className="w-[90%] mx-auto flex flex-wrap justify-between items-center h-full relative">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center justify-center relative w-[72px] h-[78px]">
            <Image fill={true} src={Logo} alt="Ilios" />
          </Link>
        </div>

        {/* Toggle Menu (Mobile) */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="z-50 relative">
            {!isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
              </svg>
            )}
          </button>
        </div>

        {/* Links - Mobile Slide-in Menu */}
        <nav className={`fixed top-0 left-0 w-[70%] h-full bg-white  transform transition-transform duration-300 ease-in-out md:static md:w-auto md:h-auto md:block ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="flex flex-col md:flex-row items-start md:items-center h-full pt-[120px] md:pt-0 pl-8 md:pl-0">
            <ul className="flex flex-col md:flex-row items-start md:items-center justify-center gap-y-6 md:gap-x-12">
              {[
                { id: "about", label: "About us" },
                { id: "services", label: "Our Services" },
                { id: "contact", label: "Contact us" }
              ].map((link) => (
                <li 
                  key={link.id}
                  className="cursor-pointer text-main-black font-bold text-base" 
                  onClick={() => scrollToSection(link.id)}
                > 
                  {link.label} 
                </li>
              ))}
            </ul>

            {/* Mobile Get Started Button */}
            <div className="mt-6 md:hidden">
              <button className="w-44 h-16 rounded-lg bg-blue-normal font-bold text-[18px] text-white leading-7">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Desktop Get Started Button */}
        <div className="hidden md:block">
          <button className="w-44 h-16 rounded-lg bg-blue-normal font-bold text-[18px] text-white leading-7">
            Get Started
          </button>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 md:hidden z-40" 
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}