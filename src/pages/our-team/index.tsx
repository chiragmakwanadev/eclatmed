import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import Clamp from "../clamp";

const Data = [
  {
    doctor: {
      image: "/images/doctor1.jpg",
      name: "Dr. Moyo Ogundipe",
      qualifications: ["MD", "MRCGP", "CCFP"],
      description: {
        paragraphs: [
          "Dr. Moyo is a dedicated and compassionate family physician whose warmth and empathy make her a beloved figure in the community. With years of experience and a deep commitment to her patients, Dr. Moyo excels in providing comprehensive care to individuals of all ages, from infants to the elderly. Her approach is holistic, focusing not only on physical health but also on emotional and psychological well-being.",
          "Dr. Moyo is known for her attentive listening skills and her ability to make patients feel heard and valued. She takes the time to understand their concerns, histories, and lifestyles, ensuring that each treatment plan is tailored to their unique needs. Her calm demeanor and reassuring presence create a safe and comfortable environment for patients, fostering trust and openness.",
          "In addition to her clinical expertise, Dr. Moyo is passionate about preventive care and patient education. She believes in empowering her patients with knowledge and tools to take control of their health. Whether it’s managing chronic conditions, guiding through lifestyle changes, or addressing acute illnesses, Dr. Moyo is always focused on promoting long-term wellness.",
          "Her commitment extends beyond the clinic as she actively participates in community health initiatives, often volunteering her time and skills to support local health fairs and educational workshops. Dr. Moyo’s dedication to her profession and her patients is evident in the countless positive outcomes and the heartfelt gratitude she receives.",
          "Colleagues and patients alike admire Dr. Moyo for her clinical acumen, kindness, and unwavering dedication. She embodies the ideal qualities of a family physician: compassionate, knowledgeable, and truly invested in the health and happiness of those she serves. Through her exemplary care and heartfelt compassion, Dr. Moyo continues to make a profound impact on the lives of her patients and the broader community.",
        ],
      },
    },
  },
  {
    doctor: {
      image: "/images/doctor1.jpg",
      name: "Dr. Emmanuel Adeogun",
      qualifications: ["MBChB", "MRCGP", "CCFP"],
      description: {
        paragraphs: [
          "Dr. Emmanuel Adeogun epitomizes excellence in family medicine, seamlessly blending clinical expertise with compassionate patient care. He graduated from medical school 11 years ago and had extensive training in various aspects of medicine such as Diabetes and Endocrinology, Care of the elderly, Psychiatry, Women’s Health and Menopause, Emergency Medicine, Men’s Health, Paediatrics, and Dermatology and STIs. As the linchpin of a family clinic practice, he not only excels in diagnosing and treating a myriad of medical conditions but also adeptly juggles administrative responsibilities with finesse.",
          "With a profound commitment to patient-centered care, Dr. Emmanuel fosters enduring relationships with his patients, earning their trust and respect. His warm demeanor and empathetic approach create a welcoming atmosphere, where patients feel valued and understood. Whether addressing complex medical issues or providing routine preventive care, he prioritizes open communication, ensuring patients are actively involved in their healthcare journey.",
          "In addition to his clinical acumen, Dr. Emmanuel possesses exceptional leadership skills, serving as a beacon of guidance and inspiration to his colleagues. As the administrative head of the family clinic practice, he orchestrates operations with precision, optimizing workflows to enhance efficiency and streamline patient care delivery. His visionary leadership fosters a collaborative environment where every team member feels empowered to contribute their best.",
          "Dr. Emmanuel is a stalwart advocate for continuous improvement, constantly seeking innovative ways to elevate the standard of care provided at the clinic. Whether implementing new technology solutions to enhance patient access or spearheading quality improvement initiatives to optimize clinical outcomes, he remains steadfast in his pursuit of excellence. His forward-thinking mindset ensures that the clinic remains at the forefront of medical advancements, poised to meet the evolving needs of the community.",
          "In recognition of his contribution to family medicine, Dr. Emmanuel has earned numerous accolades during his medical school and residency training days. His peers admire his tireless work ethic, clinical expertise, and unwavering commitment to excellence. He serves as a role model for aspiring healthcare professionals, embodying the values of integrity, compassion, and lifelong learning.",
          "In summary, Dr. Emmanuel Adeogun is not just an excellent family physician with administrative duties in a family clinic practice; he is a beacon of excellence, whose dedication to patient care, leadership prowess, and commitment to continuous improvement set the standard for healthcare excellence. His profound impact extends far beyond the confines of the clinic, leaving an indelible mark on the lives of his patients, colleagues, and community.",
        ],
      },
    },
  },
  {
    doctor: {
      image: "",
      name: "Dr. Femi",
      qualifications: ["MBBS", "MRCGP", "CCFP"],
      description: {
        paragraphs: [
          "Dr. Femi’s journey in Family Medicine began with his residency in the United Kingdom. This experience equipped him with extensive knowledge across the spectrum of family medicine. As an independent practitioner, he upholds his belief in holistic practice, providing care for patients with various presentations and addressing a wide range of patient needs, from simple to complex cases.",
          "Dr. Femi’s practice focuses on addressing not only his patients’ physical ailments but also their mental and emotional well-being within the context of their family and community dynamics.",
          "Dr. Femi excels in managing patients with mental health conditions and has a real passion for paediatrics and adolescent health. With Dr. Femi, you can expect excellent, personalized care characterized by compassion, expertise, and a patient-centred approach that extends to your entire family. He strongly believes in making decisions together with you, placing emphasis on your needs and health goals.",
        ],
      },
    },
  },
  {
    doctor: {
      image: "/images/doctor1.jpg",
      name: "Dr. Adenike Khadijat Bakare",
      qualifications: ["M.B.Ch.B", "MRCGP", "CCFP"],
      description: {
        paragraphs: [
          "Dr. Adenike Khadijat Bakare is a UK trained family physician who had her M.B.Ch.B from Olabisi Onabanjo University, Nigeria. She moved to the UK where she had her family medicine specialty training and obtained her Membership of the Royal College of General Practitioners.",
          "Dr. Bakare has interest in primary care because of the variety it brings and the ability to detect ailments early. She also has an interest in women’s health and has training for certification in contraception for Intrauterine device, implant insertion and removal as well as other forms of contraception.",
          "In addition to her love for variety, she is trained in Minor surgery and Joint injections which she also does as part of her clinic time. Dr. Bakare believes in a holistic approach to health care and she does her best to care for her patients by treating them with compassion and empathy.",
          "She is family oriented and in her free time, she enjoys tending to her garden, likes a good movie, and travels when she gets a chance. She is always ready to learn because it is a never-ending process, and she hopes to make a positive impact wherever she goes.",
        ],
      },
    },
  },
];

