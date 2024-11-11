import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Education from "../components/Education.";

function About({ handleOnClick }) {
  return (
    <div className="bg-gray-200 text-gray-800 min-h-screen antialiased flex flex-col w-fit sm:w-full">
      {/* Navbar */}
      <div className="sticky top-2 z-10">
        <Navbar handleOnClick={handleOnClick} />
      </div>

      {/* About page */}
      <div className="flex flex-col items-start gap-8 max-w-5xl m-5 p-5 mx-auto">
        {/* Logo */}
        <img
          src="/images/logo.jpeg"
          alt="logo"
          className="rounded-full w-16 h-16 hover:cursor-pointer mt-12"
          onClick={() => {
            handleOnClick("home");
          }}
        />

        {/* Content section similar to Home */}
        <section className="flex flex-col items-center md:flex-row md:justify-center  gap-20">
          {/* Profile Image */}
          <img
            src="/images/profile1.jpg"
            alt="profile"
            className="rounded-3xl rotate-2 w-72 h-80 md:order-last md:self-start"
          />

          {/* Text content */}
          <div className="flex flex-col w-full gap-8 mt-5">
            <span className="font-serif font-semibold text-2xl leading-loose">
              I'm Gnanam Rajagopalan, from Coimbatore, Tamil Nadu, India. I am
              very interested in making creative, responsive, and scalable
              systems.
            </span>
            <p className="font-mono text-xl mt-2 leading-loose p-1 max-w-md">
              I'm Gnanam Rajagopalan from India, and I've been involved in
              diverse projects. I take pride in my work, especially in the
              open-source projects I've contributed to. You're welcome to
              explore the code and share your suggestions for improvements or
              new ideas. Collaboration is a fantastic way to learn and innovate,
              and I'm eager to hear your feedback.
            </p>

            {/* Experience and Education */}
            <div className="flex flex-col   gap-2">
              <div className="w-full">
                <Experience />
              </div>
              <div className="w-full">
                <Education />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div>
        <Footer handleOnClick={handleOnClick} />
      </div>
    </div>
  );
}

export default About;
