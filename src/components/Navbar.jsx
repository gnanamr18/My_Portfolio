import React, {  useEffect } from "react";

function Navbar({ handleOnClick , selectedItem}) {
  // const [selectedItem, setSelectedItem] = useState(null);

  const handleSelected = (item) => {
    // Immediately set the selected item and handle click
    console.log(item)
    // setSelectedItem(item);
    handleOnClick(item); // Parent is notified
  };
  useEffect(() => {
    console.log("Selected Item:", selectedItem);
  }, [selectedItem]);
  return (
    <div className="flex justify-center mx-auto sm:max-w-md mt-3">
      <ul className="flex flex-row sm:justify-between gap-3 bg-gray-300 rounded-3xl p-4 m-2 font-serif text-xl w-fit sm:w-full">
        {["Home", "About", "Projects", "Contact"].map((item, index) => {
          // const isActive = selectedItem === item; // Determine if the item is active
          return (
            <li
              key={index}
              className={`cursor-pointer hover:underline hover:text-orange-400 ${
                selectedItem===item ? "text-orange-400 underline" : "text-black"
              }`}
              onClick={() => handleSelected(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
