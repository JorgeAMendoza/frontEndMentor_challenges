import { getCurrentTime } from "./utils/get-currnet-time";
import time from "./utils/timeConvert";
export const timeChange = (lastTime, currentTime) => {
  const secondChange = lastTime.seconds !== currentTime.seconds ? true : false;
  const minuteChange = lastTime.minutes !== currentTime.minutes ? true : false;
  const hourChange = lastTime.hours !== currentTime.hours ? true : false;
  const dayChange = lastTime.days !== currentTime.days ? true : false;

  return {
    secondChange,
    minuteChange,
    hourChange,
    dayChange,
  };
};
