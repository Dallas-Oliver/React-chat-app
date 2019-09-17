import React from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/pages/login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
