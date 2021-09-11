import calculatorDOM from './calculatorDom';

export default function app() {
  const tipDOM = calculatorDOM();
  const staticDOM = {
    billInputContainer: document.querySelector('.bill__input'),
    tipPercentContainer: document.querySelector('.tip-percent__container'),
    peopleInputContainer: document.querySelector('.people-amount__input'),
    tipPercentInput: document.querySelector('.tip-percent__container input'),
    tipPercentButtons: document.querySelectorAll('.tip-percent button'),
    tipAmountText: document.querySelector('#tip-amount__per-person'),
    tipTotalText: document.querySelector('#tip-display__total'),
    resetButton: document.querySelector('#resetButton'),
  };

  const setTipInformation = () => {
    tipDOM.validateInputs(
      staticDOM.billInputContainer,
      staticDOM.tipPercentContainer,
      staticDOM.peopleInputContainer
    );
  };

  const resetPage = () => {
    console.log('Reseting Page');
  };
  // Set event listeners on the page
  staticDOM.billInputContainer.addEventListener('change', setTipInformation);
  staticDOM.peopleInputContainer.addEventListener('change', setTipInformation);
  staticDOM.tipPercentInput.addEventListener('change', setTipInformation);
  staticDOM.tipPercentButtons.forEach((button) =>
    button.addEventListener('click', setTipInformation)
  );
  staticDOM.resetButton.addEventListener('click', resetPage);
}
