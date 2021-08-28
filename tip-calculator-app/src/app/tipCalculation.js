import toFixed from './utils/toFixed';

export default function tipCalculation() {
  const totalWithTip = (bill, percent) => bill * (1 + percent);
  const totalPerPerson = (totalBill, people) => totalBill / people;
  const amountPerPerson = (bill, percent, people) => (bill * percent) / people;

  const calculateTip = (bill, percent, people) => {
    const billTotal = totalWithTip(bill, percent);
    const personTotal = totalPerPerson(billTotal, people);
    const personAmount = amountPerPerson(bill, percent, people);

    return {
      tipTotal: toFixed(personTotal, 2),
      tipAmount: toFixed(personAmount, 2),
    };
  };
  return { calculateTip };
}
