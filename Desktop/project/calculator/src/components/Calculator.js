// src/components/Calculator.js

import React, { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";

function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleEquals = () => {
    try {
      setDisplay(evaluate(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
