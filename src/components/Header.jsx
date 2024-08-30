import React, { useState } from "react";
import { HiMiniBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const naviList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Courses", link: "/courses" },
    { name: "Hire Us", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" xl:px-52 lg:px-40 md:px-28 px-4 bg-[#fff]">
      <div
        className={` flex flex-wrap md:flex-nowrap items-center justify-between py-4 `}
      >
        <Link to={'/'}>
          <div className="lg:w-40 flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-16" alt="logo" />
          </div>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center  h-10 justify-end text-sm  rounded-lg md:hidden "
          // style={{ width: "60%" }}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="transition-transform duration-1000 ease-in-out">
            {!isMenuOpen ? (
              <HiMiniBars3CenterLeft
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "black",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            ) : (
              <HiOutlineXMark
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "black",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            )}
          </span>
        </button>
        <div
          className={` md:block  ${isMenuOpen ? "block w-full" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 lg:justify-end md:justify-end rounded-lg md:flex-row md:space-x-3 lg:space-x-7 rtl:space-x-reverse md:mt-0 md:border-0 ">
            {naviList?.map((item) => (
              <li
                className={`text-lg  hover:text-[#000080] ${
                  location.pathname == item.link
                    ? "text-[#000080]"
                    : "text-black"
                } `}
                key={item.name}
              >
                <Link to={`${item.link}`} className="block py-2 ">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
