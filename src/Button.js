import React, { Fragment } from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { randText: 'some text' };


  }

  handleClick = () => {
    this.setState({
      randText: Math.floor(Math.random() * 100) + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Change Value
      </button>
        <p> {this.state.randText}</p>
      </div>
    );
  }
}
export default Toggle;