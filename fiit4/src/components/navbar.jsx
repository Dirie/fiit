import React from "react";

const Navbar = props => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="##">
          Navbar
          <span className="badge badge-secondary badge-pill m-2">
            {props.totalCounters}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
