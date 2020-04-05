import React from "react";
import Counter from "../components/Counter";
import {
  incrementCount,
  decrementCount,
  resetCount,
} from "../actions/counterActions";
import { useSelector, useDispatch } from "react-redux";

const CounterContainer = () => {
  const count = useSelector((state) => {
    return state.count;
  });
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

  return (
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
      onReset={reset}
    />
  );
};

export default CounterContainer;
