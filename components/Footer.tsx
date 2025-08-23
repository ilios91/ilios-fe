"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-12"
      style={{ fontFamily: "var(--font-sfpro)" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-4"
          >
            <Image
              src="/logo1.png" // ✅ replace with your actual logo path
              alt="ILIOS Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-white text-2xl font-bold">ILIOS</span>
          </motion.div>
          <p className="text-gray-400 text-sm">
            A trusted digital healthcare marketplace connecting suppliers and providers.
            Making procurement seamless, transparent, and efficient.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/marketplace" className="hover:text-blue-400 transition">
                Marketplace
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/faq" className="hover:text-blue-400 transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/auth/signup" className="hover:text-blue-400 transition">
                Supplier Signup
              </Link>
            </li>
            <li>
              <Link href="/auth/signup" className="hover:text-blue-400 transition">
                Buyer Signup
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-400 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
          <p className="text-sm text-gray-400 mb-3">
            Lagos, Nigeria <br /> info@ilios.com <br /> +234 800 000 0000
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ILIOS. All rights reserved.
      </div>
    </footer>
  );
}
