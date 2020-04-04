import React, { useState } from "react";
// import { useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  clearCount
} from "../actions/counterActions";


const Counter = ({ value, onIncrement, onDecrement }) => {
const [count, setCount] = useState(0);
const dispatch = useDispatch();






  return (
    <div>
      <p>value: {value}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </p>
    </div>
  );
};
export default Counter;
