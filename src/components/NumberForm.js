import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setValue } from "../actions/counterActions";

const NumberForm = () => {
  //   const count = useSelector((state) => state);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    dispatch(setValue(input));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Number"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button type="submit">Set Number</button>
    </form>
  );
};

export default NumberForm;
