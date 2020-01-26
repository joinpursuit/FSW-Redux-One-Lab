import React from 'react'
import { connect } from 'react-redux'
import { incrementCount , decrementCount, incrementIfEven, incrementIfOdd } from '../actions/counterActions'

const Counter = (props) => {
  const handleIncrement = (e) => {
    props.increment()
  }

  const handleDecrement = (e) => {
    props.decrement()
  }

  const handleIfEven = (e) => {
    props.ifEven()
  }

  const handleIfOdd = (e) => {
    props.ifOdd()
  }

  const handleAsync = (e) => {
    props.asyncIncr()
  }

  return (
    <div>
      <h1>My Counter App</h1>
      <p>value: {props.counter}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIfEven}>+ if even</button>
      <button onClick={handleIfOdd}>+ if odd</button>
      <button onClick={handleAsync}>+ async</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(incrementCount())
    },
    decrement: () => {
      dispatch(decrementCount())
    },
    ifEven: () => {
      dispatch(incrementIfEven())
    },
    ifOdd: () => {
      dispatch(incrementIfOdd())
    },
    asyncIncr: () => {
      setTimeout(() => dispatch(incrementCount()), 1000)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
