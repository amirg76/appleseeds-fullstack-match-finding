import React from "react";
import styles from "./PopUp.css";

class PopUp extends React.Component {
  render() {
    return (
      <>
        <div className="popup-continer">
          {this.props.howWin === "smile" ? (
            <div className="popup-card">You Like A Lote Of Animales</div>
          ) : (
            <div className="popup-card">You Dont Like A Lote Of Animales</div>
          )}
        </div>
      </>
    );
  }
}
export default PopUp;
