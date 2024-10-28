import Clamp from "@/pages/clamp";
import React from "react";

export const blogsData = [
  {
    title: "Essential Health Tips for Every Season: Top 5 Must-Knows",
    author: "adeogunolamide",
    date: "25th June",
    category: "Seasonal Health",
    description:
      "Practical health advice for staying well through all seasons, addressing allergies, hydration, immune health, and more.",
    tags: ["health tips", "seasonal health", "wellness"],
    image: "/images/blog1.jpg",
  },
  {
    title: "Top Foods to Boost Immunity Throughout the Year",
    author: "healthguru",
    date: "21st Nov",
    category: "Nutrition",
    description:
      "A guide to immunity-boosting foods for each season, including essential vitamins and minerals for optimal health.",
    tags: ["nutrition", "immune health", "seasonal health"],
    image: "/images/blog2.jpg",
  },
  {
    title: "Hydration Hacks: How to Stay Hydrated in Any Season",
    author: "wellnessblog",
    date: "12th Jan",
    category: "Hydration",
    description:
      "Learn easy ways to stay hydrated during hot summers and dry winters, keeping energy and focus up all year long.",
    tags: ["hydration", "health tips", "seasonal health"],
    image: "/images/blog3.jpg",
  },
  //   {
  //     title: "Winter Wellness: Preventing Cold and Flu Naturally",
  //     author: "medico101",
  //     date: "18th Jan",
  //     category: "Seasonal Health",
  //     description:
  //       "Natural remedies and practices to prevent common winter illnesses, from nutrition tips to hygiene habits.",
  //     tags: ["cold and flu", "winter health", "immunity"],
  //     image: "/images/blog4.jpg",
  //   },
  //   {
  //     title: "Spring Allergy Survival Guide: Tips to Breathe Easy",
  //     author: "naturecare",
  //     date: "31st Mar",
  //     category: "Allergies",
  //     description:
  //       "Comprehensive tips on managing spring allergies, including home care and natural treatments for respiratory relief.",
  //     tags: ["allergies", "respiratory health", "seasonal health"],
  //     image: "/images/blog5.jpg",
  //   },
];

const Blogs = () => {
  return (
    <div
      className="py-[80px] bg-gray-100 my-[50px]"
      style={{
        paddingLeft: Clamp(1.25, 15.62),
        paddingRight: Clamp(1.25, 15.62),
      }}
    >
      <h1 className="text-center text-[40px] font-medium">
        <span className="text-[#019ae3]">A</span>dd To{" "}
        <span className="text-[#019ae3]">O</span>ur{" "}
        <span className="text-[#019ae3]">Bl</span>og
      </h1>
      <div className="flex flex-col xl:flex-row gap-5 pt-[50px]">
        {blogsData.map((data, index) => (
          <div key={index} className="bg-white p-5 rounded-xl relative">
            <img src={data.image} alt="" className="w-full object-cover " />
            <h1 className="text-[14px] bg-white p-2 absolute top-[30px] z-[9999]">
              {data.date}
            </h1>
            <h1 className="text-[20px] font-medium py-4">{data.title}</h1>
            <p>{data.description}</p>
            <button className="mt-[20px] bg-[#019ae3] px-[20px] py-[8px] rounded-[3px] text-white">
              Read More...
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
