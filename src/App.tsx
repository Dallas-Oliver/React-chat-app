import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact={true} path="/" render={() => <Homepage />} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
