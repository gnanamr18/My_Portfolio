import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Data from "../data/Data";
import Project from "../components/Project";

function Projects({ handleOnClick }) {
  return (
    <div className="bg-gray-200 text-gray-800 min-h-screen antialiased flex flex-col w-fit sm:w-full ">
      {/* Navbar */}
      <div className="sticky top-2 z-10">
        <Navbar handleOnClick={handleOnClick} />
      </div>
      {/* Home page */}
      <div className="flex flex-col items-start  gap-8 max-w-5xl m-5 p-5 selection: mx-auto">
        {/* logo */}
        <img
          src="/images/logo.jpeg"
          alt="logo"
          className="rounded-full w-16 h-16 hover:cursor-pointer mt-12"
          onClick={() => {
            handleOnClick("home");
          }}
        />
        <section className="flex flex-col items-center md:flex-row md:justify-center gap-20">
          <div className="flex flex-col gap-8  mt-5">
            <span className="font-serif font-semibold text-4xl leading-loose md:max-w-5xl">
              Things I’ve made trying to put my dent in the universe.
            </span>
            <p className="font-mono text-xl mt-2 leading-loose  p-1">
              I've worked on a variety of projects over the years and I'm proud
              of the progress I've made. Many of these projects are open-source
              and available for others to explore and contribute to. If you're
              interested in any of the projects I've worked on, please feel free
              to check out the code and suggest any improvements or enhancements
              you might have in mind. Collaborating with others is a great way
              to learn and grow, and I'm always open to new ideas and feedback.
            </p>
          </div>
        </section>
        
        <Project/>
      </div>
      <div>
        <Footer handleOnClick={handleOnClick} />
      </div>
    </div>
  );
}

export default Projects;
