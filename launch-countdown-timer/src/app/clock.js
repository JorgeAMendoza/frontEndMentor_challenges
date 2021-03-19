import { getCurrentTime } from "./utils/get-currnet-time";

const start = () => {
  // Set up target Date Object
  const _targetDate = new Date("January 01, 2022");
  const _targetDay = Math.floor((_targetDate - new Date()) / 1000 / 86400);
  const _targeDateData = {
    days: _targetDay,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  //   Set up current Date object
  const _currentDate = getCurrentTime();

  //   const currentDate = {};
  //   // Intitial funciton
  //   const run = () => {
  //     const currentTime = new Date();
  //     currentDate.days = targetDay;
  //     currentDate.hours = 24 - (currentTime.getHours() + 1);
  //     currentDate.minutes = 60 - (currentTime.getMinutes() + 1);
  //     currentDate.seconds = 60 - (currentTime.getSeconds() + 1);
  //     // somehwere here write to DOM.
  //     // First just log when second changes
  //     setInterval(() => {
  //       checkTimeChange();
  //       console.log(currentDate);
  //     }, 1000);
  //   };
  //   const checkTimeChange = () => {
  //     const currentTime = new Date();
  //     currentDate.seconds = 60 - (currentTime.getSeconds() + 1);
  //     // Check to see if minutes changed
  //     if (currentDate.minutes !== 60 - (currentTime.getMinutes() + 1)) {
  //       currentDate.minutes = 60 - (currentTime.getMinutes() + 1);
  //     }
  //   };
  //   run();
};

export default start;
