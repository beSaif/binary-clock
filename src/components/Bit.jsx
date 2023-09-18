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
      border-green-600/50
      border-2 
      flex 
      items-center 
      justify-center 
      
      
      transition`,
        isOn
          ? "bg-green-500 shadow-[0px_0px_8px_1px_#38a169] border-none"
          : "bg-transparent"
      )}
    ></div>
  );
};

export default Bit;
