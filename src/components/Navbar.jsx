import React from "react";

function Navbar({ handleOnClick }) {
  return (
    <div className=" flex  justify-center mx-auto  sm:max-w-md  mt-3 ">
      <ul className="flex flex-row sm:justify-between gap-3 bg-gray-300 rounded-3xl p-4  m-2 font-serif text-xl focus:none w-fit sm:w-full">
        <li
          className="cursor-pointer hover:underline hover:text-orange-400"
         onClick={()=>handleOnClick('home')}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:underline hover:text-orange-400"
          onClick={() => {
           handleOnClick('aboutUs')
          }}
        >
          About
        </li>
        <li className="cursor-pointer hover:underline hover:text-orange-400">
          Projects
        </li>
        <li className="cursor-pointer hover:underline hover:text-orange-400">
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
