import React from "react";
import "./Home.css";
// import video from "../../assets/image/video.mp4";

export default function Landing() {
  return (
    <div>
      <div className=" md:h-[600px] h-[350px]">
        <div className="flex justify-center items-center w-full h-full">
          <div>
            <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold text-center py-2 landing-heading">
              Get the tech career <br /> you deserve. Faster.
            </h1>
            <h5 className="text-center md:text-lg text-sm text-black ">
              Structured coding courses that get you there faster with
              confidence.
            </h5>
            <div className="text-center mt-16">
              <button className="py-2 px-6 border-0 bg-[#000080] text-white text-xl border-b-[5px] border-r-[5px] ">Contact us</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-5">
        <video controls autoPlay muted className="w-full" >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
}

{
  /* <div className="flex flex-wrap justify-center w-full h-full">
          <div className="slide-in-left md:w-[40%] sm:w-[100%]">
            <div className="flex justify-start h-full w-full items-center">
              <div>
                <h6 className="text-4xl font-bold text-[#000080]">
                  Master the Art of <br /> Development with <br />{" "}
                  Hands-On Training
                </h6>
              </div>
            </div>
          </div>
          <div className="flex justify-end slide-in-right md:w-[60%] sm:w-[100%] h-full">
            <img src={img} alt="landing-Img" className="w-full h-full" />
          </div>
        </div> */
}
