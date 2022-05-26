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
  render() {
    return (
      <div className="picture-main">
        <img
          className="pic-animal"
          src={`./assets/images/animalPic/${data[0]}.jpg`}
        ></img>
        <h1>{data[0]}</h1>
      </div>
    );
  }
}
export default PictureShow;
