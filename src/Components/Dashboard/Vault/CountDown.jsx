import React, { useState, useEffect } from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  addDays,
  addHours,
  addMinutes,
} from "date-fns";

const CountDown = (props) => {
  const [countdown, setCountdown] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const { timeTillDate } = props;
      const then = timeTillDate;
      const now = new Date();

      const days = differenceInDays(then, now);
      let hours = differenceInHours(addDays(now, days), then);
      let minutes =
        differenceInMinutes(addDays(addHours(now, hours), days), then) % 60;
      let seconds =
        differenceInSeconds(
          addDays(addHours(addMinutes(now, minutes), hours), days),
          then
        ) % 60;

      if (new Date().getTime() > timeTillDate.getTime()) {
        setIsFinished(true);
        clearInterval(interval);
      }

      setCountdown(
        `${Math.abs(days)} days ${Math.abs(hours)} hrs ${Math.abs(
          minutes
        )} mins ${Math.floor(Math.abs(seconds))} secs`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [props]);

  return (
    <span className={`countdown primarys-text  ${isFinished ? "stake-button" : ""}`}>
      {isFinished ? "Time Out" : countdown}
    </span>
  );
};

export default CountDown;
