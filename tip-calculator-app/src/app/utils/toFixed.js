export default function toFixed(num, round) {
  if (round) return Math.round(num * 100) / 100;
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (2 || -1) + '})?');
  return Number(num.toString().match(re)[0]);
}
