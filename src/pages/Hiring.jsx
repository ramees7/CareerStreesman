import React from "react";
import HiringLanding from "../components/Hiring/HiringLanding";
import Benefits from "../components/Hiring/Benefits";
import Talent from "../components/Hiring/Talent";

export default function Hiring() {
  return (
    <div className="">
      <div className=" xl:px-52 lg:px-40 md:px-28 px-5 bg-[#eaeff5] py-20">
        <HiringLanding />
        <Benefits />
      </div>
      <div className=" xl:px-52 lg:px-40 md:px-28 px-5" style={{background: 'linear-gradient(94deg, rgba(0,0,128,1) 0%, rgba(197,1,1,1) 100%)' }}>
        <Talent />
      </div>
    </div>
  );
}
