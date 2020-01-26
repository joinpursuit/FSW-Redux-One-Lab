import { INCREMENT, DECREMENT, INCRIFEVEN, INCRIFODD } from '../../actions/actionTypes'

const initialState = {
  counter: 1
}

const counterReducer = (state = initialState, action) => {
  const stateCopy = { ...state }

  switch(action.type) {
    case INCREMENT:
      stateCopy.counter++
      return stateCopy
    case DECREMENT:
      stateCopy.counter--
      return stateCopy
    case INCRIFEVEN:
      if (stateCopy.counter % 2 === 0) {
        stateCopy.counter++
        return stateCopy
      }
      break
    case INCRIFODD:
      if (stateCopy.counter % 2 !== 0) {
        stateCopy.counter++
        return stateCopy
      }
      break
    default:
      return stateCopy
  }
}

export default counterReducer
