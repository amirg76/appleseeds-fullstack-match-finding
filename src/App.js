import React from "react";

import "./App.css";
import GameFuncCounter from "./components/GameFuncCounter/GameFuncCounter";
import PictureShow from "./components/PictureShow/PictureShow";
import GameFuncBtn from "./components/GameFuncBtn/GameFuncBtn";
import PopUp from "./components/PopUp/PopUp";
// import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countSmile: 0,
      countNoSmile: 0,
      isFinish: false,
      picNum: 0,
      winner: "",
    };
  }
  handleClick = (id) => {
    console.log(id);

    this.setState((prevState) => {
      return {
        picNum: prevState.picNum + 1,
        isClick: !prevState.isClick,
        countSmile:
          id === "ok" ? prevState.countSmile + 1 : prevState.countSmile,
        countNoSmile:
          id === "not-ok" ? prevState.countNoSmile + 1 : prevState.countNoSmile,
      };
    });
  };
  handleFinish = () => {
    console.log("finish");
    this.setState(
      (prevState) => {
        return {
          isFinish: true,
          winner:
            prevState.countSmile > prevState.countNoSmile
              ? "smile"
              : "notSmile",
        };
      },
      () => console.log(this.state.countSmile)
    );
  };
  render() {
    return (
      <div className="main-app">
        {this.state.isFinish && <PopUp howWin={this.state.winner} />}

        <GameFuncCounter
          countSmile={this.state.countSmile}
          countNoSmile={this.state.countNoSmile}
        />
        {!this.state.isFinish && (
          <PictureShow
            finishGame={this.handleFinish}
            pictureNum={this.state.picNum}
            isfinish={this.state.isFinish}
          />
        )}
        <GameFuncBtn handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
