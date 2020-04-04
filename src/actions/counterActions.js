import { INCREMENT, DECREMENT, RESET, SETVALUE } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const resetCount = () => {
  return { type: RESET };
};

export const setValue = (input) => {
  return { type: SETVALUE, payload: Number(input) };
};
