import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function OverviewLanding({courseDetails}) {

    console.log(courseDetails);
    
  return (
    <div>
        {
            courseDetails?.map(item=>(
                item.url===location.pathname && 
                <div key={item.name}>
                <div>
                  <div
                    style={{
                      backgroundImage: `url(${item.bgImg})`,
                      backgroundSize: "cover",
                      height: "400px",
                      backgroundAttachment: "fixed",
                    }}
                    className="flex relative items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-[#000080] opacity-50 z-0"></div>
          
                    <h1 className="text-6xl font-bold text-white z-10">On The Job Training</h1>
                  </div>
                </div>
              </div>
            ))
        }
    </div>
  )
}
