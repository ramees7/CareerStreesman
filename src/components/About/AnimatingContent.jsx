import React, { useEffect, useRef, useState } from "react";
import { PiStudentBold } from "react-icons/pi";
import { FaBuilding } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

export default function AnimatingContent() {
  const [isVisible, setIsVisible] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
    twelve: false,
  });

  const refs = {
    first: useRef(null),
    second: useRef(null),
    third: useRef(null),
    fourth: useRef(null),
    fifth: useRef(null),
    sixth: useRef(null),
    seven: useRef(null),
    eight: useRef(null),
    nine: useRef(null),
    ten: useRef(null),
    eleven: useRef(null),
    twelve: useRef(null),
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const name = entry.target.getAttribute("data-name");
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [name]: true }));
        } else {
          setIsVisible((prev) => ({ ...prev, [name]: false })); // Reset visibility when out of view
        }
      });
    }, options);

    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // Cleanup observer on unmount
    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div
      className="text-center text-white font-bold py-40"
      style={{
        background:
          "linear-gradient(94deg, rgba(0,0,128,1) 0%, rgba(197,1,1,1) 100%)",
      }}
    >
      {/* 1 */}
      <div className="pb-60">
        <h1
          ref={refs.first}
          data-name="first"
          className={`mt-6 text-3xl transform transition-all duration-1000 ease-out ${
            isVisible.first ? "text-6xl opacity-100" : "opacity-0 scale-90"
          }`}
        >
          4 Years
        </h1>
        <h1
          ref={refs.second}
          data-name="second"
          className={`mt-6 text-3xl transform transition-all duration-1000 ease-out delay-200 ${
            isVisible.second ? "text-6xl opacity-100" : "opacity-0 scale-90"
          }`}
        >
          of Transforming
        </h1>
        <h1
          ref={refs.third}
          data-name="third"
          className={`mt-6 text-3xl transform transition-all duration-1000 ease-out delay-400 ${
            isVisible.third ? "text-6xl opacity-100" : "opacity-0 scale-90"
          }`}
        >
          Tech Career
        </h1>
      </div>
      {/* 2 */}
      <div className="pb-60">
        <span
          ref={refs.fourth}
          data-name="fourth"
          className={`transition-all duration-1000 ease-out delay-600 ${
            isVisible.fourth ? "text-6xl opacity-100" : "opacity-0 scale-90"
          }`}
        >
          <PiStudentBold className="mx-auto" />
        </span>
        <h1
          ref={refs.fifth}
          data-name="fifth"
          className={`mt-6 text-3xl transform transition-all duration-1000 ease-out delay-800 ${
            isVisible.fifth ? "text-6xl opacity-100" : "opacity-0 scale-90"
          }`}
        >
          1000+ Learners
        </h1>
        <h1
          ref={refs.sixth}
          data-name="sixth"
          className={`mt-4 text-xl transform transition-all duration-1000 ease-out delay-1000 ${
            isVisible.sixth ? "text-2xl opacity-65" : "opacity-0 scale-90"
          }`}
        >
          cracked dream roles at top tech companies
        </h1>
      </div>
      {/* 3 */}
      <div className="pb-60">
        <span
          ref={refs.seven}
          data-name="seven"
          className={`transition-all duration-1000 ease-out delay-600 ${
            isVisible.seven ? "text-6xl opacity-100" : "opacity-0 scale-90"
          }`}
        >
          <FaBuilding className="mx-auto" />
        </span>
        <h1
          ref={refs.eight}
          data-name="eight"
          className={`mt-6 text-3xl transform transition-all duration-1000 ease-out delay-800 ${
            isVisible.eight ? "text-6xl opacity-100" : "opacity-0 scale-90"
          }`}
        >
          100+ Hiring Companies
        </h1>
        <h1
          ref={refs.nine}
          data-name="nine"
          className={`mt-4 text-xl transform transition-all duration-1000 ease-out delay-1000 ${
            isVisible.nine ? "text-2xl opacity-65" : "opacity-0 scale-90"
          }`}
        >
          Cracked Dream Roles at Top Tech Companies!
        </h1>
      </div>
      {/* 4 */}
      <div className="pb-8">
        <span
          ref={refs.ten}
          data-name="ten"
          className={`transition-all duration-1000 ease-out delay-600 ${
            isVisible.ten ? "text-6xl opacity-100" : "opacity-0 scale-90"
          }`}
        >
          <FaRupeeSign className="mx-auto" />
        </span>
        <h1
          ref={refs.eleven}
          data-name="eleven"
          className={`mt-6 text-3xl transform transition-all duration-1000 ease-out delay-800 ${
            isVisible.eleven ? "text-6xl opacity-100" : "opacity-0 scale-90"
          }`}
        >
          3 LPA to 12 LPA
        </h1>
        <h1
          ref={refs.twelve}
          data-name="twelve"
          className={`mt-4 text-xl transform transition-all duration-1000 ease-out delay-1000 ${
            isVisible.twelve ? "text-2xl opacity-65" : "opacity-0 scale-90"
          }`}
        >
          after completing the course
        </h1>
      </div>
    </div>
  );
}
