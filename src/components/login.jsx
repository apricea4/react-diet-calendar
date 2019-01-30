import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/login.css";

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "", loginError: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state.userName);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ userName: event.target.value });
  }
  loginUser() {
    if (this.state.userName === "") {
      this.setState({
        loginError: "Wrong username or password or empty credentials"
      });
      return;
    }
    this.setState({ loginError: "" });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        <div>{this.state.loginError}</div>
        <form className="form-group">
          <input
            type="email"
            value={this.state.userName}
            onChange={this.handleChange}
            placeholder="Email"
            className="email-buffer"
          />

          <label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              placeholder="Password"
            />
          </label>
        </form>
        <button className="btn btn-primary" onClick={this.loginUser}>
          Login
        </button>
      </div>
    );
  }
}

export default login;
