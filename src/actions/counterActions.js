import { INCREMENT, DECREMENT, RESET, CHANGE_COUNT } from "./actionTypes";

export const incrementCount = () => {
  // debugger;
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const resetCount = () => {
  return { type: RESET };
};

export const changeCount = (value) => {
  return { type: CHANGE_COUNT, payload: parseInt(value) };
};
