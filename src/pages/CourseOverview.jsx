import React, { useEffect } from "react";
import OverviewLanding from "../components/CourseOverview/OverviewLanding";
import { useLocation } from "react-router-dom";
import javaBgImg from "../assets/image/java-bg.jpg";
import pythonBgImg from "../assets/image/python-bg.jpg";
import mernBgImg from "../assets/image/mern-bg.jpg";
import flutterBgImg from "../assets/image/flutter-bg.jpg";
import arVrBgImg from "../assets/image/ar-vr-bg.jpg";
import dataScienceBgImg from "../assets/image/ds-bg.jpg";
import cyberSecurityBgImg from "../assets/image/cybersecurity-bg.jpg";
import digitalMarketingBgImg from "../assets/image/DM-bg.jpg";
import hrManagementBgImg from "../assets/image/hr-bg.jpg";
import graphicDesigningBgImg from "../assets/image/graphicdesigning-bg.jpg";
import dataAnalystsBgImg from "../assets/image/DA-bg.jpg";
import uiUxDesignerBgImg from "../assets/image/ui_ux-bg.jpg";
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
import reactIcon from "../assets/image/react.png";
import nodeJsIcon from "../assets/image/node-icon.png";
import npmIcon from "../assets/image/npm-icon.png";
import dartIcon from "../assets/image/dart-icon.png";
import firebaseIcon from "../assets/image/firebase-icon.png";
import flutterIcon from "../assets/image/flutter.png";
import cSharpIcon from "../assets/image/cSharpIcon.png";
import cPlusPlusIcon from "../assets/image/cPlusPlusIcon.png";
import unityIcon from "../assets/image/unityIcon.png";
import unrealEngineIcon from "../assets/image/unrealEngineIcon.png";
import blenderIcon from "../assets/image/blenderIcon.png";
import mayaIcon from "../assets/image/mayaIcon.png";
import jupyterIcon from "../assets/image/jupyterIcon.png";
import tableauIcon from "../assets/image/tableauIcon.png";
import powerBiIcon from "../assets/image/powerBiIcon.png";
import bashIcon from "../assets/image/bashIcon.png";
import kaliLinuxIcon from "../assets/image/kaliLinuxIcon.png";
import wiresharkIcon from "../assets/image/wiresharkIcon.png";
import metasploitIcon from "../assets/image/metasploitIcon.png";
import nessusIcon from "../assets/image/nessusIcon.png";
import googleAnalyticsIcon from "../assets/image/googleAnalyticsIcon.png";
import facebookAdsIcon from "../assets/image/facebookAdsIcon.png";
import googleAdsIcon from "../assets/image/googleAdsIcon.png";
import semrushIcon from "../assets/image/semrushIcon.png";
import ahrefsIcon from "../assets/image/ahrefsIcon.png";
import mailchimpIcon from "../assets/image/mailchimpIcon.png";
import hubspotIcon from "../assets/image/hubspotIcon.png";
import excelIcon from "../assets/image/excelIcon.png";
import workdayIcon from "../assets/image/workdayIcon.png";
import bamboohrIcon from "../assets/image/bamboohrIcon.png";
import linkedinIcon from "../assets/image/linkedinIcon.png";
import hrsoftIcon from "../assets/image/hrsoftIcon.png";
import adobePhotoshopIcon from "../assets/image/adobePhotoshopIcon.png";
import adobeIllustratorIcon from "../assets/image/adobeIllustratorIcon.png";
import adobeInDesignIcon from "../assets/image/adobeInDesignIcon.png";
import figmaIcon from "../assets/image/figmaIcon.png";
import sketchIcon from "../assets/image/sketchIcon.png";
import adobeXDIcon from "../assets/image/adobeXDIcon.png";
import canvaIcon from "../assets/image/canvaIcon.png";
import invisionIcon from "../assets/image/invisionIcon.png";
import zeplinIcon from "../assets/image/zeplinIcon.png";
import prototypingIcon from "../assets/image/prototypingIcon.png";
import DetailBox from "../components/CourseOverview/DetailBox";
import Highlights from "../components/CourseOverview/Highlights";
import FAQ from "../components/CourseOverview/FAQ";
import CareerFootPrint from "../components/Courses/CareerFootPrint";
import CareerStats from "../components/Courses/CareerStats";
import { Helmet } from "react-helmet-async";

