import React from "react";
import Bit from "./Bit";

const Bits = ({ type, value }) => {
  const binaryValue = value.toString(2).padStart(10, "0");

  return (
    <div>
      <div className="flex py-2 font-light text-base">
        {type}: <div className="font-bold pl-1"> {value}</div>
      </div>
      <ul className="flex">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="flex px-1.5 first:pl-0 last:pr-0">
            <Bit key={index} isOn={binaryValue[index] === "1" ? 1 : 0} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bits;
