import React from "react";

import "./button.css";

const button = props => {
  const { btnType } = props;
  return (
    <button
      disabled={props.disabled}
      className={"Button " + btnType}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
