// import React from "react";
// import { FaGraduationCap, FaFire, FaCertificate } from "react-icons/fa"; // Example icons
// import { FaArrowDownLong ,FaArrowRightLong} from "react-icons/fa6";
// import { PiBagSimpleFill } from "react-icons/pi";

// export default function CareerFootPrint() {

//   return (
//     <div
//       className="flex flex-col items-center bg-cover bg-center ">
//       <h2 className="text-white text-3xl font-bold mb-20">CAREER FOOTPRINT</h2>
//       <div className="flex flex-col md:flex-row items-center justify-between w-full">
//         {/* Step 1 */}
//         <div className="flex flex-col items-center mb-5 md:mb-0">
//           <div className="bg-white p-6 rounded-full shadow-md">
//             <FaGraduationCap className="text-[#000080] text-4xl" />
//           </div>
//           <p className="text-white text-lg mt-4 text-center">
//             LEARN JAVA FULL STACK
//           </p>
//         </div>
//         {/* Arrow */}
//         <div className="hidden md:block text-white text-2xl"><FaArrowRightLong/></div>
//         <div className="block md:hidden text-white text-2xl mb-4"><FaArrowDownLong/></div>
//         {/* Step 2 */}
//         <div className="flex flex-col items-center mb-5 md:mb-0">
//           <div className="bg-white p-6 rounded-full shadow-md">
//             <FaFire className="text-[#000080] text-4xl" />
//           </div>
//           <p className="text-white text-lg mt-4 text-center">
//             WORK ON REAL PROJECTS
//           </p>
//         </div>
//         {/* Arrow */}
//         <div className="hidden md:block text-white text-2xl"><FaArrowRightLong/></div>
//         <div className="block md:hidden text-white text-2xl mb-4"><FaArrowDownLong/></div>
//         {/* Step 3 */}
//         <div className="flex flex-col items-center mb-5 md:mb-0">
//           <div className="bg-white p-6 rounded-full shadow-md">
//             <FaCertificate className="text-[#000080] text-4xl" />
//           </div>
//           <p className="text-white text-lg mt-4 text-center">GET CERTIFIED</p>
//         </div>
//         {/* Arrow */}
//         <div className="hidden md:block text-white text-2xl"><FaArrowRightLong/></div>
//         <div className="block md:hidden text-white text-2xl mb-4"><FaArrowDownLong/></div>
//         {/* Step 4 */}
//         <div className="flex flex-col items-center mb-5 md:mb-0">
//           <div className="bg-white p-6 rounded-full shadow-md">
//             <PiBagSimpleFill className="text-[#000080] text-4xl" />
//           </div>
//           <p className="text-white text-lg mt-4 text-center">GET HIRED</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import { FaGraduationCap, FaFire, FaCertificate } from "react-icons/fa"; // Example icons
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import { PiBagSimpleFill } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CareerFootPrint() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center bg-cover bg-center">
      <h2 className="text-white text-3xl font-bold mb-20">CAREER FOOTPRINT</h2>
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Step 1 */}
        <div
          className="flex flex-col items-center mb-5 md:mb-0"
          data-aos="fade-right" // Adding AOS animation here
        >
          <div className="bg-white p-6 rounded-full shadow-md">
            <FaGraduationCap className="text-[#000080] text-4xl" />
          </div>
          <p className="text-white text-lg mt-4 text-center">
            LEARN JAVA FULL STACK
          </p>
        </div>
        {/* Arrow */}
        <div
          className="hidden md:block text-white text-2xl"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <FaArrowRightLong />
        </div>
        <div
          className="block md:hidden text-white text-2xl mb-4"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <FaArrowDownLong />
        </div>
        {/* Step 2 */}
        <div
          className="flex flex-col items-center mb-5 md:mb-0"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="bg-white p-6 rounded-full shadow-md">
            <FaFire className="text-[#000080] text-4xl" />
          </div>
          <p className="text-white text-lg mt-4 text-center">
            WORK ON REAL PROJECTS
          </p>
        </div>
        {/* Arrow */}
        <div
          className="hidden md:block text-white text-2xl"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <FaArrowRightLong />
        </div>
        <div
          className="block md:hidden text-white text-2xl mb-4"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <FaArrowDownLong />
        </div>
        {/* Step 3 */}
        <div
          className="flex flex-col items-center mb-5 md:mb-0"
          data-aos="fade-right" // Adding AOS animation here
          data-aos-delay="400" // Optional delay
        >
          <div className="bg-white p-6 rounded-full shadow-md">
            <FaCertificate className="text-[#000080] text-4xl" />
          </div>
          <p className="text-white text-lg mt-4 text-center">GET CERTIFIED</p>
        </div>
        {/* Arrow */}
        <div
          className="hidden md:block text-white text-2xl"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <FaArrowRightLong />
        </div>
        <div
          className="block md:hidden text-white text-2xl mb-4"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <FaArrowDownLong />
        </div>
        {/* Step 4 */}
        <div
          className="flex flex-col items-center mb-5 md:mb-0"
          data-aos="fade-right" // Adding AOS animation here
          data-aos-delay="600" // Optional delay
        >
          <div className="bg-white p-6 rounded-full shadow-md">
            <PiBagSimpleFill className="text-[#000080] text-4xl" />
          </div>
          <p className="text-white text-lg mt-4 text-center">GET HIRED</p>
        </div>
      </div>
    </div>
  );
}
