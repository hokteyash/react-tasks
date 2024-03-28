import { useCallback, useState } from "react";
import "./App.css";
import Button from "./UI/Button";
import { buttonData } from "./utility/buttonData";
import { isOperator } from "./utility/checkForOperator";
const outerContainerCss =
  "h-screen w-screen overflow-x-hidden flex flex-col items-center justify-center";
let isFirstOperand = true;

function App() {
  const [expression, setExpression] = useState({
    firstOperand: "",
    operator: "",
    secondOperand: "",
    result: "",
  });

  const handleClick = useCallback(
    (label) => {
      if (isOperator(label)) {
        isFirstOperand = false;
        setExpression((prevExpression) => {
          return {
            ...prevExpression,
            operator: label,
          };
        });
      } else if (label === "=") {
        let result = "";

        switch (expression.operator) {
          case "+": {
            result =
              Number(expression.firstOperand) +
              Number(expression.secondOperand);
            break;
          }
          case "-": {
            result =
              Number(expression.firstOperand) -
              Number(expression.secondOperand);
            break;
          }
          case "X": {
            result =
              Number(expression.firstOperand) *
              Number(expression.secondOperand);
            break;
          }
          case "/": {
            result =
              Number(expression.firstOperand) /
              Number(expression.secondOperand);
            break;
          }
          case "%": {
            result =
              Number(expression.firstOperand) %
              Number(expression.secondOperand);
            break;
          }
          default: {
            break;
          }
        }

        console.log(result);

        setExpression((prevExpression) => ({
          ...prevExpression,
          result: result,
        }));
      } else if (isFirstOperand) {
        setExpression((prevExpression) => {
          return {
            ...prevExpression,
            firstOperand: prevExpression.firstOperand + label,
          };
        });
      } else if (!isFirstOperand) {
        setExpression((prevExpression) => {
          return {
            ...prevExpression,
            secondOperand: prevExpression.secondOperand + label,
          };
        });
      } else {
        return {
          ...expression,
        };
      }
    },
    [expression]
  );

  return (
    <div className={outerContainerCss}>
      <div className="w-[30%]">
        <input
          type="text"
          className="w-full h-12 m-0 px-2 text-2xl font-bold bg-slate-300 outline-none cursor-text"
          value={
            expression.result === ""
              ? `${expression.firstOperand} ${expression.operator} ${expression.secondOperand}`
              : `${expression.firstOperand} ${expression.operator} ${expression.secondOperand} = ${expression.result}`
          }
          disabled
        />
        <div className="w-full flex flex-wrap m-0">
          {buttonData.map(({ id, data }) => {
            return (
              <Button key={id} handleClick={handleClick}>
                {data}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
