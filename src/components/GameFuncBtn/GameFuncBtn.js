import React from "react";
import "./GameFuncBtn.css";
import Buttons from "../Buttons/Buttons";

class GameFuncBtn extends React.Component {
  handleClick = (id) => {
    console.log(id);
  };

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
