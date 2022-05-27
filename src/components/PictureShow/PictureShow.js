import React from "react";
import styles from "./PictureShow.css";

const data = [
  "animal_animals_aquarium",
  "animal_animals_bird",
  "animal_ape_chimp",
  "animal_bovine_cattle",
  "animals_wildlife_animals_frogs",
  "deer_young_animal_nice",
  "horse_animals_horse_head",
  "meerkat_africa_animal",
  "snail_mollusk_animal",
  "turtle_animal_amphibian",
  "zoo_animal_cat",
];

class PictureShow extends React.Component {
  constructor(props) {
    super(props);
  }
  handlePic = () => {
    if (this.props.pictureNum < data.length) return this.props.pictureNum;
    if (!this.props.isfinish) this.props.finishGame();
  };
  render() {
    return (
      <div className="picture-main">
        <img
          className="pic-animal"
          src={`./assets/images/animalPic/${data[this.handlePic()]}.jpg`}
        ></img>
        <h1>{data[this.handlePic()]}</h1>
      </div>
    );
  }
}
export default PictureShow;
