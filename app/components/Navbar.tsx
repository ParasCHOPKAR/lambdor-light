"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/", active: true },
    { name: "ABOUT US", href: "/about" },
    { name: "PRODUCTS", href: "/products" },
    { name: "TENDERS", href: "/tenders" },
    { name: "PAST PROJECTS", href: "/past-projects" },
    { name: "CERTIFICATES", href: "/certificates" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 flex flex-col shadow-sm">
      {/* Dark Top Bar */}
      <div className="bg-[#16202c] w-full py-1.5 px-4 md:px-8 flex justify-end items-center gap-4">
        <button aria-label="Search" className="text-gray-400 hover:text-white transition-colors outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors outline-none">
           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </a>
        <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
        </a>
      </div>

      {/* Main White Navbar */}
      <nav className="bg-white w-full px-4 md:px-8 py-3 flex justify-between items-center relative">
        
        {/* 🔥 NEW LOGO SECTION (Wide & Horizontal, No HTML Text) */}
        <Link href="/" className="flex items-center outline-none">
          {/* We make the container wide (w-64) so your horizontal image fits beautifully */}
          <div className="relative w-48 h-12 md:w-64 md:h-14 lg:w-[280px] lg:h-[60px]">
            <Image 
              src="/logo-01.jfif" 
              alt="Lambodar Lightcrafters India" 
              fill
              sizes="(max-width: 768px) 192px, 280px"
              className="object-contain object-left"
              priority 
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[0.8rem] font-bold tracking-wide transition-colors outline-none ${
                link.active
                  ? "text-[#c25a1a] border-b-2 border-[#c25a1a] pb-1"
                  : "text-gray-800 hover:text-[#c25a1a]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Get a Quote Button (Desktop) */}
        <div className="hidden xl:block">
          <Link
            href="/quote"
            className="bg-[#16202c] text-white px-6 py-2.5 text-[0.8rem] font-bold rounded-md hover:bg-[#202e3f] transition-colors uppercase tracking-wider outline-none"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="xl:hidden text-gray-900 outline-none p-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col py-4 xl:hidden z-40">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-6 py-3 text-sm font-bold tracking-wide outline-none ${
                  link.active ? "text-[#c25a1a] bg-orange-50" : "text-gray-800 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 mt-4">
              <Link
                href="/quote"
                className="flex justify-center w-full bg-[#16202c] text-white px-6 py-3 text-sm font-bold rounded-md hover:bg-[#202e3f] transition-colors uppercase tracking-wider outline-none"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}