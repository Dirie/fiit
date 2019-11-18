import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import {
  increment,
  decrement,
  add,
  sub,
  storeResult,
  deleteResults
} from "../../store/actions/actions";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={() => this.props.onIncrementCounter()}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.props.onDecrementCounter()}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter()}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubCounter()}
        />
        <hr />
        <button onClick={() => this.props.OnStoreResult(this.props.ctr)}>
          Store Result
        </button>

        <ul>
          {this.props.stroeResults.map(sr => (
            <li key={sr.id} onClick={() => this.props.OnDeleteResult(sr.id)}>
              {sr.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    stroeResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(5)),
    onSubCounter: () => dispatch(sub(5)),
    OnStoreResult: result => dispatch(storeResult(result)),
    OnDeleteResult: id => dispatch(deleteResults(id))
  };
};
export default connect(
  MapStateToProps,
  mapDispatchToProps
)(Counter);
