import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Address() {
  return (
    <div className="py-16">
      <div className="grid grid-cols-12 gap-6">
        <div className="md:col-span-6 col-span-12">
          <div className="flex gap-x-3 mb-3">
            <h1 className="text-xl font-semibold flex items-start gap-x-2">
              <FaLocationDot  className="mt-1"/>
              Address:{" "}
            </h1>
            <div className="text-lg">
              <h1>bengluru sjfdsf ssjnksjfns sdbsbsb bjsdjdkvbksvb</h1>
            </div>
          </div>
          <div className="flex gap-x-3 mb-3">
            <h1 className="text-xl font-semibold mb-3 flex items-start gap-x-2">
              <MdEmail className="mt-1"/>
              email:{" "}
            </h1>
            <div className="text-lg">
              <h1>bengluru sjfdsf ssjnksjfns sdbsbsb bjsdjdkvbksvb</h1>
            </div>
          </div>
          <div className="flex gap-x-3 mb-3">
            <h1 className="text-xl font-semibold mb-3 flex items-start gap-x-2">
              <FaPhoneAlt  className="mt-1"/>
              Phone No:
            </h1>
            <div className="text-xl">
              <h1>
                <a href="tel:+910987654321" className="text-[#000080]">
                  0987654321
                </a>
              </h1>
              <h1>
                <a href="tel:+910987654321" className="text-[#000080]">
                  0987654321
                </a>
              </h1>
              <h1>
                <a href="tel:+910987654321" className="text-[#000080]">
                  0987654321
                </a>
              </h1>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77492875466!2d77.30126945310809!3d12.95445953149592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1725043125634!5m2!1sen!2sin"
            height="400"
            className="w-full border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
