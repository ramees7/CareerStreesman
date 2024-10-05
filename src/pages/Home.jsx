import React, { useEffect } from "react";
import Landing from "../components/Home/Landing";
import Companies from "../components/Home/Companies";
import HAbout from "../components/Home/HAbout";
import Testimonials from "../components/Home/Testimonials";
import HCourses from "../components/Home/HCourses";
import HTabRouteMap from "../components/Home/HTabRouteMap";
import Review from "../components/Home/Review";
import Support from "../components/Home/Support";
import PlacedStudents from "../components/Home/PlacedStudents";
import { Helmet } from "react-helmet";

export default function Home() {
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
    <div className=" xl:px-52 lg:px-40 md:px-28 px-5 bg-[#eaeff5]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Career Streesman</title>
        <link rel="canonical" href="https://careersteersman.com/" />
        <meta
          name="description"
          content="Welcome to Career Streesman. Discover our courses, career opportunities, and resources to help you succeed."
        />
        <meta property="og:title" content="Home - Career Streesman" />
        <meta
          property="og:description"
          content="Welcome to Career Streesman. Discover our courses, career opportunities, and resources to help you succeed."
        />
        <meta property="og:image" content="../assets/image/icon-logo.png" />
        <meta property="og:url" content="https://careersteersman.com/" />
      </Helmet>

      <Landing />
      <HAbout />
      <Companies />
      <HTabRouteMap />
      <Testimonials />
      <HCourses />
      <Review />
      <PlacedStudents />
      <Support />
    </div>
  );
}
