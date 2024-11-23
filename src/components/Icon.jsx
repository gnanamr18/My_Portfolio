import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../data/icon";
function Icon() {
  return (
    <div className="flex flex-col gap-5">
      {icon.map((item, index) => (
        <div key={index} className="text-gray-500 text-xl">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 no-underline hover:underline hover:text-blue-400"
          >
            <FontAwesomeIcon
              icon={item.icon}
              size="2x"
              className="mr-4 hover:underline"
            />
            <span className="text-2xl font-mono  md:text-xl  ">
              {item.text}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Icon;
