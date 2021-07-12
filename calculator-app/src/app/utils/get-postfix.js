import { getOperand } from "./get-operand";

export const getPostFix = (infix) => {
  const postFix = [];
  const operandStack = [];

  for (let char of infix) {
    switch (char) {
      case "+":
      case "-":
        getOperand(char, 1, operandStack, postFix);
        break;
      case "*":
      case "/":
        getOperand(char, 2, operandStack, postFix);
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
