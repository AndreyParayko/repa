import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function loginRequire(Component) {
  class LoginCheck extends React.Component {
    componentDidMount() {
      if (!cookies.get("login")) {
        this.props.history.push("/login");
      }
    }
    componentDidUpdate() {
      if (!cookies.get("login")) {
        this.props.history.push("/login");
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  }

  return LoginCheck;
}

export default loginRequire;
