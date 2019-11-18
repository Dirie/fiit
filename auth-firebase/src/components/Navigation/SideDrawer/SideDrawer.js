import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
  let attachedClasses = "Close";
  if (props.open) {
    attachedClasses = "Open";
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={"SideDrawer " + attachedClasses}>
        <div className="Logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
