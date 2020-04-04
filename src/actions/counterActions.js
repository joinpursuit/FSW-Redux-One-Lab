import { INCREMENT, DECREMENT, ZERO } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const zero = () =>{
  return { type: ZERO };
}