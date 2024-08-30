import { message } from "antd";
import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

export default function LandingRegForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    course: "",
  });
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Reset email error when the user starts typing
    if (e.target.name === "email") {
      setEmailError("");
    }

    // Reset phone number error when the user starts typing
    if (e.target.name === "number") {
      setNumberError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (number) => {
    return number.length === 10 && /^\d+$/.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Validate phone number
    if (!validatePhoneNumber(formData.number)) {
      setNumberError("Phone number must be 10 digits.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        message.success("Message sent successfully!");
        setFormData({ name: "", email: "", number: "", course: "" });
        setShowForm(false);
      } else {
        message.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to send message. Please try again.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Modal toggle button */}
      {showForm && (
        <button
          onClick={() => setShowForm(false)}
          className="block text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="button"
        >
          Toggle modal
        </button>
      )}

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-[#000] bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-black rounded-lg shadow">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-2xl font-semibold text-[#fff]">Register</h3>
                <button
                  onClick={() => setShowForm(false)}
                  type="button"
                  className="end-2.5 text-[#fff] bg-transparent rounded-lg text-2xl ms-auto inline-flex justify-center items-center"
                  data-modal-hide="authentication-modal"
                >
                  <FaXmark />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Mathew"
                      className="border px-3 text-sm rounded-lg w-full h-12"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="number"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your Number
                    </label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      value={formData.number}
                      onChange={handleChange}
                      className={`border px-3 text-sm rounded-lg w-full h-12 ${
                        numberError ? "border-red-500" : ""
                      }`}
                      placeholder="9876543210"
                      required
                    />
                    {numberError && (
                      <p className="text-red-500 text-sm mt-1">{numberError}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`border px-3 text-sm rounded-lg w-full h-12 ${
                        emailError ? "border-red-500" : ""
                      }`}
                      placeholder="careerstreesman@gmail.com"
                      required
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="course"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="border px-3 text-sm rounded-lg w-full h-12 "
                    >
                      <option value="" disabled>
                        Choose an option
                      </option>
                      <option value="Java Full Stack">Java Full Stack</option>
                      <option value="Python Full Stack">Python Full Stack</option>
                      <option value="MERN Full Stack">MERN Full Stack</option>
                      <option value="Flutter App Development">Flutter</option>
                      <option value="AR /VR Development">AR /VR Development</option>
                      <option value="Data Science">FlutteData Sciencer</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Human Resource Management">Human Resource Management</option>
                      <option value="Graphic Designing">Graphic Designing</option>
                      <option value="UI / UX Designer">UI / UX Designer</option>
                      <option value="Data Analysts">Data Analysts</option>
                      <option value="Not decided yet">Other</option>
                    </select>
                  </div>
                  <div className="w-full flex justify-center">
                    <button
                      type="submit"
                      className="text-white bg-[#000080] px-3 py-2 rounded"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
