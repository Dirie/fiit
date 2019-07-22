import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadge()}>{this.formatCounter()}</span>
          </div>
          <div className="col-6">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-sm btn-secondary"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-sm btn-secondary m-2"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm"
            >
              X
            </button>
          </div>
          <div className="col" />
        </div>
      </React.Fragment>
    );
  }
  getBadge = () => {
    let classess = "badge badge-sm m-2 badge-";
    classess += this.props.counter.value === 0 ? "warning" : "primary";
    return classess;
  };
  formatCounter = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
