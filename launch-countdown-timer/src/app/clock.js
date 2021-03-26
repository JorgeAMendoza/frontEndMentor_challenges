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
  dom.setInitialHour(
    _currentDate.hours,
    _currentDate.hours - 1 === -1 ? 59 : _currentDate.hours - 1
  );
  dom.setInitialDay(
    _currentDate.days,
    _currentDate.days - 1 === -1 ? 59 : _currentDate.days - 1
  );

  setInterval(() => {
    const _currentCheck = getCurrentTime();
    const { secondChange, minuteChange, hourChange, dayChange } = timeChange(
      _currentDate,
      _currentCheck
    );
    _currentDate.hours = _currentCheck.hours;
    if (secondChange) {
      _currentDate.seconds = _currentDate.seconds;
      dom.changeSecond(
        _currentCheck.seconds,
        _currentCheck.seconds - 1 === -1 ? 59 : _currentCheck.seconds - 1
      );
    }
    if (minuteChange) {
      _currentDate.minutes = _currentCheck.minutes;
      dom.changeMinute(
        _currentDate.minutes,
        _currentCheck.minutes - 1 === -1 ? 59 : _currentCheck.minutes - 1
      );
    }
    if (hourChange) {
      _currentDate.hours = _currentCheck.hours;
      dom.changeHour(
        _currentCheck.hours,
        _currentCheck.hours - 1 === -1 ? 59 : _currentCheck.hours - 1
      );
    }
    if (dayChange) _currentDate.days = _currentCheck.hours;
  }, 1000);
};

export default clock;
