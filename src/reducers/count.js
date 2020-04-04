import { INCREMENT, DECREMENT, RESET, SET_COUNT, EVEN, ODD} from "../actions/actionTypes";

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
        case EVEN: 
            if (state % 2 === 0) {
                return state += 1
            } else {
                return state
            }
        
        // case ODD:
        //     if (state % 2 === 1) {
        //         return state += 1
        //     } else {
        //         return state
        //     }
        default:
            return state
    }
};
