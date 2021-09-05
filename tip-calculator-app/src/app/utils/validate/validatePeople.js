export default function validatePeople(value) {
  if (value > 0 && value < 100) return true;
  return false;
}
