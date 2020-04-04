import { INCREMENT, DECREMENT, RESET_COUNTER} from "./actionTypes";

export const incrementCount = (count) => {
  return { type: INCREMENT, payload: count};
};

export const decrementCount = (count) => {
  return { type: DECREMENT, payload: count };
};

export const resetCount = () => {
  return { type: RESET_COUNTER };
};