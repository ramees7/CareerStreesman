import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

export default function Benefits() {
  const benefits = [
    {
      title: "Curated Talent Pool",
      content:
        "We have a diverse network of highly qualified candidates, ranging from fresh graduates to experienced professionals, ready to make an impact in your organization.",
    },
    {
      title: "Industry-Relevant Skills",
      content:
        "Our candidates undergo rigorous training and development programs tailored to meet industry standards, ensuring they are equipped with the latest skills and knowledge.",
    },
    {
      title: "Streamlined Recruitment Process",
      content:
        "We simplify the hiring process by providing pre-screened, qualified candidates, saving you time and resources. Our team works closely with you to understand your specific needs and match you with the right talent.",
    },
    {
      title: "Flexibility and Customization",
      content:
        "Whether you need full-time employees, part-time staff, or project-based professionals, we offer flexible hiring solutions that cater to your unique requirements.",
    },
    {
      title: "Continuous Support",
      content:
        "Our relationship doesn’t end with the placement. We provide ongoing support to both employers and candidates to ensure a smooth transition and long-term success.",
    },
  ];

  const hiringProcess = [
    {
      title: "Understanding Your Needs",
      content:
        "We start by getting to know your organization, understanding your hiring needs, and identifying the key skills and attributes you’re looking for in a candidate.",
    },
    {
      title: "Candidate Sourcing",
      content:
        "We tap into our extensive talent pool to find the best match for your requirements. Each candidate is carefully selected and vetted based on your specific criteria.",
    },
    {
      title: "Interview and Selection",
      content:
        "We facilitate the interview process, providing you with insights and recommendations to help you make informed decisions.",
    },
    {
      title: "Onboarding and Beyond",
      content:
        "Once you’ve made your choice, we assist with the onboarding process and provide continuous support to ensure a successful integration into your team.",
    },
  ];
  return (
    <div className="pt-16">
      <div className="grid grid-cols-12 gap-5">
        <div className="md:col-span-6 col-span-12">
          <div
            className="text-white py-8 px-4 gap-y-5 flex justify-center flex-col"
            style={{
              background:
                "linear-gradient(94deg,rgba(0,0,128,1)  0%, rgba(197,1,1,1) 100%)",
            }}
          >
            <h4 className="py-2 font-semibold w-fit">
              BENEFITS@CAREERSTREESMAN
            </h4>
            <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold">
              Why Hire from Us?
              {/* Revolutionizing How the Tech Industry Hires */}
            </h1>
            <h5 className="flex items-center gap-x-3">
              Check it Out <FaArrowDown />
            </h5>
          </div>
          <div className="pt-16 pb-10 space-y-5">
            {benefits?.map((item) => (
              <div className="flex  gap-5 " key={item.title}>
                <IoMdStar className="text-xl mt-1 text-[#000080]" />
                <div>
                  <h2 className="text-xl font-semibold text-[#000080]">
                    {item.title}
                  </h2>
                  <h4>{item.content}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-6 col-span-12">
          <div
            className="text-white py-8 px-4 gap-y-5 flex justify-center flex-col"
            style={{
              background:
                "linear-gradient(94deg,rgba(197,1,1,1)  0%, rgba(0,0,128,1) 100%)",
            }}
          >
            <h4 className="py-2 font-semibold w-fit ">
              PROCESS@CAREERSTREESMAN
            </h4>
            <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold">
              Our Hiring Process
            </h1>
            <h5 className="flex items-center gap-x-3">
              Check it Out <FaArrowDown />
            </h5>
          </div>
          <div className="pt-16 space-y-5">
            {hiringProcess?.map((item) => (
              <div className="flex  gap-5 " key={item.title}>
                <IoMdStar className="text-xl mt-1 text-[#c50101]" />
                <div>
                  <h2 className="text-xl font-semibold text-[#c50101]">
                    {item.title}
                  </h2>
                  <h4>{item.content}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
