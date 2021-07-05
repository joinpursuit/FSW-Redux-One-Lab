import React from "react";

const Counter = ({ value, onIncrement, onDecrement, onZero }) => (
  <div>
    <p>value: {value}</p>
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onZero}>Zero</button>
    </p>
  </div>
);

export default Counter;
