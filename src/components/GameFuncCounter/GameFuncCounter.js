import React from "react";
import styles from "./GameFuncCounter.css";
import Counter from "../Counter/Counter";

class GameFunc extends React.Component {
  render() {
    return (
      <>
        <div className="game-main">
          <>
            <Counter id="notSmile" noSmileValue={this.props.countNoSmile} />
            <Counter id="smile" smileValue={this.props.countSmile} />
          </>
        </div>
      </>
    );
  }
}
export default GameFunc;
