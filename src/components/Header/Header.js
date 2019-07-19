import React from "react";
import Logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Header = ({loginToggler }) => {
  return (
    <div className="nav-bg text-muted">
    <div class="d-flex justify-content-around">

          <p className="p-2 bd-highlight">
            <Link to="/repa/">
              <a className="nav-link">Home </a>
            </Link>
          </p>
          <p className="p-2 bd-highlight">
            <Link to="/books-page">
              <a className="nav-link">Books</a>
            </Link>
          </p>
          <p className="p-2 bd-highlight">
            <Link to="/feedback">
              <a className="nav-link">Feedback</a>
            </Link>
          </p>
          <p className="p-2 bd-highlight">
            {cookies.get("login")? (
              <Link to="/login" onClick={loginToggler}>
                {" "}
                <a className="nav-link">Logout</a>
              </Link>
            ) : (
              <Link to="/login" onClick={loginToggler}>
                {" "}
                <a className="nav-link">Login</a>
              </Link>
            )}
          </p>
        <Link to="/">
          <span className="navbar-brand">BookHub</span>
          <img src={Logo} width="60px" alt="..." />
        </Link>
    </div>
    </div>
  );
};

export default Header;
