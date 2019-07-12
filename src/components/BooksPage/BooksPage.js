import React from "react";
import BookItem from "../BookItem";
import { getBooks } from "../../api/books";
import Pagination from "../Pagination";
import Loader from "../Loader";

class BooksPage extends React.Component {
  state = {
    data: [],
    isLoading: true,
    isError: false,
    currentPage: 1
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

  handler = number => {
    console.log("handle|: ", number);
    this.setState({
      currentPage: number
    });
  };

  render() {
    const { isLoading, data } = this.state;
    const postsPerPage = 21;

    const indexOfLastPost = this.state.currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    console.log(this.state.currentPage);

    return (
      <div>
        {!isLoading && (
          <div className="container">
            <div className="row">
              {currentPosts.map(item => (
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
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          handler={this.handler}
        />
      </div>
    );
  }
}

export default BooksPage;
