import React, { useState, useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import Clamp from "@/pages/clamp";
import Link from "next/link";

const LandingData = [
  {
    id: 1,
    image: "/images/landing1.png",
    header: "Entrust your Health With",
    title: "Eclat Medical Center",
  },
  {
    id: 2,
    image: "/images/landing2.png",
    header: "Eclat Medical Center",
    title: "Your Path To Brilliant Healthcare",
  },
  {
    id: 3,
    image: "/images/landing3.jpg",
    header: "Ease Access - Medicines",
    title: "Consult Our Pharmacists",
  },
];

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === LandingData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    setIntervalId(id);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (intervalId) {
      clearInterval(intervalId);
    }
    startInterval();
  };

  useEffect(() => {
    AOS.refreshHard();
  }, [currentIndex]);

  return (
    <div className="relative z-10">
      <div className="w-full h-[60vh] xl:h-[94vh] relative">
        <Image
          src={LandingData[currentIndex].image}
          alt="Eclat Medical Center"
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500"
          priority
        />
      </div>
      <div className="absolute top-[40%] left-[10%] md:left-[20%] text-white">
        <h4
          className="text-[32px]"
          data-aos="fade-down"
          data-aos-duration="800"
          style={{ fontSize: Clamp(1, 2) }}
        >
          {LandingData[currentIndex].header}
        </h4>
        <h1
          className="text-[56px] font-bold leading-[60px]"
          data-aos="zoom-in"
          data-aos-duration="600"
          style={{ fontSize: Clamp(1.25, 3.5) }}
        >
          {LandingData[currentIndex].title.split(" ").slice(0, 2).join(" ")}
          <br />
          {LandingData[currentIndex].title.split(" ").slice(2).join(" ")}
        </h1>
        <Link href="https://ocean.cognisantmd.com/intake/patients.html?linkRef=8cdddf08-bb45-4be8-906d-8bc5bb0cd4e2#/online-booking">
          <button
            className="bg-[#019ae3] px-[40px] py-[20px] rounded-sm font-medium mt-[40px]"
            data-aos="fade-left"
            data-aos-duration="600"
            style={{
              paddingLeft: Clamp(1.25, 2.5),
              paddingRight: Clamp(1.25, 2.5),
              paddingTop: Clamp(1, 1.25),
              paddingBottom: Clamp(1, 1.25),
              fontSize: Clamp(0.75, 1),
            }}
          >
            MAKE AN APPOINTMENT
          </button>
        </Link>
      </div>
      <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {LandingData.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#019ae3]" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
