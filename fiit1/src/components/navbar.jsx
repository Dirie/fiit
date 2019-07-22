import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a
            className="navbar-brand"
            href="https://reactjs.org"
            target="_blank"
          >
            Navbar
            <span className="badge badge-pill badge-secondary m-2">
              {this.props.totalCounters}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
