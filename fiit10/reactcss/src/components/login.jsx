import React from "react";
import form from "../common/form";
import Joi from "joi-browser";

class Login extends form {
  state = {
    data: { username: "", password: "" },
    error: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .label("User Name"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        {/* <div>welcome: {this.state.data.username}</div> */}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "User name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("LogIn")}
        </form>
      </div>
    );
  }
}

export default Login;
