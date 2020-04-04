import { INCREMENT, DECREMENT } from "./actionTypes";

export const incrementCount = (count) => {
  return { type: INCREMENT, payload: count};
};

export const decrementCount = (count) => {
  return { type: DECREMENT, payload: count };
};
