import { INCREMENT, DECREMENT, CLEAR_COUNT } from "./actionTypes";

export const incrementCount = count => {
  return { type: INCREMENT, payload: count };
};

export const decrementCount = () => {
  return { type: DECREMENT, payload: count };
};

export const clearCount = () => {
  return { type: CLEAR_COUNT };
};
