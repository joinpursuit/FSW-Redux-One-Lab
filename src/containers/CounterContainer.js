import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch} from 'react-redux';
import { incrementCount, decrementCount, resetCount } from "../actions/counterActions";

const CounterContainer = () => {
  // let count = 0
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementCount())
  };

  const decrement = () => {
    dispatch(decrementCount())
  };

  const resetCounter = () => {
    dispatch(resetCount())
  };

  return (
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
      reset={resetCounter}
    />
  )
}

export default CounterContainer