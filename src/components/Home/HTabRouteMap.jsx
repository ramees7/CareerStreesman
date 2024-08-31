import React, { useState } from "react";
import man from "../../assets/image/man.png";
import { FaCheck } from "react-icons/fa6";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HTabRouteMap() {
  const [activeTab, setActiveTab] = useState(0);

  const tabTitles = [
    "Enrolment Assistance",
    "Career Counselling",
    "University Admission",
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h2 className="text-3xl leading-9 font-semibold mb-8 text-[#000080] text-center">
        On The Job Training Programs
      </h2> */}
      <div className="flex justify-center items-center mb-8">
        <div className="flex space-x-8">
          {tabTitles.map((title, index) => (
            <button
              key={index}
              className={`flex items-center space-x-2 ${
                index === activeTab
                  ? "text-[#c50101] font-semibold"
                  : "text-[#000080] font-semibold"
              }`}
              onClick={() => handleTabClick(index)}
            >
              <div
                className={`w-6 h-6 rounded-full ${
                  index === activeTab
                    ? "bg-[#c50101] flex items-center justify-center"
                    : "border-2 border-[#000080]"
                }`}
              >
                {index === activeTab && (
                  <FaCheck className="w-4 h-4 text-white" />
                )}
              </div>
              <span>{title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12">
        {/* tab-1 */}
        {activeTab === 0 && (
          <>
            <div className="flex justify-between items-center">
              <div className="w-1/3">
                <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  01
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#c50101]">
                  Career Counselling
                </h3>
                <p className="text-black">
                  Course tailored for professionals with a balance of recorded &
                  live sessions, case studies & assessments.
                </p>
              </div>

              <div className="w-1/3 flex justify-center">
                <img src={man} alt="Professional" className="w-64 h-auto" />
              </div>

              <div className="w-1/3 text-right">
                <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4 ml-auto">
                  03
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#c50101]">
                  Real Time Support
                </h3>
                <p className="text-black">
                  Instant support from AI-powered bots & your upGrad Buddy to
                  resolve all your queries
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                02
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#c50101]">
                Hands-on Learning
              </h3>
              <p className="text-black max-w-md mx-auto">
                Expert-led, personalized sessions for conceptual clarity & a
                tailored action plan for your goals.
              </p>
            </div>
          </>
        )}
        {/* tab-2 */}
        {activeTab === 1 && (
          <>
            <div className="flex justify-between items-center">
              <div className="w-1/3">
                <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  01
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#c50101]">
                  Premium Job Openings
                </h3>
                <p className="text-black">
                  Exclusive job openings from Career Streesman's 100+ hiring
                  partners
                </p>
              </div>

              <div className="w-1/3 flex justify-center">
                <img src={man} alt="Professional" className="w-64 h-auto" />
              </div>

              <div className="w-1/3 text-right">
                <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4 ml-auto">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#c50101] mb-2">
                  Global Alumni Network
                </h3>
                <p className="text-black">
                  Access to the upGrad alumni community with 25,000+ successful
                  professionals from across the world
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                02
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#c50101]">
                Personalized Career Coaching
              </h3>
              <p className="text-black max-w-md mx-auto">
                Multiple 1:1 coaching calls with certified industry veterans to
                drive your career forward
              </p>
            </div>
          </>
        )}

        {/* tab-3 */}
        {activeTab === 2 && (
          <>
            <div className="flex justify-between items-center">
              <div className="w-1/3">
                <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  01
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#c50101]">
                  Career Counselling
                </h3>
                <p className="text-black">
                  Speak to expert counsellors who will guide you towards the
                  ideal program for your career aspirations
                </p>
              </div>

              <div className="w-1/3 flex justify-center">
                <img src={man} alt="Professional" className="w-64 h-auto" />
              </div>

              <div className="w-1/3 text-right">
                <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4 ml-auto">
                  03
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#c50101]">
                  Flexible Payment Plans
                </h3>
                <p className="text-black">
                  Say goodbye to hefty student loans. Get assistance in finding
                  the best, personalized payment plans
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                02
              </div>
              <h3 className="text-xl font-bold text-[#c50101] mb-2">
                University Admission
              </h3>
              <p className="text-black max-w-md mx-auto">
                Get expert support every step of the way to ease the stress of
                the University's admission process
              </p>
            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-center mt-8">
        <button
          disabled={activeTab === 0}
          className={`text-[#000080] text-xl ${
            activeTab === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handleTabClick(activeTab - 1)}
        >
          <FaChevronLeft />
        </button>
        <span className="text-[#c50101] font-bold mx-2">
          {activeTab + 1} / {tabTitles.length}
        </span>
        <button
          disabled={activeTab === tabTitles.length - 1}
          className={`text-[#000080] text-xl ${
            activeTab === tabTitles.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={() => handleTabClick(activeTab + 1)}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="text-center mt-12">
        <Link to={"/book-demo"}>
          <button className="py-2 px-6 border-0 bg-[#000080] text-white text-xl border-b-[5px] border-r-[5px] ">
            Book a Free Counseling Session
          </button>
        </Link>
      </div>
    </div>
  );
}
