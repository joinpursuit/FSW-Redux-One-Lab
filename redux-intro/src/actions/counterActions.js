import { INCREMENT, DECREMENT, INCRIFEVEN, INCRIFODD } from "./actionTypes"

export const incrementCount = () => {
  return { type: INCREMENT }
}

export const decrementCount = () => {
  return { type: DECREMENT }
}

export const incrementIfEven = () => {
  return { type: INCRIFEVEN}
}

export const incrementIfOdd = () => {
  return { type: INCRIFODD}
}
