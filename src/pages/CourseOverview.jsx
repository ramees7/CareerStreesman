import React, { useEffect } from "react";
import OverviewLanding from "../components/CourseOverview/OverviewLanding";
import { useLocation } from "react-router-dom";
import javaBgImg from '../assets/image/java-bg.jpg'
import pythonBgImg from '../assets/image/python-bg.jpg'
import mernBgImg from '../assets/image/mern-bg.jpg'
import flutterBgImg from '../assets/image/flutter-bg.jpg'

export default function CourseOverview() {
  const location = useLocation();

  const courseDetails = [
    {
      name: "Java Full Stack",
      url: "/courses/java-full-stack",
      bgImg:javaBgImg,
    },
    {
      name: "Python Full Stack",
      url: "/courses/python-full-stack",
      bgImg:pythonBgImg,
    },
    {
      name: "MERN Full Stack",
      url: "/courses/mern-full-stack",
      bgImg:mernBgImg,
    },
    {
      name: "Flutter App Development",
      url: "/courses/flutter-app-development",
      bgImg:flutterBgImg,
    },
    {
      name: "AR /VR Development",
      url: "/courses/ar-vr-development",
      bgImg:javaBgImg,
    },
    {
      name: "Data Science",
      url: "/courses/data-science",
      bgImg:javaBgImg,
    },
    {
      name: "Cyber Security",
      url: "/courses/cyber-security",
      bgImg:javaBgImg,
    },
    {
      name: "Digital Marketing",
      url: "/courses/digital-marketing",
      bgImg:javaBgImg,
    },
    {
      name: "Human Resource Management",
      url: "/courses/human-resource-management",
      bgImg:javaBgImg,
    },
    {
      name: "Graphic Designing",
      url: "/courses/graphic-designing",
      bgImg:javaBgImg,
    },
    {
      name: "UI / UX Designer",
      url: "/courses/ui-ux-designer",
      bgImg:javaBgImg,
    },
    {
      name: "Data Analysts",
      url: "/courses/data-analysts",
      bgImg:javaBgImg,
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
          (item) => item.url === location.pathname && 
          <OverviewLanding key={item.name}  courseDetails={courseDetails}/>
        )}
      </div>
    </div>
  );
}
