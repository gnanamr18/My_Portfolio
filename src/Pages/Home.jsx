import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "./About";
import Projects from "./Projects";
import Img from "../components/Img";
import Contact from "./Contact";
import Content from "../components/Content";

function Home() {
  const [display, setDisplay] = useState("Home");
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleOnClick = (arg) => {
    setDisplay(arg);
    setSelectedItem(arg);
  };

  return (
    <div>
      {/* Home page */}
      {display === "Home" && (
        <div className="bg-gray-200 text-gray-800 min-h-screen antialiased flex flex-col w-fit sm:w-full ">
          {/* Navbar */}
          <div className="sticky top-2 z-10">
            <Navbar handleOnClick={handleOnClick} selectedItem={selectedItem} />
          </div>
          {/* Home page */}
          <Content handleOnClick={handleOnClick}>
            <section className="flex flex-col items-center md:flex-row md:justify-center gap-20">
              {/* Profile Image */}
              <Img
                src="/images/profile.jpg"
                alt="coverPhoto"
                design={
                  "rounded-3xl rotate-2 hover:cursor-pointer w-96 h-80 md:order-last md:self-start"
                }
              />

              {/* Bold Text */}
              <div className="flex flex-col gap-8  mt-5">
                <span className="font-serif font-semibold text-2xl leading-loose  md:text-4xl md:leading-loose md:max-w-5xl">
                  I'm a Software developer, a traveler and a voracious reader
                  from India. You'll get to know me best when we collaborate.
                </span>
                {/* Normal Text */}
                <p className="font-mono text-xl mt-2 leading-loose  p-1 ">
                  I am a software developer with expertise in React.js,
                  Express.js, Redux toolkit, SQL, and MongoDB. I have experience
                  in building scalable, secure, and reliable web applications
                  using various frameworks and technologies. I enjoy solving
                  complex problems and learning new skills. I am passionate
                  about creating high-quality code that follows best practices
                  and industry standards. I am always looking for new challenges
                  and opportunities to grow as a developer.
                </p>
              </div>
            </section>
          </Content>
          <div>
            <Footer handleOnClick={handleOnClick} />
          </div>
        </div>
      )}

      {/* ABOUT PAGE */}
      {display === "About" && (
        <About handleOnClick={handleOnClick} selectedItem={selectedItem} />
      )}

      {/* PROJECT PAGE */}
      {display === "Projects" && (
        <Projects handleOnClick={handleOnClick} selectedItem={selectedItem} />
      )}

      {display === "Contact" && (
        <Contact handleOnClick={handleOnClick} selectedItem={selectedItem} />
      )}
    </div>
  );
}

export default Home;
