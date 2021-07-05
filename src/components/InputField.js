import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {setCount} from '../actions/counterActions';


const InputField = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()

  const handleChange = (e)=>{
      e.preventDefault();
      dispatch(setCount(input))
      setInput("")
  } 

  return (
    <form onSubmit={handleChange}>
      <input
        value={input}
        placeholder
        type="number"
        onChange={(e) => {
          setInput(Number(e.target.value));
        }}
      ></input>
      <button type='submit'>#</button>
      </form>

  );
};

export default InputField;
