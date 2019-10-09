import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateAccount from "./components/pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";

// interface IAppState {
//   loginSuccessful: boolean;
// }

class App extends Component {
  // constructor({}, state: IAppState) {
  //   super({}, state);
  //   this.state = {
  //     loginSuccessful: false
  //   };
  // }

  // redirect = () => {
  //   this.setState({ loginSuccessful: true });
  // };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/chatroom" render={() => <ChatRoom />} />
          <Route exact path="/" render={() => <CreateAccount />} />
        </div>
      </Router>
    );
  }
}

export default App;
