import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Education from "../components/Education.";
import Img from "../components/Img";

function About({ handleOnClick }) {
  return (
    <div className="bg-gray-200 text-gray-800 min-h-screen antialiased flex flex-col w-fit sm:w-full">
      {/* Navbar */}
      <div className="sticky top-2 z-10">
        <Navbar handleOnClick={handleOnClick} />
      </div>

      {/* About page */}
      <div className="flex flex-col  gap-8 max-w-5xl m-5 p-5 mx-auto">
        {/* Logo */}
        <Img
          src={"/images/logo.jpeg"}
          alt={"logo"}
          design={"rounded-full w-16 h-16 hover:cursor-pointer mt-12"}
          handleOnClick={handleOnClick}
        />

        {/* Content section similar to Home */}
        <section className="flex flex-col  md:flex-row    gap-20">
          <div className="flex flex-col items-center  gap-8  md:gap-4 md:w-full">
            {/* Profile Image */}
            <Img
              src="/images/profile1.jpg"
              alt="profile"
              design={"rounded-3xl rotate-2 w-72 h-80"}
            />
            {/* Text content */}
            <div className="flex flex-col  md:order-first mt-5 gap-8">
              <div className="font-serif font-semibold text-2xl p-1 leading-loose">
                I'm Gnanam Rajagopalan, from Coimbatore, Tamil Nadu, India. I am
                very interested in making creative, responsive, and scalable
                systems.
              </div>
              <p className="font-mono text-xl mt-2 leading-loose p-1 max-w-md">
                I'm Gnanam Rajagopalan from India, and I've been involved in
                diverse projects. I take pride in my work, especially in the
                open-source projects I've contributed to. You're welcome to
                explore the code and share your suggestions for improvements or
                new ideas. Collaboration is a fantastic way to learn and
                innovate, and I'm eager to hear your feedback.
              </p>
              <p className="font-mono text-xl mt-2 leading-loose p-1 max-w-md">
                My hobbies include reading about investments, stocks, equities,
                and other financial avenues in India and around the world. I
                also enjoy reading newspapers and have a strong fondness for
                fictional novels.
              </p>
            </div>
          </div>

          {/* Experience and Education */}
          <div className="flex flex-col  gap-2 mt-12 w-full items-center">
            <Experience />
            <Education />
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
