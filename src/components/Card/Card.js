import React from "react";
import Book from "./Images/Book.png";
import './Card';
const Card = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm my-5">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Book} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Book title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                More
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm my-5">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Book} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Book title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                More
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm my-5">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Book} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Book title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
