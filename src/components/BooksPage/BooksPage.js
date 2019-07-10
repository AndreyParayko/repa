import React from "react";
import BookItem from "../BookItem";
import { getBooks } from "../../api/books";
import Pagination from "../Pagination";
import Loader from "../Loader";

class BooksPage extends React.Component {
  state = {
    data: [],
    isLoading: true,
    isError: false
  };
  componentDidMount() {
    getBooks()
      .then(data =>
        this.setState({
          data: data,
          isLoading: false
        })
      )
      .catch(rej => {
        console.log("Error in parsing module", rej);
        this.setState({ isError: true });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <div>
        {!isLoading && (
          <div className="container">
            <div className="row">
              {data.map(item => (
                <BookItem
                  title={item.Title}
                  description={item.Description}
                  id={item.ID}
                />
              ))}
            </div>
          </div>
        )}
        {isLoading && <Loader />}
        <Pagination />
      </div>
    );
  }
}

export default BooksPage;
