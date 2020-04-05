import { INCREMENT, DECREMENT, RESET, SET } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const resetCount = () => {
  return { type: RESET };
};

export const setCount = (value) => {
  return { type: SET, value }
}