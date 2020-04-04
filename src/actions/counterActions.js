import { INCREMENT, DECREMENT, RESET, SET_COUNT, EVEN, ODD } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const resetCount = () => {
  return { type: RESET}
}

export const setCount = (value) => {
  return {
    type: SET_COUNT,
    value: value
  }
}

export const even = () => {
  return {
    type: EVEN
  }
}

export const odd = () => {
  return {
    type: ODD
  }
}