import { INCREMENT, DECREMENT, RESET, SET_COUNT} from "../actions/actionTypes";

export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state += 1
        case DECREMENT:
            return state -= 1
        case RESET: 
            return state = 0
        case SET_COUNT:
            return action.value
        default:
            return state
    }
};
