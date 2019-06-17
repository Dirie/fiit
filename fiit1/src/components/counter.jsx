import React, { Component } from "react";

class Counter extends Component {
  // state = {
  // counter: this.props.value
  // tags: ["tag1", "tag2", "tag3", "tag4"]
  // };
  styles = { fontSize: 10, fontWeight: "bold" };

  // renderTags(){
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //     return <ul>{this.state.tags.map(tag => <li  key={tag}>tag</li>)} </ul>;

  // }

  render() {
    console.log(this.props.counter.value);
    return (
      <React.Fragment>
        <br />
        {this.props.children}
        <span style={this.styles} className={this.getBadgeMethod()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.state.tags.length === 0 && "please create a new tag!"}
                {this.renderTags()}
                <ul>{this.state.tags.map (tag => <li  key={tag}>tag</li>)} </ul> */}
      </React.Fragment>
    );
  }

  getBadgeMethod() {
    let classess = "badge m-2 badge-";
    classess += this.props.counter.value === 0 ? "warning" : "primary";
    return classess;
  }

  formatCount() {
    //const { count } = this.state;
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
