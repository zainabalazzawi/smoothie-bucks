import React from "react";
import Fruit from "../Fruit/Fruit";
import "./FruitsList.css";

const FruitsList = ({ data, setIsSelected, selected, addFruit }) => {
  return (
    <div className="fruits-list">
      {data.map((fruit) => (
        <Fruit
          fruit={fruit}
          key={fruit.id}
          setIsSelected={setIsSelected}
          selected={selected}
          addFruit={addFruit}
        />
      ))}
    </div>
  );
};

export default FruitsList;
