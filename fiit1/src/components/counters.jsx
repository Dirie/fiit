import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-info btn-sm m-3"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            //value={counter.value}
            Selected={true}
            //id={counter.id}
          >
            <h4>Countre # {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
