import React from "react";
import Bit from "./Bit";
import printKthBit from "../utils/getKthBit";

const Bits = ({ type, value }) => {
  return (
    <div>
      <div className="flex py-2 font-light text-base">
        {type}: <div className="font-bold pl-1"> {value}</div>
      </div>
      <ul className="flex">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="flex px-1.5 first:pl-0 last:pr-0">
            <Bit
              key={index}
              isOn={printKthBit(value, 10 - index) == 1 ? true : false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bits;
