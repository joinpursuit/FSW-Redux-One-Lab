import React from "react";


const Counter = ({ value, onIncrement, onDecrement, zero }) => (
  <div>
    <p>value: {value}</p>
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick = {zero}>0</button>
    </p>
  </div>
);

export default Counter;

  