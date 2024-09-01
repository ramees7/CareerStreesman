import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../../assets/image/icon-logo.png";

export default function CareerStats() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-40">
      <div className="text-center text-white">
        <h1 className="text-xl">A</h1>
        <h1 className="text-6xl font-extrabold">Career</h1>
        <h1 className="text-3xl font-semibold">that could turn your</h1>
        <h1 className="text-3xl font-bold">life around</h1>
      </div>
      <div className="grid grid-cols-12 pt-20">
        <div
          className="text-[#fff] font-bold text-center text-xl col-span-5 h-full gap-y-6 flex flex-col items-center justify-center"
          data-aos="fade-right"
        >
          <div className="py-2">
            <h1>321+</h1>
            <h3>HIRING PARTNERS</h3>
          </div>
          <div className="py-2">
            <h1>200+</h1>
            <h3>OPPORTUNITIES EVERY MONTH</h3>
          </div>
          <div className="py-2">
            <h1>12+</h1>
            <h3>DRIVES EVERY DAY</h3>
          </div>
          <div className="py-2">
            <h1>50+</h1>
            <h3>AVG. STUDENTS PLACED EVERY MONTH</h3>
          </div>
        </div>

        <div className="col-span-2 h-full flex justify-center items-center">
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-[40%] mx-auto bg-white p-4 rounded"
            />
          </div>
        </div>

        <div
          className="text-[#fff] text-center font-bold text-xl col-span-5 h-full gap-y-6 flex flex-col items-center justify-center"
          data-aos="fade-left"
        >
          <div className="py-2">
            <h1>72%</h1>
            <h3>AVG. SALARY HIKE</h3>
          </div>
          <div className="py-2">
            <h1>3LPA - 12LPA</h1>
            <h3>AVG. SALARY</h3>
          </div>
          <div className="py-2">
            <h1>100%</h1>
            <h3>PLACEMENT ASSISTANCE</h3>
          </div>
          <div className="py-2">
            <h1>1000+</h1>
            <h3>JOB SOURCED</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
