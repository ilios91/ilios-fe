'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: 'ABOUT US', href: '#about' },
  { label: 'OUR SERVICES', href: '#services' },
  { label: 'CONSTACT US', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full px-6 md:px-12 py-4 shadow-sm bg-white fixed z-50 backdrop-blur-md border-b border-gray-200/20 transition-all duration-300"
    style={{ fontFamily: "var(--font-sfpro)" }}>
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

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#get-started"
            className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`md:hidden border-t border-gray-200/20 bg-white/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col space-y-1 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 text-center"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="#get-started"
            className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}
