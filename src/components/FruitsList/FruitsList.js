import React from "react";
import Fruit from "../Fruit/Fruit";
import "./FruitsList.css";

const FruitsList = ({ data, setIsSelected, selected }) => {
  return (
    <div className="fruits-list">
      {data.map((fruit) => (
        <Fruit
          fruit={fruit}
          key={fruit.id}
          setIsSelected={setIsSelected}
          selected={selected}
        />
      ))}
    </div>
  );
};

export default FruitsList;
