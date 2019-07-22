import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          <button
            onClick={this.props.onReset}
            className="btn btn-sm btn-secondary m-2"
          >
            Reset
          </button>
        </p>
        {this.props.counters.map(c => (
          <Counter
            key={c.id}
            onDelete={this.props.onDelete}
            counter={c}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
