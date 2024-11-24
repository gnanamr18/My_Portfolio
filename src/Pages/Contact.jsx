import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Icon from "../components/Icon";
import Content from "../components/Content";
import textContent from "../data/textContent.js";

const Contact = ({ handleOnClick, selectedItem }) => {
  return (
    <div className="bg-gray-200 text-gray-800 min-h-screen antialiased flex flex-col w-fit sm:w-full ">
      {/* Navbar */}
      <div className="sticky top-2 z-10">
        <Navbar handleOnClick={handleOnClick} selectedItem={selectedItem} />
      </div>
      {/* Contact page */}
      <Content>
        <section className="flex flex-col items-center md:flex-row md:justify-center gap-20">
          {/* Bold Text */}
          <div className="flex flex-col gap-8  mt-5">
            <span className="font-serif font-semibold text-5xl leading-loose  md:text-5xl md:leading-loose md:max-w-5xl">
              {textContent.contact.intro}
            </span>
            {/* Normal Text */}
            <p className="font-mono text-xl mt-2 leading-loose p-1">
              {textContent.contact.description1} If you have a specific question
              or comment, please feel free to email me directly at{" "}
              <span className="bg-yellow-500">
                {" "}
                {textContent.contact.email}
              </span>
              {textContent.contact.description2}
              <a
                href={textContent.contact.linkedin}
                target="_blank"
                className="text-blue-600 underline text-md"
              >
                {textContent.contact.linkedin}
              </a>
             {textContent.contact.description3}
            </p>
          </div>
        </section>

        {/* Info */}
        <Icon />
      </Content>
      <div>
        <Footer handleOnClick={handleOnClick} selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default Contact;
