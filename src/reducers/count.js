import {
  INCREMENT,
  DECREMENT,
  RESET,
  CHANGE_COUNT,
} from "../actions/actionTypes";

const countReducer = (state = 0, action) => {
  //   debugger;
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    case CHANGE_COUNT:
      return state + action.payload;
    default:
      return state;
  }
};
export default countReducer;
