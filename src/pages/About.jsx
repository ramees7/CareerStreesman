import React, { useEffect } from "react";
import LandingAbout from "../components/About/LandingAbout";
import Why from "../components/About/Why";
import VideoContent from "../components/About/VideoContent";
import AnimatingContent from "../components/About/AnimatingContent";
import Comparison from "../components/About/Comparison";

export default function About() {
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
    <div>
      <LandingAbout />
      <div className=" xl:px-52 lg:px-40 md:px-28 px-5 bg-[#eaeff5]">
        <Why />
        <VideoContent />
      </div>
      <AnimatingContent />
      <div className=" xl:px-52 lg:px-40 md:px-28 px-5 bg-[#eaeff5]">
        <Comparison />
      </div>
    </div>
  );
}
