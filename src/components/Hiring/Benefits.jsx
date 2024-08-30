import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

export default function Benefits() {
  return (
    <div className="py-16">
      <div className="grid grid-cols-12 gap-5">
        <div className="md:col-span-6 col-span-12">
          <div
            className="text-white py-8 px-4 gap-y-5 flex justify-center flex-col"
            style={{
              background:
                "linear-gradient(94deg,rgba(0,0,128,1)  0%, rgba(197,1,1,1) 100%)",
            }}
          >
            <h4 className="py-2 font-semibold w-fit">
              BENEFITS@CAREERSTREESMAN
            </h4>
            <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold">
              Revolutionizing How the Tech Industry Hires
            </h1>
            <h5 className="flex items-center gap-x-3">
              Check it Out <FaArrowDown />
            </h5>
          </div>
          <div className="pt-16 pb-10 space-y-5">
            <div className="flex  gap-5 ">
              <IoMdStar className="text-xl mt-1 text-[#000080]" />
              <div>
                <h2 className="text-xl font-semibold text-[#000080]">Pan-India candidates</h2>
                <h4>
                  Broad geographic coverage ensures a rich mix of cultural and
                  intellectual diversity.
                </h4>
              </div>
            </div>
            <div className="flex  gap-5 ">
              <IoMdStar className="text-xl mt-1 text-[#000080]" />
              <div>
                <h2 className="text-xl font-semibold text-[#000080]">
                  No charges for our service
                </h2>
                <h4>
                  Utilize our recruitment services completely free of charge—no
                  fees for engaging our expert hiring solutions
                </h4>
              </div>
            </div>
            <div className="flex  gap-5 ">
              <IoMdStar className="text-xl mt-1 text-[#000080]" />
              <div>
                <h2 className="text-xl font-semibold text-[#000080]">Hassle-free hiring</h2>
                <h4>
                  Efficient recruitment from screening to offer, streamlining
                  every step for optimal hiring efficiency
                </h4>
              </div>
            </div>
            <div className="flex  gap-5 ">
              <IoMdStar className="text-xl mt-1 text-[#000080]" />
              <div>
                <h2 className="text-xl font-semibold text-[#000080]">
                  Replace campus recruitment visits
                </h2>
                <h4>
                  Adopt a more precise and efficient recruitment strategy,
                  enhancing target and effectiveness in hiring
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12">
          <div
            className="text-white py-8 px-4 gap-y-5 flex justify-center flex-col"
            style={{
              background:
                "linear-gradient(94deg,rgba(197,1,1,1)  0%, rgba(0,0,128,1) 100%)",
            }}
          >
            <h4 className="py-2 font-semibold w-fit ">
              BEST TALENTS
            </h4>
            <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold">
              Why Our Learners Stand Out from the Rest?
            </h1>
            <h5 className="flex items-center gap-x-3">
              Check it Out <FaArrowDown />
            </h5>
          </div>
          <div className="pt-16 space-y-5">
            <div className="flex  gap-5 ">
              <IoMdStar className="text-xl mt-1 text-[#c50101]" />
              <div>
                <h2 className="text-xl font-semibold text-[#c50101]">Pan-India candidates</h2>
                <h4>
                  Broad geographic coverage ensures a rich mix of cultural and
                  intellectual diversity.
                </h4>
              </div>
            </div>
            <div className="flex  gap-5 ">
              <IoMdStar className="text-xl mt-1 text-[#c50101]" />
              <div>
                <h2 className="text-xl font-semibold text-[#c50101]">
                  No charges for our service
                </h2>
                <h4>
                  Utilize our recruitment services completely free of charge—no
                  fees for engaging our expert hiring solutions
                </h4>
              </div>
            </div>
            <div className="flex  gap-5 ">
              <IoMdStar className="text-xl mt-1 text-[#c50101]" />
              <div>
                <h2 className="text-xl font-semibold text-[#c50101]">Hassle-free hiring</h2>
                <h4>
                  Efficient recruitment from screening to offer, streamlining
                  every step for optimal hiring efficiency
                </h4>
              </div>
            </div>
            <div className="flex  gap-5 ">
              <IoMdStar className="text-xl mt-1 text-[#c50101]" />
              <div>
                <h2 className="text-xl font-semibold text-[#c50101]">
                  Replace campus recruitment visits
                </h2>
                <h4>
                  Adopt a more precise and efficient recruitment strategy,
                  enhancing target and effectiveness in hiring
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
