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


// <div className="flex justify-between items-center">
//         <div className="w-1/3">
//           <div className="bg-red-100 text-red-500 w-10 h-10 rounded-full flex items-center justify-center mb-4">01</div>
//           <h3 className="text-xl font-bold mb-2">Career Counselling</h3>
//           <p className="text-gray-600">Speak to expert counsellors who will guide you towards the ideal program for your career aspirations</p>
//         </div>

//         <div className="w-1/3 flex justify-center">
//           <img src={man} alt="Professional" className="w-64 h-auto" />
//         </div>

//         <div className="w-1/3 text-right">
//           <div className="bg-red-100 text-red-500 w-10 h-10 rounded-full flex items-center justify-center mb-4 ml-auto">03</div>
//           <h3 className="text-xl font-bold mb-2">Flexible Payment Plans</h3>
//           <p className="text-gray-600">Say goodbye to hefty student loans. Get assistance in finding the best, personalized payment plans</p>
//         </div>
//       </div>

//       <div className="mt-8 text-center">
//         <div className="bg-red-100 text-red-500 w-10 h-10 rounded-full flex items-center justify-center mb-4 mx-auto">02</div>
//         <h3 className="text-xl font-bold mb-2">University Admission</h3>
//         <p className="text-gray-600 max-w-md mx-auto">Get expert support every step of the way to ease the stress of the University's admission process</p>
//       </div>