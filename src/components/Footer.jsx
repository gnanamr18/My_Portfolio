import React from "react";

export default function Footer({setDisplay}) {
  return (
    <div className=" flex flex-col items-center  mx-auto   lg:flex-row  w-full   border-t-4 p-8 border-black">
      <ul className="flex flex-row justify-center   w-1/2 mx-auto p-4  font-serif text-xl space-x-4 ">
        <li className="cursor-pointer hover:underline hover:text-orange-400" onClick={()=>{setDisplay("home")}}>Home</li>
        <li className="cursor-pointer hover:underline hover:text-orange-400" onClick={()=>{setDisplay("aboutUs")}}>About</li>
        <li className="cursor-pointer hover:underline hover:text-orange-400">Projects</li>
        <li className="cursor-pointer hover:underline hover:text-orange-400">Contact</li>
      </ul>
      <p className="text-xl text-orange-400 mt-5  p-1">©2022 Gnanam_Rajagopalan</p>
    </div>
  );
}