const Index = () => {
  return (
    <div>
      <Breadcrumbs currentPage="Our Team" />
      <h1
        className="text-[36px] text-[#019AE3] text-center py-[50px] font-medium px-2"
        style={{ fontSize: Clamp(1.2, 2) }}
      >
        Eclat Medical Center Team Member
      </h1>
      {Data.map((doctorData, index) => (
        <div
          className="flex flex-col pb-[50px]"
          key={index}
          style={{
            paddingLeft: Clamp(1.25, 15.62),
            paddingRight: Clamp(1.25, 15.62),
          }}
        >
          <div className="flex flex-col md:flex-row mt-10">
            {doctorData.doctor.image ? (
              <>
                <div className="w-full md:w-[20%]">
                  <img
                    src={doctorData.doctor.image}
                    alt={doctorData.doctor.name}
                    className="w-full h-[230px] object-cover"
                  />
                  <h1 className="text-[#019AE3] text-[14px] md:text-[16px] xl:text-[18px] font-medium text-center mt-2">
                    {doctorData.doctor.name}
                  </h1>
                  <div className="text-[14px] md:text-[16px] font-semibold text-center">
                    {doctorData.doctor.qualifications.join(", ")}
                  </div>
                </div>
                <div className="w-full md:w-[80%] flex flex-col">
                  <div className="flex-grow text-[14px] md:text-[16px] mt-4 flex flex-col gap-3">
                    {doctorData.doctor.description.paragraphs &&
                      doctorData.doctor.description.paragraphs
                        .slice(0, -2)
                        .map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>{paragraph}</p>
                        ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full">
                <h1 className="text-[#019AE3] text-[14px] md:text-[16px] xl:text-[18px] font-medium mt-2">
                  {doctorData.doctor.name}
                </h1>
                <div className="text-[14px] md:text-[16px] font-semibold">
                  {doctorData.doctor.qualifications.join(", ")}
                </div>
                <div className="flex-grow text-[14px] md:text-[16px] mt-4 flex flex-col gap-3">
                  {doctorData.doctor.description.paragraphs &&
                    doctorData.doctor.description.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      )
                    )}
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {doctorData.doctor.description.paragraphs &&
              doctorData.doctor.description.paragraphs
                .slice(-2)
                .map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-[14px] md:text-[16px]"
                  >
                    {paragraph}
                  </p>
                ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
