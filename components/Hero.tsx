"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-16 md:pb-32 bg-gradient-to-b from-white to-blue-50"
      style={{ fontFamily: "var(--font-sfpro)" }}
    >
      {/* Background subtle graphic */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 px-6 md:px-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-4 sm:space-y-6 md:space-y-8 py-6 md:py-0"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug">
            Simplifying{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Healthcare Procurement
            </span>{" "}
            for Facilities & Suppliers
          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed px-2 sm:px-0">
            ILIOS connects healthcare providers with trusted suppliers, enabling
            seamless procurement, transparent pricing, and reliable delivery.
          </p>

          {/* CTA buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link
              href="/role-selection"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105"
            >
              Get Started
            </Link>

            <a
              href="#how"
              className="rounded-full border border-blue-600 px-6 py-3 text-sm sm:text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex-1 relative w-full max-w-md md:max-w-lg"
        >
          <div className="relative w-full h-[260px] sm:h-[380px] md:h-[460px] lg:h-[500px]">
            <Image
              src="/ILIOS.png"
              alt="Healthcare procurement illustration"
              fill
              priority
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
