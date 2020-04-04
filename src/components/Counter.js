import React from "react";
import NumberForm from "./NumberForm";

const Counter = ({ value, onIncrement, onDecrement, resetValue }) => (
  <div>
    <p>value: {value}</p>
    <NumberForm />
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={resetValue}>Reset</button>
    </p>
  </div>
);

export default Counter;
