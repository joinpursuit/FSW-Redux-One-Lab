import React from "react";

const Counter = ({ value, onIncrement, onDecrement, reset }) => (
  <div>
    <p>value: {value}</p>
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={reset}>Reset</button>
    </p>
  </div>
);

export default Counter;
