import React from "react";

const Counter = ({ value, onIncrement, onDecrement, reset, input }) => (
  <div>
    <p>value: {value}</p>
    <p>
      <form>
        <input placeholder="Enter a number" type="number" onChange={input}/>
      </form>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={reset}>Reset</button>
    </p>
  </div>
);

export default Counter;
