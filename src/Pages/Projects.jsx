import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Content from "../components/Content";
import textContent from "../data/textContent";

function Projects({ handleOnClick, selectedItem }) {
  return (
    <div className="bg-gray-200 text-gray-800 min-h-screen antialiased flex flex-col w-fit sm:w-full ">
      {/* Navbar */}
      <div className="sticky top-2 z-10">
        <Navbar handleOnClick={handleOnClick} selectedItem={selectedItem} />
      </div>
      {/* Home page */}
      <Content handleOnClick={handleOnClick}  >
        <section className="flex flex-col items-center md:flex-row md:justify-center gap-20" >
          <div className="flex flex-col gap-8  mt-5">
            <span className="font-serif font-semibold text-4xl leading-loose md:max-w-5xl">
              {textContent.projects.intro}
            </span>
            <p className="font-mono text-xl mt-2 leading-loose  p-1">
              {textContent.projects.description}
            </p>
          </div>
        </section>

        <Project />
      </Content>
      <div>
        <Footer handleOnClick={handleOnClick} selectedItem={selectedItem} />
      </div>
    </div>
  );
}

export default Projects;
