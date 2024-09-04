// import React from "react";
// import one from '../../assets/placedstudents/1.png';
// import two from '../../assets/placedstudents/2.png';
// import three from '../../assets/placedstudents/3.png';
// import four from '../../assets/placedstudents/4.png';
// import five from '../../assets/placedstudents/5.png';
// import seven from '../../assets/placedstudents/7.png';
// import eight from '../../assets/placedstudents/8.png';
// import nine from '../../assets/placedstudents/9.png';
// import ten from '../../assets/placedstudents/10.png';
// import eleven from '../../assets/placedstudents/11.png';
// import twelve from '../../assets/placedstudents/12.png';
// import thirteen from '../../assets/placedstudents/13.png';
// import fourteen from '../../assets/placedstudents/14.png';
// import fifteen from '../../assets/placedstudents/15.png';
// import sixteen from '../../assets/placedstudents/16.png';
// import seventeen from '../../assets/placedstudents/17.png';
// import eighteen from '../../assets/placedstudents/18.png';
// import nineteen from '../../assets/placedstudents/19.png';
// import twenty from '../../assets/placedstudents/20.png';
// import twentyOne from '../../assets/placedstudents/21.png';

// export default function PlacedStudents() {
//     const allStudents = [one ,two,three,four,five,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty,twentyOne];

//   return (
//     <div className="py-5 overflow-hidden relative ">
//       <div className="flex items-center animate-marquee">
//         {allStudents.map((item, index) => (
//           <div key={index} className="flex items-center h-40 ">
//             <div className=" mx-4 w-40 text-center">
//               <img
//                 src={item}
//                 alt="profile"
//                 className="w-32 h-32 mx-auto"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import one from "../../assets/placedstudents/1.png";
import two from "../../assets/placedstudents/2.png";
import three from "../../assets/placedstudents/3.png";
import four from "../../assets/placedstudents/4.png";
import five from "../../assets/placedstudents/5.png";
import seven from "../../assets/placedstudents/7.png";
import eight from "../../assets/placedstudents/8.png";
import nine from "../../assets/placedstudents/9.png";
import ten from "../../assets/placedstudents/10.png";
import eleven from "../../assets/placedstudents/11.png";
import twelve from "../../assets/placedstudents/12.png";
import thirteen from "../../assets/placedstudents/13.png";
import fourteen from "../../assets/placedstudents/14.png";
import fifteen from "../../assets/placedstudents/15.png";
import sixteen from "../../assets/placedstudents/16.png";
import seventeen from "../../assets/placedstudents/17.png";
import eighteen from "../../assets/placedstudents/18.png";
import nineteen from "../../assets/placedstudents/19.png";
import twenty from "../../assets/placedstudents/20.png";
import twentyOne from "../../assets/placedstudents/21.png";

export default function PlacedStudents() {
  const allStudents = [
    one,
    two,
    three,
    four,
    five,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twentyOne,
  ];

  return (
    <div className="pt-5 pb-12 overflow-hidden relative">
      <div className="flex items-center animate-marquee ">
        {allStudents.concat(allStudents).map((item, index) => (
          <div key={index} className="flex items-center h-40">
            <div className="mx-4 w-40 text-center">
              <img src={item} alt="profile" className="w-32 h-32 mx-auto" />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
