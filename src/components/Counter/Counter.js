import React from "react";
import styles from "./Counter.css";
import styles1 from "./StyleMobile.css";
class Counter extends React.Component {
  // handleCounter() {
  //   console.log(this.props.clickSum);
  // }
  render() {
    return (
      <>
        {this.props.id === "smile" ? (
          <div className="counter-wrap">
            <div className="counter-icon-smile "></div>
            <p className="counter-result count-smile">
              {this.props.smileValue}
            </p>
          </div>
        ) : (
          <div className="counter-wrap">
            <div className="counter-icon-not-ok  "></div>
            <p className="counter-result count-no-smile ">
              {this.props.noSmileValue}
            </p>
          </div>
        )}
      </>
    );
  }
}
export default Counter;
