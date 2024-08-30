import React, { useEffect } from "react";
import Landing from "../components/Home/Landing";
import Companies from "../components/Home/Companies";
import HAbout from "../components/Home/HAbout";
import Testimonials from "../components/Home/Testimonials";
import HCourses from "../components/Home/HCourses";
import HTabRouteMap from "../components/Home/HTabRouteMap";
import Review from "../components/Home/Review";
import Support from "../components/Home/Support";

export default function Home() {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(()=>{
    handleToTop()
  },[])
  return (
    <div className=" xl:px-52 lg:px-40 md:px-28 px-5 bg-[#eaeff5]">
      <Landing />
      <HAbout/>
      <Companies/>
      <HTabRouteMap/>
      <Testimonials/>
      <HCourses/>
      <Review/>
      <Support/>
    </div>
  );
}
