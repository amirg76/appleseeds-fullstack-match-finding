import React from "react";
import styles from "./Counter.css";

class Counter extends React.Component {
  render() {
    return (
      <div className="counter-wrap">
        {this.props.id === "smile" ? (
          <>
            <div className="counter-icon-smile"></div>
            <p className="counter-result count-smile">0</p>
          </>
        ) : (
          <>
            <div className="counter-icon-not-ok"></div>
            <p className="counter-result count--no-smile">0</p>
          </>
        )}
      </div>
    );
  }
}
export default Counter;
