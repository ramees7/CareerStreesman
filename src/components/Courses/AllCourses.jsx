import React from "react";
import reactIcon from "../../assets/image/react.png";
import pythonIcon from "../../assets/image/python.png";
import flutterIcon from "../../assets/image/flutter.png";
import javaIcon from "../../assets/image/java.png";
import arVrIcon from "../../assets/image/vr-icon.png";
import digitalMarketIcon from "../../assets/image/Dm.png";
import dataAnalystIcon from "../../assets/image/DA.png";
import dataScienceIcon from "../../assets/image/data-science.png";
import uiUxIcon from "../../assets/image/ui_ux.png";
import hrIcon from "../../assets/image/hr.png";
import cyberSecurityIcon from "../../assets/image/cyber-security.png";
import graphicDesigningIcon from "../../assets/image/graphic-designing.png";
import { FaStar } from "react-icons/fa6";

export default function AllCourses() {
  const courses = [
    {
      icon: javaIcon,
      title: "Java Full Stack",
      topics: [
        "Core Java and Java 8",
        "J2EE",
        "Spring",
        "Microservices",
        "Front End Technologies",
        "React JS",
        "SQL",
        "Projects",
      ],
      link:"//"
    },
    {
      icon: pythonIcon,
      title: "Python Full Stack",
      topics: [
        "Core Python",
        "Advance Python",
        "Django",
        "Rest API",
        "Front End Technologies",
        "React JS",
        "MySQL",
        "Projects",
      ],
      link:"//"
    },
    {
      icon: reactIcon,
      title: "MERN Stack",
      topics: [
        "MongoDB",
        "Express JS",
        "React JS",
        "Node JS",
        "HTML, CSS, and JavaScript",
        "Git & GitHub, and Mongoose",
        "MVC Architecture",
        "Projects",
      ],
      link:"//"
    },
    {
      icon: flutterIcon,
      title: "Flutter App Development",
      topics: [
        "Core Java and Java 8",
        "J2EE",
        "Spring",
        "Microservices",
        "Front End Technologies",
        "React JS",
        "SQL",
        "Projects",
      ],
      link:"//"
    },
    {
      icon: arVrIcon,
      title: "AR /VR Development",
      topics: [
        "Core Python",
        "Advance Python",
        "Django",
        "Rest API",
        "Front End Technologies",
        "React JS",
        "MySQL",
        "Projects",
      ],
      link:"//"
    },
    {
      icon: dataScienceIcon,
      title: "Data Science",
      topics: [
        "MongoDB",
        "Express JS",
        "React JS",
        "Node JS",
        "HTML, CSS, and JavaScript",
        "Git & GitHub, and Mongoose",
        "MVC Architecture",
        "Projects",
      ],
      link:"//"
    },
    {
      icon: cyberSecurityIcon,
      title: "Cyber Security",
      topics: [
        "MongoDB",
        "Express JS",
        "React JS",
        "Node JS",
        "HTML, CSS, and JavaScript",
        "Git & GitHub, and Mongoose",
        "MVC Architecture",
        "Projects",
      ],
      link:"//"
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl leading-9 font-semibold mb-8 text-[#000080] text-center">
          Courses
        </h2>
        {/* <h2 className="text-2xl">IT</h2> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <div>
                <img src={course.icon} alt={course.title} width={50} />
              </div>
              <h3 className="text-2xl font-bold text-[#000080] my-4">
                {course.title}
              </h3>
              <ul className="text-left  space-y-2 mb-6">
                {course.topics.map((topic, i) => (
                  <li key={i} className="flex items-center text-[#000080]">
                    <span className="mr-2 text-[#c50101]">
                      <FaStar />
                    </span>{" "}
                    {topic}
                  </li>
                ))}
              </ul>
              <button className="bg-[#c50101] text-white py-2 px-4 rounded hover:bg-blue-700">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
