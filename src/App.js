import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BooksPage from "./components/BooksPage";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import BookDetails from "./components/BookDetails";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "universal-cookie";


  

class App extends React.Component {
  render() {
    const cookies = new Cookies();

let isLoggedin=0;
cookies.get("login")?isLoggedin = true:isLoggedin = false;

    return (
      <Router>
        <div className="fullsize">
          <Header 
           isLoggedin={isLoggedin}/>
          <Switch>
            {/*<BookDetails />
          <BooksPage />
          */}
            <Route path="/login" component={Auth} exact />
            <Route path="/" component={HomePage} exact />
            <Route path="/books-page" component={BooksPage} exact />
            <Route path="/book-details/:id" component={BookDetails} exact />
            <Route component={ErrorPage}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
