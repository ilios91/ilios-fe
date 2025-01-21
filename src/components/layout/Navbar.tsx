'use client';

import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import Image from "next/image";
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`${styles.navbar} h-[122px] bg-white w-full`}>
      <div className="w-[90%] mx-auto flex justify-between items-center h-full">
        <div>
          <Link href="/" className="flex items-center justify-center relative w-24 h-24">
            <Image fill={true} src={Logo} alt="Ilios" className="h-[40px] w-[40px] mx-auto"/>
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center justify-center gap-x-12">
            <li className="cursor-pointer text-main-black font-bold text-base" onClick={() => scrollToSection("about")}> About us </li>
            <li className="cursor-pointer text-main-black font-bold text-base" onClick={() => scrollToSection("about")}> Our Services </li>
            <li className="cursor-pointer text-main-black font-bold text-base" onClick={() => scrollToSection("about")}> Contact us </li>
          </ul>
        </div>
        <div>
          <button>Get Started</button>
        </div>
      </div>
    </nav>
  );
}
