import React from "react";
import { FaPlayCircle } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div className="bg-white px-4 sm:px-6 mt-5 lg:px-8 text-center">
      <h2 className="text-3xl leading-9 font-semibold text-[#000080]">
        Real Stories, Incredible Journeys: Listen To Our Stars
      </h2>
      <p className="mt-4 text-lg leading-6 text-gray-600 max-w-2xl mx-auto">
        Discover the success stories and journeys of our top learners. Hear from
        those who have thrived with our platform and see how their dedication
        and our resources have paved their way to incredible achievements.
      </p>

      <div className="relative flex items-center justify-center h-[400px]">
        <div className="absolute top-[10%] left-1/4 bg-white rounded-full p-4 shadow-md">
          <FaPlayCircle className="text-2xl text-[#c50101]"/>
        </div>
        <div className="absolute top-[10%] right-1/4 rounded-full p-4 shadow-md">
          <FaPlayCircle className="text-2xl text-[#c50101]"/>
        </div>
        <div className="absolute top-[40%] left-1/2 bg-[#000080] rounded-full p-4 shadow-lg">
          <FaPlayCircle className="text-3xl text-[#fff]"/>
        </div>
        <div className="absolute bottom-[10%] left-1/4  rounded-full p-4 shadow-md">
          <FaPlayCircle className="text-2xl text-[#c50101]"/>
        </div>
        <div className="absolute bottom-[10%] right-1/4 bg-white rounded-full p-4 shadow-md">
          <FaPlayCircle className="text-2xl text-[#c50101]"/>
        </div>
      </div>
    </div>
  );
}
