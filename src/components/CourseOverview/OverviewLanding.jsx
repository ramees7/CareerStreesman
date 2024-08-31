import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function OverviewLanding({ courseDetails }) {
  return (
    <div>
      <div key={courseDetails.name}>
        <div>
          <div
            style={{
              backgroundImage: `url(${courseDetails.bgImg})`,
              backgroundSize: "cover",
              height: "400px",
              backgroundAttachment: "fixed",
            }}
            className="flex relative items-center justify-center"
          >
            <div className="absolute inset-0 bg-[#000080] opacity-50 z-0"></div>

            {/* <h1 className="text-6xl font-bold text-white z-10">{item.name}</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
}
