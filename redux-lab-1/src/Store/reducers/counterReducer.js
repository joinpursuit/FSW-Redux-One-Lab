import {INCREMENT, DECREMENT} from "./actionType"

const initialState = {
    counter: 100
}

const counterReducer = (state = initialState, action) => {
    console.log('counterReducer running', action)

    const stateCopy = { ...state } // make copy of current state
    // const stateCopy = Object.assign({}, state)  || other way preferred!!!

    switch(action.type) {
        //cases and a default - default handled by returning stateCopy at the end
        case INCREMENT:
            stateCopy.counter = stateCopy.counter + 1
            break;

        case DECREMENT:
            stateCopy.counter-- 
            break;

        default:
            break;

    }

    return stateCopy
}

// const add = (a = 1, b = 2) => a + b  || default values

export default counterReducer