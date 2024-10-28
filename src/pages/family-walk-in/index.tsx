import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import Clamp from "../clamp";

const Data = [
  {
    FamilyPractice: {
      title: "Family Practice Services",
      description:
        "Our Family Practice is dedicated to preventive care, chronic disease management, acute care, wellness checks, and mental health support.",
      services: [
        {
          name: "Preventive Care",
          details:
            "Including routine health screenings, immunizations, cancer screenings, and lifestyle counseling.",
        },
        {
          name: "Chronic Disease Management",
          details:
            "Specialized care for conditions like diabetes, hypertension, asthma, and arthritis.",
        },
        {
          name: "Acute Care",
          details:
            "For non-life-threatening conditions like infections, minor injuries, and respiratory illnesses.",
        },
        {
          name: "Wellness Checks",
          details:
            "Comprehensive exams and preventive screenings to maintain health and identify potential issues early.",
        },
        {
          name: "Mental Health Support",
          details:
            "Screenings for depression and anxiety, stress management, and counseling referrals.",
        },
      ],
      image: "/images/practice.jpg",
    },
    WalkInClinic: {
      title: "Walk-In Clinic Services",
      description: "For immediate care needs, our Walk-In Clinic provides:",
      services: [
        {
          name: "Urgent Care for Minor Illnesses and Injuries",
          details:
            "Quick treatment for conditions such as colds, flu, minor burns, and simple fractures.",
        },
        {
          name: "Vaccinations and Flu Shots",
          details: "Essential shots available without appointment.",
        },
        {
          name: "Screenings and Physicals",
          details: "Convenient for school, sports, or work requirements.",
        },
        {
          name: "Routine Lab Work",
          details: "Fast and reliable blood tests, urine tests, and more.",
        },
        {
          name: "Efficiency and Accessibility",
          details:
            "No appointment is necessary with short wait times and experienced medical staff.",
        },
      ],
      image: "/images/clinic.jpg",
    },
    WhyChooseUs: {
      title: "Why Choose Us?",
      points: [
        {
          name: "No Appointments Necessary",
          details:
            "Walk-in during our operating hours for both family and urgent care needs.",
        },
        {
          name: "Experienced Medical Staff",
          details:
            "Our team is equipped to provide compassionate and efficient care.",
        },
        {
          name: "Cost-Effective",
          details:
            "An affordable alternative to emergency room visits for non-emergency situations.",
        },
      ],
    },
    WhatToBring: {
      title: "What to Bring",
      details:
        "Please bring a valid ID and insurance card (if applicable), a list of any current medications, and any relevant medical history for a more efficient visit.",
    },
    VisitUsToday: {
      title: "Visit Us Today",
      details:
        "Whether it’s a routine check-up or an urgent health matter, drop in today. At Eclat Medical Center, your family’s health and immediate care needs are our top priority. Let us be your partner in health, today and every day.",
    },
  },
];

const Index = () => {
  return (
    <div>
      <Breadcrumbs currentPage="Family & Walk In" />
      <div
        className="py-[50px] flex flex-col gap-3"
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        <h1
          className="text-[#019AE3] text-[36px] font-medium"
          style={{ fontSize: Clamp(1, 2) }}
        >
          Family & Walk In Clinic
        </h1>
        <h1
          className="text-[30px] font-medium"
          style={{ fontSize: Clamp(1, 1.75) }}
        >
          Eclat Medical Center: Comprehensive Family & Walk-In Clinic Services
        </h1>
        <p className="bg-gray-200 p-7 rounded-xl text-[14px] md:text-[16px] xl:text-[18px]">
          Welcome to the Eclat Medical Center, where we provide comprehensive
          health services for all ages, tailored to meet the needs of your
          entire family and available when you need them most.
        </p>
      </div>
      <div
        className="py-[50px] flex flex-col gap-3"
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        <h1
          className="text-[#019AE3] text-[36px] font-medium"
          style={{ fontSize: Clamp(1.2, 2) }}
        >
          Our Commitment
        </h1>
        <p className="text-[14px] md:text-[16px] xl:text-[18px]">
          At Eclat Medical Center, we understand the multifaceted nature of
          health. Our commitment is to offer accessible, high-quality healthcare
          that includes preventive, chronic, acute, wellness, and mental health
          services, along with efficient walk-in clinic options for urgent care
          needs.
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row py-[50px] items-center gap-10"
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        <img
          src={Data[0].FamilyPractice.image}
          alt="Family Practice"
          className="w-full md:w-[40%] object-cover h-[430px]"
        />
        <div className="flex flex-col gap-3 w-full md:w-[60%]">
          <h1
            className="text-[#019AE3] text-[36px] font-medium"
            style={{ fontSize: Clamp(1.2, 2) }}
          >
            {Data[0].FamilyPractice.title}
          </h1>
          <p className="text-[14px] md:text-[16px] xl:text-[18px]">
            {Data[0].FamilyPractice.description}
          </p>
          {Data[0].FamilyPractice.services.map((service, index) => (
            <ul key={index} className="flex list-disc">
              <li className="text-[16px]">
                <span className="font-bold text-[16px]">{service.name}: </span>
                {service.details}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row py-[50px] items-center gap-10"
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        <div className="flex flex-col gap-3 w-full md:w-[60%]">
          <h1
            className="text-[#019AE3] text-[36px] font-medium"
            style={{ fontSize: Clamp(1.2, 2) }}
          >
            {Data[0].WalkInClinic.title}
          </h1>
          <p className="text-[14px] md:text-[16px] xl:text-[18px]">
            {Data[0].WalkInClinic.description}
          </p>
          {Data[0].WalkInClinic.services.map((service, index) => (
            <ul key={index} className="flex list-disc">
              <li className="text-[16px]">
                <span className="font-bold text-[16px]">{service.name}: </span>
                {service.details}
              </li>
            </ul>
          ))}
        </div>
        <img
          src={Data[0].WalkInClinic.image}
          alt="Walk-In Clinic"
          className="w-full md:w-[40%] object-cover h-[430px]"
        />
      </div>
      <div
        className="py-[50px] flex flex-col gap-3"
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        <h2
          className="text-[#019AE3] text-[36px] font-medium"
          style={{ fontSize: Clamp(1.2, 2) }}
        >
          {Data[0].WhyChooseUs.title}
        </h2>
        {Data[0].WhyChooseUs.points.map((point, index) => (
          <ul key={index} className="flex flex-col">
            <li className="text-[16px]">
              <span className="font-bold text-[18px]">{point.name}: </span>
              {point.details}
            </li>
          </ul>
        ))}
        <div className="flex flex-col gap-1">
          <h2 className="text-[20px] font-bold">{Data[0].WhatToBring.title}</h2>
          <p className="text-[14px] md:text-[16px] xl:text-[18px]">
            {Data[0].WhatToBring.details}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[20px] font-bold">
            {Data[0].VisitUsToday.title}
          </h2>
          <p className="text-[14px] md:text-[16px] xl:text-[18px]">
            {Data[0].VisitUsToday.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
