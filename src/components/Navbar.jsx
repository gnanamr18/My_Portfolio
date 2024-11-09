import React from "react";

function Navbar() {
  return (
    <div className="flex  justify-center mx-auto max-w-md  mt-3 ">
      <ul className="flex flex-row justify-between  w-full bg-gray-300 rounded-3xl p-4  m-2 font-serif text-xl focus:none">
        <li className="cursor-pointer hover:underline hover:text-orange-400">Home</li>
        <li className="cursor-pointer hover:underline hover:text-orange-400">About</li>
        <li className="cursor-pointer hover:underline hover:text-orange-400">Projects</li>
        <li className="cursor-pointer hover:underline hover:text-orange-400">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;  
