import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BooksPage from "./components/BooksPage";
import Footer from "./components/Footer";
import BookDetails from "./components/BookDetails";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="fullsize">
          <Header />
          <Switch>
            {/*<BookDetails />
          <BooksPage />
          */}
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
