import React from "react";
import Counter from "../components/Counter";
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import { incrementCount, decrementCount, zeroCount } from "../actions/counterActions";

const CounterContainer = () => {

  const count = useSelector((state)=>state.count)

  const dispatch = useDispatch()
 
  const increment = () => {
    dispatch(incrementCount())
  };

  const decrement = () => {
    dispatch(decrementCount())
  };

  const zero = ()=>{ 
    dispatch(zeroCount())
  }

  return (
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
      zero = {zero}
    />
  )
}

export default CounterContainer