import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <NavLink className="header-link" to="/chatroom">
          Chatroom
        </NavLink>{" "}
        <NavLink className="header-link" to="/">
          Login
        </NavLink>
      </header>
    );
  }
}

export default Header;
