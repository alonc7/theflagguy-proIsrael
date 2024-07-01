import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const blackSaturday = new Date("2023-10-07T05:00:00");
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDiff = currentTime - blackSaturday;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center text-red-500">
      <h1 className="text-md font-bold mb-4 text-center">
        Time Since Hostages Were Kidnapped to Gaza
      </h1>
      <div className="flex justify-center items-center bg-transparent">
        <div className="flex">
          <div className="digit">
            {countdown.days < 10 ? `0${countdown.days}` : countdown.days}
          </div>
          <div className="separator">:</div>
          <div className="digit">
            {countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}
          </div>
          <div className="separator">:</div>
          <div className="digit">
            {countdown.minutes < 10
              ? `0${countdown.minutes}`
              : countdown.minutes}
          </div>
          <div className="separator">:</div>
          <div className="digit">
            {countdown.seconds < 10
              ? `0${countdown.seconds}`
              : countdown.seconds}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
