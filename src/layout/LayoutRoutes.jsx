import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";
import LandingRegForm from "../components/LandingRegForm";
import TermsOfService from "../pages/TermsOfService";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy";
import CopyRightPolicy from "../pages/CopyRightPolicy";
import Hiring from "../pages/Hiring";
import CourseOverview from "../pages/CourseOverview";
import BookDemo from "../pages/BookDemo";
import { IoLogoWhatsapp } from "react-icons/io";

export default function LayoutRoutes() {
  const [showHeaderNav, setShowHeaderNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setShowHeaderNav(true);
      } else {
        setShowHeaderNav(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const courseNames = [
    {
      name: "Java Full Stack",
      url: "java-full-stack",
    },
    {
      name: "Python Full Stack",
      url: "python-full-stack",
    },
    {
      name: "MERN Full Stack",
      url: "mern-full-stack",
    },
    {
      name: "Flutter App Development",
      url: "flutter-app-development",
    },
    {
      name: "AR /VR Development",
      url: "ar-vr-development",
    },
    {
      name: "Data Science",
      url: "data-science",
    },
    {
      name: "Cyber Security",
      url: "cyber-security",
    },
    {
      name: "Digital Marketing",
      url: "digital-marketing",
    },
    {
      name: "Human Resource Management",
      url: "human-resource-management",
    },
    {
      name: "Graphic Designing",
      url: "graphic-designing",
    },
    {
      name: "UI / UX Designer",
      url: "ui-ux-designer",
    },
    {
      name: "Data Analysts",
      url: "data-analysts",
    },
  ];

  return (
    <BrowserRouter>
      <div
        style={{
          position: "fixed",
          zIndex: "10",
          bottom: "20px",
          right: "10px",
        }}
      >
        <a href="https://wa.me/09871" target="_blank">
          <IoLogoWhatsapp className="text-5xl text-[#075E54]"/>
        </a>
      </div>
      <div
        className={`sticky top-0 w-full z-50 transition-transform duration-1000 ${
          showHeaderNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Hiring />} />
        {courseNames?.map((item) => (
          <Route
            path={`courses/${item.url}`}
            key={item.name}
            element={<CourseOverview />}
          />
        ))}
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="/copyrightpolicy" element={<CopyRightPolicy />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
      <LandingRegForm />
    </BrowserRouter>
  );
}
