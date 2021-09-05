export default function validateBill(value) {
  if (value > 0 && value < 1000) return true;
  return false;
}
