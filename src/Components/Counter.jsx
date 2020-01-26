import React from 'react';
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT, EVENINCREMENT } from '../Store/actionTypes';

const Counter = (props) => {

  const handleIncrement = (e) => {
    props.increment()
  }

  const handleDecrement = (e) => {
    props.decrement()
  }

  const handleEvenIncrement = (e) => {
    props.evenIncrement()
  }

  return (
    <div>
      <p>{props.counter}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleEvenIncrement}>Even +</button>

    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      console.log('increment called')
      dispatch({
        type: INCREMENT
      })
    },
    decrement: () => {
      console.log('decrement called')
      dispatch({
        type: DECREMENT
      })
    },
    evenIncrement: () => {
      console.log('Even increment called')
      dispatch({
        type: EVENINCREMENT
      })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

// export default Counter