import { createClockPart } from "./utils/create-clock-part";

const clockDOM = () => {
  const _timeDisplayDOM = {
    dayTime: document.querySelector("#dayTime"),
    hourTime: document.querySelector("#hourTime"),
    minuteTime: document.querySelector("#minuteTime"),
    secondTime: document.querySelector("#secondTime"),
  };

  const checkTime = (timeType, timeValue, nextTimeValue) => {
    switch (timeType) {
      case "second":
        _changeTime(
          _timeDisplayDOM.secondTime,
          createClockPart(timeValue, nextTimeValue)
        );
        break;
      case "minute":
        _changeTime(
          _timeDisplayDOM.minuteTime,
          createClockPart(timeValue, nextTimeValue)
        );
        break;
      case "hour":
        _changeTime(
          _timeDisplayDOM.hourTime,
          createClockPart(timeValue, nextTimeValue)
        );
        break;
      case "day":
        _changeTime(
          _timeDisplayDOM.dayTime,
          createClockPart(timeValue, nextTimeValue)
        );
        break;
    }
  };

  const _changeTime = (domObject, clockPartDOM) => {
    const currentPart = domObject.querySelector(".countdown-clock__time__card");
    domObject.insertAdjacentElement("afterbegin", clockPartDOM);
    currentPart.classList.add("flip");
  };

  // Most likely public. called when inital date is created.
  // Want most of it gone, just want one function that can handle this multiple times,

  const setInitalTime = (timeInfo) => {};

  const setInitialSecond = (second, nextSecond) => {
    _timeDisplayDOM.secondTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(second, second, "flipped")
    );
    _timeDisplayDOM.secondTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(second, nextSecond)
    );
  };

  const setInitialMinute = (minute, nextMinute) => {
    _timeDisplayDOM.minuteTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(minute, minute, "flipped")
    );
    _timeDisplayDOM.minuteTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(minute, nextMinute)
    );
  };

  const setInitialHour = (hour, nextHour) => {
    _timeDisplayDOM.hourTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(hour, hour, "flipped")
    );
    _timeDisplayDOM.hourTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(hour, nextHour)
    );
  };

  const setInitialDay = (day, nextDay) => {
    _timeDisplayDOM.dayTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(day, day, "flipped")
    );
    _timeDisplayDOM.dayTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(day, nextDay)
    );
  };

  // Set Event listeners for deleting last clock part
  for (let timeBlock in _timeDisplayDOM) {
    _timeDisplayDOM[timeBlock].addEventListener("transitionend", function () {
      const clockParts = this.querySelectorAll(".countdown-clock__time__card");
      this.removeChild(clockParts[clockParts.length - 1]);
    });
  }
  return {
    checkTime,
    setInitialSecond,
    setInitialMinute,
    setInitialHour,
    setInitialDay,
  };
};

export default clockDOM;
