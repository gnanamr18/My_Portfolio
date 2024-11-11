import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "./About";

function Home() {
    const [display, setDisplay] = useState('home');

    const handleOnClick =(arg)=>{
      setDisplay(arg)
      console.log('h')
    }
    console.log(display)
  return (
    <div>
    {/* Home page */}
    {display === 'home' && <div className="bg-gray-200 text-gray-800 min-h-screen antialiased flex flex-col w-fit sm:w-full ">
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
          onClick={()=>{handleOnClick('home')}}
        />
        <section className="flex flex-col items-center md:flex-row md:justify-center gap-20">
          {/* Profile Image */}
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="rounded-3xl rotate-2 hover:cursor-pointer w-96 h-80 md:order-last md:self-start"
          />

          {/* Bold Text */}
          <div className="flex flex-col gap-8  mt-5">
            <span className="font-serif font-semibold text-2xl leading-loose md:max-w-5xl">
              I'm a Software developer, a traveler and a voracious reader from
              India. You'll get to know me best when we collaborate.
            </span>
            {/* Normal Text */}
            <p className="font-mono text-xl mt-2 leading-loose  p-1 ">
              I am a software developer with expertise in React.js, Express.js,
              Redux toolkit, SQL, and MongoDB. I have experience in building
              scalable, secure, and reliable web applications using various
              frameworks and technologies. I enjoy solving complex problems and
              learning new skills. I am passionate about creating high-quality
              code that follows best practices and industry standards. I am
              always looking for new challenges and opportunities to grow as a
              developer.
            </p>
          </div>
        </section>
      </div>
      <div>
      <Footer handleOnClick={handleOnClick} />
      </div>
    </div>}

    {/* ABOUT PAGE */}
    {display === 'aboutUs' && <About handleOnClick={handleOnClick} />}
    </div>
    
  );
}

export default Home;
