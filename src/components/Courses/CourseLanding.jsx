import React from 'react'
import bg from '../../assets/image/courses.png'
export default function CourseLanding() {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            height: "400px",
            backgroundAttachment: "fixed",
          }} 
          className="flex relative items-center justify-center"
        >
          <div className="absolute inset-0 bg-[#000080] opacity-50 z-0"></div>

          <h1 className="text-6xl font-bold text-white z-10 text-center">On The Job Training</h1>
        </div>
      </div>
    </div>
  )
}
