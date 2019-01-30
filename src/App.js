import React, { Component } from "react";
import "./App.css";
import Login from "./components/login";

class App extends Component {
  render() {
    return (
      <div id="login-div" className="login-div-main">
        <Login />
      </div>
    );
  }
}
export default App;
