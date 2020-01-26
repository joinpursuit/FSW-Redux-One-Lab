import { INCREMENT, DECREMENT, EVEN_INCREMENT, ODD_INCREMENT, ASYNC_INCREMENT } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const evenIncrementCount = () => {
  return { type: EVEN_INCREMENT };
};

export const oddIncrementCount = () => {
  return { type: ODD_INCREMENT };
};

export const asyncIncrementCount = () => {
  return { type: ASYNC_INCREMENT };
};