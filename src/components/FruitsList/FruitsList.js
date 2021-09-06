import React from "react";
import Fruit from "../Fruit/Fruit";
import "./FruitsList.css";

const FruitsList = () => {
  return (
    <div className="fruits-list">
      <p className="text">
        To make the best Smoothie, select your favorate fruites:
      </p>
      <Fruit />
    </div>
  );
};

export default FruitsList;
