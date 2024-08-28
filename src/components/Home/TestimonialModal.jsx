import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function TestimonialModal({ video, centerButton }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {centerButton && (
        <FaPlayCircle
          className="text-3xl text-[#fff]"
          onClick={() => setShowModal(true)}
        />
      )}
      {!centerButton && (
        <FaPlayCircle
          className="text-2xl text-[#c50101]"
          onClick={() => setShowModal(true)}
        />
      )}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="flex justify-end pb-5">
                <FaXmark
                  className="text-2xl text-black  hover:cursor-pointer"
                  onClick={() => setShowModal(false)}
                />
              </div>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={`${video}?rel=0&amp;autoplay=1&mute=1`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
