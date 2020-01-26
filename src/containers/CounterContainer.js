import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { incrementCount, decrementCount, evenCount, oddCount, asyncCount } from "../actions/counterActions";

const CounterContainer = (props) => {
  const increment = () => {
    const { dispatch } = props;
    dispatch(incrementCount());
  };

  const decrement = () => {
    const { dispatch } = props;
    dispatch(decrementCount());
  };

  const even = () => {
    const { dispatch } = props;
    dispatch(evenCount())
  }

  const odd = () => {
    const { dispatch } = props;
    dispatch(oddCount())
  }

  const asyncX = () => {
    const { dispatch } = props;
    setTimeout(() => dispatch(asyncCount()), 1000);
    
  }

  const { count } = props;
  console.log(props);

  return (
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
      onEven={even}
      onOdd={odd}
      onAsync={asyncX}
    />
  );
}

// The component is connected to the redux store
export default connect(state => state)(CounterContainer);
