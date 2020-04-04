import React from "react";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux"
import { incrementCount, decrementCount, resetCount, setCount, even, odd} from "../actions/counterActions";

const CounterContainer = () => {
  let count = useSelector(state => state.count)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementCount())
  };

  const decrement = () => {
    dispatch(decrementCount())
  };

  const reset = () => {
    dispatch(resetCount())
  }

  const setNewCount = (e) => {
    dispatch(setCount(e.target.value))
  }

  const evenCount = () => {
    dispatch(even())
  }

  // const oddCount = () => {
  //   dispatch(odd())
  // }

  return (
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
      onReset={reset}
      setNewCount = {setNewCount}
      evenCount = {evenCount}
      // oddCOunt = {oddCount}
    />
  )
}

export default CounterContainer