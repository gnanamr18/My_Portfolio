import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Icon from "../components/Icon";

const Contact = ({ handleOnClick, selectedItem }) => {
  return (
    <div className="bg-gray-200 text-gray-800 min-h-screen antialiased flex flex-col w-fit sm:w-full ">
      {/* Navbar */}
      <div className="sticky top-2 z-10">
        <Navbar handleOnClick={handleOnClick} selectedItem={selectedItem} />
      </div>
      {/* Home page */}
      <div className="flex flex-col items-start  gap-8 max-w-5xl m-5 p-5 selection: mx-auto">
        {/* logo */}
        <img
          src="/images/logo.jpeg"
          alt="logo"
          className="rounded-full w-16 h-16 hover:cursor-pointer mt-12"
          onClick={() => {
            handleOnClick("Home");
          }}
        />
        <section className="flex flex-col items-center md:flex-row md:justify-center gap-20">
          {/* Bold Text */}
          <div className="flex flex-col gap-8  mt-5">
            <span className="font-serif font-semibold text-2xl leading-loose  md:text-5xl md:leading-loose md:max-w-5xl">
              Let's Get in Touch: Ways to Connect with Me
            </span>
            {/* Normal Text */}
            <p className="font-mono text-xl mt-2 leading-loose  p-1 ">
              Thank you for your interest in getting in touch with me. I welcome
              your feedback, questions, and suggestions. If you have a specific
              question or comment, please feel free to email me directly On
              clicking this email{" "}
              <span className="bg-yellow-500"> gnanam.r18@gmail.com</span>. I
              make an effort to respond to all messages within 24 hours,
              although it may take me longer during busy periods. Alternatively,
              you can use the contact form on my website to get in touch. Simply
              fill out the required fields and I'll get back to you as soon as
              possible. Finally, if you prefer to connect on social media, you
              can find me on
              <a
                href="https://www.linkedin.com/in/gnanam-r/"
                target="_blank"
                className="text-blue-600 underline"
              >
                {" "}
                https://www.linkedin.com/in/gnanam-r/
              </a>
              . I post regular updates and engage with my followers there, so
              don't hesitate to reach out. Thanks again for your interest, and I
              look forward to hearing from you!
            </p>
          </div>
        </section>
          
        {/* Info */}
          <Icon/>
          
      </div>
      <div>
        <Footer handleOnClick={handleOnClick} />
      </div>
    </div>
  );
};

export default Contact;
