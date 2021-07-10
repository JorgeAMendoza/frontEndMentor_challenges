import { first } from "lodash";
import * as mathObject from "./utils/math-functions";

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

  const _getPostFix = (infix) => {
    const postFix = [];
    const operandStack = [];

    for (let char of infix) {
      switch (char) {
        case "+":
        case "-":
          _getOperand(char, 1, operandStack, postFix);
          break;
        case "*":
        case "/":
          _getOperand(char, 2, operandStack, postFix);
          break;
        default:
          postFix.push(char);
      }
    }

    while (operandStack.length !== 0) {
      postFix.push(operandStack.pop());
    }
    return postFix;
  };

  const _getOperand = (opThis, precOne, opStack, postStack) => {
    while (opStack.length !== 0) {
      let opTop = opStack.pop();
      let precTwo = opTop === "+" || opTop === "-" ? 1 : 2;

      if (precTwo < precOne) {
        opStack.push(opTop);
        break;
      } else {
        postStack.push(opTop);
      }
    }
    opStack.push(opThis);
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

    // Have it check if the last character is a number as well.

    const currentDisplay = _staticDOM.inputDisplay.textContent;
    const infixExpression = currentDisplay
      .replace(/([+-])/gi, " $1 ")
      .replace(/([/*])/gi, " $1 ")
      .split(" ");

    const postFixExpression = _getPostFix(infixExpression);
    console.log(postFixExpression);
  };

  _staticDOM.keyInput.forEach((key) =>
    key.addEventListener("click", _keyFunction)
  );
};
