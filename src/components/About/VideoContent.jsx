import React from "react";
import video from "../../assets/image/video.mp4";

export default function VideoContent() {

  return (
    <div className="py-12">
      <h2 className="text-3xl leading-9 font-semibold mb-8 text-[#000080] text-center">
        Explore Cutting Edge Technology
      </h2>
      <div className="relative w-full h-[350px] md:h-[500px]">
        <video
          className="w-full h-full object-cover"
          controls={true}
          autoPlay
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
