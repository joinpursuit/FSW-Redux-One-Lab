import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount, zeroCount } from "../actions/counterActions";

const CounterContainer = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementCount())
  };

  const decrement = () => {
    dispatch(decrementCount())
  };

  const zero = () =>{
    dispatch(zeroCount())
  }

  return (
    <React.Fragment>
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
      onZero={zero}
    />
    </React.Fragment>
  )
}

export default CounterContainer