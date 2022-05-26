import React from "react";
import styles from "./Buttons.css";

// import PictureShow from "../PictureShow/PictureShow";

class Buttons extends React.Component {
  render() {
    return (
      <>
        {this.props.id === "not-ok" ? (
          <>
            <button className="button-icon-ok"></button>
          </>
        ) : (
          <>
            <button
              className="button-icon-not-ok"
              onClick={this.props.handleClick}
            ></button>
          </>
        )}
      </>
    );
  }
}
export default Buttons;
