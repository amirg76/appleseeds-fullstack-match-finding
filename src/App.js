import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GameFunc from "./components/GameFunc/GameFunc";
import PictureShow from "./components/PictureShow/PictureShow";
import { render } from "@testing-library/react";

class App extends React.Component {
  render() {
    return (
      <div className="main-app">
        <GameFunc id="counter" />
        <PictureShow />
        <GameFunc id="buttons" />
      </div>
    );
  }
}

export default App;
