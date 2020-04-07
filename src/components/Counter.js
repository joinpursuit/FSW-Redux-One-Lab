import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCount } from "../actions/counterActions";

const Counter = ({ value, onIncrement, onDecrement, reset }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const countChange = (e) => {
    e.preventDefault();
    dispatch(changeCount(input));

    setInput("");
  };

  console.log(input);

  return (
    <div>
      <p>value: {value}</p>
      <form onSubmit={countChange}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        ></input>
      </form>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <br></br>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
};

export default Counter;
