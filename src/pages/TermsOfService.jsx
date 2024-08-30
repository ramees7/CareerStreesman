import React, { useEffect } from "react";

const TermsOfService = () => {

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(()=>{
    handleToTop()
  },[])
  return (
    <div className=" xl:px-52 lg:px-40 md:px-28 px-5  py-16" style={{background: 'linear-gradient(94deg, rgba(0,0,128,1) 0%, rgba(197,1,1,1) 100%)' }}>
      <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-[#000080]">
          Career Streesman Terms of Service and Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          <strong>Effective Date:</strong> 01-January-2024
        </p>
        <p className="mb-4">
          Welcome to Career Streesman Technologies Pvt. Ltd. (“Career
          Streesman,” “we,” “our,” or “us”). By accessing or using our website
          and services, you agree to comply with and be bound by the following
          terms and conditions (“Terms”).
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By using our website and services, you agree to these Terms. If you do
          not agree, please do not use our services.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          2. Services Provided
        </h2>
        <p className="mb-4">
          Career Streesman offers educational courses in both online and offline
          modes. Our services are designed to provide high-quality education and
          training in various subjects.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">3. User Information</h2>
        <p className="mb-4">
          We collect personal details such as your name, email, phone number,
          and other relevant information. This information is used to provide
          you access to our courses and the Career Streesman app.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          4. Use of Information
        </h2>
        <p className="mb-4">Your personal information is used to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Provide access to courses.</li>
          <li>
            Communicate important updates and information regarding our
            services.
          </li>
          <li>
            Enhance your learning experience through the Career Streesman app.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">
          5. Payment and Refund Policy
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <span className="font-semibold">No Refunds:</span> Career Streesman does not
            offer refunds for any courses purchased.
          </li>
          <li>
            <span className="font-semibold">Course Batches:</span> You may
            change your course batch to a future date, subject to availability.
          </li>
          <li>
            <span className="font-semibold">Transferable Courses:</span> Courses
            can be transferred to another person, subject to approval.{" "}
          </li>
          <li>
            <span className="font-semibold">No Cancellations:</span>
            Once enrolled, cancellations are not permitted.{" "}
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">
          6. Intellectual Property
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Trademarks: “Career Streesman” is a registered trademark of Career Streesman
            Pvt. Ltd. You may not use our trademark without prior
            written permission.
          </li>
          <li>
            Content: All content provided on our platform is owned by Career Streesman or
            its licensors and is protected by intellectual property laws. You
            may not reproduce, distribute, or create derivative works from our
            content without authorization.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">
          7. Third-Party Links and Services
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Our website does not contain links to third-party websites or
            services. We are not responsible for any third-party content or
            practices.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">
          8. Dispute Resolution
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Arbitration: Any disputes arising from or related to these Terms
            will be resolved through binding arbitration in accordance with the
            Arbitration and Conciliation Act, 1996. The arbitration will take
            place in Bangalore, India, and will be conducted in English.
            Governing Law: These Terms are governed by the laws of India.{" "}
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">
          9. Liability and Disclaimers
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
          Career Streesman is not liable for any indirect, incidental, or consequential
            damages arising out of your use of our services. Our services are
            provided on an “as is” and “as available” basis.{" "}
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">
          10. Modification of Terms
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
          Career Streesman reserves the right to update or modify these Terms at any
            time. Any changes will be effective immediately upon posting on our
            website. Your continued use of our services after any modifications
            indicates your acceptance of the new Terms.{" "}
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">
        11. Contact Information
        </h2>
        <p className="mb-4">If you have any questions or concerns about these Terms, please contact us at:</p>
        <ul className="list-disc list-inside mb-4 ps-7">
          <li><span className="font-semibold">Email:</span> support@Career Streesman.com</li>
          <li><span className="font-semibold">Phone:</span> support@Career Streesman.com</li>
          <li><span className="font-semibold">Address:</span> support@Career Streesman.com</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsOfService;
