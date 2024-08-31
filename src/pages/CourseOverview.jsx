import React, { useEffect } from "react";
import OverviewLanding from "../components/CourseOverview/OverviewLanding";
import { useLocation } from "react-router-dom";
import javaBgImg from "../assets/image/java-bg.jpg";
import pythonBgImg from "../assets/image/python-bg.jpg";
import mernBgImg from "../assets/image/mern-bg.jpg";
import flutterBgImg from "../assets/image/flutter-bg.jpg";
import CourseHeading from "../components/CourseOverview/CourseHeading";
import htmlIcon from "../assets/image/html-icon.png";
import cssIcon from "../assets/image/css-icon.png";
import jsIcon from "../assets/image/js-icon.png";
import sqlIcon from "../assets/image/sql-icon.png";
import javaIcon from "../assets/image/java.png";
import eclipseIcon from "../assets/image/eclipse-icon.png";
import gitIcon from "../assets/image/git-icon.png";
import gitHubIcon from "../assets/image/github-icon.png";
import pythonIcon from "../assets/image/python.png";
import vsCodeIcon from "../assets/image/vscode.png";
import DetailBox from "../components/CourseOverview/DetailBox";
import Highlights from "../components/CourseOverview/Highlights";

export default function CourseOverview() {
  const location = useLocation();

  const courseDetails = [
    {
      name: "Java Full Stack Developer",
      url: "/courses/java-full-stack",
      bgImg: javaBgImg,
      contentExplain:
        "If you’re looking Best Online Java course & training who make you master of web application development for any online computing platform, so this course is only for you. This ultimate training & course will give you a strong foundation in Java Programming language which widely used in software development.",
      duration: "400+ Hours",
      modeOfTraining: "Online & Offline",
      skillLevel: "Beginner",
      learnersCount: "100+",
      overviewExplain2:
        "This Advanced Java Full Stack Developers Course & Training is designed to guide you through the Main Concept of Java from Beginner to Advanced level of Techniques & skills. This Ultimate Java course & training will also provide you with the Knowledge of Core Java 8, Loops, Operators, Arrays, Constructors & Methods while also giving you real hand experience on project of JUNIT & JDBC frameworks.",
      highlightPoints: [
        "400+ Hours of intensive training",
        "ical projects",
        "Special Programming classes",
        "Get trained by certified trainers",
        "w specific grooming sessions",
        "Career Talks by industry experts",
        "Convenient batch timings",
        "Periodic mock and assessments",
        "Guaranteed 100+ drive opportunities",
        "World class infrastructure",
      ],
      languages: [javaIcon, htmlIcon, jsIcon, cssIcon, sqlIcon],
      tools: [eclipseIcon, gitHubIcon, gitIcon],
      syllabusExplain:
        "The curriculum of this program is designed to aid students in learning to gain knowledge through practical projects that make use of popular technologies such as Java, Java Script, Bootstrap, HTML, CSS and many more. Join the ranks of emerging full stack developers that use their expertise to discover the most effective patterns.",
      hoursTraining: "400+",
      liveProjectCount: "5",
      courseTopics: [
        "Core Java and Java 8",
        "J2EE",
        "Spring",
        "Microservices",
        "Front End Technologies",
        "React JS",
        "SQL",
        "Projects",
      ],
      faq: [
        {
          question: "Why Should I learn Java from Career Streesman?",
          asnwer: [
            "Career Streesman offers java training by instructor who comes with 14+ years experience hands-on Training",
            "100+ Satisfied Students",
            "Certification",
            "Resume Editing",
            "Interview Specific Grooming",
          ],
        },
        {
          question: " What if I miss a class?",
          asnwer:
            "You will get recorded sessions in our LMS where you can learn anywhere and anytime.",
        },
        {
          question: "How can I register for free Demo?",
          asnwer: "You can register at https://careerstreesman/contact.",
        },
        {
          question: "Why choose us for a java Training ?",
          asnwer: [
            "Industry experts will be your trainers",
            "5 Start Rating",
            "100% Placement Assistance",
            "Job Assistance and Web Portal Access for Interview Prepration",
            "India's High Placement Rate.",
          ],
        },
        {
          question: "Why Should I Choose Career Streesman?",
          asnwer: [
            "Most experienced professionals as trainers.",
            "Continuous tracking of the needs of different industries and prepares the trainees for the upcoming trends in markets and technologies",
            "Enables the aspirants be prepared for the future interviews and tests.",
            "324+ tied up companies as client to assist in placement",
            "5 star rating and 98% student satisfaction",
            "Interview Specific training",
          ],
        },
      ],
    },
    {
      name: "Python Full Stack Developer",
      url: "/courses/python-full-stack",
      bgImg: pythonBgImg,
      contentExplain:
        "If you're looking for the best online Python course and training that will make you a master of web application development across various online computing platforms, this course is for you. This comprehensive training will provide you with a strong foundation in Python programming, widely used in software development.",
      duration: "350+ Hours",
      modeOfTraining: "Online & Offline",
      skillLevel: "Beginner to Advanced",
      learnersCount: "150+",
      overviewExplain2:
        "This Advanced Python Full Stack Developers Course & Training is designed to guide you through the core concepts of Python from beginner to advanced levels. This ultimate Python course will also provide you with knowledge of Python fundamentals, object-oriented programming, web frameworks like Django and Flask, and hands-on experience with REST APIs, databases, and front-end technologies.",
      highlightPoints: [
        "350+ Hours of intensive training",
        "Hands-on projects",
        "Special programming sessions",
        "Get trained by certified trainers",
        "Interview-specific grooming sessions",
        "Career talks by industry experts",
        "Flexible batch timings",
        "Regular mock tests and assessments",
        "Guaranteed 100+ placement opportunities",
        "State-of-the-art infrastructure",
      ],
      languages: [pythonIcon, htmlIcon, jsIcon, cssIcon, sqlIcon],
      tools: [vsCodeIcon, gitHubIcon, gitIcon],
      syllabusExplain:
        "The curriculum of this program is designed to help students gain practical experience through projects that utilize popular technologies like Python, JavaScript, Bootstrap, HTML, CSS, and more. Join the ranks of emerging full stack developers using their skills to solve complex problems and build robust applications.",
      hoursTraining: "350+",
      liveProjectCount: "4",
      courseTopics: [
        "Python Fundamentals",
        "Object-Oriented Programming",
        "Django Framework",
        "Flask Framework",
        "REST APIs",
        "Front End Technologies",
        "React JS",
        "SQL",
        "Capstone Projects",
      ],
      faq: [
        {
          question: "Why should I learn Python from Career Streesman?",
          answer: [
            "Instructors with 4+ years of hands-on experience in Python training",
            "150+ satisfied students",
            "Industry-recognized certification",
            "Resume building and editing services",
            "Interview-specific grooming",
          ],
        },
        {
          question: "What if I miss a class?",
          answer:
            "You will get recorded sessions in our Learning Management System (LMS), which you can access anytime and anywhere.",
        },
        {
          question: "How can I register for a free demo?",
          answer: "You can register at https://careerstreesman/contact.",
        },
        {
          question: "Why choose us for Python training?",
          answer: [
            "Training by industry experts",
            "5-star course rating",
            "100% placement assistance",
            "Job assistance and access to a web portal for interview preparation",
            "High placement rate in India",
          ],
        },
        {
          question: "Why should I choose Career Streesman?",
          answer: [
            "Highly experienced professionals as trainers",
            "Continuous monitoring of industry trends to prepare students for future job markets",
            "Prepares aspirants for future interviews and assessments",
            "324+ partnered companies for placement assistance",
            "5-star rating and 98% student satisfaction",
            "Interview-specific training",
          ],
        },
      ],
    },
    {
      name: "MERN Full Stack Developer",
      url: "/courses/mern-full-stack",
      bgImg: mernBgImg,
    },
    {
      name: "Flutter App Development",
      url: "/courses/flutter-app-development",
      bgImg: flutterBgImg,
    },
    {
      name: "AR /VR Development",
      url: "/courses/ar-vr-development",
      bgImg: javaBgImg,
    },
    {
      name: "Data Science",
      url: "/courses/data-science",
      bgImg: javaBgImg,
    },
    {
      name: "Cyber Security",
      url: "/courses/cyber-security",
      bgImg: javaBgImg,
    },
    {
      name: "Digital Marketing",
      url: "/courses/digital-marketing",
      bgImg: javaBgImg,
    },
    {
      name: "Human Resource Management",
      url: "/courses/human-resource-management",
      bgImg: javaBgImg,
    },
    {
      name: "Graphic Designing",
      url: "/courses/graphic-designing",
      bgImg: javaBgImg,
    },
    {
      name: "UI / UX Designer",
      url: "/courses/ui-ux-designer",
      bgImg: javaBgImg,
    },
    {
      name: "Data Analysts",
      url: "/courses/data-analysts",
      bgImg: javaBgImg,
    },
  ];

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, []);

  return (
    <div>
      <div>
        {courseDetails?.map(
          (item) =>
            item.url === location.pathname && (
              <div key={item.name}>
                <OverviewLanding courseDetails={item} />
                <div className="xl:px-52 lg:px-40 md:px-28 px-5 bg-[#eaeff5]">
                  <CourseHeading courseDetails={item} />
                </div>
                <div
                  className="xl:px-52 lg:px-40 md:px-28 px-5 py-16"
                  style={{
                    background:
                      "linear-gradient(94deg, rgba(0,0,128,1) 0%, rgba(197,1,1,1) 100%)",
                  }}
                >
                  <DetailBox courseDetails={item} />
                </div>
                <div className="xl:px-52 lg:px-40 md:px-28 px-5 py-16 bg-[#eaeff5]">
                  <Highlights courseDetails={item} />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
