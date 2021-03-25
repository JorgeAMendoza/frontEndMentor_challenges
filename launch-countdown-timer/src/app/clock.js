import { getCurrentTime } from "./utils/get-currnet-time";
import { timeChange } from "./timeChange";
import clockDOM from "./clock-dom";

// Set Clock DOM;
const dom = clockDOM();

const clock = () => {
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

  // Set inital state of clock
  dom.setInitialSecond(
    _currentDate.seconds,
    _currentDate.seconds - 1 === -1 ? 59 : _currentDate.seconds - 1
  );
  dom.setInitialMinute(
    _currentDate.minutes,
    _currentDate.minutes - 1 === -1 ? 59 : _currentDate.minutes - 1
  );

  // setInterval(() => {
  //   const _currentCheck = getCurrentTime();
  //   const { secondChange, minuteChange, hourChange, dayChange } = timeChange(
  //     _currentDate,
  //     _currentCheck
  //   );

  //   if (secondChange)
  //     dom.changeSecond(
  //       _currentCheck.seconds,
  //       _currentCheck.seconds - 1 === -1 ? 59 : _currentCheck.seconds - 1
  //     );
  //   if (minuteChange) _currentDate.minutes = _currentCheck.minutes;
  //   if (hourChange) _currentDate.hours = _currentCheck.hours;
  //   if (dayChange) _currentDate.days = _currentCheck.hours;
  // }, 1000);
};

export default clock;
