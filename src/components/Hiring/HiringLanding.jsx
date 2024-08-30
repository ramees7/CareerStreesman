import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";

export default function HiringLanding() {
  return (
    <div>
      <div className=" text-center flex justify-center items-center gap-y-4 px-3 flex-col bg-white shadow py-16">
        <h1 className="py-2 px-4 bg-[#000080] text-white rounded">
          Hire From Us
        </h1>
        <h1 className="text-3xl lg:text-6xl md:text-4xl font-bold">
          Hire Top Entry-Level <br /> Tech Talent
        </h1>
        <h3 className="text-md md:text-lg lg:text-xl md:w-[70%]">
          Our comprehensive hiring solution with a high conversion rate,
          offering efficient recruitment services—all at no cost to you
        </h3>
        <button className="py-2 px-4 bg-[#c50101] text-white rounded flex gap-3 items-center">
          <FaPhoneVolume /> Lets Talk!
        </button>
      </div>
      <div className="text-center py-16 md:pt-32 flex justify-center items-center flex-col gap-y-4 px-3">
        <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold ">
          Why Hire With Career Streesman
        </h1>
        <h3 className="text-md md:text-lg lg:text-xl md:w-[60%]">
          We're transforming global hiring practices. We've successfully
          assisted a thousand companies in quickly recruiting developers and
          testers.
        </h3>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="md:col-span-6 col-span-12 text-center gap-y-5 flex justify-center items-center flex-col py-8">
          <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold">
            No Hassle, Just Results
          </h1>
          <h3 className="text-md md:text-lg  w-[70%] text-center">
            Recruit top developers & testers in the industry and Pay Nothing.
            Our expert mentors and rigorous projects elevate the hiring
            standard.
          </h3>
        </div>
        <div className="md:col-span-6  col-span-12 text-center gap-y-5 flex justify-center items-center flex-col py-8">
          <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold">
            Exceptional Learners
          </h1>
          <h3 className="text-md md:text-lg w-[70%] text-center">
            Our students excel through industry-specific training, including
            best industry practices, this sets them apart from the generic
            Grads.
          </h3>
        </div>{" "}
      </div>
    </div>
  );
}
