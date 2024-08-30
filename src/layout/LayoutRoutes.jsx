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



  return (
    <BrowserRouter>
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
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="/copyrightpolicy" element={<CopyRightPolicy />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
      <LandingRegForm/>
    </BrowserRouter>
  );
}
