import React from "react";
import styles from "./GameFuncBtn.css";
import Buttons from "../Buttons/Buttons";

class GameFuncBtn extends React.Component {
  handleClick = (id) => {
    console.log(id);
  };
  // rendeCounter = () => {
  //   return {`<Counter id="smile" smileValue={this.state.countSmile} />
  //   <Counter id="notSmile" noSmileValue={this.state.countNoSmile} />`}
  // };
  render() {
    return (
      <>
        <div className="game-main">
          <>
            <Buttons id="not-ok" handleClick={this.props.handleClick} />
            <Buttons id="ok" handleClick={this.props.handleClick} />
          </>
        </div>
      </>
    );
  }
}
export default GameFuncBtn;
