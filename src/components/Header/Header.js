import React from 'react';
import Logo from "./Images/logo.png";

const Header = () => {
    return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Books</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>
    <span className="navbar-brand">
      BookHub
    </span>
    <img src={Logo} width="60px"	 alt="..." />
  </div>
</nav>


    );
}

export default Header;