import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import shihas from '../../assets/image/shihas-review.png'
import shibil from '../../assets/image/shibil-review.png'

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [carouselHeight, setCarouselHeight] = useState("auto");
  const carouselRef = useRef(null);

  const reviews = [
    {
      image:shihas,
      content:
        "“My flutter internship was an incredible learning experience. I had the opportunity to work on real-world mobile app development projects using Flutter framework. The mentorship provided by the senior developer was invaluable, and gained a deep understanding of flutter’s architecture and best practices. This internship has significantly enhanced my skills in building cross-platform mobile applications”",
      name: "Muhammed Shihas",
      role: "Flutter Student",
    },
    {
      image:shibil,
      content:
        "“The digital marketing internship exceeded my expectations. Doctosmart edtech has a well-structured program that exposed me to various aspects of online marketing, including SEO, SMM, Content Creation, Digital marketing tools etc. I appreciated the opportunity to collaborate with a talented team and contribute to campaign strategies. The internship not only enhanced knowledge but also provided me with practical experience that will benefit me in my future career.”",
      name: "Shibil",
      role: "Digital Marketing Student",
    },
  ];

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % slides.length
    );
  };

  const updateHeight = () => {
    if (carouselRef.current) {
      setCarouselHeight(
        carouselRef.current.children[currentIndex].clientHeight + "px"
      );
    }
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    const currentCarouselElement = carouselRef.current;
    currentCarouselElement.addEventListener(
      "transitionend",
      handleTransitionEnd
    );

    updateHeight();

    return () => {
      currentCarouselElement.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [currentIndex]);

  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="py-12 px-5">
      <h1 className="text-3xl leading-9 font-semibold text-[#000080] text-center">
        Reviews
      </h1>{" "}
      <div
        className="relative w-full overflow-hidden mt-8"
        style={{ height: carouselHeight }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          ref={carouselRef}
        >
          {reviews.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:flex gap-12 justify-center"
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="flex-1 h-full  justify-center flex items-center">
                  <img
                    src={item.image}
                    className="w-60  object-cover rounded-lg"
                    alt={`Carousel item ${index + 1}`}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 h-full  flex md:items-center">
                <div className="flex-1 flex justify-center ">
                  <div style={{}} className="p-4">
                    <p className="text-lg">{item.content}</p>
                    <div className=" mt-3 flex justify-between items-end">
                      <div className="flex gap-4" style={{ color: "#c50101" }}>
                        <button onClick={goToPrevious}>
                          <FaArrowLeftLong />
                        </button>
                        <button onClick={goToNext}>
                          <FaArrowRightLong />
                        </button>
                      </div>
                      <div>
                        <h1 className="text-xl font-semibold text-[#000080]">
                          {item.name}
                        </h1>
                        <h1 className="text-lg text-[#c50101]">{item.role}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
