import React from "react";
import Counter from "../components/Counter";
import {
  incrementCount,
  decrementCount,
  resetCount,
} from "../actions/counterActions";
import { useSelector, useDispatch } from "react-redux";
const CounterContainer = () => {
  let count = useSelector((state) => {
    // debugger;
    return state;
  });

  const dispatch = useDispatch();
  const increment = () => {
    // debugger;
    dispatch(incrementCount());
  };

  const decrement = () => {
    dispatch(decrementCount());
  };

  const reset = () => {
    dispatch(resetCount());
  };

  return (
    <Counter
      value={count}
      reset={reset}
      onIncrement={increment}
      onDecrement={decrement}
    />
  );
};

export default CounterContainer;
