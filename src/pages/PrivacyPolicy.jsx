import React, { useEffect } from "react";

export default function PrivacyPolicy() {
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
    <div className=" xl:px-52 lg:px-40 md:px-28 px-5  py-16" style={{background: 'linear-gradient(94deg, rgba(0,0,128,1) 0%, rgba(197,1,1,1) 100%)' }}>
      <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-[#000080]">
          Career Streesman Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          <strong>Effective Date:</strong> 01-January-2024
        </p>
        <p className="mb-4">
        Career Streesman Technologies Pvt. Ltd. (Career Streesman,” “we,” “our,” or “us”) uses
          cookies and similar tracking technologies to enhance your experience
          on our website and services. This Cookie Policy explains what cookies
          are, how we use them, and your choices regarding their use.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          1. What Are Cookies?
        </h2>
        <p className="mb-4">
          Cookies are small text files that are stored on your device (computer,
          tablet, or mobile) when you visit a website. They help the website
          remember your actions and preferences over a period of time, so you
          don’t have to re-enter them whenever you come back to the site or
          browse from one page to another.
        </p>
        <h2 className="text-lg font-semibold mt-6 mb-2">
          2. How We Use Cookies
        </h2>
        <p className="mb-4">We use cookies to:</p>
        <ul className="ps-7 list-disc list-inside mb-4">
          <li>
            <span className="font-semibold">Enhance User Experience:</span>{" "}
            Remember your preferences and settings.
          </li>
          <li>
            <span className="font-semibold">Analytics and Performance:</span>{" "}
            Understand how you use our website and services, and improve their
            performance.
          </li>
          <li>
            <span className="font-semibold">Marketing:</span> Deliver relevant
            advertisements and track their effectiveness.
          </li>
          <li>
            <span className="font-semibold">Security:</span> Protect your data
            and prevent fraudulent activity.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">
          3. Types of Cookies We Use
        </h2>
        <p className="my-4 font-semibold">Essential Cookies</p>
        <ul className="ps-7 list-disc list-inside mb-4">
          <li>
            These cookies are necessary for the website to function properly.
            They enable basic features like page navigation and access to secure
            areas of the website.
          </li>
        </ul>
        <p className="my-4 font-semibold">Preference Cookies</p>
        <ul className="ps-7 list-disc list-inside mb-4">
          <li>
            These cookies allow our website to remember choices you make, such
            as your language preference or the region you are in.
          </li>
        </ul>
        <p className="my-4 font-semibold">Analytics Cookies</p>
        <ul className="ps-7 list-disc list-inside mb-4">
          <li>
            These cookies collect information about how visitors use our
            website, such as which pages are visited most often. This data helps
            us improve the site and make it easier for users to find what they
            need.
          </li>
        </ul>
        <p className="my-4 font-semibold">Marketing Cookies</p>
        <ul className="ps-7 list-disc list-inside mb-4">
          <li>
            These cookies are used to track visitors across websites. The
            intention is to display ads that are relevant and engaging for the
            individual user.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">
          4. Third-Party Cookies
        </h2>
        <p className="mb-4">
          In addition to our own cookies, we may also use various third-party
          cookies to report usage statistics of the service, deliver
          advertisements on and through the service, and so on.
        </p>
        <h2 className="text-lg font-semibold mt-6 mb-2">
          5. Your Choices Regarding Cookies
        </h2>
        <p className="mb-4">
          You have the right to decide whether to accept or reject cookies. You
          can set or amend your web browser controls to accept or refuse
          cookies. If you choose to reject cookies, you may still use our
          website, though your access to some functionality and areas of our
          website may be restricted.
        </p>
        <p className="my-4 font-semibold">Browser Settings</p>
        <ul className="ps-7 list-disc list-inside mb-4">
          <li>
            Most web browsers allow control of most cookies through the browser
            settings. To find out more about cookies, including how to see what
            cookies have been set and how to manage and delete them, visit
            www.allaboutcookies.org.
          </li>
        </ul>
        <p className="my-4 font-semibold">Opt-Out Links</p>
        <ul className="ps-7 list-disc list-inside mb-4">
          <li>
            <span className="font-semibold">Google Analytics:</span> You can opt-out of Google Analytics by installing
            the Google Analytics opt-out browser add-on.
          </li>
          <li>
          <span className="font-semibold">Advertising Cookies:</span> You can opt-out of interest-based ads by
            visiting the Network Advertising Initiative opt-out page or the
            Digital Advertising Alliance opt-out page.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">
          6. Updates to This Cookie Policy
        </h2>
        <p className="mb-4">
          We may update our Cookie Policy from time to time. We will notify you
          of any changes by posting the new Cookie Policy on this page and
          updating the effective date. You are advised to review this Cookie
          Policy periodically for any changes.
        </p>
        <h2 className="text-lg font-semibold mt-6 mb-2">
          11. Contact Information
        </h2>
        <p className="mb-4">
          If you have any questions or concerns about these Terms, please
          contact us at:
        </p>
        <ul className="list-disc list-inside mb-4 ps-7">
          <li>
            <span className="font-semibold">Email:</span> support@Career
            Streesman.com
          </li>
          <li>
            <span className="font-semibold">Phone:</span> support@Career
            Streesman.com
          </li>
          <li>
            <span className="font-semibold">Address:</span> support@Career
            Streesman.com
          </li>
        </ul>
      </div>
    </div>
  );
}
