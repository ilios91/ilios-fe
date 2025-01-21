import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} h-[122px] bg-white w-full`}>
      <div className="w-[90%] mx-auto flex justify-between items-center h-full">
        <div>
          <Link href="/" className="block">
            <Image
              src="/logo.svg"
              alt="Ilios"
              className="h-[40px] w-[40px] mx-auto"
            />
          </Link>
        </div>
        <div></div>
      </div>
    </nav>
  );
}
