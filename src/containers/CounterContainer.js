import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import Counter from "../components/Counter";
import { incrementCount, decrementCount } from "../actions/counterActions";


const CounterContainer = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

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