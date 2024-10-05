import React, { useEffect } from "react";
import AllCourses from "../components/Courses/AllCourses";
import CourseLanding from "../components/Courses/CourseLanding";
import CareerFootPrint from "../components/Courses/CareerFootPrint";
import CareerStats from "../components/Courses/CareerStats";
import { Helmet } from "react-helmet-async";

export default function Courses() {
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
        <title>Courses - Career Streesman</title>
        <link rel="canonical" href="https://careersteersman.com/courses" />
        <meta
          name="description"
          content="Discover a wide range of courses offered at Career Streesman. Find the right course to enhance your skills and advance your career."
        />
        <meta property="og:title" content="Courses - Career Streesman" />
        <meta
          property="og:description"
          content="Discover a wide range of courses offered at Career Streesman. Find the right course to enhance your skills and advance your career."
        />
        <meta property="og:image" content="../assets/image/icon-logo.png" />
        <meta property="og:url" content="https://careersteersman.com/courses" />
      </Helmet>

      <CourseLanding />
      <div className=" xl:px-52 lg:px-40 md:px-28 px-5 bg-[#eaeff5]">
        <AllCourses />
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
  );
}
