import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function CourseHeading({ courseDetails }) {
  return (
    <div className="py-16">
      <div key={courseDetails.name}>
        <div className="gap-y-6 flex flex-col items-center">
          <h2 className="text-4xl leading-9 font-semibold text-[#000080] text-center">
            {courseDetails.name}
          </h2>
          <div className="lg:w-[70%]">
            <h3 className="text-lg">{courseDetails.contentExplain}</h3>
          </div>
          <button className="py-2 px-4 bg-[#000080] text-white ">
            <a
              href="https://wa.me/09871"
              target="_blank"
              className="flex gap-3 items-center text-lg"
            >
              <FaWhatsapp />
              Contact Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
