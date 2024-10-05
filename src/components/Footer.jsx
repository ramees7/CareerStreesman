import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "../components/Home/Home.css";

export default function Footer() {
  const socialMedia = [
    {
      name: "Instagram",
      icon: <IoLogoInstagram />,
      link: "https://www.instagram.com/careersteersman?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/career-steersman/",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/Doctosmartedtech",
    },
    {
      name: "Youtube",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/channel/UClKms_p7ZUbfzs6C805TFcg",
    },
  ];
  return (
    <footer className="pt-12 ">
      <div className="text-center py-6">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold landing-heading">
          CAREER STREESMAN - Crafting Careers, <br /> Enabling Hope
        </h1>
        <h4 className="text-sm md:text-md lg:text-lg mt-3">
          To empower individuals with job training to enhance their careers and
          uplift their lives
        </h4>
      </div>
      <div className="flex justify-center py-6">
        <div className="flex justify-evenly w-[60%]">
          {socialMedia?.map((item) => (
            <Link
              to={`${item.link}`}
              key={item.name}
              title={item.name}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:text-6xl md:text-4xl text-3xl text-[#000080]"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-evenly items-center">
            <div className="w-full sm:w-auto text-center sm:text-left mb-4  ">
              <div className="flex items-center justify-center sm:justify-start">
                <img src={logo} alt="Logo" className="h-16 md:w-full mr-2" />
              </div>
              <p className="text-sm mt-2 text-center">All rights reserved</p>
            </div>
            <div className="w-full sm:w-auto text-center sm:text-left">
              <div className="grid grid-cols-2 gap-4 sm:flex sm:space-x-8">
                <div>
                  <h6 className="text-lg font-semibold mb-2">Explore</h6>
                  <ul className="text-black">
                    <li>
                      <Link to={"/courses"}>Full Stack Development</Link>
                    </li>
                    <li>
                      <Link to={"/careers"}>Hire from us</Link>
                    </li>
                    <li>
                      <Link to={"/book-demo"}>Book Free Demo</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-lg font-semibold mb-2">Company</h6>
                  <ul className="text-black">
                    <li>
                      <Link to={"/about"}>About us</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact us</Link>
                    </li>
                    <li className="text-[#000080] font-semibold">
                      <Link to={"/careers"}>We're hiring!</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-lg font-semibold mb-2">Legal</h6>
                  <ul className="text-black">
                    <li>
                      <Link to={"/termsofservice"}>Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to={"/privacypolicy"}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to={"/cookiepolicy"}>Cookie Policy</Link>
                    </li>
                    <li>
                      <Link to={"/copyrightpolicy"}>Copyright Policy</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-lg font-semibold mb-2">Follow Us</h6>
                  <ul className="text-black">
                    {socialMedia?.map((item) => (
                      <li key={item.link}>
                        <Link
                          to={`${item.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly flex-wrap py-6 lg:gap-7">
        <div className="flex gap-1 items-center font-bold text-lg">
          <FaPhoneAlt />
          <h1>Contact Us :</h1>
          <a
            href="tel:7907348039"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000080]"
          >
            {" "}
            +91 79073 48039
          </a>
        </div>
        <div className="flex gap-1 items-center font-bold text-lg">
          <IoIosMail />
          <h1>Email :</h1>
          <a
            href="mailto:doctosmartacademy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000080]"
          >
            doctosmartacademy@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
