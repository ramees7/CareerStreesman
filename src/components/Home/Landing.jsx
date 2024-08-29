import React from "react";
import "./Home.css";

export default function Landing() {
  return (
    <div>
      <div className=" md:h-[600px] h-[350px]">
        <div className="flex justify-center items-center w-full h-full">
          <div>
            <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold text-center py-2 landing-heading">
              Get the tech career <br /> you deserve. Faster.
            </h1>
            <h5 className="text-center md:text-lg text-sm text-black ">
              Structured coding courses that get you there faster with
              confidence.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

