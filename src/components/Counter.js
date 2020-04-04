import React from "react";

const Counter = ({ value, onIncrement, onDecrement, onReset }) => (
  <div>
    <p>value: {value}</p>
    <form>
        <input type="number"/>
        <button type="submit">Set yo value, dawg</button>
    </form>
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>reset me, dawg</button>
    </p>
  </div>
);

export default Counter;
