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

  const launchpage = () => {
    document.querySelector("#pageTitle").textContent = "We've Launched!";
  };

  const setInitialTime = (timeInfo, isPast = false) => {
    const {
      second,
      nextSecond,
      minute,
      nextMinute,
      hour,
      nextHour,
      day,
      nextDay,
    } = timeInfo;

    _createInitialDOM(_timeDisplayDOM.secondTime, second, nextSecond);
    _createInitialDOM(_timeDisplayDOM.minuteTime, minute, nextMinute);
    _createInitialDOM(_timeDisplayDOM.hourTime, hour, nextHour);
    _createInitialDOM(_timeDisplayDOM.dayTime, day, nextDay);
  };

  const _createInitialDOM = (domTarget, time, nextTime) => {
    domTarget.insertAdjacentElement(
      "afterbegin",
      createClockPart(time, time, "flipped")
    );
    domTarget.insertAdjacentElement(
      "afterbegin",
      createClockPart(time, nextTime)
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
    setInitialTime,
    launchpage,
  };
};

export default clockDOM;
