import React from "react";
import { useSelector, useDispatch } from "react-redux"
import Counter from "../components/Counter";
import { incrementCount, resetCount, decrementCount } from "../actions/counterActions";

const CounterContainer = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()


  const increment = () => {
    dispatch(incrementCount())
  };

  const decrement = () => {
    dispatch(decrementCount())
  };

  const reset = () => {
    dispatch(resetCount())
  };

  return (
    <React.Fragment>
      <Counter
        value={count}
        onIncrement={increment}
        onReset={reset}
        onDecrement={decrement}
      />
    </React.Fragment>
  )
}

export default CounterContainer