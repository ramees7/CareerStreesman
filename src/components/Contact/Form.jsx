import { message } from "antd";
import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\d{10}$/; // Accepts 10 digit phone numbers
    return phoneRegex.test(number);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate email
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate phone number
    if (!validatePhoneNumber(formData.number)) {
      newErrors.number = "Please enter a valid 10-digit phone number.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        message.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", number: "" });
        setErrors({});
      } else {
        message.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="py-16">
      <div className=" rounded-md">
        <h1 className="font-bold text-4xl text-center mb-8 text-[#000080]">
          Send Us a Message
        </h1>

        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#000080] focus:outline-none focus:ring-0 focus:border-[#000080] peer"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#000080] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#000080] focus:outline-none focus:ring-0 focus:border-[#000080] peer"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#000080] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="number"
              id="number"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#000080] focus:outline-none focus:ring-0 focus:border-[#000080] peer"
              placeholder=""
              value={formData.number}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="number"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#000080] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
            {errors.number && (
              <p className="text-red-500 text-sm">{errors.number}</p>
            )}
          </div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            name="message"
            className="block p-2.5 w-full text-sm rounded-lg bg-[#eaeff5] border border-[#000080]  dark:text-black dark:focus:ring-[#000080] dark:focus:border-[#000080]"
            placeholder="Leave a comment..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="w-full justify-center">
            <button
              type="submit"
              className="text-white bg-[#000080] w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5"
            >
              Send Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
