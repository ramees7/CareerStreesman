import React, { useEffect } from "react";
import Form from "../components/Contact/Form";
import Address from "../components/Contact/Address";
import ContactLanding from "../components/Contact/ContactLanding";

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
      <ContactLanding />
      <Address />
      <Form />
    </div>
  );
}
