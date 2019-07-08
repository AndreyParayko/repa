import React from "react";
import Book from "../../assets/Images/Book.png";
import { getBooks } from "../../api/books";
class BooksPage extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    getBooks().then(res => {
      console.log(res);
      this.setState({ books: res });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.books.map(book => {
            return (
            <div className="col-md-4 my-5">
              <div className="card">
                <img src={Book} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" key={book.ID}>
                    Book Title: {book.Title}
                  </h5>
                  <p className="card-text" key={book.ID}>
                  {book.Description}
                  </p>
                  <a href="#" className="btn btn-primary">
                    More
                  </a>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    );
  }
}

export default BooksPage;
