import Clamp from "@/pages/clamp";
import Link from "next/link";
import React from "react";
import { CiClock2 } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { SlPhone } from "react-icons/sl";
import { TbMessageDots } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div
        className="bg-gray-100 flex flex-col xl:flex-row py-[50px] gap-10"
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-[24px] font-medium">Contact Us</h1>
          <ul className="flex flex-col gap-4 pt-[30px]">
            <li className="flex items-center gap-3">
              <IoHomeOutline size={20} />
              <p className="w-[70%]">
                3500 Brock St N, Unit # 7, Whitby ON L1R 3J4
              </p>
            </li>
            <li className="flex items-start gap-3">
              <SlPhone size={20} />
              <h4>+1 905 430 7774</h4>
            </li>
            <li className="flex items-start gap-3">
              <TbMessageDots size={20} />
              <h4>info@eclatmedical.ca</h4>
            </li>
            <li className="flex items-start gap-3">
              <CiClock2 size={20} />
              <h4>8 AM - 6 PM : Mon - Sat</h4>
            </li>
          </ul>
        </div>
        <div className="flex flex-col pr-[80px]">
          <h1 className="text-[24px] font-medium">Our Services</h1>
          <ul className="flex flex-col gap-4 pt-[30px] ">
            <li className="text-black hover:text-blue-500 duration-500">
              <Link href="/family-walk-in">Family & Walk In</Link>
            </li>
            <li className="text-black hover:text-blue-500 duration-500">
              <Link href="/our-pharmacy">Our Pharmacy</Link>
            </li>
            <li className="text-black hover:text-blue-500 duration-500">
              <Link href="/our-team">Our Team</Link>
            </li>
            <li className="text-black hover:text-blue-500 duration-500">
              <Link href="/blogs">Blog</Link>
            </li>
            <li className="text-black hover:text-blue-500 duration-500">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[24px] font-medium">Information</h1>
          <ul className="flex flex-col gap-4 pt-[30px]">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Testimonials</li>
          </ul>
        </div>
      </div>
      <div className="text-white bg-[#1e838f] py-[30px] px-4">
        <h1 className="text-center">
          Copyright&copy; 2024 Eclat Medical Centre. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
