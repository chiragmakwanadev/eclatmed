import React from "react";
import Link from "next/link";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 max-w-[350px] w-full h-full bg-white transition-opacity duration-300 z-[99999] ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-start justify-start h-full pt-[100px] pl-[40px]">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">
          Close
        </button>
        <ul className="flex flex-col items-start space-y-6 text-xl">
          <li>
            <Link href="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/family-walk-in" onClick={onClose}>
              Family & Walk In
            </Link>
          </li>
          <li>
            <Link href="/our-pharmacy" onClick={onClose}>
              Our Pharmacy
            </Link>
          </li>
          <li>
            <Link href="/our-team" onClick={onClose}>
              Our Team
            </Link>
          </li>
          <li>
            <Link href="/blogs" onClick={onClose}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={onClose}>
              Contact Us
            </Link>
          </li>
        </ul>
        <button className="bg-[#019ae3] px-[20px] py-[8px] rounded-[3px] mt-[50px] text-white">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
