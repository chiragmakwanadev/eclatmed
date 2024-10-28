import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[50px]">
      <h1 className="text-[36px] text-center font-bold py-[50px]">
        Welcome To Eclat Medical Centre
      </h1>
      <div className="bg-gray-50 py-[50px] px-[80px] flex flex-col rounded-2xl mx-[250px]">
        <div className="flex flex-col gap-5 pb-10">
          <h1 className="text-[40px] font-semibold">
            <span className="text-[#019ae3]">About</span> Us
          </h1>
          <p className="text-[18px]">
            At Eclat Medical Center, we are driven by a singular vision: to
            provide outstanding medical care that not only treats but truly
            enriches the lives of our patients. Our center stands as a beacon of
            hope and health, committed to the highest standards of medical
            excellence across a wide range of specialties. With a team of
            distinguished physicians who bring decades of experience and empathy
            to their practice, we ensure that each visit is not just about
            healing but about experiencing compassionate care in a nurturing
            environment.
          </p>
        </div>
        <div className="flex flex-col gap-5 pb-10">
          <h1 className="text-[40px] font-semibold">
            Our <span className="text-[#019ae3]">Mission</span>
          </h1>
          <p className="text-[18px]">
            Our mission is simple yet profound—to enhance the well-being of our
            community through dedicated service, innovative practices, and a
            compassionate approach to healthcare. Whether you are seeking
            preventive care, specialized treatment, or emergency services, at
            Eclat Medical Center, you are always in caring hands. Join us as we
            redefine what it means to care in the modern medical landscape, one
            patient at a time.
          </p>
        </div>
        <div className="flex flex-col gap-5 pb-10">
          <h1 className="text-[40px] font-semibold">
            Contact <span className="text-[#019ae3]">Us</span>
          </h1>
          <div className="text-white flex gap-5">
            <button className="bg-[#019ae3] px-[20px] py-[8px] rounded-[3px] flex items-center justify-center gap-3">
              <IoCall />
              Call us +123 456 789
            </button>
            <button className="bg-[#019ae3] px-[20px] py-[8px] rounded-[3px] flex items-center justify-center gap-3">
              <FaCalendarAlt />
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;