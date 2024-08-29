import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import reactIcon from "../../assets/image/react.png";
import pythonIcon from "../../assets/image/python.png";
import flutterIcon from "../../assets/image/flutter.png";
import javaIcon from "../../assets/image/java.png";
import arVrIcon from "../../assets/image/vr-icon.png";
import digitalMarketIcon from "../../assets/image/Dm.png";
import dataAnalystIcon from "../../assets/image/DA.png";
import uiUxIcon from "../../assets/image/ui_ux.png";
import hrIcon from "../../assets/image/hr.png";
import graphicDesigningIcon from "../../assets/image/graphic-designing.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HCourses() {
  const [activeTab, setActiveTab] = useState(0);

  const courseTitles = ["IT", "Non IT"];

  const itCourses = [
    {
      name: "Python Django Full Stack Development",
      icon: pythonIcon,
      link: "https://www.python.org/",
    },
    {
      name: "Java Full Stack Development",
      icon: javaIcon,
      link: "https://www.python.org/",
    },
    {
      name: "Flutter App Development",
      icon: flutterIcon,
      link: "https://www.python.org/",
    },
    {
      name: "MERN Full Stack Development",
      icon: reactIcon,
      link: "https://www.python.org/",
    },
    {
      name: "AR / VR Development",
      icon: arVrIcon,
      link: "https://www.python.org/",
    },
  ];

  const nonItCourses = [
    {
      name: "Digital Marketing",
      icon: digitalMarketIcon,
      link: "https://www.python.org/",
    },
    {
      name: "Human Resources",
      icon: hrIcon,
      link: "https://www.python.org/",
    },
    {
      name: "UI & UX",
      icon: uiUxIcon,
      link: "https://www.python.org/",
    },
    {
      name: "Graphic Designing",
      icon: graphicDesigningIcon,
      link: "https://www.python.org/",
    },
    {
      name: "Data Analystics",
      icon: dataAnalystIcon,
      link: "https://www.python.org/",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl leading-9 mb-8 font-semibold text-[#000080] text-center">
        On The Job Training Programs
      </h2>
      <div className="flex justify-center items-center mb-8">
        <div className="flex space-x-20">
          {courseTitles.map((title, index) => (
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
      <div className="py-12 h-full">
        {activeTab === 0 && (
          <>
            <div className="flex justify-between flex-wrap gap-x-20 gap-y-6">
              {itCourses?.map((item, index) => (
                <Link to={`${item.link}`} key={item.name} className="">
                  <div
                    className={`flex justify-center items-center flex-col w-[150px] h-[150px] text-[#000080] transition-transform transform hover:scale-125 hover:text-[#c50101] duration-300 ${
                      index % 2 === 1 ? "mt-20" : "mt-0"
                    }`}
                  >
                    <img src={item.icon} alt={item.name} width={60} height={60}/>
                    <h1 className="text-center font-semibold ">{item.name}</h1>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-end w-full">
              <Link to={"/courses"}>
                <button className="py-2 px-6 border-0 bg-[#000080] text-white text-xl border-b-[5px] border-r-[5px] flex items-center gap-3">
                  More <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </>
        )}
        {activeTab === 1 && (
          <>
            <div className="flex justify-between flex-wrap gap-x-20 gap-y-6">
              {nonItCourses?.map((item, index) => (
                <Link to={`${item.link}`} key={item.name} className="">
                  <div
                    className={`flex justify-center items-center flex-col w-[150px] h-[150px] text-[#000080] transition-transform transform hover:scale-125 hover:text-[#c50101] duration-300 ${
                      index % 2 === 1 ? "mt-20" : "mt-0"
                    }`}
                  >
                    <img src={item.icon} alt={item.name} width={60} height={60}/>
                    <h1 className="text-center font-semibold ">{item.name}</h1>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-end w-full">
              <Link to={"/courses"}>
                <button className="py-2 px-6 border-0 bg-[#000080] text-white text-xl border-b-[5px] border-r-[5px] flex items-center gap-3">
                  More <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
