const timeConvert = {
  convertHours(hours) {
    return 24 - (hours + 1);
  },
  convertMinutes(minutes) {
    return 60 - (minutes + 1);
  },
  convertSeconds(seconds) {
    return 60 - (seconds + 1);
  },
};

export default timeConvert;
