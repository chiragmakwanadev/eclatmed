import React from "react";

const Data = [
  {
    image: "/images/team1.jpg",
    name: "Dr. Michelle Lester",
  },
  {
    image: "/images/team2.jpg",
    name: "Dr. Dakota Ken",
  },
  {
    image: "/images/team3.jpg",
    name: "Dr. Mike Ross",
  },
];

const Team = () => {
  return (
    <div className="px-[250px]">
      <h1 className="text-center text-[40px] font-medium">
        <span className="text-[#019ae3]">O</span>ur Team
      </h1>
      <h4 className="text-center text-gray-400 pb-[50px]">
        Always at your service
      </h4>
      <div className="flex justify-between w-full">
        {Data.map((data, index) => (
          <div
            key={index}
            className="w-[30%] bg-gray-100 flex flex-col justify-end rounded-2xl overflow-hidden p-5"
          >
            <h1 className="py-[20px] text-[18px]">{data.name}</h1>
            <img
              src={data.image}
              alt=""
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
