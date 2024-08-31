import React from "react";
import reactIcon from "../../assets/image/react.png";
import pythonIcon from "../../assets/image/python.png";
import flutterIcon from "../../assets/image/flutter.png";
import javaIcon from "../../assets/image/java.png";
import arVrIcon from "../../assets/image/vr-icon.png";
import digitalMarketingIcon from "../../assets/image/Dm.png";
import dataAnalystIcon from "../../assets/image/DA.png";
import dataScienceIcon from "../../assets/image/data-science.png";
import uiUxIcon from "../../assets/image/ui_ux.png";
import hrIcon from "../../assets/image/hr.png";
import cyberSecurityIcon from "../../assets/image/cyber-security.png";
import graphicDesigningIcon from "../../assets/image/graphic-designing.png";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AllCourses() {
  const itCourses = [
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
      link: "java-full-stack",
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
      link: "python-full-stack",
    },
    {
      icon: reactIcon,
      title: "MERN Full Stack",
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
      link: "mern-full-stack",
    },
    {
      icon: flutterIcon,
      title: "Flutter App Development",
      topics: [
        "Dart Programming",
        "Flutter Framework",
        "State Management",
        "Responsive Design",
        "Flutter Widgets",
        "Firebase Integration",
        "Publishing Apps",
        "Projects",
      ],
      link: "flutter-app-development",
    },
    {
      icon: arVrIcon,
      title: "AR /VR Development",
      topics: [
        "Unity 3D",
        "C# Programming",
        "AR Foundation",
        "VR Foundation",
        "3D Modeling",
        "Spatial Audio",
        "Publishing AR/VR Apps",
        "Projects",
      ],
      link: "ar-vr-development",
    },
    {
      icon: dataScienceIcon,
      title: "Data Science",
      topics: [
        "Python for Data Science",
        "Data Visualization",
        "Statistics for Data Science",
        "Machine Learning",
        "Deep Learning",
        "Big Data Technologies",
        "Data Science Projects",
        "Projects",
      ],
      link: "data-science",
    },
    {
      icon: cyberSecurityIcon,
      title: "Cyber Security",
      topics: [
        "Network Security",
        "Ethical Hacking",
        "Cryptography",
        "Malware Analysis",
        "Incident Response",
        "Penetration Testing",
        "Cyber Security Tools",
        "Projects",
      ],
      link: "cyber-security",
    },
  ];

  const nonItCourses = [
    {
      icon: digitalMarketingIcon,
      title: "Digital Marketing",
      topics: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Content Marketing",
        "Social Media Marketing",
        "Analytics and Tracking",
        "Email Marketing",
        "Influencer Marketing",
        "Projects",
      ],
      link: "digital-marketing",
    },
    {
      icon: hrIcon,
      title: "Human Resource Management",
      topics: [
        "Recruitment and Selection",
        "Employee Relations",
        "Performance Management",
        "Compensation and Benefits",
        "Training and Development",
        "HR Analytics",
        "Organizational Behavior",
        "Projects",
      ],
      link: "human-resource-management",
    },
    {
      icon: graphicDesigningIcon,
      title: "Graphic Designing",
      topics: [
        "Design Principles",
        "Typography",
        "Color Theory",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Brand Identity Design",
        "Layout and Composition",
        "Projects",
      ],
      link: "graphic-designing",
    },
    {
      icon: uiUxIcon,
      title: "UI / UX Designer",
      topics: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Interaction Design",
        "Usability Testing",
        "Adobe XD / Figma",
        "User Interface Design",
        "Projects",
      ],
      link: "ui-ux-designer",
    },
    {
      icon: dataAnalystIcon,
      title: "Data Analysts",
      topics: [
        "Data Cleaning",
        "Data Visualization",
        "Statistical Analysis",
        "Excel for Data Analysis",
        "SQL for Data Management",
        "Python for Data Analysis",
        "Dashboard Development",
        "Projects",
      ],
      link: "data-analysts",
    },
  ];
  

  return (
    <div className="py-16">
      <div className="container mx-auto">
        {/* <h2 className="text-3xl leading-9 font-semibold mb-8 text-[#000080] text-center">
          On The Job Training
        </h2> */}
        <div>
          <h2 className="text-3xl leading-9 font-semibold mb-8 text-[#000080] text-center">
            IT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {itCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
              >
                <div className="mx-auto">
                  <img src={course.icon} alt={course.title} width={50} />
                </div>
                <h3 className="text-2xl font-bold text-[#000080] my-4 text-center">
                  {course.title}
                </h3>
                <ul className="px-5  space-y-2 mb-6">
                  {course.topics.map((topic, i) => (
                    <li key={i} className="flex items-center text-[#000]">
                      <span className="mr-2 text-[#c50101]">
                        <FaStar />
                      </span>{" "}
                      {topic}
                    </li>
                  ))}
                </ul>
                <Link to={`${course.link}`} className="mx-auto">
                  <button className="bg-[#c50101] text-white py-2 px-4 rounded ">
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* non it */}
        <div className="py-16">
          <h2 className="text-3xl leading-9 font-semibold mb-8 text-[#c50101] text-center">
            Non-IT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {nonItCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
              >
                <div className="mx-auto">
                  <img src={course.icon} alt={course.title} width={50} />
                </div>
                <h3 className="text-2xl font-bold text-[#c50101] my-4 text-center">
                  {course.title}
                </h3>
                <ul className="px-5  space-y-2 mb-6">
                  {course.topics.map((topic, i) => (
                    <li key={i} className="flex items-center text-[#000]">
                      <span className="mr-2 text-[#000080]">
                        <FaStar />
                      </span>{" "}
                      {topic}
                    </li>
                  ))}
                </ul>
                <Link to={`/courses/${course.link}`} className="mx-auto">
                  <button className="bg-[#000080] text-white py-2 px-4 rounded ">
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
