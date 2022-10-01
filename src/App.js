import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [logs, setLogs] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };

  const updateDisplay = () => {
    if (ops.includes(calc.slice(-1))) return;
    let value = {};
    value[calc] = eval(calc);
    setLogs([...logs, value]);
    setCalc(eval(calc).toString());
  };

  const arraySum = () => {
    if (calc.slice(0, 1) != "[" || calc.slice(-1) != "]") return;
    let value = calc.slice(1, -1);
    value = value.split(",");
    console.log(value);
    setCalc(value.reduce((prev, curr) => parseInt(prev) + parseInt(curr)));
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const displayLogs = () => {
    console.log(logs);
  };
  return (
    <div className="App">
      {/* <>{createLogs}</> */}
      <div className="calculator">
        <div className="display">{calc || "0"}</div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => deleteLast()}>DEL</button>
          <button onClick={() => setCalc("")}>C</button>
        </div>
        <div className="digits">
          <button onClick={() => updateCalc("7")}>7</button>
          <button onClick={() => updateCalc("8")}>8</button>
          <button onClick={() => updateCalc("9")}>9</button>
          <button onClick={() => updateCalc("4")}>4</button>
          <button onClick={() => updateCalc("5")}>5</button>
          <button onClick={() => updateCalc("6")}>6</button>
          <button onClick={() => updateCalc("3")}>3</button>
          <button onClick={() => updateCalc("2")}>2</button>
          <button onClick={() => updateCalc("1")}>1</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateDisplay()}>=</button>
        </div>
        <div className="array">
          <button onClick={() => arraySum()}>SUM ARRAY</button>
          <button onClick={() => updateCalc("[")}>[</button>
          <button onClick={() => updateCalc("]")}>]</button>
          <button onClick={() => updateCalc(",")}>,</button>
        </div>
        <div className="logs">
          <button
            onClick={() => displayLogs()}
            style={{ fontWeight: "bolder" }}
          >
            logs
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
