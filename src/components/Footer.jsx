import React from "react";

export default function Footer({handleOnClick}) {
  return (
    <div className=" flex flex-col items-center  mx-auto   lg:flex-row  w-full   border-t-4 p-8 border-black">
      <ul className="flex flex-row justify-center gap-4 w-full md:justify-between md:w-1/2  md:mx-auto p-4  font-serif text-xl">
        <li className="cursor-pointer hover:underline hover:text-orange-400" onClick={()=>{handleOnClick("home")}}>Home</li>
        <li className="cursor-pointer hover:underline hover:text-orange-400" onClick={()=>{handleOnClick("aboutUs")}}>About</li>
        <li className="cursor-pointer hover:underline hover:text-orange-400">Projects</li>
        <li className="cursor-pointer hover:underline hover:text-orange-400">Contact</li>
      </ul>
      <p className=" block text-md md:text-xl text-black mt-5  p-1">©2022 Gnanam_Rajagopalan</p>
    </div>
  );
}
