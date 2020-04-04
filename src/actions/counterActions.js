import { INCREMENT, DECREMENT, DOUBLE, RESET, SET, EVENINCR, ODDINCR } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};


export const doubleCount = () => {
  return {type: DOUBLE}
}

export const resetCount = () => {
  return {type: RESET}
}
export const setCount = (value) => {
  return {type: SET, payload: parseInt(value)}
}
export const incrementCountEven = () => {
  return {type: EVENINCR}
}
export const  incrementCountOdd = () => {
  return {type: ODDINCR}
}