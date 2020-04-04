import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux"
import { incrementCount, decrementCount, doubleCount, resetCount, setCount, incrementCountEven, incrementCountOdd } from "../actions/counterActions";

const CounterContainer = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementCount())
  }

  const decrement = () => {
    dispatch(decrementCount())
  }
  const double = () => {
    dispatch(doubleCount())
  }
  const reset = () => {
    dispatch(resetCount())
  }
  const set = (e) => {
    dispatch(setCount(e.target.value))
  }
  const incrementEven = () => {
    dispatch(incrementCountEven())
  }
  const incrementOdd = () => {
    dispatch(incrementCountOdd())
  }
  const incrementDelayed = () => {
    setTimeout(() => {dispatch(incrementCount())}, 1000)
  }




  return (
    <div>
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
      onDouble={double}
      onReset={reset}
      onIncrementEven={incrementEven}
      onIncrementOdd={incrementOdd}
      onIncrementDelayed={incrementDelayed}
    />
    <input type="number" onChange={set} value={count}/>
    </div>
  )
}

export default CounterContainer