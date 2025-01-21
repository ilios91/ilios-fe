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
    <nav className={`${styles.navbar} h-[90px] bg-white w-full fixed top-0 z-1`}>
      <div className="w-[90%] mx-auto flex justify-between items-center h-full">
        <div>
          <Link href="/" className="flex items-center justify-center relative w-[72px] h-[78px]">
            <Image fill={true} src={Logo} alt="Ilios" />
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
          <button className="w-44 h-16 rounded-lg bg-blue-normal font-bold text-[18px] text-white leading-7">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
