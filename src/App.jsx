import React from "react";
import Time from "./components/Time";
import Header from "./components/Header";

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
      <Header />
      <Time />
    </div>
  );
};

export default App;
