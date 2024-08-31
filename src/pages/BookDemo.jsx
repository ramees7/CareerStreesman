import { message } from "antd";
import React, { useEffect, useState } from "react";

export default function BookDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    course: "",
  });

  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Reset email error when the user starts typing
    if (e.target.name === "email") {
      setEmailError("");
    }

    // Reset phone number error when the user starts typing
    if (e.target.name === "number") {
      setNumberError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (number) => {
    return number.length === 10 && /^\d+$/.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Validate phone number
    if (!validatePhoneNumber(formData.number)) {
      setNumberError("Phone number must be 10 digits.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/bookdemo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        localStorage.setItem("Registered", "Yes");
        message.success("Message sent successfully!");
        setFormData({ name: "", email: "", number: "", course: "" });
      } else {
        message.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to send message. Please try again.");
    }
  };

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, []);
  return (
    <div className="py-16  xl:px-52 lg:px-40 md:px-28 px-5 bg-[#eaeff5]">
      <div className="bg-white py-16 shadow-lg rounded-md">
        <h1 className="font-bold text-4xl text-center mb-7 text-[#000080]">
          Book Free Demo
        </h1>
        <form class="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#000080] focus:outline-none focus:ring-0 focus:border-[#000080] peer"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label
              for="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#000080] peer-focus:dark:text-[#000080] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#000080] focus:outline-none focus:ring-0 focus:border-[#000080] peer"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label
              for="email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#000080] peer-focus:dark:text-[#000080] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="number"
              id="number"
              class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#000080] focus:outline-none focus:ring-0 focus:border-[#000080] peer"
              placeholder=""
              value={formData.number}
              onChange={handleChange}
              required
            />
            <label
              for="number"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#000080] peer-focus:dark:text-[#000080] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#000080] focus:outline-none focus:ring-0 focus:border-[#000080] peer"
            >
              <option value="" disabled>
                Choose an option
              </option>
              <option value="Java Full Stack">Java Full Stack</option>
              <option value="Python Full Stack">Python Full Stack</option>
              <option value="MERN Full Stack">MERN Full Stack</option>
              <option value="Flutter App Development">Flutter</option>
              <option value="AR /VR Development">AR /VR Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Human Resource Management">
                Human Resource Management
              </option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="UI / UX Designer">UI / UX Designer</option>
              <option value="Data Analysts">Data Analysts</option>
              <option value="Not decided yet">Other</option>
            </select>
            <label
              htmlFor="course"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#000080] peer-focus:dark:text-[#000080] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Course
            </label>
          </div>

          <div className="w-full justify-center">
            <button
              type="submit"
              class="text-white bg-[#000080] w-full  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm  px-5 py-2.5 text-center mt-5 "
            >
              Send Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
