import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

export default function Support() {
  return (
    <div className="h-[300px] " style={{background: 'linear-gradient(94deg, rgba(0,0,128,1) 0%, rgba(197,1,1,1) 100%)' }}>
      <div className="flex justify-center items-center h-full flex-col">
        <div className="text-center">
          <h1 className="text-3xl leading-9 font-semibold text-[#fff]">
            Learner Support
          </h1>
          <h5 className="text-lg text-white">
            Reach out to our experts anytime. We’re here to assist you 24/7.
          </h5>
        </div>
        <div className="flex justify-center w-full mt-5">
          <Link to={"/courses"}>
            <button className="py-2 px-6 border-0 bg-[#000080] text-white text-xl  flex items-center gap-3">
              <FaPhoneAlt/> Talk To A Career Expert
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
