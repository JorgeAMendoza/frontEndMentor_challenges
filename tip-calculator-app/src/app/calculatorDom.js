import tipCalculation from './tipCalculation';
import validatePeople from './utils/validate/validatePeople';
import validateBill from './utils/validate/validateBill';
import validatePercent from './utils/validate/validatePercent';

export default function calculatorDOM() {
  const tipCalculator = tipCalculation();
  const validateInputs = (billDOM, percentDOM, peopleDOM) => {
    const billValue = Number(billDOM.querySelector('input').value);
    const peopleValue = Number(peopleDOM.querySelector('input').value);
    let percentValue;

    if (percentDOM.querySelector('input').value) {
      percentValue = Number(percentDOM.querySelector('input').value);
    } else if (percentDOM.querySelector('.active')) {
      percentValue = Number(
        percentDOM.querySelector('.active').dataset.tipPercent
      );
    } else {
      percentValue = 0;
    }

    if (!validateBill(billValue)) billDOM.classList.add('error');
    else billDOM.classList.remove('error');

    if (!validatePercent(percentValue)) {
      percentDOM.querySelector('input').classList.add('error');
    } else percentDOM.querySelector('input').classList.remove('error');

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

  const resetCalculator = (
    billDOM,
    percentDOM,
    peopleDOM,
    tipTotalContent,
    totalContent
  ) => {
    const billInput = billDOM.querySelector('input');
    const percentInput = percentDOM.querySelector('input');
    const percentButtons = percentDOM.querySelectorAll('button');
    const peopleInput = peopleDOM.querySelector('input');
    const tipTotalText = tipTotalContent;
    const totalText = totalContent;

    billInput.value = '';
    percentInput.value = '';
    peopleInput.value = '';
    billDOM.classList.remove('error');
    percentInput.classList.remove('error');
    peopleDOM.classList.remove('error');

    percentButtons.forEach((button) => button.classList.remove('active'));

    tipTotalText.textContent = '0.00';
    totalText.textContent = '0.00';
  };

  return { validateInputs, calculateTip, resetCalculator };
}
