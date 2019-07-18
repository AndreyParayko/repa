import React from "react";
import Book from "../../assets/Images/Book.png";
import withRandomNumber from "../hoc/withRandomNumber";
const BookDetailsItem = ({title, id, description,pageCount,publishDate,excerpt,number}) => (
    <div className="content">
              <div className="text-center text-muted">
                <h1 key={id}>Book Title: {title}</h1>
                <img src={Book}  />
                <br />
                <p>
                  <h3 key={id}>PublishDate: {publishDate}</h3>
                </p>
                <p>
                  <h3 key={id}>Description: {description}</h3>
                </p>
                <p>
                  <h3 key={id}>Number of pages: {pageCount}</h3>
                </p>
                <p>
                  <h3 key={id}>Rating by HOC: {number}</h3>
                </p>
                <span key={id}>
                  {excerpt}
                </span>
              </div>
            </div>
    );

export default withRandomNumber(BookDetailsItem);