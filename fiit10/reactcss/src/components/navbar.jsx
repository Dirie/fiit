import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/jeeb_logo.jpg";
import Login from "./login";
// import Button from "./controles/button";

const Navbar = props => {
  const menu = [
    "Home",
    "Features",
    "Services",
    "Supports",
    "Services1",
    "Supports2"
  ];
  const handleLogin = e => {
    e.preventDefault();

    alert(<Login />);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-inverse navbar-white bg-white ">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Jeeb" style={{ width: "120px", height: "60px" }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {menu.map(m => (
            <li
              key={menu.indexOf(m)}
              className="navbar-nav ml-auto font-weight-bold"
            >
              <Link className="nav-link" to="#">
                {m}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="navbar-nav ml-auto" />
        <Link className="btn btn-primary btn-md" to="" onClick={handleLogin}>
          Login
        </Link>
        {/* <Button
          classes="btn btn-primary btn-md"
          btnText="Login"
          onClick={handleRegister}
        /> */}
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
