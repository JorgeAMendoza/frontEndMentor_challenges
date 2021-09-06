import tipCalculation from './tipCalculation';
import validatePeople from './utils/validate/validatePeople';
import validateBill from './utils/validate/validateBill';
import validatePercent from './utils/validate/validatePercent';

export default function calculatorDOM() {
  const tipCalculator = tipCalculation();
  const validateInputs = (billDOM, percentDOM, peopleDOM) => {
    const billValue = Number(billDOM.value);
    const percentValue = Number(percentDOM.value);
    const peopleValue = Number(peopleDOM.value);

    if (!validateBill(billValue)) billDOM.classList.add('error');
    else billDOM.classList.remove('error');

    if (!validatePercent(percentValue)) percentDOM.classList.add('error');
    else percentDOM.classList.remove('error');

    if (!validatePeople(peopleValue)) peopleDOM.classList.add('error');
    else peopleDOM.classList.remove('error');
  };

  const calculateTip = (bill, percent, people, tipTotalDOM, totalDOM) => {
    const billValue = Number(bill);
    const percentValue = Number(percent);
    const peopleValue = Number(people);
    const tipTotalText = tipTotalDOM;
    const totalText = totalDOM;

    const { tipTotal, tipAmount } = tipCalculator.calculateTip(
      billValue,
      percentValue,
      peopleValue
    );

    tipTotalText.textContent = tipAmount;
    totalText.textContent = tipTotal;
  };

  return { validateInputs, calculateTip };
}
