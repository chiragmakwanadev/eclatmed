import Clamp from "@/pages/clamp";
import React from "react";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { TbMessageDots } from "react-icons/tb";
import Image from "next/image";

const imageData = [
  { image: "/images/service1.jpg", text: "Service 1" },
  { image: "/images/service2.jpg", text: "Service 2" },
  { image: "/images/service3.jpg", text: "Service 3" },
  { image: "/images/service4.jpg", text: "Service 4" },
  { image: "/images/service5.jpg", text: "Service 5" },
  { image: "/images/service6.jpg", text: "Service 6" },
  { image: "/images/service7.jpg", text: "Service 7" },
  { image: "/images/service8.jpg", text: "Service 8" },
];

const visitData = [
  {
    icon: <CiClock2 />,
    title: "Mon to Fri: 8:30 - 19:00",
    title2: "Sat: 9:00 - 19:00",
    title3: "Sun: 9:00 - 18:00",
  },
  {
    icon: <CiLocationOn />,
    title: "3500 Brock St N, Unit # 7,",
    title2: "Whitby ON L1R 3J4",
  },
  { icon: <SlPhone />, title: "+1 905 430 7774" },
  { icon: <TbMessageDots />, title: "info@eclatmedical.ca" },
];

const Service = () => {
  return (
    <>
      <div className="flex flex-col py-[50px]">
        <h1 className="text-center text-[40px] font-medium">
          <span className="text-[#019ae3]">O</span>ur Services
        </h1>
        <h4 className="text-center text-gray-400 pb-[50px]">
          Visit our medical centre
        </h4>
        <div
          className="flex flex-wrap justify-center xl:justify-between gap-8 items-center"
          style={{
            paddingLeft: Clamp(1.25, 15.62),
            paddingRight: Clamp(1.25, 15.62),
          }}
        >
          {imageData.map((data, index) => (
            <div
              key={index}
              className="relative group w-[100%] xl:w-[23%] h-[270px] overflow-hidden"
            >
              <Image
                src={data.image}
                alt="eclat-banner"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={500}
                height={270}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  {data.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="py-[50px] flex flex-col xl:flex-row"
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        <Image
          src="/images/service-img.png"
          alt="eclat-banner"
          className="w-full xl:w-[40%] object-cover"
          width={600}
          height={600}
        />
        <div className="w-full xl:w-[70%] bg-gray-100 flex flex-col md:flex-row flex-wrap">
          {visitData.map((data, index) => (
            <div
              key={index}
              className="p-[30px] w-full md:w-[48%] flex gap-5 items-start justify-center pt-[60px]"
            >
              <span className="text-[36px]">{data.icon}</span>
              <span>
                <h1>{data?.title}</h1>
                <h1>{data?.title2}</h1>
                <h1>{data?.title3}</h1>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
