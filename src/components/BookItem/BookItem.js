import React from "react";
import Book from "../../assets/Images/Book.png";
import { Link } from "react-router-dom";

const BookItem = ({ title, id, description }) => (
  <div className="col-md-4 my-5" key={id}>
    <div className="card">
      <img src={Book} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" key={id}>
          Book Title: {title}
        </h5>
        <p className="card-text" key={id}>
          {description}
        </p>
        <Link to={`/book-details/${id}`}>
          <span className="btn btn-primary">More</span>
        </Link>
      </div>
    </div>
  </div>
);

export default BookItem;
