import React from "react";
import { FaPhoneVolume } from "react-icons/fa";

export default function ContactLanding() {
  return (
    <div className="pt-20">
      <div className=" text-center flex justify-center items-center gap-y-4 px-3 flex-col bg-white shadow py-16">
        <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold text-[#000080]">
          We’re Here to Help <br /> You Succeed Let’s Connect
        </h1>
        <h3 className="text-md lg:text-lg md:w-[70%]">
          Connect with Top Talent Find the Perfect Fit for Your Team At
          CareerSteersman, we understand that the success of your organization
          depends on the quality of your team. That’s why we are committed to
          connecting you with the best candidates who are not only skilled but
          also align with your company’s values and goals.
        </h3>
      </div>
    </div>
  );
}
