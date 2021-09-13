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
    tipTotalText: document.querySelector('#tip-amount__total'),
    resetButton: document.querySelector('#resetButton'),
    peopleErrorMessage: document.querySelector('#peopleError'),
  };

  const setTipInformation = () => {
    tipDOM.validateInputs(
      staticDOM.billInputContainer,
      staticDOM.tipPercentContainer,
      staticDOM.peopleInputContainer
    );
    staticDOM.peopleErrorMessage.classList.remove('show-error');
    if (
      staticDOM.billInputContainer.classList.contains('error') ||
      staticDOM.tipPercentInput.classList.contains('error') ||
      staticDOM.peopleInputContainer.classList.contains('error')
    ) {
      if (staticDOM.peopleInputContainer.classList.contains('error')) {
        staticDOM.peopleErrorMessage.classList.add('show-error');
      }
      return;
    }
    tipDOM.calculateTip(
      staticDOM.billInputContainer,
      staticDOM.tipPercentContainer,
      staticDOM.peopleInputContainer,
      staticDOM.tipAmountText,
      staticDOM.tipTotalText
    );
  };

  const resetPage = () => {
    tipDOM.resetCalculator(
      staticDOM.billInputContainer,
      staticDOM.tipPercentContainer,
      staticDOM.peopleInputContainer,
      staticDOM.tipAmountText,
      staticDOM.tipTotalText
    );
  };

  const buttonSelect = (e) => {
    staticDOM.tipPercentButtons.forEach((button) =>
      button.classList.remove('active')
    );

    staticDOM.tipPercentInput.value = '';
    e.target.classList.add('active');
    setTipInformation();
  };

  const inputCustomPercent = () => {
    staticDOM.tipPercentButtons.forEach((button) =>
      button.classList.remove('active')
    );
    setTipInformation();
  };

  staticDOM.billInputContainer.addEventListener('change', setTipInformation);
  staticDOM.peopleInputContainer.addEventListener('change', setTipInformation);
  staticDOM.tipPercentInput.addEventListener('change', inputCustomPercent);
  staticDOM.tipPercentButtons.forEach((button) =>
    button.addEventListener('click', buttonSelect)
  );
  staticDOM.resetButton.addEventListener('click', resetPage);
}
