import React from "react";
import styles from "./GameFunc.css";

import PictureShow from "../PictureShow/PictureShow";
import Buttons from "../Buttons/Buttons";
import Counter from "../Counter/Counter";

class GameFunc extends React.Component {
  render() {
    return (
      <div className="game-main">
        {/* <div className="game-func-buttons"> */}
        {this.props.id === "counter" ? (
          <>
            <Counter id="smile" />
            <Counter id="notSmile" />
          </>
        ) : (
          <>
            <Buttons id="ok" />
            <Buttons id="not-ok" />
          </>
        )}

        {/* </div> */}
      </div>
    );
  }
}
export default GameFunc;
