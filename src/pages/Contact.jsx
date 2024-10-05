import React, { useEffect } from "react";
import Form from "../components/Contact/Form";
import Address from "../components/Contact/Address";
import ContactLanding from "../components/Contact/ContactLanding";
import { Helmet } from "react-helmet";

export default function Contact() {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, []);

  return (
    <div className=" xl:px-52 lg:px-40 md:px-28 px-5 bg-[#eaeff5]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact - Career Streesman</title>
        <link rel="canonical" href="https://careersteersman.com/contact" />
        <meta
          name="description"
          content="Get in touch with Career Streesman. Learn about our services and how we can assist you."
        />
        <meta property="og:title" content="Contact - Career Streesman" />
        <meta
          property="og:description"
          content="Get in touch with Career Streesman. Learn about our services and how we can assist you."
        />
        <meta property="og:image" content="../assets/image/icon-logo.png" />
        <meta property="og:url" content="https://careersteersman.com/contact" />
      </Helmet>
      <ContactLanding />
      <Address />
      <Form />
    </div>
  );
}
