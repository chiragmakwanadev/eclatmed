import Clamp from "@/pages/clamp";
import React from "react";

const Data = [
  {
    image: "/images/team1.jpg",
    name: "Dr. Customers",
  },
  {
    image: "/images/team2.jpg",
    name: "Dr. Dharab Rani",
  },
  {
    image: "/images/team3.jpg",
    name: "Dr. Ali khanna",
  },
];

const Team = () => {
  return (
    <div
      style={{
        paddingLeft: Clamp(1.25, 15.62),
        paddingRight: Clamp(1.25, 15.62),
      }}
    >
      <h1 className="text-center text-[40px] font-medium">
        <span className="text-[#019ae3]">O</span>ur Team
      </h1>
      <h4 className="text-center text-gray-400 pb-[50px]">
        Always at your service
      </h4>
      <div className="flex flex-wrap justify-between w-full gap-4">
        {Data.map((data, index) => (
          <div
            key={index}
            className="w-full md:w-[30%] bg-gray-100 flex flex-col gap-4 justify-end rounded-2xl overflow-hidden p-5"
          >
            <h1 className="py-[20px] text-[18px]">{data.name}</h1>
            <img
              src={data.image}
              alt="eclat-team"
              className="w-full h-[250px] md:h-[400px] object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
