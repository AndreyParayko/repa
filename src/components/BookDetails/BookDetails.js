import React from "react";
import Book from "../../assets/Images/Book.png";
import { getBooks } from "../../api/books";

class BookDetails extends React.Component {
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
        {this.state.books.map(book => {
          return (
            <div className="content">
              <div className="text-center">
                <h1 key={book.ID}>Book Title: {book.Title}</h1>
                <img src={Book} className="rounded" />
                <br />
                <p>
                  <h3 key={book.ID}>PublishDate: {book.PublishDate}</h3>
                </p>
                <p>
                  <h3 key={book.ID}>Description: {book.Description}</h3>
                </p>
                <p>
                  <h3 key={book.ID}>Nuber of pages: {book.PageCount}</h3>
                </p>
                <span className="text-secondary" key={book.ID}>
                  {book.Excerpt}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default BookDetails;
