import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <div
      className="
        bg-green-600 
        font-bold 
        flex 
        w-full 
        h-12 
        sm:h-min 
        items-center 
        justify-between 
        px-2"
    >
      <div className="hidden sm:block"></div>
      BINARY CLOCK
      <a
        href="https://github.com/beSaif/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub className="text-3xl sm:text-2xl " />
      </a>
    </div>
  );
};

export default Header;
