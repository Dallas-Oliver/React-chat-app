import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "localhost:4001"
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact={true}
            path="/"
            render={() => <Homepage setUsername={this.state.username} />}
          />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
