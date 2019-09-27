import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="form-container">
        <h3>Login</h3>
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
