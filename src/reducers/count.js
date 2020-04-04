import { INCREMENT, DECREMENT, DOUBLE, RESET, SET, EVENINCR, ODDINCR } from "../actions/actionTypes";

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case DOUBLE:
      return state * 2;
    case RESET:
      return state = 0;
    case SET:
      return action.payload
    case EVENINCR:
       if (state % 2 === 0){
        return state + 1;
      }
      return state
    case ODDINCR:
      if(state % 2){
        return state+1
      }
      return state
    default:
      return state;
  }
 
};
