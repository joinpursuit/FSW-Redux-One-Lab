import React from "react";
import Counter from "../components/Counter";
import { incrementCount, decrementCount } from "../actions/counterActions";
import {useSelector, useDispatch} from 'react-redux'
const CounterContainer = () => {
  let count = useSelector((state)=>{

  })

  const increment = ()=>{

  } 

  const decrement = ()=>{
    
  }

  return (
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
    />
  )
}

export default CounterContainer