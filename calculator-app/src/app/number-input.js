import { evaluatePostfix } from "./utils/evaluate-postfix";
import { getPostFix } from "./utils/get-postfix";

export const numberInput = () => {
  const _staticDOM = {
    inputDisplay: document.querySelector(".input-display__text"),
    keyInput: document.querySelectorAll(".calc-input__option"),
  };
  let _answerCalculated = false;

  const _keyFunction = (e) => {
    const keyInput = e.target.dataset.value;
    if (_answerCalculated) {
      _staticDOM.inputDisplay.textContent = "";
      _answerCalculated = false;
    }
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
    if (_staticDOM.inputDisplay.textContent.length === 13) return;
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

  const _displayAnswser = (answer) => {
    _staticDOM.inputDisplay.textContent = answer;
    _answerCalculated = true;
  };

  const _calculateAnswer = (input) => {
    const firstChar = input.charAt(0);
    if (
      firstChar === "+" ||
      firstChar === "-" ||
      firstChar === "/" ||
      firstChar === "*" ||
      firstChar === "."
    )
      return;

    const currentDisplay = _staticDOM.inputDisplay.textContent;
    const infixExpression = currentDisplay
      .replace(/([+-])/gi, " $1 ")
      .replace(/([/*])/gi, " $1 ")
      .split(" ");

    const postFixExpression = getPostFix(infixExpression);
    _displayAnswser(evaluatePostfix(postFixExpression));
  };

  _staticDOM.keyInput.forEach((key) =>
    key.addEventListener("click", _keyFunction)
  );
};
