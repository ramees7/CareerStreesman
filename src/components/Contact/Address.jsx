import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoTimeSharp } from "react-icons/io5";

export default function Address() {
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
    <div className="py-16">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000080] mb-3">
            Get in Touch with Us
          </h1>
        </div>
        <div className="md:col-span-6 col-span-12 w-[90%]">
          <h3 className="text-md mb-1 font-semibold text-lg">
            General Inquiries
          </h3>
          <h3 className="mb-5">
            Have a question about our services? Want to learn more about how we
            can help you achieve your career goals or find the right candidates
            for your company? Reach out to us, and we’ll get back to you
            promptly.{" "}
          </h3>
          <div className="flex gap-x-3 mb-1">
            <h1 className="text-lg font-semibold flex items-start gap-x-2">
              <FaLocationDot className="mt-1" />
              Address:{" "}
            </h1>
            <div className="text-md">
              <h1>[Your Office Address] </h1>
            </div>
          </div>
          <div className="flex gap-x-3 mb-1">
            <h1 className="text-lg font-semibold mb-1 flex items-start gap-x-2">
              <MdEmail className="mt-1" />
              email:{" "}
            </h1>
            <div className="text-md">
              <h1>your-email@careersteersman.com</h1>
            </div>
          </div>
          <div className="flex gap-x-3 mb-1">
            <h1 className="text-lg font-semibold mb-3 flex items-start gap-x-2">
              <FaPhoneAlt className="mt-1" />
              Phone No:
            </h1>
            <div className="text-md">
              <h1>
                <a href="tel:+910987654321" className="text-[#000080]">
                  +[Your Phone Number]
                </a>
              </h1>
              <h1>
                <a href="tel:+910987654321" className="text-[#000080]">
                  +[Your Phone Number]
                </a>
              </h1>
              <h1>
                <a href="tel:+910987654321" className="text-[#000080]">
                  +[Your Phone Number]
                </a>
              </h1>
            </div>
          </div>
        </div>
        {/* ---------------------------- */}
        <div className="md:col-span-6 col-span-12  w-[90%]">
          <h3 className="text-md mb-1 font-semibold text-lg">
            Student Support
          </h3>
          <h3 className="mb-5">
            If you’re a student looking for career advice, placement assistance,
            or training opportunities, our dedicated support team is here to
            help you.{" "}
          </h3>

          <div className="flex gap-x-3 mb-1">
            <h1 className="text-lg font-semibold mb-1 flex items-start gap-x-2">
              <MdEmail className="mt-1" />
              email:{" "}
            </h1>
            <div className="text-md">
              <h1>student-support@careersteersman.com</h1>
            </div>
          </div>
          <div className="flex gap-x-3 mb-1">
            <h1 className="text-lg font-semibold mb-3 flex items-start gap-x-2">
              <FaPhoneAlt className="mt-1" />
              Phone No:
            </h1>
            <div className="text-md">
              <h1>
                <a href="tel:+910987654321" className="text-[#000080]">
                  +[Your Support Line]
                </a>
              </h1>
            </div>
          </div>
        </div>
        {/* ---------------------------------- */}
        <div className="md:col-span-6 col-span-12  w-[90%]">
          <h3 className="text-md mb-1 font-semibold text-lg">
            Employer Services
          </h3>
          <h3 className="mb-5">
            Interested in hiring from our pool of talented candidates? Contact
            our employer services team to discuss your recruitment needs and
            discover how we can assist you.{" "}
          </h3>
          <div className="flex gap-x-3 mb-1">
            <h1 className="text-lg font-semibold mb-1 flex items-start gap-x-2">
              <MdEmail className="mt-1" />
              email:{" "}
            </h1>
            <div className="text-md">
              <h1>employer-services@careersteersman.com</h1>
            </div>
          </div>
          <div className="flex gap-x-3 mb-1">
            <h1 className="text-lg font-semibold mb-3 flex items-start gap-x-2">
              <FaPhoneAlt className="mt-1" />
              Phone No:
            </h1>
            <div className="text-md">
              <h1>
                <a href="tel:+910987654321" className="text-[#000080]">
                  +[Your Employer Services Line]
                </a>
              </h1>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12  w-[90%]">
          <h3 className="text-md mb-1 font-semibold text-lg">
            Connect with Us on Social Media
          </h3>
          <h3 className="mb-5">
            Stay updated with the latest news, events, and opportunities by
            following us on social media.{" "}
          </h3>
          <div className="flex justify-start mb-5 gap-4 w-[60%]">
            {socialMedia?.map((item) => (
              <Link
                to={`${item.link}`}
                key={item.name}
                title={item.name}
                target="_blank"
                className="lg:text-4xl md:text-3xl text-2xl text-[#000080]"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:col-span-6 col-span-12  w-[90%]">
          <h3 className="text-md mb-1 font-semibold text-lg">
            Visit Our Office
          </h3>
          <h3 className="mb-5">
            We welcome you to visit us at our office for a face-to-face
            consultation. Our team is ready to assist you with any inquiries you
            may have.{" "}
          </h3>
          <div className="flex gap-x-3 mb-2">
            <h1 className="text-lg font-semibold flex items-start gap-x-2">
              <FaLocationDot className="mt-1" />
              Address:{" "}
            </h1>
            <div className="text-md">
              <h1>
                [Your Office Address] <br />
                [City, State, ZIP Code] <br />
                [Country]
              </h1>
            </div>
          </div>
          <div className="flex gap-x-3 mb-2">
            <h1 className="text-lg font-semibold flex items-start gap-x-1">
              <IoTimeSharp className="mt-1" />
              Office Hours:
            </h1>
            <div className="text-md">
              <h1>
                Monday to Friday: 9:00 AM – 6:00 PM <br />
                Saturday: 10:00 AM – 4:00 PM <br />
                Sunday: Closed
              </h1>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77492875466!2d77.30126945310809!3d12.95445953149592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1725043125634!5m2!1sen!2sin"
            height="400"
            className="w-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
