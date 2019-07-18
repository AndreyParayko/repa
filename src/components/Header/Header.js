import React from 'react';
import Logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";

const Header = ({ isLoggedin }) => {
    return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/"><a className="nav-link">Home </a></Link>
      </li>
      <li className="nav-item">
      <Link to="/books-page"><a className="nav-link">Books</a></Link>
      </li>
      <li className="nav-item">
      {isLoggedin===true?<Link to="/login"> <a className="nav-link">Logout</a></Link>:<Link to="/login"> <a className="nav-link">Login</a></Link>}
      </li>

    </ul>
    <Link to="/"><span className="navbar-brand">
      BookHub
    </span>
    <img src={Logo} width="60px"	 alt="..." /></Link>
  </div>
</nav>


    );
}

export default Header;