import React, { useState } from "react";

export default function FAQ({ courseDetails }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="gap-y-6 flex flex-col items-center">
        <h2 className="text-4xl leading-9 font-semibold text-[#000080] text-center">
          Frequently Asked Questions?
        </h2>

        <div className="lg:w-[70%]">
          {courseDetails.faq.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className="accordion-header pt-4 w-full text-left text-[#000] mb-4 text-xl"
              >
                <strong>Q.</strong> {faq.question}
                {/* <span>{openIndex === index ? "-" : "+"}</span> */}
              </button>
              <div
                className={`accordion-content ${
                  openIndex === index ? "open" : "hidden"
                }`}
              >
                {openIndex === index && (
                  <ul className="text-black">
                    {faq.answer?.map((answer) => (
                      <li key={answer} className="list-disc list-inside ps-6">{answer}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
