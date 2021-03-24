import { getCurrentTime } from "./utils/get-currnet-time";
import { timeChange } from "./timeChange";

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

  setInterval(() => {
    const _currentCheck = getCurrentTime();
    const { secondChange, minuteChange, hourChange, dayChange } = timeChange(
      _currentDate,
      _currentCheck
    );

    if (secondChange) _currentDate.seconds = _currentCheck.seconds;
    if (minuteChange) _currentDate.minutes = _currentCheck.minutes;
    if (hourChange) _currentDate.hours = _currentCheck.hours;
    if (dayChange) _currentDate.days = _currentCheck.hours;
    console.log(_currentDate);
    // console.log(_currentDate);
  }, 1000);
};

export default start;
