import { INCREMENT, DECREMENT, EVEN_INCREMENT, ODD_INCREMENT, ASYNC_INCREMENT } from "../actions/actionTypes";

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
