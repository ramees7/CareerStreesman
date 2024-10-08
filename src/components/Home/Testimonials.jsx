import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import TestimonialModal from "./TestimonialModal";

export default function Testimonials() {
  const centerButton = true;
  const videoLinks = [
    "https://www.youtube.com/embed/vUy6HniBQgQ?si=Ee-WJj7qraUVFnmT",
    "https://www.youtube.com/embed/9T_et7hlaa8?si=XIlUXMPJPEZKx69s",
    "https://www.youtube.com/embed/tygi697AJls?si=IYWI4PlBe9f8AC6G",
    "https://www.youtube.com/embed/9T_et7hlaa8?si=XIlUXMPJPEZKx69s",
    "https://www.youtube.com/embed/tygi697AJls?si=IYWI4PlBe9f8AC6G",
  ];
  return (
    <div className=" px-4 sm:px-6 pt-5 lg:px-8 text-center">
      <h2 className="text-3xl leading-9 font-semibold text-[#000080]">
        Real Stories, Incredible Journeys: Listen To Our Stars
      </h2>
      <p className="mt-4 text-lg leading-6 text-black max-w-2xl mx-auto">
        Discover the success stories and journeys of our top learners. Hear from
        those who have thrived with our platform and see how their dedication
        and our resources have paved their way to incredible achievements.
      </p>

      <div className="relative flex items-center justify-center h-[400px]">
        <div className="absolute top-[10%] left-1/4  rounded-full md:p-5 p-4 shadow-md hover:cursor-pointer">
          <TestimonialModal video={videoLinks[0]} />
        </div>
        <div className="absolute top-[10%] right-1/4 rounded-full md:p-5 p-4 shadow-md  hover:cursor-pointer">
          <TestimonialModal video={videoLinks[1]} />
        </div>
        <div className="absolute top-[40%]  md:left-[47%] left-[43%] bg-[#000080] rounded-full md:p-6 p-5 shadow-lg  hover:cursor-pointer">
          <TestimonialModal video={videoLinks[4]} centerButton={centerButton} />
        </div>
        <div className="absolute bottom-[10%] left-1/4  rounded-full md:p-5 p-4 shadow-md hover:cursor-pointer">
          <TestimonialModal video={videoLinks[2]} />
        </div>
        <div className="absolute bottom-[10%] right-1/4  rounded-full md:p-5 p-4 shadow-md  hover:cursor-pointer">
          <TestimonialModal video={videoLinks[3]} />
        </div>
      </div>
    </div>
  );
}
