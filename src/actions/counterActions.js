import { INCREMENT, DECREMENT, RESET_COUNTER, SET } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const resetCount = () => {
  return { type: RESET_COUNTER };
};

export const setInput = (value) => {
  return { type: SET, payload: parseInt(value)}
}