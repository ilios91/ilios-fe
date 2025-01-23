"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import { useState } from "react";

const links = [
  { id: "about", label: "About us" },
  { id: "services", label: "Our Services" },
  { id: "contact", label: "Contact us" }
]

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={`fixed h-[90px] w-[100vw] md:w-full top-0 z-50 bg-white`}>
      <div className="relative w-[90%] mx-auto flex justify-between items-center h-full">

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
              <svg className="size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
            ) : (
              <svg className="size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
              </svg>
            )}
          </button>
        </div>

         {/* Links - Mobile Slide-in Menu */}
        <nav 
          className={
            `mt-[90px] fixed top-0 left-0 w-[70%] h-full bg-white transform transition-transform duration-1000 ease-in-out 
              md:-mt-[90px] md:static md:w-auto md:h-auto md:block ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`
            }
          >
          <div className="flex flex-col md:flex-row items-start md:items-center h-full pl-8 md:mt-[90px] pt-4 md:pt-0 md:pl-0">
            <ul className="flex flex-col gap-y-6 md:flex-row md:gap-y-0 md:gap-x-12">
              { links.map((link) => (
                <li 
                  key={link.id} 
                  className="cursor-pointer text-main-black font-bold text-sm md:text-base" 
                  onClick={() => scrollToSection(link.id)}
                  >{link.label}
                </li>
                ))}
            </ul>

            {/* Mobile Get started menu */}
            <div className="mt-6 md:hidden">
              <button className=" text-white w-36 h-12 rounded-md bg-blue-normal font-bold text-sm md:text-[18px]  md:w-44 md:h-16 md:rounded-lg  leading-7"> Get Started </button>
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
    </header>
  );
}
