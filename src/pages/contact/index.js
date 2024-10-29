import React, { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CiLocationOn } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { BiWorld } from "react-icons/bi";
import Clamp from "../clamp";
import Head from "next/head";

const Data = [
  {
    contact: {
      address: "3500 Brock St N, Unit # 7,<br>Whitby ON L1R 3J4",
      phone: "+1 905 430 7774",
      fax: "905 430 7767",
      email: "info@eclatmedical.ca",
      website: "www.eclatmedical.ca",
    },
  },
];

const Index = () => {
  const { contact } = Data[0];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Eclat Medical | Contact Us</title>
      </Head>
      <Breadcrumbs currentPage="Contact Us" />
      <div
        className="bg-gray-700 py-[20px] md:py-[30px] xl:py-[50px] px-[20px] md:px-[40px] xl:px-[70px] text-white flex flex-col md:flex-row gap-10 my-[50px] justify-between"
        style={{
          marginLeft: Clamp(1.25, 15.62),
          marginRight: Clamp(1.25, 15.62),
        }}
      >
        <div className="flex items-center gap-4">
          <CiLocationOn size={25} />
          <p dangerouslySetInnerHTML={{ __html: contact.address }} />
        </div>
        <div className="flex items-center gap-4">
          <SlPhone size={25} />
          <div>
            <p>Phone: {contact.phone}</p>
            <p>Fax: {contact.fax}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BiWorld size={25} />
          <div>
            <p>Email: {contact.email}</p>
            <p>Website: {contact.website}</p>
          </div>
        </div>
      </div>
      <div
        className="pb-[50px] h-[500px]"
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.263239376684!2d-78.95147322436799!3d43.932129271205084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d52dfc607f05b9%3A0xdb0733176fbe0679!2s3500%20Brock%20St%20N%20%237%2C%20Whitby%2C%20ON%20L1R%203J4%2C%20Canada!5e0!3m2!1sen!2sin!4v1698519157326!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        <h1 className="text-2xl mb-4">Leave a Message</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 p-4 rounded-lg mb-[50px]"
        >
          <div className="mb-4">
            <label className="block mb-1 " htmlFor="firstName">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 " htmlFor="lastName">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 " htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-1 " htmlFor="message">
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded"
              rows="4"
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
