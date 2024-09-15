import React, { useState } from "react";
import man from "../../assets/image/man.png";
import { FaCheck } from "react-icons/fa6";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HTabRouteMap() {
  const [activeTab, setActiveTab] = useState(0);

  const tabTitles = [
    "Career Counseling",
    "Why Choose Us?",
    "Join Our Community",
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
                  ? "text-[#c50101] font-semibold "
                  : "text-[#000080] font-semibold"
              }`}
              onClick={() => handleTabClick(index)}
            >
              <div
                className={`w-6 h-6 rounded-full ${
                  index === activeTab
                    ? "bg-[#c50101] flex border-2 items-center justify-center"
                    : "border-2 border-[#000080]"
                }`}
              >
                {index === activeTab && (
                  <FaCheck className="w-3 h-3 text-white" />
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
            <div className="flex justify-between items-center mt0">
              <div className="w-1/3">
                <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  01
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#c50101]">
                  Career Counseling
                </h3>
                <p className="text-black">
                  Personalized guidance to help you discover your strengths,
                  interests, and career goals
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
                  Professional Training
                </h3>
                <p className="text-black">
                  Industry-relevant training programs designed to enhance your
                  skills and boost your employability.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                02
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#c50101]">
                Placement Assistance
              </h3>
              <p className="text-black max-w-md mx-auto">
                Connecting you with top employers and helping you land the job
                you deserve.
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
                  Expert Guidance
                </h3>
                <p className="text-black">
                  Learn from seasoned professionals with extensive industry
                  experience.
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
                  Proven Results
                </h3>
                <p className="text-black">
                  Our clients consistently achieve their career goals and
                  experience significant growth in their professional lives.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                02
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#c50101]">
                Tailored Approach
              </h3>
              <p className="text-black max-w-md mx-auto">
                We understand that every career journey is unique. Our services
                are customized to fit your individual needs.
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
                  Community and Growth
                </h3>
                <p className="text-black">
                  Be part of a supportive community where you can connect with
                  like-minded individuals, learn from experts, and take your
                  career to the next level.
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
                  Personalized Support
                </h3>
                <p className="text-black">
                  Benefit from a personalized approach that understands your
                  unique needs and provides the support you need to succeed in
                  your career.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-[#000080] text-[#fff] w-10 h-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                02
              </div>
              <h3 className="text-xl font-bold text-[#c50101] mb-2">
                Comprehensive Resources
              </h3>
              <p className="text-black max-w-md mx-auto">
                Access a wealth of career development resources, including
                expert guidance, tailored advice, and tools to help you achieve
                your goals.
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
