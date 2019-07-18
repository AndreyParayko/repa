import React from "react";

function withRandomNumber(Component) {
  class RandomNumber extends React.Component {
    generateRandomNumber() {
      const number = Math.floor(Math.random() * 100) + 1;
      return number;
    }
    render() {
      return (
        <div id="rcorners">
          <Component
            number={this.generateRandomNumber()}
            {...this.props}
          />
        </div>
      );
    }
  }

  return RandomNumber;
}

export default withRandomNumber;
