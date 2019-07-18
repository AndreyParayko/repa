import React from 'react';
import Logo from "../../assets/Images/home.png";
import { Link } from "react-router-dom";
import loginRequire from "../hoc/loginRequire";
const HomePage = () => (
    <div className="content">
    <div className="text-center">
      <h1>Weclome to BookHub!</h1>
      <img src={Logo} height="350px" className="homeImage" />
      <br />
      <Link to="/books-page"><button type="button" className="btn btn-primary btn-lg">GO TO BOOKS</button></Link>
    </div>
  </div>
  );
  
  export default loginRequire(HomePage);
