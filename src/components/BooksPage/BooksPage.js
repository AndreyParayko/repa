import React from "react";
import Book from "../../assets/Images/Book.png"
const BooksPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 my-5">
          <div className="card">
            <img src={Book} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Book title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div className="card">
            <img src={Book} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Book title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div className="card" >
            <img src={Book} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Book title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
