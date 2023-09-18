import React from "react";
import { twMerge } from "tailwind-merge";

const Bit = ({ isOn }) => {
  return (
    <div
      className={twMerge(
        `
      w-6 
      h-6 
      sm:w-9
      sm:h-9
      rounded 
      border-green-600 
      border-2 
      flex 
      items-center 
      justify-center 
      transition`,
        isOn ? "bg-green-600" : "bg-transparent"
      )}
    ></div>
  );
};

export default Bit;
