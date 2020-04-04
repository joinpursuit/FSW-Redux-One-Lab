import { INCREMENT, DECREMENT, RESET_COUNTER } from "../actions/actionTypes";

export default (state = 0, action) => {
   switch (action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      case RESET_COUNTER:
        return state = 0;
      default:
         return state;
   }
};
