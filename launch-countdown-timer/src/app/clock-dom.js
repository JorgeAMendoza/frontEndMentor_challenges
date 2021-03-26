import { createClockPart } from "./utils/create-clock-part";

const clockDOM = () => {
  const _timeDisplayDOM = {
    dayTime: document.querySelector("#dayTime"),
    hourTime: document.querySelector("#hourTime"),
    minuteTime: document.querySelector("#minuteTime"),
    secondTime: document.querySelector("#secondTime"),
  };

  const changeSecond = (second, nextSecond) => {
    const clockPart = createClockPart(second, nextSecond);
    const currentPart = _timeDisplayDOM.secondTime.querySelector(
      ".countdown-clock__time__card"
    );
    _timeDisplayDOM.secondTime.insertAdjacentElement("afterbegin", clockPart);
    currentPart.classList.add("flip");
  };
  const changeMinute = (minute, nextMinute) => {
    const clockPart = createClockPart(minute, nextMinute);
    const currentPart = _timeDisplayDOM.minuteTime.querySelector(
      ".countdown-clock__time__card"
    );
    _timeDisplayDOM.minuteTime.insertAdjacentElement("afterbegin", clockPart);
    currentPart.classList.add("flip");
  };
  const changeHour = (hour, nextHour) => {};
  const changeDay = (day, nextDay) => {};

  // Most likely public. called when inital date is created.
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

  // Event listener to handle deleting last clock part after transition
  _timeDisplayDOM.secondTime.addEventListener("transitionend", () => {
    const clockParts = _timeDisplayDOM.secondTime.querySelectorAll(
      ".countdown-clock__time__card"
    );

    _timeDisplayDOM.secondTime.removeChild(clockParts[clockParts.length - 1]);
  });
  return {
    changeSecond,
    changeMinute,
    changeHour,
    setInitialSecond,
    setInitialMinute,
    setInitialHour,
    setInitialDay,
  };
};

export default clockDOM;
