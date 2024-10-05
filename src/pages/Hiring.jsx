import React, { useEffect } from "react";
import HiringLanding from "../components/Hiring/HiringLanding";
import Benefits from "../components/Hiring/Benefits";
import Talent from "../components/Hiring/Talent";
import PlacedStudents from "../components/Home/PlacedStudents";
import { Helmet } from "react-helmet";

export default function Hiring() {
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
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hiring - Career Streesman</title>
        <link rel="canonical" href="https://careersteersman.com/careers" />
        <meta
          name="description"
          content="Join the Career Streesman team. Explore available job opportunities and become a part of our innovative workforce."
        />
        <meta property="og:title" content="Hiring - Career Streesman" />
        <meta
          property="og:description"
          content="Join the Career Streesman team. Explore available job opportunities and become a part of our innovative workforce."
        />
        <meta property="og:image" content="../assets/image/icon-logo.png" />
        <meta property="og:url" content="https://careersteersman.com/careers" />
      </Helmet>

      <div className=" xl:px-52 lg:px-40 md:px-28 px-5 bg-[#eaeff5] py-20">
        <HiringLanding />
        <Benefits />
        <PlacedStudents />
      </div>
      <div
        className=" xl:px-52 lg:px-40 md:px-28 px-5"
        style={{
          background:
            "linear-gradient(94deg, rgba(0,0,128,1) 0%, rgba(197,1,1,1) 100%)",
        }}
      >
        <Talent />
      </div>
    </div>
  );
}
