import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BooksPage from "./components/BooksPage";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import Feedback from "./components/Feedback";
import BookDetails from "./components/BookDetails";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class App extends React.Component {
  state = {
    isLogin: false
  };

  loginHandler = () => {
    if (this.state.isLogin) {
      cookies.remove("login");
    }
    this.setState((state) => ({
      isLogin: !state.isLogin
    }));
  };

  render() {
    return (
      <Router>
        <div className="fullsize">
          <Header
            isLogin={this.state.isLogin}
            loginToggler={this.loginHandler}
          />
          <Switch>
            {/*<BookDetails />
          <BooksPage />
          */}
            <Route
              path="/login"
              component={(props) => (
                <Auth {...props} loginHandler={this.loginHandler} />
              )}
              exact
            />
            <Route path="/BookHub/" component={HomePage} exact />
            <Route path="/feedback" component={Feedback} exact />
            <Route path="/books-page" component={BooksPage} exact />
            <Route path="/book-details/:id" component={BookDetails} exact />
            <Route component={ErrorPage} />
          </Switch>
          </div>
          <Footer />
       
      </Router>
    );
  }
}

export default App;
