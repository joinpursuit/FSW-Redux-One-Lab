import React from "react";
import NumberForm from "./NumberForm";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  resetCount,
} from "../actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const evenIncrement = () => {
    if (count % 2 === 0) {
      dispatch(incrementCount());
    }
  };

  const oddIncrement = () => {
    if (count % 2 === 1) {
      dispatch(incrementCount());
    }
  };

  const delayIncrement = () => {
    setTimeout(() => {
      dispatch(incrementCount());
    }, 1000);
  };

  return (
    <div>
      <p>value: {count}</p>
      <NumberForm />
      <p>
        <button onClick={() => dispatch(incrementCount())}>+</button>
        <button onClick={() => dispatch(decrementCount())}>-</button>
        <button onClick={evenIncrement}>Even</button>
        <button onClick={oddIncrement}>Odd</button>
        <button onClick={delayIncrement}>Delay Increment</button>
        <button onClick={() => dispatch(resetCount())}>Reset</button>
      </p>
    </div>
  );
};

export default Counter;
