export const getOperand = (opThis, precOne, opStack, postStack) => {
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
