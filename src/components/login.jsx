import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/login.css";
import logo from "..\\img\\metagenics_logo.jpg";

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
        <div className="login-banner">
          <img src={logo} className="logo-img" />
        </div>
        <div id="main-login-div">
          <div>{this.state.loginError}</div>
          <div>
            <div id="email-div" className="login-divs">
              <input
                type="email"
                value={this.state.userName}
                onChange={this.handleChange}
                placeholder="Email"
                className="email-buffer"
              />
            </div>

            <div id="password-div" className="login-divs">
              <label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  placeholder="Password"
                  className="password-box"
                />
              </label>
            </div>
          </div>
          <div class="btn-login-div">
            <button
              className="btn btn-primary btn-login"
              onClick={this.loginUser}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default login;
