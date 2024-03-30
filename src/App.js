import { useCallback, useState } from "react";
import "./App.css";
import Button from "./UI/Button";
import { buttonData } from "./utility/buttonData";
import {
  anyOperator,
  isOperator,
  solveArithmeticExpression,
} from "./utility/checkForOperator";
import ShowHistoryCalculation from "./UI/ShowHistoryCalculation";
const outerContainerCss =
  "h-screen w-screen overflow-x-hidden flex flex-col items-center justify-center";

function App() {
  const [expression, setExpression] = useState("");
  const [historyCalculation, setHistoryCalculation] = useState([]);

  console.log(historyCalculation);

  const handleClick = useCallback(
    (label) => {
      if (label === "AC") {
        setExpression("");
        return;
      }

      if (isOperator(label)) {
        if (anyOperator(expression)) {
          const resultObj = solveArithmeticExpression(expression);
          if (label !== "=") setExpression(resultObj.result.toFixed(2) + label);
          else {
            setExpression(resultObj.result.toFixed(2));
          }
          setHistoryCalculation((prevHistory) => [
            `${resultObj.firstOperand} ${resultObj.operator} ${resultObj.secondOperand} = ${resultObj.result}`,
            ...prevHistory,
          ]);
        } else {
          setExpression((prevExpression) => prevExpression + label);
        }
      } else {
        setExpression((prevExpression) => prevExpression + label);
      }
    },
    [expression]
  );

  return (
    <>
      <div className={outerContainerCss}>
        <div className="w-[30%]">
          <input
            type="text"
            className="w-full h-12 m-0 px-2 text-2xl font-bold bg-slate-300 outline-none cursor-text"
            value={expression}
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

      <div className="flex flex-col items-center">
        <h2 className="my-2 text-2xl font-bold"> Calculation History </h2>
        <ShowHistoryCalculation historyCalculation={historyCalculation} />
      </div>
    </>
  );
}

export default App;
