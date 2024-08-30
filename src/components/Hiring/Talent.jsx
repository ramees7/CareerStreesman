import React from "react";
import fullStack from "../../assets/image/fullstack.jpg";
import frontEnd from "../../assets/image/frontend.jpg";
import backEnd from "../../assets/image/backend.jpg";

export default function Talent() {
  return (
    <div className="py-16">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6 pt-3 pb-6  pe-10">
          <div className=" gap-y-4 flex justify-center flex-col text-white">
            <h4 className="py-2 font-semibold w-fit">Technical Talent</h4>
            <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold">
              Skilled Talent Available for Immediate Hiring
            </h1>
            <h4 className="text-md">
              Access Top Talent from India’s Premier Tech Education Platform for
              Diverse Technical Roles
            </h4>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 bg-white rounded-md shadow  p-10">
          <div className=" gap-y-4 flex justify-center flex-col">
            <h2 className="text-xl font-semibold">Full Stack developers</h2>
            <h4 className="">
              Skilled in Java/Python, Front End Technologies with React, and
              Databases using MySQL and MongoDB
            </h4>
            <img
              src={fullStack}
              alt="full stack"
              width={200}
              height={50}
              className="mt-2"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 bg-white rounded-md shadow  p-10">
          <div className=" gap-y-4 flex justify-center flex-col">
            <h2 className="text-xl font-semibold">Backend Developers</h2>
            <h4 className="">
              Expertise in Server-Side Programming, Database Management, and API
              Integration
            </h4>
            <img
              src={backEnd}
              alt="full stack"
              width={200}
              height={50}
              className="mt-2"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 bg-white rounded-md shadow  p-10">
          <div className=" gap-y-4 flex justify-center flex-col">
            <h2 className="text-xl font-semibold">Frontend Developers</h2>
            <h4 className="">
              Proficient in HTML, CSS, JavaScript, and React for Cutting-Edge
              Front End Development."
            </h4>
            <img
              src={frontEnd}
              alt="full stack"
              width={200}
              height={50}
              className="mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
