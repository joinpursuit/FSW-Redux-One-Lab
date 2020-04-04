import React from "react";

const Counter = ({ value, onIncrement, onDecrement, onDouble, onReset, onIncrementEven, onIncrementOdd, onIncrementDelayed }) => {
  return(
  <div>
    <p>value: {value}</p>
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onDouble}>Double</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onIncrementEven}>Even +</button>
      <button onClick={onIncrementOdd}>Odd +</button>
      <button onClick={onIncrementDelayed}>Delay +</button>
    </p>
  </div>
  )
};

export default Counter;
