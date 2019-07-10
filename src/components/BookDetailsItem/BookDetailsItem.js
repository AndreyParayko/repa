import React from "react";
import Book from "../../assets/Images/Book.png";
const BookDetailsItem = ({title, id, description,pageCount,publishDate,excerpt}) => (
    <div className="content">
              <div className="text-center">
                <h1 key={id}>Book Title: {title}</h1>
                <img src={Book} className="rounded" />
                <br />
                <p>
                  <h3 key={id}>PublishDate: {publishDate}</h3>
                </p>
                <p>
                  <h3 key={id}>Description: {description}</h3>
                </p>
                <p>
                  <h3 key={id}>Nuber of pages: {pageCount}</h3>
                </p>
                <span className="text-secondary" key={id}>
                  {excerpt}
                </span>
              </div>
            </div>
    );

export default BookDetailsItem;