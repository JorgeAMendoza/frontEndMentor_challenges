export const numberInput = () => {
  const _staticDOM = {
    inputDisplay: document.querySelector(".input-display__text"),
    keyInput: document.querySelectorAll(".calc-input__option"),
  };

  const _keyFunction = (e) => {
    const keyInput = e.target.dataset.value;
    switch (keyInput) {
      case "del":
        _deleteCharacter();
        break;
      case "reset":
        _resetInput();
        break;
      case "=":
        _calculateAnswer(_staticDOM.inputDisplay.textContent);
        break;
      case "+":
      case "-":
      case "/":
      case ".":
      case "*":
        _inputOperator(keyInput);
        break;
      default:
        _inputCharacter(keyInput);
    }
  };

  const _inputCharacter = (char) => {
    _staticDOM.inputDisplay.textContent += char;
  };

  const _inputOperator = (char) => {
    const currentInputLength = _staticDOM.inputDisplay.textContent.length;
    const lastInput = _staticDOM.inputDisplay.textContent.charAt(
      currentInputLength - 1
    );

    if (
      lastInput !== "*" &&
      lastInput !== "+" &&
      lastInput !== "-" &&
      lastInput !== "/" &&
      lastInput !== "."
    ) {
      _staticDOM.inputDisplay.textContent += char;
    }
  };

  const _deleteCharacter = () => {
    const currentContent = _staticDOM.inputDisplay.textContent;
    _staticDOM.inputDisplay.textContent = currentContent.slice(
      0,
      currentContent.length - 1
    );
  };

  const _resetInput = () => {
    _staticDOM.inputDisplay.textContent = "";
  };

  const _calculateAnswer = (input) => {
    // If it starts with an operator, then simply return, will put error later.
  };

  _staticDOM.keyInput.forEach((key) =>
    key.addEventListener("click", _keyFunction)
  );
};
