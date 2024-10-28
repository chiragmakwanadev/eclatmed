import HamburgerMenu from "@/components/Hamburger";
import Clamp from "@/pages/clamp";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false); // Hide header when scrolling down
    } else {
      setShowHeader(true); // Show header when scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }
  };

  return (
    <>
      <div
        className={`bg-[#41515d] fixed w-full px-[20px] md:px-[100px] xl:px-[250px] text-white bg-opacity-80 z-[99999] transition-transform duration-500 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-[130px]">
            <img
              src="/images/logo.jpg"
              alt="header logo"
              className="w-[100px] h-[120px] object-cover"
            />
            <ul className="hidden gap-7 xl:flex">
              <li className="relative group">
                <Link href="/" className="relative inline-block">
                  Home
                </Link>
                <span className="absolute left-0 bottom-0 h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <Link href="/family-walk-in" className="relative inline-block">
                  Family & Walk In
                </Link>
                <span className="absolute left-0 bottom-0 h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <Link href="/our-pharmacy" className="relative inline-block">
                  Our Pharmacy
                </Link>
                <span className="absolute left-0 bottom-0 h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <Link href="/our-team" className="relative inline-block">
                  Our Team
                </Link>
                <span className="absolute left-0 bottom-0 h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <Link href="/blogs" className="relative inline-block">
                  Blog
                </Link>
                <span className="absolute left-0 bottom-0 h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <Link href="/contact" className="relative inline-block">
                  Contact Us
                </Link>
                <span className="absolute left-0 bottom-0 h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
          <button className="bg-[#019ae3] px-[20px] py-[8px] rounded-[3px] hidden xl:block">
            Book Appointment
          </button>
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1 xl:hidden"
          >
            <span className="h-[2px] bg-white w-[30px]"></span>
            <span className="h-[2px] bg-white w-[30px]"></span>
            <span className="h-[2px] bg-white w-[30px]"></span>
          </button>
        </div>
      </div>
      <HamburgerMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Header;
