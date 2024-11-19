import React, { useState } from "react";

function Navbar({ handleOnClick }) {
  const [selected, setSelected] = useState("Home");

  const handleSelected = (item) => {
    setSelected(item); // State will update asynchronously
    handleOnClick(item); // This is fine to call after state update
  };

  return (
    <div className="flex justify-center mx-auto sm:max-w-md mt-3">
      <ul className="flex flex-row sm:justify-between gap-3 bg-gray-300 rounded-3xl p-4 m-2 font-serif text-xl w-fit sm:w-full">
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer hover:underline hover:text-orange-400 ${
              selected === item ? "text-orange-400 underline" : ""
            }`}
            onClick={() => handleSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
