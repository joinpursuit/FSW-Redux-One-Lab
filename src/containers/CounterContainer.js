import React from "react";
import { useSelector, useDispatch } from "react-redux"
import Counter from "../components/Counter";
import { incrementCount, resetCount, decrementCount, setCount } from "../actions/counterActions";
import Input from "../components/Input";

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

  const set = (value) => {
    dispatch(setCount(value))
  };

  return (
    <React.Fragment>
      <Counter
        value={count}
        onIncrement={increment}
        onReset={reset}
        onDecrement={decrement}
      />
      <Input value={count} onChange={set}/>
    </React.Fragment>
  )
}

export default CounterContainer