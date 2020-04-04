import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";

import {
  incrementCount,
  decrementCount,
  resetCount,
} from "../actions/counterActions";

const CounterContainer = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementCount());
  };

  const decrement = () => {
    dispatch(decrementCount());
  };

  const reset = () => {
    dispatch(resetCount());
  };

  console.log(count);
  return (
    <>
      <Counter
        value={count}
        onIncrement={increment}
        onDecrement={decrement}
        resetValue={reset}
      />
    </>
  );
};

export default CounterContainer;
