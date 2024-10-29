import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import Clamp from "../clamp";
import Head from "next/head";

const Data = [
  {
    Pharmacy: {
      title: "Our Pharmacy",
      description:
        "At Eclat Medical Center’s Pharmacy, we understand that managing your medications should be as simple and convenient as managing your health. That’s why our pharmacy is strategically located within the medical center, providing you with direct access to the medications you need immediately after your consultation.",
      services: [
        {
          name: "Prescription Dispensing",
          details:
            "We offer a full range of prescription medications, including specialty and over-the-counter options. Our pharmacists work closely with your healthcare providers to ensure accurate and safe medication management.",
        },
        {
          name: "Medication Management Services",
          details:
            "Our pharmacists are available to help you understand your medication regimen, including instructions, dosages, and potential side effects. We provide personalized counseling to ensure you are fully informed about your medications.",
        },
        {
          name: "Immunizations",
          details:
            "Stay protected with our comprehensive vaccination services, available without an appointment.",
        },
        {
          name: "Health Screenings",
          details:
            "We offer various health screenings that can help you keep track of your health, including blood pressure checks and diabetes screenings.",
        },
        {
          name: "Specialty Pharmacy Services",
          details:
            "For patients with complex chronic conditions requiring specialty medications, our pharmacy ensures that you have access to the necessary treatments along with detailed guidance on use and monitoring.",
        },
      ],
      whyChooseUs: [
        {
          name: "Expert Care",
          details:
            "Our experienced pharmacists are dedicated to your health and are always ready to provide you with the care and information you need.",
        },
        {
          name: "Convenience",
          details:
            "Easily fill your prescriptions right after your appointments with no need to travel to another location.",
        },
        {
          name: "Integration with Your Care Team",
          details:
            "Our pharmacy is fully integrated with the medical center, allowing for seamless communication between your doctors and pharmacists.",
        },
        {
          name: "Fast Service",
          details:
            "We pride ourselves on quick, efficient service to ensure that you can start your treatment without delay.",
        },
      ],
      planningYourVisit: {
        title: "Planning Your Visit",
        details:
          "To ensure a smooth visit to our pharmacy, please have the following ready:",
        requirements: [
          "Your doctor’s prescription or medication orders",
          "Insurance information",
          "List of any allergies and medications you are currently taking",
        ],
      },
      visitToday: {
        title: "Visit Eclat Medical Center’s Pharmacy Today",
        details:
          "Experience the convenience and care of Eclat Medical Center’s Pharmacy on your next visit. Our team is here to ensure that your path to wellness is easy and effective. Trust us to be your partner in health.",
      },
    },
  },
];

const Index = () => {
  return (
    <div>
      <Head>
        <title>Eclat Medical | Our Pharmacy</title>
      </Head>
      <Breadcrumbs currentPage="Our Pharmacy" />
      <div
        className=" py-[50px] flex flex-col gap-3"
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        <h1
          className="text-[#019AE3] text-[36px] font-medium"
          style={{ fontSize: Clamp(1.2, 2) }}
        >
          {Data[0].Pharmacy.title}
        </h1>
        <p className="text-[14px] md:text-[16px] xl:text-[18px]">
          {Data[0].Pharmacy.description}
        </p>
        <h2
          className="text-[#019AE3] text-[30px] font-medium"
          style={{ fontSize: Clamp(1, 1.75) }}
        >
          Our Services Include:
        </h2>
        {Data[0].Pharmacy.services.map((service, index) => (
          <ul key={index} className="flex flex-col gap-1 list-disc">
            <li className="text-[14px] md:text-[16px]">
              <span className="font-bold text-[16px] xl:text-[18px]">
                {service.name}:{" "}
              </span>
              {service.details}
            </li>
          </ul>
        ))}
        <h2
          className="text-[#019AE3] text-[30px] font-medium"
          style={{ fontSize: Clamp(1, 1.75) }}
        >
          Why Choose Eclat Medical Center Pharmacy?
        </h2>
        {Data[0].Pharmacy.whyChooseUs.map((choice, index) => (
          <ul key={index} className="flex flex-col gap-1 list-disc">
            <li className="text-[14px] md:text-[16px]">
              <span className="font-bold text-[16px] xl:text-[18px]">
                {choice.name}:{" "}
              </span>
              {choice.details}
            </li>
          </ul>
        ))}
        <h2
          className="text-[#019AE3] text-[30px] font-medium"
          style={{ fontSize: Clamp(1, 1.75) }}
        >
          {Data[0].Pharmacy.planningYourVisit.title}
        </h2>
        <p className="text-[14px] md:text-[16px] xl:text-[18px]">
          {Data[0].Pharmacy.planningYourVisit.details}
        </p>
        <ul className="list-disc pl-5">
          {Data[0].Pharmacy.planningYourVisit.requirements.map(
            (item, index) => (
              <li key={index} className="text-[14px] md:text-[16px]">
                {item}
              </li>
            )
          )}
        </ul>
        <h2
          className="text-[#019AE3] text-[30px] font-medium"
          style={{ fontSize: Clamp(1, 1.75) }}
        >
          {Data[0].Pharmacy.visitToday.title}
        </h2>
        <p className="text-[14px] md:text-[16px] xl:text-[18px]">
          {Data[0].Pharmacy.visitToday.details}
        </p>
      </div>
    </div>
  );
};

export default Index;
