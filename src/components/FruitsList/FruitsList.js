import React from "react";
import Fruit from "../Fruit/Fruit";
import "./FruitsList.css";

const FruitsList = ({ data, selectedList, addFruit }) => {
  return (
    <div className="fruits-list">
      {data.map((fruit) => (
        <Fruit
          fruit={fruit}
          key={fruit.id}
          selected={
            selectedList.filter(
              (selectedFruit) => selectedFruit.id === fruit.id
            ).length > 0
          }
          addFruit={addFruit}
        />
      ))}
    </div>
  );
};

export default FruitsList;
