import time from "./timeConvert";
export const getCurrentTime = () => {
  const currentTime = new Date();
  return {
    days: Math.floor(
      (new Date("January 01, 2022") - currentTime) / 1000 / 86400
    ),
    hours: time.convertHours(currentTime.getHours()),
    minutes: time.convertMinutes(currentTime.getMinutes()),
    seconds: time.convertSeconds(currentTime.getSeconds()),
  };
};
