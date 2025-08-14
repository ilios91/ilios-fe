"use client";

import Image from "next/image";
import { JSX } from "react";
import { motion } from "framer-motion";

export default function HeroSection(): JSX.Element {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden pt-28 sm:pt-32"
      style={{ fontFamily: "var(--font-sfpro)" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Delivery background"
          fill
          priority
          className="object-cover scale-105 animate-slow-zoom"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full blur-2xl animate-float" />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
        >
          Simplifying{" "}
          <span className="text-blue-400">Healthcare Procurement</span> for
          Facilities and Suppliers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-200 mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
        >
          Find reliable suppliers, place orders, and ensure delivery with trusted
          logistics partners.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <button className="group relative inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded-full z-0" />
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              Let&apos;s Begin
            </span>
          </button>
        </motion.div>
      </div>

      {/* Tailwind animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes slow-zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
