import { INCREMENT, DECREMENT, ZERO, SET } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const zeroCount = () =>{
  return { type: ZERO };
};

export const setCount = (value) =>{
  return { type: SET, value}
}

