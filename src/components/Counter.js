import React from "react";

const Counter = ({ value, onIncrement, onDecrement, onReset, setNewCount, evenCount, oddCount }) => (
  <div>
    <p>value: {value}</p>
    <input type="number" onChange={setNewCount}/>
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>reset me, dawg</button>
      <button onClick={evenCount}>Only if even, dawg</button>
      <button onClick={oddCount}>Only if odd, dawg</button>
    </p>
  </div>
);

export default Counter;
