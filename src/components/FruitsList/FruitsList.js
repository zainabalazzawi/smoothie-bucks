import React from "react";
import Fruit from "../Fruit/Fruit";
import "./FruitsList.css";

const FruitsList = ({ data, isSelected, addRemoveFruit }) => {
  return (
    <div className="fruits-list">
      {data.map((fruit) => (
        <Fruit
          fruit={fruit}
          key={fruit.id}
          selected={isSelected(fruit)}
          addRemoveFruit={addRemoveFruit}
        />
      ))}
    </div>
  );
};

export default FruitsList;
