import { getCurrentTime } from "./utils/get-currnet-time";
import { timeChange } from "./timeChange";
import clockDOM from "./clock-dom";

// Set Clock DOM;
const dom = clockDOM();

const clock = () => {
  // Set up target Date Object
  const _targetDate = new Date("January 1, 2022");
  const _targetDay = Math.floor((_targetDate - new Date()) / 1000 / 86400);

  let _startCountdown;

  //   Set up current Date object
  const _currentDate = getCurrentTime();

  const changeTime = () => {
    if (Date.now() >= _targetDate) {
      clearInterval(startCountdown);
      dom.launchpage();
      return;
    }
    const _currentCheck = getCurrentTime();
    const { secondChange, minuteChange, hourChange, dayChange } = timeChange(
      _currentDate,
      _currentCheck
    );

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
      dom.checkTime("hour", _currentCheck.hours, nextHour);
    } else return;
    if (dayChange) {
      const nextDay = _targetDay - 1 === -1 ? 364 : _targetDay - 1;
      _currentDate.days = _targetDay;
      dom.checkTime("day", _targetDay, nextDay);
    }
  };

  if (Date.now() >= _targetDate) {
    // Set Inital Time wtih everythign set to 0
    dom.setInitialTime({
      second: 0,
      nextSecond: 0,
      minute: 0,
      nextMinute: 0,
      hour: 0,
      nextHour: 0,
      day: 0,
      nextDay: 0,
    });
    dom.launchpage();
  } else {
    dom.setInitialTime({
      second: _currentDate.seconds,
      nextSecond:
        _currentDate.seconds - 1 === -1 ? 59 : _currentDate.seconds - 1,
      minute: _currentDate.minutes,
      nextMinute:
        _currentDate.minutes - 1 === -1 ? 59 : _currentDate.minutes - 1,
      hour: _currentDate.hours,
      nextHour: _currentDate.hours - 1 === -1 ? 23 : _currentDate.hours - 1,
      day: _targetDay,
      nextDay: _targetDay - 1 === -1 ? 364 : _targetDay - 1,
    });
    _startCountdown = setInterval(changeTime, 1000);
  }
};

export default clock;
