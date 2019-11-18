import React from "react";

import "./Button.css";

const button = props => {
  const classess = "Button " + props.btnType;
  return (
    <button
      disabled={props.disabled}
      className={classess}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};
export default button;
