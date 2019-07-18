import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function ifLogined(Component) {
  class LoginedCheck extends React.Component {
    componentDidMount() {
      if (cookies.get("login")) {
        this.props.history.push("/");
      }
    }
    componentDidUpdate() {
      if (cookies.get("login")) {
        this.props.history.push("/");
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  }

  return LoginedCheck;
}

export default ifLogined;
