import React, { useEffect } from "react";
import LandingAbout from "../components/About/LandingAbout";
import Why from "../components/About/Why";
import VideoContent from "../components/About/VideoContent";
import AnimatingContent from "../components/About/AnimatingContent";
import Comparison from "../components/About/Comparison";
import { Helmet } from "react-helmet";

export default function About() {
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
        <title>About - Career Streesman</title>
        <link rel="canonical" href="https://careersteersman.com/about" />
        <meta
          name="description"
          content="Learn about Career Streesman and how we can help you achieve your career goals."
        />
        <meta property="og:title" content="About - Career Streesman" />
        <meta
          property="og:description"
          content="Learn about Career Streesman and how we can help you achieve your career goals."
        />
        <meta property="og:image" content="../assets/image/icon-logo.png" />
        <meta property="og:url" content="https://careersteersman.com/about" />
      </Helmet>

      <LandingAbout />
      <div className=" xl:px-52 lg:px-40 md:px-28 px-5 bg-[#eaeff5]">
        <Why />
        {/* <VideoContent /> */}
      </div>
      <AnimatingContent />
      <div className=" xl:px-52 lg:px-40 md:px-28 px-5 bg-[#eaeff5]">
        <Comparison />
      </div>
    </div>
  );
}
