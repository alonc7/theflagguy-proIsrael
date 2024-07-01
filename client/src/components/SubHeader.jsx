import React from "react";
import Countdown from "./CountDown";

const SubHeader = () => {
  return (
    <div className="flex items-center justify-center bg-yellow-300  ">
      <div className="relative z-10">
        <Countdown />
      </div>
    </div>
  );
};

export default SubHeader;