export default function CourseOverview() {
  const location = useLocation();

  const syllabusDetail = true;

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
      languages: [
        { img: javaIcon, name: "Java" },
        { img: htmlIcon, name: "HTML" },
        { img: jsIcon, name: "JavaScript" },
        { img: cssIcon, name: "CSS" },
        { img: sqlIcon, name: "SQL" },
      ],
      tools: [
        { img: eclipseIcon, name: "Eclipse" },
        { img: gitHubIcon, name: "GitHub" },
        { img: gitIcon, name: "Git" },
      ],
      syllabusExplain:
        "The curriculum of this program is designed to aid students in learning to gain knowledge through practical projects that make use of popular technologies such as Java, Java Script, Bootstrap, HTML, CSS and many more. Join the ranks of emerging full stack developers that use their expertise to discover the most effective patterns.",
      hoursTraining: "400+",
      liveProjectCount: "5",
      faq: [
        {
          question: "Why Should I learn Java from Career Streesman?",
          answer: [
            "Career Streesman offers java training by instructor who comes with 14+ years experience hands-on Training",
            "100+ Satisfied Students",
            "Certification",
            "Resume Editing",
            "Interview Specific Grooming",
          ],
        },
        {
          question: " What if I miss a class?",
          answer: [
            "You will get recorded sessions in our LMS where you can learn anywhere and anytime.",
          ],
        },
        {
          question: "How can I register for free Demo?",
          answer: ["You can register at https://careerstreesman/contact."], // Corrected
        },
        {
          question: "Why choose us for a java Training ?",
          answer: [
            "Industry experts will be your trainers",
            "5 Start Rating",
            "100% Placement Assistance",
            "Job Assistance and Web Portal Access for Interview Prepration",
            "India's High Placement Rate.",
          ],
        },
        {
          question: "Why Should I Choose Career Streesman?",
          answer: [
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
      languages: [
        { img: pythonIcon, name: "Python" },
        { img: htmlIcon, name: "HTML" },
        { img: jsIcon, name: "JavaScript" },
        { img: cssIcon, name: "CSS" },
        { img: sqlIcon, name: "SQL" },
      ],
      tools: [
        { img: vsCodeIcon, name: "VS Code" },
        { img: gitHubIcon, name: "GitHub" },
        { img: gitIcon, name: "Git" },
      ],
      syllabusExplain:
        "The curriculum of this program is designed to help students gain practical experience through projects that utilize popular technologies like Python, JavaScript, Bootstrap, HTML, CSS, and more. Join the ranks of emerging full stack developers using their skills to solve complex problems and build robust applications.",
      hoursTraining: "350+",
      liveProjectCount: "4",

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
          answer: [
            "You will get recorded sessions in our Learning Management System (LMS), which you can access anytime and anywhere.",
          ],
        },
        {
          question: "How can I register for a free demo?",
          answer: ["You can register at https://careerstreesman/contact."],
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
      contentExplain:
        "This comprehensive MERN Stack course will equip you with the skills needed to become a full-stack web developer. Covering everything from basic JavaScript to advanced React, MongoDB, Express, and Node.js, this course is designed for those looking to master both front-end and back-end development.",
      duration: "300+ Hours",
      modeOfTraining: "Online & Offline",
      skillLevel: "Beginner to Advanced",
      learnersCount: "200+",
      overviewExplain2:
        "The MERN Full Stack Developer Course provides in-depth knowledge and hands-on experience with the core technologies of the MERN stack. You'll learn how to build modern, scalable web applications using MongoDB, Express.js, React, and Node.js, alongside essential tools and best practices.",
      highlightPoints: [
        "300+ Hours of intensive training",
        "Hands-on projects with real-world scenarios",
        "Expert guidance from seasoned professionals",
        "Interview preparation and career support",
        "Flexible schedules with weekday and weekend batches",
        "Regular assessments to track progress",
        "Access to a dedicated learning community",
        "Comprehensive study materials and resources",
        "State-of-the-art training facilities",
      ],
      languages: [
        { img: jsIcon, name: "JavaScript" },
        { img: reactIcon, name: "React" },
        { img: nodeJsIcon, name: "Node.js" },
        { img: htmlIcon, name: "HTML" },
        { img: cssIcon, name: "CSS" },
      ],
      tools: [
        { img: vsCodeIcon, name: "VS Code" },
        { img: gitHubIcon, name: "GitHub" },
        { img: gitIcon, name: "Git" },
        { img: npmIcon, name: "npm" },
      ],
      syllabusExplain:
        "The syllabus is crafted to provide hands-on experience with building full-stack applications using the MERN stack. You'll work on multiple projects that integrate front-end and back-end technologies, preparing you for real-world development challenges.",
      hoursTraining: "300+",
      liveProjectCount: "3",
      faq: [
        {
          question: "Why should I learn the MERN stack from Career Streesman?",
          answer: [
            "Trainers with extensive experience in full-stack development",
            "200+ successfully trained students",
            "Hands-on project experience with real-world applications",
            "Supportive learning environment with a focus on practical skills",
            "Industry-recognized certification upon completion",
          ],
        },
        {
          question: "What if I miss a class?",
          answer: [
            "All sessions are recorded and available in our Learning Management System (LMS) for you to watch anytime.",
          ],
        },
        {
          question: "How can I register for a free demo?",
          answer: [
            "Visit https://careerstreesman/contact to register for a free demo session.",
          ],
        },
        {
          question: "Why choose us for MERN stack training?",
          answer: [
            "Expert trainers with real-world development experience",
            "High course ratings from previous students",
            "Comprehensive career support including job assistance and interview preparation",
            "Access to a network of hiring partners",
          ],
        },
        {
          question: "Why should I choose Career Streesman?",
          answer: [
            "Dedicated mentors with a track record of successful training",
            "Up-to-date curriculum aligned with industry standards",
            "Extensive placement support with a high success rate",
            "Commitment to student satisfaction and quality education",
          ],
        },
      ],
    },
    {
      name: "Flutter App Development",
      url: "/courses/flutter-app-development",
      bgImg: flutterBgImg,
      contentExplain:
        "The Flutter App Development course is designed to teach you how to build beautiful and responsive mobile applications using Flutter, Google's UI toolkit for crafting natively compiled applications for mobile, web, and desktop from a single codebase. This course covers everything from the basics of Dart programming to advanced Flutter concepts.",
      duration: "200+ Hours",
      modeOfTraining: "Online & Offline",
      skillLevel: "Beginner to Advanced",
      learnersCount: "120+",
      overviewExplain2:
        "This comprehensive course on Flutter App Development will take you through all the essential concepts of building applications with Flutter. You will learn how to use Flutter's widgets to create visually appealing UI, manage state effectively, and integrate backend services to build full-featured apps. Gain hands-on experience with building cross-platform applications using Dart, and enhance your portfolio with impressive projects.",
      highlightPoints: [
        "200+ Hours of hands-on training",
        "Learn from certified Flutter developers",
        "Build multiple real-world projects",
        "Access to a supportive learning community",
        "Flexible training modes and timings",
        "Comprehensive study materials and resources",
        "Live code reviews and feedback",
        "Mock interviews and career counseling",
        "Exclusive access to our job placement network",
        "Modern classrooms and online learning tools",
      ],
      languages: [
        { img: dartIcon, name: "Dart" },
        { img: flutterIcon, name: "Flutter" },
      ],
      tools: [
        { img: vsCodeIcon, name: "VS Code" },
        // { img: xcodeIcon, name: "Xcode" },
        { img: firebaseIcon, name: "Firebase" },
      ],
      syllabusExplain:
        "The curriculum is designed to provide a complete understanding of Flutter and Dart programming. You will start with the basics and advance to more complex topics like state management, animations, and integrating APIs. Throughout the course, you'll work on multiple projects that demonstrate the power of Flutter for cross-platform app development.",
      hoursTraining: "200+",
      liveProjectCount: "3",
      faq: [
        {
          question: "Why should I learn Flutter from Career Streesman?",
          answer: [
            "Expert trainers with years of experience in Flutter development",
            "Hands-on training with real-world projects",
            "Access to the latest industry tools and techniques",
            "Supportive learning environment with peer and mentor feedback",
            "Job placement assistance and career guidance",
          ],
        },
        {
          question: "What if I miss a class?",
          answer: [
            "You can access recorded sessions anytime through our Learning Management System (LMS).",
          ],
        },
        {
          question: "How can I register for a free demo?",
          answer: [
            "You can register for a free demo by visiting https://careerstreesman/contact.",
          ],
        },
        {
          question: "Why choose us for Flutter training?",
          answer: [
            "Industry-aligned curriculum with up-to-date tools and practices",
            "Highly rated by past students for quality of instruction",
            "Extensive support for career development and job placement",
            "Strong focus on practical skills and real-world application",
          ],
        },
        {
          question: "Why should I choose Career Streesman?",
          answer: [
            "Expert-led training by industry professionals",
            "Dedicated support for every student's success",
            "Strong network of hiring partners and high placement rate",
            "Comprehensive resources and materials for continuous learning",
            "Interactive and engaging learning environment",
          ],
        },
      ],
    },
    {
      name: "AR / VR Development",
      url: "/courses/ar-vr-development",
      bgImg: arVrBgImg,
      contentExplain:
        "The AR/VR Development course offers a deep dive into creating immersive experiences using Augmented Reality (AR) and Virtual Reality (VR) technologies. This course covers the fundamentals of AR/VR development, including tools, frameworks, and best practices, enabling you to build innovative applications for various platforms.",
      duration: "250+ Hours",
      modeOfTraining: "Online & Offline",
      skillLevel: "Beginner to Advanced",
      learnersCount: "80+",
      overviewExplain2:
        "This course provides a comprehensive understanding of AR and VR technologies, focusing on practical skills and hands-on experience. You will learn to create AR/VR applications using popular frameworks and tools, including Unity and Unreal Engine. The course also covers essential topics such as 3D modeling, spatial computing, and user interaction design in immersive environments.",
      highlightPoints: [
        "250+ Hours of extensive training",
        "Hands-on experience with Unity and Unreal Engine",
        "Develop real-world AR/VR projects",
        "Expert instructors with industry experience",
        "Flexible learning options and schedules",
        "Access to cutting-edge AR/VR hardware and software",
        "Regular assessments and feedback",
        "Career support and job placement assistance",
        "Networking opportunities with industry professionals",
        "Innovative and immersive learning environment",
      ],
      languages: [
        { img: cSharpIcon, name: "C#" },
        { img: cPlusPlusIcon, name: "C++" },
      ],
      tools: [
        { img: unityIcon, name: "Unity" },
        { img: unrealEngineIcon, name: "Unreal Engine" },
        { img: blenderIcon, name: "Blender" },
        { img: mayaIcon, name: "Maya" },
      ],
      syllabusExplain:
        "The syllabus covers the essential aspects of AR/VR development, including 3D modeling, spatial design, interaction techniques, and platform-specific considerations. You will work on multiple projects to gain hands-on experience with AR/VR tools and technologies, preparing you to create innovative applications for diverse industries.",
      hoursTraining: "250+",
      liveProjectCount: "4",
      faq: [
        {
          question:
            "Why should I learn AR/VR development from Career Streesman?",
          answer: [
            "Learn from experienced professionals in AR/VR development",
            "Hands-on training with industry-standard tools and technologies",
            "Build a portfolio of real-world AR/VR projects",
            "Access to advanced AR/VR hardware and software",
            "Comprehensive career support and job placement services",
          ],
        },
        {
          question: "What if I miss a class?",
          answer: [
            "All sessions are recorded and available for review in our Learning Management System (LMS).",
          ],
        },
        {
          question: "How can I register for a free demo?",
          answer: [
            "You can register for a free demo session at https://careerstreesman/contact.",
          ],
        },
        {
          question: "Why choose us for AR/VR training?",
          answer: [
            "Cutting-edge curriculum and technology",
            "Expert trainers with a track record of successful projects",
            "Practical experience with AR/VR development",
            "High-quality training with career advancement support",
          ],
        },
        {
          question: "Why should I choose Career Streesman?",
          answer: [
            "Expert-led courses with a focus on emerging technologies",
            "Strong industry connections and placement assistance",
            "Commitment to providing a top-notch learning experience",
            "Innovative training methods and supportive learning environment",
          ],
        },
      ],
    },
    {
      name: "Data Science",
      url: "/courses/data-science",
      bgImg: dataScienceBgImg,
      contentExplain:
        "The Data Science course is designed to provide you with a comprehensive understanding of data analysis, statistical methods, and machine learning. This course covers everything from data wrangling to advanced analytics techniques, equipping you with the skills to make data-driven decisions and solve complex problems using data.",
      duration: "300+ Hours",
      modeOfTraining: "Online & Offline",
      skillLevel: "Beginner to Advanced",
      learnersCount: "200+",
      overviewExplain2:
        "This course in Data Science will take you through the essential concepts and tools required for a successful career in the field. You will learn how to use Python and R for data analysis, build predictive models, and visualize data using popular tools like Tableau and Power BI. Gain hands-on experience with real-world data and projects to enhance your practical skills.",
      highlightPoints: [
        "300+ Hours of in-depth training",
        "Hands-on projects and case studies",
        "Expert instructors with industry experience",
        "Training in Python, R, and SQL",
        "Data visualization with Tableau and Power BI",
        "Comprehensive coverage of machine learning algorithms",
        "Access to real-world datasets",
        "Flexible learning schedules",
        "Career support and job placement assistance",
        "Modern classrooms and online learning resources",
      ],
      languages: [
        { img: pythonIcon, name: "Python" },
        { img: sqlIcon, name: "SQL" },
      ],
      tools: [
        { img: jupyterIcon, name: "Jupyter Notebook" },
        { img: tableauIcon, name: "Tableau" },
        { img: powerBiIcon, name: "Power BI" },
      ],
      syllabusExplain:
        "The syllabus includes a detailed exploration of data science concepts, starting from basic data manipulation to advanced machine learning techniques. You will work on projects that involve data collection, cleaning, analysis, and visualization. The course is designed to build a strong foundation and advanced skills for tackling real-world data science challenges.",
      hoursTraining: "300+",
      liveProjectCount: "5",
      faq: [
        {
          question: "Why should I learn Data Science from Career Streesman?",
          answer: [
            "Experienced instructors with industry expertise",
            "Comprehensive curriculum covering essential tools and techniques",
            "Hands-on projects with real-world data",
            "Strong focus on practical skills and career development",
            "Job placement assistance and career support",
          ],
        },
        {
          question: "What if I miss a class?",
          answer: [
            "All classes are recorded and available on our Learning Management System (LMS). You can review them at your convenience.",
          ],
        },
        {
          question: "How can I register for a free demo?",
          answer: [
            "Register for a free demo at https://careerstreesman/contact.",
          ],
        },
        {
          question: "Why choose us for Data Science training?",
          answer: [
            "Up-to-date curriculum with industry relevance",
            "Expert trainers and hands-on learning approach",
            "Comprehensive career services and support",
            "Access to a network of hiring partners and job opportunities",
          ],
        },
        {
          question: "Why should I choose Career Streesman?",
          answer: [
            "Top-rated courses with a focus on quality education",
            "Experienced professionals as trainers",
            "Strong track record of student success and job placements",
            "Innovative training methods and resources for continuous learning",
          ],
        },
      ],
    },
    {
      name: "Cyber Security",
      url: "/courses/cyber-security",
      bgImg: cyberSecurityBgImg,
      contentExplain:
        "The Cyber Security course is designed to provide a comprehensive understanding of the principles and practices necessary to protect systems and data from cyber threats. You will learn about security protocols, threat analysis, and defensive techniques to safeguard networks and information from cyber attacks.",
      duration: "250+ Hours",
      modeOfTraining: "Online & Offline",
      skillLevel: "Beginner to Advanced",
      learnersCount: "150+",
      overviewExplain2:
        "This course covers a broad range of topics in Cyber Security, including network security, ethical hacking, cryptography, and incident response. You will gain hands-on experience with security tools and techniques used to protect against a variety of cyber threats. The course is designed to build a solid foundation in cyber security and prepare you for industry certifications.",
      highlightPoints: [
        "250+ Hours of intensive training",
        "Hands-on labs and real-world scenarios",
        "Expert instructors with industry experience",
        "Training on ethical hacking and penetration testing",
        "Comprehensive coverage of security frameworks and protocols",
        "Access to advanced security tools and software",
        "Flexible learning options and schedules",
        "Career support and job placement assistance",
        "Up-to-date curriculum reflecting current industry standards",
        "Interactive learning environment with practical applications",
      ],
      languages: [
        { img: pythonIcon, name: "Python" },
        { img: bashIcon, name: "Bash" },
      ],
      tools: [
        { img: kaliLinuxIcon, name: "Kali Linux" },
        { img: wiresharkIcon, name: "Wireshark" },
        { img: metasploitIcon, name: "Metasploit" },
        { img: nessusIcon, name: "Nessus" },
      ],
      syllabusExplain:
        "The syllabus is designed to provide a thorough understanding of cyber security concepts and techniques. You will learn about network security, threat management, vulnerability assessment, and incident response. The course includes practical labs and projects to apply your knowledge in real-world scenarios, preparing you for a career in cyber security.",
      hoursTraining: "250+",
      liveProjectCount: "4",
      faq: [
        {
          question: "Why should I learn Cyber Security from Career Streesman?",
          answer: [
            "Trainers with extensive experience in cyber security",
            "Hands-on labs and practical scenarios",
            "Comprehensive coverage of industry standards and practices",
            "Career support including job placement and certification assistance",
            "Access to advanced security tools and resources",
          ],
        },
        {
          question: "What if I miss a class?",
          answer: [
            "Recorded sessions are available on our Learning Management System (LMS) for you to review at your convenience.",
          ],
        },
        {
          question: "How can I register for a free demo?",
          answer: [
            "You can register for a free demo at https://careerstreesman/contact.",
          ],
        },
        {
          question: "Why choose us for Cyber Security training?",
          answer: [
            "Industry-relevant curriculum with up-to-date practices",
            "Experienced instructors with real-world expertise",
            "Practical training with hands-on labs and projects",
            "Strong career support and placement services",
          ],
        },
        {
          question: "Why should I choose Career Streesman?",
          answer: [
            "High-quality training with a focus on student success",
            "Experienced professionals as trainers",
            "Strong network of industry connections and placement assistance",
            "Innovative learning methods and resources for effective education",
          ],
        },
      ],
    },
    {
      name: "Digital Marketing",
      url: "/courses/digital-marketing",
      bgImg: digitalMarketingBgImg,
      contentExplain:
        "The Digital Marketing course is designed to provide a thorough understanding of online marketing strategies and tools. Learn how to create and implement effective digital marketing campaigns, optimize your online presence, and analyze performance metrics to drive business growth.",
      duration: "200+ Hours",
      modeOfTraining: "Online & Offline",
      skillLevel: "Beginner to Advanced",
      learnersCount: "180+",
      overviewExplain2:
        "This course covers a wide range of digital marketing techniques including SEO, SEM, content marketing, social media marketing, email marketing, and analytics. You will gain hands-on experience with tools and strategies to attract and engage customers, optimize conversion rates, and measure the effectiveness of your marketing efforts.",
      highlightPoints: [
        "200+ Hours of comprehensive training",
        "Hands-on projects and real-world case studies",
        "Expert instructors with industry experience",
        "Training in SEO, SEM, content marketing, and more",
        "Practical experience with digital marketing tools and platforms",
        "Flexible learning options and schedules",
        "Career support including job placement and resume building",
        "Access to industry-standard tools and resources",
        "Interactive learning environment with live workshops",
        "Up-to-date curriculum reflecting current digital marketing trends",
      ],
      languages: [
        { img: googleAnalyticsIcon, name: "Google Analytics" },
        { img: facebookAdsIcon, name: "Facebook Ads" },
        { img: googleAdsIcon, name: "Google Ads" },
      ],
      tools: [
        { img: semrushIcon, name: "SEMrush" },
        { img: ahrefsIcon, name: "Ahrefs" },
        { img: mailchimpIcon, name: "Mailchimp" },
        { img: hubspotIcon, name: "HubSpot" },
      ],
      syllabusExplain:
        "The syllabus includes a comprehensive exploration of digital marketing strategies and tools. You will learn how to develop and execute marketing plans, manage social media campaigns, optimize websites for search engines, and analyze marketing data. The course features practical assignments and real-world case studies to build your expertise.",
      hoursTraining: "200+",
      liveProjectCount: "3",
      faq: [
        {
          question:
            "Why should I learn Digital Marketing from Career Streesman?",
          answer: [
            "Experienced instructors with practical industry knowledge",
            "Hands-on training with real-world marketing tools and platforms",
            "Comprehensive coverage of digital marketing techniques",
            "Career support including job placement and portfolio development",
            "Up-to-date curriculum aligned with current digital marketing trends",
          ],
        },
        {
          question: "What if I miss a class?",
          answer: [
            "Recorded sessions are available on our Learning Management System (LMS) for you to review at your convenience.",
          ],
        },
        {
          question: "How can I register for a free demo?",
          answer: [
            "You can register for a free demo at https://careerstreesman/contact.",
          ],
        },
        {
          question: "Why choose us for Digital Marketing training?",
          answer: [
            "In-depth training with industry-relevant content",
            "Expert trainers and hands-on projects",
            "Comprehensive career support and job placement services",
            "Access to a network of industry professionals and resources",
          ],
        },
        {
          question: "Why should I choose Career Streesman?",
          answer: [
            "High-quality training with a focus on student success",
            "Experienced professionals as trainers",
            "Strong network of industry connections and placement assistance",
            "Innovative learning methods and up-to-date curriculum",
          ],
        },
      ],
    },
    {
      name: "Human Resource Management",
      url: "/courses/human-resource-management",
      bgImg: hrManagementBgImg,
      contentExplain:
        "The Human Resource Management course is designed to provide a comprehensive understanding of HR practices and principles. Learn how to effectively manage employee relations, recruitment, performance, and compliance to support organizational goals and foster a positive workplace environment.",
      duration: "180+ Hours",
      modeOfTraining: "Online & Offline",
      skillLevel: "Beginner to Advanced",
      learnersCount: "120+",
      overviewExplain2:
        "This course covers key aspects of Human Resource Management, including talent acquisition, employee engagement, performance management, compensation and benefits, and HR compliance. You will gain practical skills in managing human capital, implementing HR strategies, and handling HR challenges in diverse organizational settings.",
      highlightPoints: [
        "180+ Hours of detailed training",
        "Hands-on projects and case studies",
        "Experienced instructors with HR industry expertise",
        "Training in recruitment, performance management, and employee relations",
        "Practical experience with HR tools and software",
        "Flexible learning options and schedules",
        "Career support including job placement and resume enhancement",
        "Access to industry best practices and resources",
        "Interactive learning environment with real-world scenarios",
        "Up-to-date curriculum reflecting current HR trends and practices",
      ],
      languages: [{ img: excelIcon, name: "Excel" }],
      tools: [
        { img: workdayIcon, name: "Workday" },
        { img: bamboohrIcon, name: "BambooHR" },
        { img: linkedinIcon, name: "LinkedIn Recruiter" },
        { img: hrsoftIcon, name: "HRSoft" },
      ],
      syllabusExplain:
        "The syllabus includes a thorough examination of Human Resource Management practices, focusing on areas such as strategic HRM, recruitment and selection, employee development, and HR analytics. The course features practical assignments and case studies to develop your skills in managing HR functions and addressing organizational needs.",
      hoursTraining: "180+",
      liveProjectCount: "3",
      faq: [
        {
          question:
            "Why should I learn Human Resource Management from Career Streesman?",
          answer: [
            "Experienced instructors with real-world HR expertise",
            "Comprehensive training on all key HR functions",
            "Hands-on projects and practical assignments",
            "Career support including job placement and resume building",
            "Access to industry-standard HR tools and resources",
          ],
        },
        {
          question: "What if I miss a class?",
          answer: [
            "All classes are recorded and available on our Learning Management System (LMS) for you to review at your convenience.",
          ],
        },
        {
          question: "How can I register for a free demo?",
          answer: [
            "You can register for a free demo at https://careerstreesman/contact.",
          ],
        },
        {
          question: "Why choose us for Human Resource Management training?",
          answer: [
            "In-depth coverage of HR principles and practices",
            "Expert trainers and practical learning approach",
            "Strong career support and job placement services",
            "Up-to-date curriculum aligned with current HR trends",
          ],
        },
        {
          question: "Why should I choose Career Streesman?",
          answer: [
            "High-quality training with a focus on student success",
            "Experienced professionals as trainers",
            "Strong network of industry connections and placement assistance",
            "Innovative learning methods and comprehensive resources",
          ],
        },
      ],
    },
    {
      name: "Graphic Designing",
      url: "/courses/graphic-designing",
      bgImg: graphicDesigningBgImg,
      contentExplain:
        "The Graphic Designing course is crafted to equip you with the skills necessary to create visually compelling designs for various media. Learn the fundamentals of design principles, typography, color theory, and software tools to bring your creative ideas to life and make a mark in the design industry.",
      duration: "200+ Hours",
      modeOfTraining: "Online & Offline",
      skillLevel: "Beginner to Advanced",
      learnersCount: "160+",
      overviewExplain2:
        "This course covers a broad spectrum of graphic design topics, including layout design, digital illustration, photo editing, and branding. Gain hands-on experience with industry-standard software and techniques to create stunning visuals for print and digital platforms. Build a portfolio of design projects to showcase your skills and enhance your career prospects.",
      highlightPoints: [
        "200+ Hours of comprehensive training",
        "Hands-on projects and real-world design challenges",
        "Experienced instructors with professional design backgrounds",
        "Training in Adobe Creative Suite, Sketch, and other design tools",
        "Practical experience with branding, UI/UX, and print design",
        "Flexible learning options and schedules",
        "Career support including job placement and portfolio development",
        "Access to industry-standard design resources and tools",
        "Interactive learning environment with live workshops",
        "Up-to-date curriculum reflecting current design trends and practices",
      ],
      languages: [
        { img: adobePhotoshopIcon, name: "Adobe Photoshop" },
        { img: adobeIllustratorIcon, name: "Adobe Illustrator" },
        { img: adobeInDesignIcon, name: "Adobe InDesign" },
      ],
      tools: [
        { img: sketchIcon, name: "Sketch" },
        { img: figmaIcon, name: "Figma" },
        { img: adobeXDIcon, name: "Adobe XD" },
        { img: canvaIcon, name: "Canva" },
      ],
      syllabusExplain:
        "The syllabus covers essential graphic design principles and techniques, from basic design theory to advanced software skills. You will work on various design projects, including logo design, digital illustrations, and marketing materials. The course emphasizes practical skills and creative problem-solving to prepare you for a successful career in graphic design.",
      hoursTraining: "200+",
      liveProjectCount: "4",
      faq: [
        {
          question:
            "Why should I learn Graphic Designing from Career Streesman?",
          answer: [
            "Experienced instructors with real-world design expertise",
            "Comprehensive training on essential design tools and principles",
            "Hands-on projects and practical assignments",
            "Career support including job placement and portfolio development",
            "Access to industry-standard design tools and resources",
          ],
        },
        {
          question: "What if I miss a class?",
          answer: [
            "Recorded sessions are available on our Learning Management System (LMS) for you to review at your convenience.",
          ],
        },
        {
          question: "How can I register for a free demo?",
          answer: [
            "You can register for a free demo at https://careerstreesman/contact.",
          ],
        },
        {
          question: "Why choose us for Graphic Designing training?",
          answer: [
            "In-depth coverage of graphic design principles and tools",
            "Expert trainers with industry experience",
            "Practical learning approach with real-world projects",
            "Strong career support and job placement services",
          ],
        },
        {
          question: "Why should I choose Career Streesman?",
          answer: [
            "High-quality training with a focus on student success",
            "Experienced professionals as trainers",
            "Strong network of industry connections and placement assistance",
            "Innovative learning methods and comprehensive resources",
          ],
        },
      ],
    },
    {
      name: "UI / UX Designer",
      url: "/courses/ui-ux-designer",
      bgImg: uiUxDesignerBgImg,
      contentExplain:
        "The UI/UX Designer course is designed to provide a deep understanding of user interface and user experience design principles. Learn how to create intuitive, user-friendly designs for web and mobile applications by mastering design thinking, wireframing, prototyping, and usability testing.",
      duration: "220+ Hours",
      modeOfTraining: "Online & Offline",
      skillLevel: "Beginner to Advanced",
      learnersCount: "140+",
      overviewExplain2:
        "This course covers the core aspects of UI/UX design, including user research, interaction design, visual design, and usability testing. Gain hands-on experience with popular design tools and methodologies to create user-centered designs. Build a portfolio of UI/UX projects to showcase your skills and enhance your career opportunities in the design field.",
      highlightPoints: [
        "220+ Hours of detailed training",
        "Hands-on projects and real-world case studies",
        "Experienced instructors with expertise in UI/UX design",
        "Training in user research, wireframing, and prototyping",
        "Practical experience with design tools such as Sketch, Figma, and Adobe XD",
        "Flexible learning options and schedules",
        "Career support including job placement and portfolio development",
        "Access to industry-standard design resources and tools",
        "Interactive learning environment with live workshops and feedback sessions",
        "Up-to-date curriculum reflecting current UI/UX design trends and practices",
      ],
      languages: [
        { img: sketchIcon, name: "Sketch" },
        { img: figmaIcon, name: "Figma" },
        { img: adobeXDIcon, name: "Adobe XD" },
      ],
      tools: [
        { img: invisionIcon, name: "InVision" },
        { img: zeplinIcon, name: "Zeplin" },
        { img: prototypingIcon, name: "Prototyping Tools" },
      ],
      syllabusExplain:
        "The syllabus includes a comprehensive exploration of UI/UX design principles, focusing on user-centered design, interaction design, and visual aesthetics. You will work on projects that involve user research, wireframing, prototyping, and usability testing. The course emphasizes practical skills and creative problem-solving to prepare you for a successful career in UI/UX design.",
      hoursTraining: "220+",
      liveProjectCount: "5",
      faq: [
        {
          question: "Why should I learn UI/UX Design from Career Streesman?",
          answer: [
            "Experienced instructors with industry expertise in UI/UX design",
            "Comprehensive training covering all aspects of UI/UX design",
            "Hands-on projects and real-world design challenges",
            "Career support including job placement and portfolio development",
            "Access to modern design tools and resources",
          ],
        },
        {
          question: "What if I miss a class?",
          answer: [
            "Recorded sessions are available on our Learning Management System (LMS) for you to review at your convenience.",
          ],
        },
        {
          question: "How can I register for a free demo?",
          answer: [
            "You can register for a free demo at https://careerstreesman/contact.",
          ],
        },
        {
          question: "Why choose us for UI/UX Design training?",
          answer: [
            "In-depth training on UI/UX design principles and tools",
            "Expert trainers with real-world experience",
            "Practical approach with hands-on projects and feedback",
            "Strong career support and job placement services",
          ],
        },
        {
          question: "Why should I choose Career Streesman?",
          answer: [
            "High-quality training with a focus on student success",
            "Experienced professionals as trainers",
            "Strong network of industry connections and placement assistance",
            "Innovative learning methods and up-to-date curriculum",
          ],
        },
      ],
    },
    {
      name: "Data Analysts",
      url: "/courses/data-analysts",
      bgImg: dataAnalystsBgImg,
      contentExplain:
        "The Data Analysts course is designed to provide a thorough understanding of data analysis techniques and tools. Learn how to collect, process, and analyze data to make informed business decisions. Gain skills in statistical analysis, data visualization, and using data analysis software to derive actionable insights.",
      duration: "220+ Hours",
      modeOfTraining: "Online & Offline",
      skillLevel: "Beginner to Advanced",
      learnersCount: "180+",
      overviewExplain2:
        "This course covers essential topics for data analysts, including data cleaning, exploratory data analysis, statistical modeling, and data visualization. You will work with popular tools and techniques to interpret complex data and present findings effectively. Build a portfolio of data analysis projects to showcase your skills to potential employers.",
      highlightPoints: [
        "220+ Hours of in-depth training",
        "Hands-on projects and real-world data scenarios",
        "Experienced instructors with industry expertise",
        "Training in statistical analysis, data visualization, and data manipulation",
        "Practical experience with tools such as Excel, SQL, and Python",
        "Flexible learning options and schedules",
        "Career support including job placement and resume building",
        "Access to industry-standard data analysis tools and resources",
        "Interactive learning environment with live workshops and feedback",
        "Up-to-date curriculum reflecting current data analysis trends and practices",
      ],
      languages: [
        { img: pythonIcon, name: "Python" },
        { img: sqlIcon, name: "SQL" },
      ],
      tools: [
        { img: excelIcon, name: "Excel" },
        { img: tableauIcon, name: "Tableau" },
        { img: powerBiIcon, name: "Power BI" },
        { img: jupyterIcon, name: "Jupyter Notebook" },
      ],
      syllabusExplain:
        "The syllabus covers key aspects of data analysis, including data collection, cleaning, exploration, and visualization. You will learn to use various tools and techniques to analyze data and present insights effectively. The course features practical assignments and real-world case studies to develop your skills and prepare you for a career in data analysis.",
      hoursTraining: "220+",
      liveProjectCount: "4",
      faq: [
        {
          question: "Why should I learn Data Analysis from Career Streesman?",
          answer: [
            "Experienced instructors with practical industry knowledge",
            "Comprehensive training on data analysis techniques and tools",
            "Hands-on projects and real-world data scenarios",
            "Career support including job placement and portfolio development",
            "Access to industry-standard data analysis tools and resources",
          ],
        },
        {
          question: "What if I miss a class?",
          answer: [
            "Recorded sessions are available on our Learning Management System (LMS) for you to review at your convenience.",
          ],
        },
        {
          question: "How can I register for a free demo?",
          answer: [
            "You can register for a free demo at https://careerstreesman/contact.",
          ],
        },
        {
          question: "Why choose us for Data Analysis training?",
          answer: [
            "In-depth training with a focus on practical skills",
            "Expert trainers with industry experience",
            "Practical approach with hands-on projects and feedback",
            "Strong career support and job placement services",
          ],
        },
        {
          question: "Why should I choose Career Streesman?",
          answer: [
            "High-quality training with a focus on student success",
            "Experienced professionals as trainers",
            "Strong network of industry connections and placement assistance",
            "Innovative learning methods and up-to-date curriculum",
          ],
        },
      ],
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Course Overview - Career Streesman</title>
        <link
          rel="canonical"
          href="https://careersteersman.com/course-overview"
        />
        <meta
          name="description"
          content="Explore the comprehensive course offerings at Career Streesman. Discover the skills you will gain and the opportunities available."
        />
        <meta
          property="og:title"
          content="Course Overview - Career Streesman"
        />
        <meta
          property="og:description"
          content="Explore the comprehensive course offerings at Career Streesman. Discover the skills you will gain and the opportunities available."
        />
        <meta property="og:image" content="../assets/image/icon-logo.png" />
        <meta
          property="og:url"
          content="https://careersteersman.com/course-overview"
        />
      </Helmet>

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
                <div
                  className="xl:px-52 lg:px-40 md:px-28 px-5 py-16"
                  style={{
                    background:
                      "linear-gradient(94deg, rgba(0,0,128,1) 0%, rgba(197,1,1,1) 100%)",
                  }}
                >
                  <DetailBox
                    courseDetails={item}
                    syllabusDetail={syllabusDetail}
                  />
                </div>
                <div className="xl:px-52 lg:px-40 md:px-28 px-5 py-16 bg-[#eaeff5]">
                  <FAQ courseDetails={item} />
                </div>
                <div
                  className="py-16 lg:px-32 md:px-5"
                  style={{
                    background:
                      "linear-gradient(94deg, rgba(0,0,128,1) 0%, rgba(197,1,1,1) 100%)",
                  }}
                >
                  <CareerFootPrint />
                  <CareerStats />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
