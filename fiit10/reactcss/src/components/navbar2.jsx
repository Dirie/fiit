import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  //   UncontrolledDropdown,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem
} from "reactstrap";
import logo from "../assets/jeeb_logo.jpg";
import { Link } from "react-router-dom";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img
              src={logo}
              alt="Jeeb"
              style={{ width: "120px", height: "60px" }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Supports</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contacts</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar />
            <Link className="btn btn-primary btn-md" to="/login">
              Login
            </Link>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
