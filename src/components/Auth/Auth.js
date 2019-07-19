import React from "react";
import Cookies from "universal-cookie";
import ifLogined from "../hoc/ifLogined";
class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  cookies = new Cookies();

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.cookies.set("login", "logined");
      this.props.loginHandler();
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div id="authForm">
    <div className="content">
              <div className="text-center text-muted">
            <form
              name="Login_Form"
              class="form-signin"
              onSubmit={this.handleSubmit}
            >
              <h3 class="form-signin-heading">Please Sign In</h3>
              <hr class="colorgraph" />
              <p>To pass write admin:admin</p>
              <br />

              <input
                type="text"
                class="form-control"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />

              <button class="btn btn-lg btn-primary btn-block" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ifLogined(Auth);
