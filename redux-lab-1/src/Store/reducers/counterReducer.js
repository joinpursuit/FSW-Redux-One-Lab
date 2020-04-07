import { INCREMENT, DECREMENT, INCREMENT_ASYNC, INCREMENT_IF_EVEN, INCREMENT_IF_ODD } from "./actionType"

const initialState = {
    counter: 100
}

const counterReducer = (state = initialState, action) => {
    console.log('counterReducer running', action)

    const stateCopy = { ...state } // make copy of current state
    // const stateCopy = Object.assign({}, state)  || other way preferred!!!

    switch (action.type) {
        //cases and a default - default handled by returning stateCopy at the end
        case INCREMENT:
            stateCopy.counter = stateCopy.counter + 1
            break;

        case DECREMENT:
            stateCopy.counter--
            break;

        case INCREMENT_IF_EVEN:
            if (stateCopy.counter % 2 === 0) {
                stateCopy.counter = stateCopy.counter + 1
            }
            break;

        case INCREMENT_IF_ODD:
            if (stateCopy.counter % 2 === 1) {
                stateCopy.counter = stateCopy.counter + 1
            }
            break;

        case INCREMENT_ASYNC:
            stateCopy.counter = stateCopy.counter + 1
            break;

        default:
            break;

    }

    return stateCopy
}

// const add = (a = 1, b = 2) => a + b  || default values

export default counterReducer