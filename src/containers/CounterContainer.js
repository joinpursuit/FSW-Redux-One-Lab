import React from "react";
import Counter from "../components/Counter";
import InputField from '../components/InputField'
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount, zeroCount, setCount } from "../actions/counterActions";

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

  const set = (value) =>{
    dispatch(setCount(value))
  }

  return (
    <React.Fragment>
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
      onZero={zero}
    />
    <InputField value={count} onChange={set}/>
    </React.Fragment>
  )
}

export default CounterContainer