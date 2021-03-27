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

  dom.setInitialTime({
    second: _currentDate.seconds,
    nextSecond: _currentDate.seconds - 1 === -1 ? 59 : _currentDate.seconds - 1,
    minute: _currentDate.minutes,
    nextMinute: _currentDate.minutes - 1 === -1 ? 59 : _currentDate.minutes - 1,
    hour: _currentDate.hours,
    nextHour: _currentDate.hours - 1 === -1 ? 23 : _currentDate.hours - 1,
    day: _currentDate.days,
    nextDay: _currentDate.days - 1 === -1 ? 364 : _currentDate.days - 1,
  });

  const changeTime = () => {
    if (Date.now() <= _targetDate) {
      // Call function to set DOM to be launched;
      clearInterval(startCountdown);
      return;
    }
    const _currentCheck = getCurrentTime();
    const { secondChange, minuteChange, hourChange, dayChange } = timeChange(
      _currentDate,
      _currentCheck
    );
    _currentDate.hours = _currentCheck.hours;
    if (secondChange) {
      const nextSecond =
        _currentCheck.seconds - 1 === -1 ? 59 : _currentCheck.seconds - 1;
      _currentDate.seconds = _currentDate.seconds;
      dom.checkTime("second", _currentCheck.seconds, nextSecond);
    }
    if (minuteChange) {
      const nextMinte =
        _currentCheck.minutes - 1 === -1 ? 59 : _currentCheck.minutes - 1;
      _currentDate.minutes = _currentCheck.minutes;
      dom.checkTime("minute", _currentCheck.minutes, nextMinte);
    } else return;
    if (hourChange) {
      const nextHour =
        _currentCheck.hours - 1 === -1 ? 23 : _currentCheck.hours - 1;
      _currentDate.hours = _currentCheck.hours;
      dom.changeHour(_currentCheck.hours, nextHour);
    } else return;
    if (dayChange) {
      const nextDay =
        _currentCheck.days - 1 === -1 ? 364 : _currentCheck.hours - 1;
      _currentDate.days = _currentCheck.hours;
      dom.checkTime("hour", _currentCheck.days, nextDay);
    }
  };

  const startCountdown = () => {
    setInterval(changeTime, 1000);
  };
  startCountdown();
};

export default clock;
