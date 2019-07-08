import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Header from "./components/Header";
import BooksPage from "./components/BooksPage";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import BookDetails from "./components/BookDetails";

class App extends React.Component {
  render() {
    return (
      <div className="fullsize">
        <Header />
        {/*<BookDetails />*/}
        <BooksPage />
        <Pagination />
        <Footer />
      </div>
    );
  }
}

export default App;
