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
        <h3 className="text-md lg:text-lg md:w-[70%]">
          Connect with Top Talent Find the Perfect Fit for Your Team At
          CareerSteersman, we understand that the success of your organization
          depends on the quality of your team. That’s why we are committed to
          connecting you with the best candidates who are not only skilled but
          also align with your company’s values and goals.
        </h3>
        <a href="tel:+0321456987" target="_blank">
          <button className="py-2 px-4 bg-[#c50101] text-white rounded flex gap-3 items-center">
            <FaPhoneVolume /> Lets Talk!
          </button>
        </a>
      </div>
      <div className="text-center py-16 md:pt-32 flex justify-center items-center flex-col gap-y-4 px-3">
        <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold ">
          Why Hire from Us?
        </h1>
        <h3 className="text-md lg:text-lg md:w-[60%]">
          We have a diverse network of highly qualified candidates, ranging from
          fresh graduates to experienced professionals, ready to make an impact
          in your organization.
        </h3>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="md:col-span-6 col-span-12 text-center gap-y-5 flex  items-center flex-col py-8">
          <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold">
            Partner with CareerSteersman
          </h1>
          <h3 className="text-md md:text-lg  w-[80%] text-center">
            Join the ranks of leading organizations that have successfully hired
            through CareerSteersman. Our commitment to excellence and
            personalized service makes us the preferred partner for businesses
            looking to build strong, capable teams.
          </h3>
        </div>
        <div className="md:col-span-6  col-span-12 text-center gap-y-5 flex  items-center flex-col py-8">
          <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold">
            Let’s Get Started
          </h1>
          <h3 className="text-md md:text-lg w-[70%] text-center">
            Ready to find your next great hire? Contact us today to discuss your
            hiring needs, and let us connect you with the talent that will drive
            your business forward.
          </h3>
        </div>{" "}
      </div>
    </div>
  );
}
