import React from "react";

export default function LandingAbout() {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: `url(https://static-cse.canva.com/blob/1581210/uniqueinspiringaboutpage.44b26c5d.jpg)`,
            backgroundSize: "cover",
            height: "400px",
            backgroundAttachment: "fixed",
          }}
          className="flex relative items-center justify-center"
        >
          <div className="absolute inset-0 bg-[#000080] opacity-50 z-0"></div>

          <h1 className="text-6xl font-bold text-white z-10">About Us</h1>
        </div>
      </div>
    </div>
  );
}
