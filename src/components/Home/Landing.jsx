import React from "react";
import img from "../../assets/image/bg-anime.png";
export default function Landing() {
  return (
    <div>
      <div className="pt-8 md:h-[600px]">
        <div className="flex flex-wrap justify-center w-full h-full">
          <div className="slide-in-left md:w-[40%] sm:w-[100%]">
            <div className="flex justify-start h-full w-full items-center">
              <div>
                {/* <h1 className="text-2xl font-bold" style={{ color: "#c50101" }}>
                  Let's Start
                </h1> */}
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
        </div>
      </div>
    </div>
  );
}
