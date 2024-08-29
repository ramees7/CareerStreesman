import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Home/Home.css";

export default function Why() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className="py-16">
      <div className="pb-16">
        <h2 className="text-3xl leading-9 mb-8 text-[#000080] text-center">
          <span className="font-extrabold">Why</span>{" "}
          <span className="font-semibold">Career Streesman ?</span>
        </h2>
        <h6 className="tracking-wider" style={{ wordSpacing: "5px" }}>
          Careersteersman is a world-class learning platform that empowers
          people to learn, master, and apply anything they desire. Our mission
          is to connect the world by enabling people to achieve their goals by
          connecting with the right resources at the right time. We provide an
          industry-relevant curriculum, crafted by experienced professionals and
          experts ensuring you gain up-to-date skills and knowledge. Alongside
          your learning process, live projects, and hands-on experience, you
          bridge the gap between theory and practice making you job-ready.
          Students benefit from learning directly from industrial experts who
          provide valuable guidance and mentorship. Our company provides certain
          value-added services in addition to the comprehensive curriculum which
          enhances the overall development of the learner turning them into
          abled competitors of the IT industry. Students are nurtured in such
          ways that they get to experience expertise hands-on and job placement
          assistance, and also company's strong industry network opens doors to
          numerous opportunities. Choose flexible learning options and
          personalized attention to suit your schedule and needs. Whether you
          envision yourself as a Software Developer. Digital Marketer, UI/UX
          Designer, or HR Professional, our tailored courses cater to your
          specific career aspirations. Embark on a rewarding journey of growth
          and success with us today
        </h6>
      </div>
      <div className="flex justify-between">
        <div
          className="w-[350px] h-fit text-center p-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h1 className="text-4xl font-bold mb-3 landing-heading">VISION</h1>
          <h4 className="text-lg">
            To remain a trusted partner in career development, creating a
            lasting impact for individuals and their loved ones
          </h4>
        </div>
        <div
          className="w-[350px] h-fit text-center p-5"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h1 className="text-4xl font-bold mb-3 landing-heading">MISSION</h1>
          <h4 className="text-lg">
            To empower individuals with job training to enhance their careers
            and uplift their lives
          </h4>
        </div>
      </div>
    </div>
  );
}
