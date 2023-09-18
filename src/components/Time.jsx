import React from "react";
import { useEffect, useState } from "react";
import Bits from "./Bits";

const Time = () => {
  // get current time
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const hour = new Date(time).getHours();
  const minute = new Date(time).getMinutes();
  const second = new Date(time).getSeconds();
  const millisecond = new Date(time).getMilliseconds();

  return (
    <div
      className="  
        h-screen
        flex
        flex-col
        items-center
        justify-center
    "
    >
      <div className="mb-5 drop-shadow-md">
        <h2 className="text-4xl font-bold text-green-500/95  shadow-black [text-shadow:_0_2px_0_var(--tw-shadow-color)] ">
          {hour}:{minute < 10 ? `0${minute}` : minute}:
          {second < 10 ? `0${second}` : second}:
          {millisecond < 10
            ? `00${millisecond}`
            : millisecond < 100
            ? `0${millisecond}`
            : millisecond}
        </h2>
      </div>
      <Bits type={"Hour"} value={hour} />
      <Bits type={"Minute"} value={minute} />
      <Bits type={"Second"} value={second} />
      <Bits type={"Millisecond"} value={millisecond} />
    </div>
  );
};

export default Time;
