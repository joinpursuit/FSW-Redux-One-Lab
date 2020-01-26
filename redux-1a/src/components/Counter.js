import React from "react";

const Counter = ({ value, onIncrement, onDecrement, evenIncrement, oddIncrement, asyncIncrement }) => (
  <div>
    <p>value: {value}</p>
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={evenIncrement}>even</button>
      <button onClick={oddIncrement}>odd</button>
      <button onClick={asyncIncrement}>'async'</button>

    </p>
  </div>
);

export default Counter;
