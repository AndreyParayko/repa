import React from "react";
import Book from "../../assets/Images/Book.png";
const BookDetails = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="text-center">
          <h1>Book title</h1>
          <img src={Book} className="rounded" />
          <br />
          <p>
            <h3>Author:</h3>
          </p>
          <p>
            <h3>Book genre:</h3>
          </p>
          <p>
            <h3>Nuber of pages:</h3>
          </p>
          <span className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae facilisis purus, eu pulvinar neque. Maecenas pulvinar eros nec
            enim pulvinar, et rutrum diam pulvinar. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Fusce neque , lacinia id hendrerit mollis, vestibulum at velit.
            Vivamus vel dui libero. Proin sit amet tellus condimentum, semper
            metus eget, varius sapien. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Maecenas vitae
            facilisis purus, eu pulvinar neque. Maecenas pulvinar eros nec enim
            pulvinar, et rutrum diam pulvinar. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Fusce neque , lacinia id hendrerit mollis, vestibulum at velit.
            Vivamus vel dui libero. Proin sit amet tellus condimentum, semper
            metus eget, varius sapien. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
