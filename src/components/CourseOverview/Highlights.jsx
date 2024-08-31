import React from "react";

export default function Highlights({ courseDetails }) {
  return (
    <div>
      <div key={courseDetails.name}>
        <div className="gap-y-6 flex flex-col items-center">
          <h2 className="text-4xl leading-9 font-semibold text-[#000080] text-center">
            {courseDetails.name} COURSE OVERVIEW
          </h2>
          <div className="md:w-[70%]">
            <h3 className="text-lg">{courseDetails.overviewExplain2}</h3>
            <div className="grid grid-cols-12">
              <h1 className="py-6 text-2xl leading-9 font-semibold text-[#c50101] text-center col-span-12">
                Key Highlights
              </h1>
              <div className="md:col-span-6 col-span-12">
                <ul>
                  {courseDetails.highlightPoints
                    .slice(
                      0,
                      Math.ceil(courseDetails.highlightPoints.length / 2)
                    )
                    .map((item, index) => (
                      <li key={index} className="list-disc list-inside text-lg">{item}</li>
                    ))}
                </ul>
              </div>
              <div className="md:col-span-6 col-span-12">
                <ul>
                  {courseDetails.highlightPoints
                    .slice(Math.ceil(courseDetails.highlightPoints.length / 2))
                    .map((item, index) => (
                      <li
                      className="list-disc list-inside text-lg"
                        key={
                          index +
                          Math.ceil(courseDetails.highlightPoints.length / 2)
                        }
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
