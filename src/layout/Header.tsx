import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <div
      className={`bg-[#41515d] fixed w-full px-[250px] text-white bg-opacity-80 z-[99999] transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-[130px]">
          <img
            src="/images/logo.jpg"
            alt="header logo"
            className="w-[100px] h-[120px] object-cover"
          />
          <ul className="flex gap-7">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/family-walk-in">Family & Walk In</Link>
            </li>
            <li>
              <Link href="/our-pharmacy">Our Pharmacy</Link>
            </li>
            <li>
              <Link href="/our-team">Our Team</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <button className="bg-[#019ae3] px-[20px] py-[8px] rounded-[3px]">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
