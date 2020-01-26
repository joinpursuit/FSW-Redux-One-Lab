import { INCREMENT, DECREMENT, EVEN_INCREMENT, ODD_INCREMENT, ASYNC_INCREMENT } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};
