import { createClockPart } from "./utils/create-clock-part";

const clockDOM = () => {
  const _timeDisplayDOM = {
    dayTime: document.querySelector("#dayTime"),
    hourTime: document.querySelector("#hourTime"),
    minuteTime: document.querySelector("#minuteTime"),
    secondTime: document.querySelector("#secondTime"),
  };

  const changeSecond = (second, nextSecond) => {
    // creates new card part, top;
    // createClockPart(second, nextSecond, "flipped");
    // _timeDisplayDOM.secondTime.insertAdjacentElement(
    //   "afterbegin",
    //   createClockPart(second, nextSecond)
    // );
    // console.log(second, nextSecond);
    // give current top part a flipped class.
    // Event will handle deletion of card now covered up.
  };
  const changeMinute = (minute, nextMinute) => {};
  const changeHour = (hour, nextHour) => {};
  const changeDay = (day, nextDay) => {};

  const removeClockPart = () => {
    // Fires off once transition has ended/card has flipped.
    // Grab all time cards
    // Grab the last one
    // Remove it from teh parent.
  };

  // Most likely public. called when inital date is created.
  const setInitialSecond = (second, nextSecond) => {
    _timeDisplayDOM.secondTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(second, nextSecond, "flipped")
    );
    _timeDisplayDOM.secondTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(nextSecond, nextSecond)
    );
  };

  const setInitialMinute = (minute, nextMinute) => {
    _timeDisplayDOM.minuteTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(minute, nextMinute, "flipped")
    );
    _timeDisplayDOM.minuteTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(nextMinute, nextMinute)
    );
  };

  const setInitialHour = (hour, nextHour) => {
    _timeDisplayDOM.hourTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(hour, nextHour, "flipped")
    );
    _timeDisplayDOM.hourTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(nextMinute, nextHour)
    );
  };

  const setInitialDay = (day, nextDay) => {
    _timeDisplayDOM.dayTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(hour, nextHour, "flipped")
    );
    _timeDisplayDOM.dayTime.insertAdjacentElement(
      "afterbegin",
      createClockPart(nextMinute, nextHour)
    );
  };
  return {
    changeSecond,
    setInitialSecond,
    setInitialMinute,
    setInitialHour,
    setInitialDay,
  };
};

export default clockDOM;
