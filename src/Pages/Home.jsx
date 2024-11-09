import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-gray-200 min-h-screen antialiased flex flex-col">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      {/* Home page */}
      <div className="flex flex-col  m-6 p-6 mx-auto">
        {/* logo */}
        <img
          src="/images/logo.jpeg"
          alt="logo"
          className="rounded-full w-16 h-16 hover:cursor-pointer mt-12"
        />
        <section className="flex flex-col items-center lg:flex-row lg:justify-center gap-20  p-3">
          {/* Profile Image */}
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="rounded-3xl rotate-2 hover:cursor-pointer w-96 h-80 lg:order-last lg:self-start"
          />

          {/* Bold Text */}
          <div className="flex flex-col gap-8  mt-5">
            <span className="font-serif font-semibold text-3xl leading-loose lg:max-w-xl">
              I'm a Software developer, a traveler and voracious reader from
              Coimbatore. You'll get to know me best when we collaborate.
            </span>
            {/* Normal Text */}
            <p className="font-mono text-lg mt-2 leading-loose  p-1 lg:max-w-xl">
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
      <Footer/>
    </div>
  );
}

export default Home;
