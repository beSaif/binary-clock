import React from "react";
import Time from "./components/Time";

const App = () => {
  return (
    <div
      className="  
        h-screen
        flex
        flex-col
        items-center
        justify-between
    "
    >
      <div className="bg-green-600 font-bold flex w-full items-center justify-center">
        Binary Clock
      </div>
      <Time />
      <div className="bg-green-600 font-bold flex w-full items-center justify-center">
        <a
          href="https://github.com/beSaif"
          target="_blank"
          rel="noopener noreferrer"
        >
          beSaif
        </a>
      </div>
    </div>
  );
};

export default App;
