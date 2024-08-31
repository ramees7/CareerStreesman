import React from "react";

export default function Highlights({ courseDetails }) {
  return (
    <div>
      <div key={courseDetails.name}>
        <div className="gap-y-6 flex flex-col items-center">
          <h2 className="text-4xl leading-9 font-semibold text-[#000080] text-center">
            {courseDetails.name} Course Overview
          </h2>
          <div className="lg:w-[70%]">
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
                      <li key={index} className="list-disc list-inside text-lg">
                        {item}
                      </li>
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
          <div className="grid grid-cols-12 w-full py-8">
            <div className="lg:col-span-6 col-span-12">
              <h1 className="text-center text-2xl leading-9 font-semibold text-[#c50101]">
                Languages Covered
              </h1>
              <div className="grid grid-cols-10 gap-3 py-5">
                {courseDetails.languages.map((languages) => (
                  <div
                    className="col-span-2  flex items-center"
                    key={languages.name}
                  >
                    <img
                      src={languages.img}
                      alt="icon"
                      width={60}
                      title={languages.name}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <h1 className="text-center text-2xl leading-9 font-semibold text-[#c50101]">
                Tools Covered
              </h1>
              <div className="grid grid-cols-9 gap-3 py-5">
                {courseDetails.tools.map((tools) => (
                  <div
                    className="col-span-3 flex items-center justify-center"
                    key={tools.name}
                  >
                    <img
                      src={tools.img}
                      alt="icon"
                      width={60}
                      title={tools.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
