export const isOperator = (operator) => {
  return (
    operator === "/" ||
    operator === "X" ||
    operator === "+" ||
    operator === "-" ||
    operator === "%" ||
    operator === "="
  );
};

export const anyOperator = (expression) => {
  return (
    expression.indexOf("/") !== -1 ||
    expression.indexOf("X") !== -1 ||
    expression.indexOf("+") !== -1 ||
    expression.indexOf("-") !== -1 ||
    expression.indexOf("%") !== -1
  );
};

export const solveArithmeticExpression = (expression) => {
  const arrayExpression = expression.split("");
  const operator = arrayExpression.find((character) => isOperator(character));
  const index = expression.indexOf(operator);
  const firstOperand = expression.slice(0, index);
  const secondOperand = expression.slice(index + 1, expression.length);

  const resultObject = {
    firstOperand:firstOperand,
    operator:operator,
    secondOperand:secondOperand,
  }

  switch (operator) {
    case "/": {
      resultObject.result =  firstOperand / secondOperand;
      break;
    }
    case "X": {
      resultObject.result = firstOperand * secondOperand;
      break;
    }
    case "+": {
      resultObject.result = Number(firstOperand) + Number(secondOperand);
      break;
    }
    case "-": {
      resultObject.result = firstOperand - secondOperand;
      break;
    }
    case "%": {
      resultObject.result = firstOperand % secondOperand;
      break;
    }
    default: {
      return;
    }
  }

  return resultObject;
};
