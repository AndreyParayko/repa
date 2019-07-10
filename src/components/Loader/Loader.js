import React from "react";
import Gif from "../../assets/Images/Gif.gif";
class Loader extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="text-center">
          <img className="loader" src={Gif} />
        </div>
      </div>
    );
  }
}
export default Loader;
