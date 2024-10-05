import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function CopyRightPolicy() {
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
    <div
      className="xl:px-52 lg:px-40 md:px-28 px-5 py-16"
      style={{
        background:
          "linear-gradient(94deg, rgba(0,0,128,1) 0%, rgba(197,1,1,1) 100%)",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>CopyRight Policy - Career Streesman</title>
        <link
          rel="canonical"
          href="https://careersteersman.com/copyrightpolicy"
        />
        <meta
          name="description"
          content="Read our CopyRight Policy to understand how we protect intellectual property and comply with copyright laws at Career Streesman."
        />
        <meta
          property="og:title"
          content="CopyRight Policy - Career Streesman"
        />
        <meta
          property="og:description"
          content="Read our CopyRight Policy to understand how we protect intellectual property and comply with copyright laws at Career Streesman."
        />
        <meta property="og:image" content="../assets/image/icon-logo.png" />
        <meta
          property="og:url"
          content="https://careersteersman.com/copyrightpolicy"
        />
      </Helmet>

      <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-[#000080]">
          Career Streesman Copyright Policy
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          <strong>Effective Date:</strong> 01-January-2024
        </p>
        <p className="mb-4">
          Carees Streesman Technologies Pvt. Ltd. (“Carees Streesman,” “we,”
          “our,” or “us”) respects the intellectual property rights of others
          and expects our users to do the same. This Copyright Policy explains
          how we handle copyright infringement claims and outlines the steps for
          copyright holders to report alleged infringements.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          1. Our Intellectual Property
        </h2>
        <p className="mb-4">
          All content and materials available on our website and services,
          including but not limited to text, graphics, website name, code,
          images, and logos, are the intellectual property of Carees Streesman
          Technologies Pvt. Ltd. and are protected by applicable copyright,
          trademark, and other intellectual property laws. Unauthorized use of
          any content is strictly prohibited.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          2. User-Generated Content
        </h2>
        <p className="mb-4">
          Users may submit content, including but not limited to reviews,
          comments, and other materials (“User-Generated Content”). By
          submitting User-Generated Content, you grant Carees Streesman a
          non-exclusive, royalty-free, worldwide, perpetual license to use,
          reproduce, modify, adapt, publish, translate, create derivative works
          from, distribute, and display such content in any media.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          3. Reporting Copyright Infringements
        </h2>
        <p className="mb-4">
          If you believe that any content available on our website or services
          infringes your copyright, please notify us by providing the following
          information:
        </p>
        <ul className="ps-7 list-disc list-inside mb-4">
          <li>
            <span className="font-semibold">
              Identification of the copyrighted work:
            </span>{" "}
            A description of the copyrighted work that you claim has been
            infringed.
          </li>
          <li>
            <span className="font-semibold">
              Identification of the infringing material:
            </span>{" "}
            A description of where the allegedly infringing material is located
            on our website or services, including a URL or specific location.
          </li>
          <li>
            <span className="font-semibold">Contact information:</span> Your
            name, address, telephone number, and email address.
          </li>
          <li>
            <span className="font-semibold">A statement:</span> A statement by
            you that you have a good faith belief that the disputed use is not
            authorized by the copyright owner, its agent, or the law.
          </li>
          <li>
            <span className="font-semibold">A statement of accuracy:</span> A
            statement by you, made under penalty of perjury, that the
            information in your notice is accurate and that you are the
            copyright owner or authorized to act on the copyright owner’s
            behalf.
          </li>
          <li>
            <span className="font-semibold">Signature:</span> An electronic or
            physical signature of the person authorized to act on behalf of the
            owner of the copyright interest.
          </li>
        </ul>
        <p className="mb-4">Please send the above information to:</p>
        <ul className="list-disc list-inside mb-4 ps-7">
          <li>
            <span className="font-semibold">Email:</span>{" "}
            support@careerstreesman.com
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          4. Responding to Claims
        </h2>
        <p className="mb-4">
          Upon receipt of a valid copyright infringement notice, we will:
        </p>
        <ul className="ps-7 list-disc list-inside mb-4">
          <li>
            Remove or disable access to the allegedly infringing material.
          </li>
          <li>Notify the user who posted the material of the removal.</li>
          <li>
            Terminate repeat infringers’ access to our services if necessary.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          5. Counter-Notification
        </h2>
        <p className="mb-4">
          If you believe that your content was removed or disabled by mistake or
          misidentification, you may submit a counter-notification to us with
          the following information:
        </p>
        <ul className="ps-7 list-disc list-inside mb-4">
          <li>
            <span className="font-semibold">
              Identification of the material:
            </span>{" "}
            A description of the material that has been removed or disabled and
            the location where it appeared before it was removed or disabled.
          </li>
          <li>
            <span className="font-semibold">Statement of good faith:</span> A
            statement that you have a good faith belief that the material was
            removed or disabled as a result of mistake or misidentification.
          </li>
          <li>
            <span className="font-semibold">Consent to jurisdiction:</span> A
            statement that you consent to the jurisdiction of the federal court
            in your district (or if outside of India, the district courts
            located in Bangalore, India).
          </li>
          <li>
            <span className="font-semibold">Contact information:</span> Your
            name, address, telephone number, and email address.
          </li>
          <li>
            <span className="font-semibold">Signature:</span> An electronic or
            physical signature.
          </li>
        </ul>
        <p className="mb-4">
          Please send the counter-notification to the same contact details
          provided above.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          6. Termination Policy
        </h2>
        <p className="mb-4">
          Carees Streesman reserves the right to terminate access to our
          services for users who are repeat infringers of intellectual property
          rights.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          7. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update our Copyright Policy from time to time. We will notify
          you of any changes by posting the new Copyright Policy on this page
          and updating the effective date. You are advised to review this
          Copyright Policy periodically for any changes.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          8. Contact Information
        </h2>
        <p className="mb-4">
          If you have any questions or concerns about these Terms, please
          contact us at:
        </p>
        <ul className="list-disc list-inside mb-4 ps-7">
          <li>
            <span className="font-semibold">Email:</span>{" "}
            support@careerstreesman.com
          </li>
          <li>
            <span className="font-semibold">Phone:</span> +91 8095000123
          </li>
          <li>
            <span className="font-semibold">Address:</span> Career Streesman
            office – 4th & 5th Floor, CPR Tower, above Reliance Fresh, Vysya
            Bank Colony, Stage 2, BTM Layout, Bengaluru, Karnataka 560076
          </li>
        </ul>
      </div>
    </div>
  );
}
