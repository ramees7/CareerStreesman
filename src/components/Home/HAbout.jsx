import React from "react";
import video from "../../assets/image/video.mp4";
import { IoMdStarOutline } from "react-icons/io";

export default function HAbout() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 bg-[#000080] py-12 px-5 ">
        {/* <div className="flex flex-col lg:flex-row gap-4 bg-[#000080] py-12  sticky top-20 px-5 z-10"> */}
        <div className="flex-1 ">
          <div className="space-y-4 ">
            <h1 className="text-3xl font-semibold text-[#fff]">
              Seamless Learning Experience
            </h1>
            <p className="text-[#fff]">
              Experience learning by doing with our interactive platform.
            </p>
            <ul className="space-y-5 ">
              <li className="flex items-center text-[#fff] gap-2">
                <IoMdStarOutline className="text-2xl text-[#fff]" />
                Interactive Exercises: Hands-On Learning
              </li>
              <li className="flex items-center text-[#fff] gap-2">
                <IoMdStarOutline className="text-2xl text-[#fff]" />
                Integrated Testing: Continuous Assessments
              </li>
              <li className="flex items-center text-[#fff] gap-2">
                <IoMdStarOutline className="text-2xl text-[#fff]" />
                Practical Skills: Real-World Applications
              </li>
              <li className="flex items-center text-[#fff] gap-2">
                <IoMdStarOutline className="text-2xl text-[#fff]" />
                Progress Tracking: Monitor Improvement
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 mt-5 lg:mt-0">
          <div>
            <video controls autoPlay muted className="w-full">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row gap-4 bg-[#c50101] py-12 px-5 sticky top-20  z-20"> */}
      <div className="flex flex-col lg:flex-row gap-4 bg-[#c50101] py-12 px-5 ">
        <div className="flex-1">
          <div>
            <video controls autoPlay muted className="w-full">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex-1 mt-5 lg:mt-0">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-[#fff]">
              Personalized Learning Paths
            </h1>
            <p className="text-[#fff]">
              Tailored learning journeys based on your individual needs and
              pace.
            </p>
            <ul className="space-y-5 ">
              <li className="flex items-center text-[#fff] gap-2">
                <IoMdStarOutline className="text-2xl text-[#fff]" />
                Real-Time Feedback: Immediate Guidance
              </li>
              <li className="flex items-center text-[#fff] gap-2">
                <IoMdStarOutline className="text-2xl text-[#fff]" />
                Mentor Interaction: Human-Like Assistance
              </li>
              <li className="flex items-center text-[#fff] gap-2">
                <IoMdStarOutline className="text-2xl text-[#fff]" />
                Receive project hints without full solutions.
              </li>
              <li className="flex items-center text-[#fff] gap-2">
                <IoMdStarOutline className="text-2xl text-[#fff]" />
                Simulate real interviews and receive feedback.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
