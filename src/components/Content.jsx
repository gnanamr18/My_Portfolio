import React from "react";

const Content = ({
  handleOnClick,
  children}) => {
  return (
    <div className="flex flex-col items-start  gap-8 max-w-5xl m-5 p-5 selection: mx-auto w-full">
      <img
        src="/images/logo.jpeg"
        alt="logo"
        className="rounded-full w-16 h-16 hover:cursor-pointer mt-12"
        onClick={() => {
          handleOnClick("Home");
        }}
      />
      {children}
    </div>
  );
};

export default Content;
