import React from "react";
import { IoIosTimer } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";
import { SiLevelsdotfyi } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";

export default function DetailBox({ courseDetails, syllabusDetail }) {
  return (
    <>
      <div
        className="flex flex-col items-center bg-cover bg-center "
        key={courseDetails.name}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full text-white uppercase">
          {/* Step 1 */}
          <div
            className={`flex flex-col items-center mb-8 md:mb-0 ${
              syllabusDetail !== true ? "gap-y-4" : "gap-y-1"
            } `}
          >
            {syllabusDetail !== true ? (
              <>
                <h1 className="text-4xl">
                  <IoIosTimer />
                </h1>
                <h1 className="text-2xl font-semibold">Course Duration</h1>
                <h1 className="text-xl">{courseDetails.duration}</h1>
              </>
            ) : (
              <>
                <h1 className="text-xl ">TRAINED BY</h1>
                <h1 className="text-2xl font-semibold">INDIA’S</h1>
                <h1 className="text-lg ">BEST INDUSTRY EXPERTS</h1>
              </>
            )}
          </div>
          <div
            className={`flex flex-col items-center mb-8 md:mb-0 ${
              syllabusDetail !== true ? "gap-y-4" : "gap-y-1"
            } `}
          >
            {syllabusDetail !== true ? (
              <>
                <h1 className="text-4xl">
                  <FaCirclePlay />
                </h1>
                <h1 className="text-2xl font-semibold">mode of traning</h1>
                <h1 className="text-xl">{courseDetails.modeOfTraining}</h1>
              </>
            ) : (
              <>
                <h1 className="text-xl ">TRAINED BY</h1>
                <h1 className="text-2xl font-semibold">{courseDetails.hoursTraining}</h1>
              </>
            )}
          </div>
          <div
            className={`flex flex-col items-center mb-8 md:mb-0 ${
              syllabusDetail !== true ? "gap-y-4" : "gap-y-1"
            } `}
          >
            {syllabusDetail !== true ? (
              <>
                <h1 className="text-4xl">
                  <SiLevelsdotfyi />
                </h1>
                <h1 className="text-2xl font-semibold">skill level</h1>
                <h1 className="text-xl">{courseDetails.skillLevel}</h1>
              </>
            ) : (
              <>
                <h1 className="text-xl ">INTERVIEW SPECIFIC</h1>
                <h1 className="text-2xl font-semibold">GROOMING                </h1>
                <h1 className="text-lg ">SESSIONS</h1>
              </>
            )}
          </div>
          <div
            className={`flex flex-col items-center mb-8 md:mb-0 ${
              syllabusDetail !== true ? "gap-y-4" : "gap-y-1"
            } `}
          >
            {syllabusDetail !== true ? (
              <>
                <h1 className="text-4xl">
                  <IoIosPeople />
                </h1>
                <h1 className="text-2xl font-semibold">learners</h1>
                <h1 className="text-xl">{courseDetails.learnersCount}</h1>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-semibold">{courseDetails.liveProjectCount}</h1>
                <h1 className="text-xl ">REAL TIME PROJECTS</h1>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
