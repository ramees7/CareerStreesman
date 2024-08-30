import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        message.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" ,number:"" });
      } else {
        message.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to send message. Please try again.");
    }
  };
  return (
    <div className="py-16 ">
      <div className="bg-white py-16 shadow-lg">
        <h1 className="font-bold text-4xl text-center mb-7 text-[#000080]">CONTACT US</h1>
        <form class="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#000080] focus:outline-none focus:ring-0 focus:border-[#000080] peer"
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
              class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#000080] focus:outline-none focus:ring-0 focus:border-[#000080] peer"
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
              class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#000080] focus:outline-none focus:ring-0 focus:border-[#000080] peer"
              placeholder=""
              value={formData.number}
              onChange={handleChange}
              required
            />
            <label
              for="number"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#000080] peer-focus:dark:text-[#000080] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>
          <label for="message" class="block mb-2 text-sm font-medium">
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-s rounded-lg border border-black focus:ring-[#000080] focus:border-[#000080]  dark:text-white dark:focus:ring-[#000080] dark:focus:border-[#000080]"
            placeholder="Leave a comment..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
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
