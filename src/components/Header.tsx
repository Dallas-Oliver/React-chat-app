import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header style={headerSyles}>
        <h1>Chat App</h1>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link>
      </header>
    );
  }
}

const headerSyles = {
  padding: "20px",
  background: "#333",
  color: "#fff"
};

export default Header;
