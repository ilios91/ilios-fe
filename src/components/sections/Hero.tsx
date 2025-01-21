import Image from "next/image";
import HeroImage from "@/assets/images/hero.svg";
import styles from "@/components/styles/hero.module.scss";

export default function Hero() {
  return (
    <section
      className={`${styles.hero} h-[866px] relative top-[90px] max-w-screen`}>
      <div className="h-[86px]">
        <Image
          fill={true}
          src={HeroImage}
          alt="hero"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
