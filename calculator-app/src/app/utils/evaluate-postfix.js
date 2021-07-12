import * as mathObject from "./math-functions";
export const evaluatePostfix = (expressionArray) => {
  const answerStack = [];
  let numOne, numTwo, interAns;

  for (let i = 0; i < expressionArray.length; i++) {
    const ch = expressionArray[i];
    if (!isNaN(ch)) {
      answerStack.push(ch);
      continue;
    }

    numTwo = +answerStack.pop();
    numOne = +answerStack.pop();

    switch (ch) {
      case "+":
        interAns = mathObject.add(numOne, numTwo);
        break;
      case "-":
        interAns = mathObject.subtract(numOne, numTwo);
        break;
      case "*":
        interAns = mathObject.multiply(numOne, numTwo);
        break;
      case "/":
        interAns = mathObject.divide(numOne, numTwo);
        break;
      default:
        interAns = 0;
        break;
    }

    answerStack.push(interAns);
  }

  const answer = answerStack.pop();
  return answer % 1 === 0 ? answer : answer.toFixed(3);
};
