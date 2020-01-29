import React from 'react';
import {connect} from 'react-redux';
import {INCREMENT, DECREMENT, INCREMENT_ASYNC, INCREMENT_IF_EVEN, INCREMENT_IF_ODD} from "../Store/reducers/actionType"

const Counter = (props) => {

    const handleIncrement = (e) => {
        props.increment()
    }

    const handleDecrement = (e) => {
        props.decrement()
    }

    const handleIncrementIfEven = (e) => {
        props.incrementIfEven()
    }

    const handleIncrementIfOdd = (e) => {
        props.incrementIfOdd()
    }

    const handleIncrementAsync = (e) => {
        props.incrementAsync()
    }

    return(
        <div>
            <p>{props.counter}</p>
            <div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            </div>
            <div>
                <button onClick={handleIncrementIfEven}>Increment If EVEN</button>
            </div>
            <div>
                <button onClick={handleIncrementIfOdd}>Increment If ODD</button>
            </div>
            <div>
                <button onClick={handleIncrementAsync}>Increment after ONE SECOND</button>
            </div>
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
        incrementIfEven: () => {
            console.log('increment if even called')
            dispatch({
                type: INCREMENT_IF_EVEN
            })
        },
        incrementIfOdd: () => {
            console.log('increment if odd called')
            dispatch({
                type: INCREMENT_IF_ODD
            })
        },
        incrementAsync: () => {
            console.log('increment async called')
            setTimeout(() => {
                dispatch({ type: INCREMENT_ASYNC })
              }, 1000)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)