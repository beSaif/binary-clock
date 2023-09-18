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

  console.log(time);

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
      <Bits type={"Hour"} value={new Date(time).getHours()} />
      <Bits type={"Minute"} value={new Date(time).getMinutes()} />
      <Bits type={"Second"} value={new Date(time).getSeconds()} />
      <Bits type={"Millisecond"} value={new Date(time).getMilliseconds()} />
    </div>
  );
};

export default Time;
