import React from "react";
import Counter from "../components/Counter";
import { incrementCount, decrementCount } from "../actions/counterActions";
import { useSelector, useDispatch} from 'reaxt-redux'
const CounterContainer = () => {
  const count = useSelector((state) => {
  return state.count;
  })
  =
const dispatch

  const increment = () => {
    dispatch(incrementCount())
  };

  const decrement = () => {
    dispatch(decrementCount())
  };

  return (
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
    />
  )
}

export default CounterContainer