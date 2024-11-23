import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Education from "../components/Education.";
import Img from "../components/Img";
import Content from "../components/Content";
import textContent from "../data/textContent";

function About({ handleOnClick, selectedItem }) {

  return (
    <div className="bg-gray-200 text-gray-800 min-h-screen antialiased flex flex-col w-fit sm:w-full">
      {/* Navbar */}
      <div className="sticky top-2 z-10">
        <Navbar handleOnClick={handleOnClick} selectedItem={selectedItem} />
      </div>

      {/* About page */}
      <Content >
        <section className="flex flex-col gap-2 w-full" >
          {/* bolt text and profile photo */}
          <div className="flex flex-col  items-center md:flex-row md:justify-center md:gap-20">
            {/* Profile Image */}
            <Img
              src="/images/profile1.jpg"
              alt="profile"
              design={"rounded-3xl rotate-2 w-72 h-80"}
            />
            {/* Text content */}
            <div className="md:order-first mt-5 pt-2 md:pt-0 font-serif  font-semibold  text-3xl  leading-loose  md:text-4xl md:leading-loose md:max-w-5xl sm:items-center">
             {textContent.about.intro}
            </div>
          </div>

          {/* normal text and experience */}

          <div className="flex flex-col md:flex-row max-w-md sm:max-w-5xl  md:justify-between md:mt-5 md:pt-5  gap-9">
            <div className="flex flex-col max-w-lg">
              <p className="font-mono text-xl mt-2 leading-loose p-1">
                {textContent.about.description1}
              </p>
              <p className="font-mono text-2xl mt-3 leading-loose p-1">
                {textContent.about.description2}
              </p>
            </div>
            <div className="flex flex-col  gap-1  w-full items-center">
              <Experience />
              <Education />
            </div>
          </div>
        </section>
      </Content>

      {/* Footer */}
      <div>
        <Footer handleOnClick={handleOnClick} selectedItem={selectedItem} />
      </div>
    </div>
  );
}

export default About;
