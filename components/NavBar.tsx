"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/NiwasIcon.png";

const NavBar = () => {
  const [navDark, setNavDark] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const lightsections = ["white-section-1", "white-section-2", "FAQSEC"];
    const elements = lightsections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((entry) => entry.isIntersecting);
        setNavDark(anyVisible);
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-md">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex items-start shrink-0 gap-2">
              <Image
                src={logo}
                width={100}
                alt="niwas.ai"
                className="object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <Link
                href="/"
                className={`px-5 text-xl ${
                  navDark ? "text-black" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                className={`text-xl ${
                  navDark ? "text-black" : "text-white"
                }`}
              >
                About Us
              </Link>
            </div>

            {/* ✅ DOWNLOAD BUTTON — UNCHANGED */}
            <div className="hidden md:block">
              <a
                href="#"
                className="px-4 py-2 ml-8 text-sm font-medium text-white bg-[#ffc946] rounded-md hover:bg-yellow-500"
              >
                Download Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`md:hidden text-3xl ${
                navDark ? "text-black" : "text-white"
              }`}
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE BACKDROP + MENU */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-20 right-4 max-w-[133px] rounded-lg bg-[#31445c] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-white border-b border-gray-600"
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-white"
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
