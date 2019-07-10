import React from "react";
import { getBookById } from "../../api/books";
import BookDetailsItem from "../BookDetailsItem";
import Loader from "../Loader";
import parse from "date-fns/parse";
import format from "date-fns/format";
import { fotmatedDescription } from "./Utils";

class BookDetails extends React.Component {
  state = {
    data: [],
    isLoading: true,
    isError: false
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    getBookById(id)
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
    console.log(data);
    let parsedDate = parse(data.PublishDate);
    let formatedDate = format(parsedDate, "DD MMMM YYYY");

    console.log(formatedDate);
    return (
      <div>
        {!isLoading && (
          <div className="container">
            <BookDetailsItem
              title={data.Title}
              description={fotmatedDescription(data.Description)}
              id={data.ID}
              pageCount={data.PageCount}
              publishDate={formatedDate}
              excerpt={data.Excerpt}
            />
          </div>
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}
export default BookDetails;
