import { INCREMENT, DECREMENT, CLEAR_COUNT } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const clearCount = () => {
  return { type: CLEAR_COUNT };
};
