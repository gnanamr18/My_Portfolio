import React from "react";

export default function Footer() {
  return (
    <div className=" flex flex-col items-center md:flex-row md:justify-between  border border-t-4 p-8 border-black">
      <ul className="flex flex-row justify-between  w-full p-4 max-w-xl mx-20   font-serif text-xl ">
        <li className="cursor-pointer hover:underline hover:text-orange-400">Home</li>
        <li className="cursor-pointer hover:underline hover:text-orange-400">About</li>
        <li className="cursor-pointer hover:underline hover:text-orange-400">Projects</li>
        <li className="cursor-pointer hover:underline hover:text-orange-400">Contact</li>
      </ul>
      <p className="text-xl text-orange-400 md:self-start p-4">© 2022 Gnanam Rajagopalan</p>
    </div>
  );
}
