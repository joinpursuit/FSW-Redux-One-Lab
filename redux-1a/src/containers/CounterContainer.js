import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { incrementCount, decrementCount, evenIncrementCount, oddIncrementCount, asyncIncrementCount } from "../actions/counterActions";

class CounterContainer extends React.Component {
  increment = () => {
    const { dispatch } = this.props;
    dispatch(incrementCount());
  };

  decrement = () => {
    const { dispatch } = this.props;
    dispatch(decrementCount());
  };

  evenIncrement = () => {
    const { dispatch } = this.props;
    if (this.props.count % 2 === 0) {
      dispatch(incrementCount());
    }
  };

  oddIncrement = () => {
    const { dispatch } = this.props;
    if (this.props.count % 2) {
      dispatch(incrementCount());
    }
  };

  asyncIncrement = () => {
    const { dispatch } = this.props;
    dispatch(asyncIncrementCount());
  };

  render() {
    const { count } = this.props;
    console.log(this.props);

    return (
      <Counter
        value={count}
        onIncrement={this.increment}
        onDecrement={this.decrement}
        evenIncrement={this.evenIncrement}
        oddIncrement={this.oddIncrement}
        asyncIncrement={this.asyncIncrement}
      />
    );
  }
}

// The component is connected to the redux store
export default connect(state => state)(CounterContainer);
