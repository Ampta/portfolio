"use client";

import moment from "moment-timezone";
import { FC, useEffect, useState } from "react";

interface LiveClockProps {
  timezone: string;
}

const LiveClock: FC<LiveClockProps> = ({ timezone }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(timezone).format("HH:mm:ss");
      setTime(currentTime);
    };
    const intervalId = setInterval(updateClock, 1000);

    //cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    <div className="text-3xl text-secondary-foreground font-semibold">
      {time ? (
        <div className="flex items-center justify-center gap-[0.5vw]">
            <span>{timezone.split('/')[1]}</span>, <span>{time}</span>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default LiveClock;
