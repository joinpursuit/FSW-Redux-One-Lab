import React from "react";
import NumberForm from "./NumberForm";

const Counter = ({ value, onIncrement, onDecrement, resetValue }) => {
  const evenIncrement = () => {
    if (value % 2 === 0) {
      onIncrement();
    }
  };

  const oddIncrement = () => {
    if (value % 2 === 1) {
      onIncrement();
    }
  };

  return (
    <div>
      <p>value: {value}</p>
      <NumberForm />
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={evenIncrement}>Even</button>
        <button onClick={oddIncrement}>Odd</button>
        <button onClick={resetValue}>Reset</button>
      </p>
    </div>
  );
};

export default Counter;
