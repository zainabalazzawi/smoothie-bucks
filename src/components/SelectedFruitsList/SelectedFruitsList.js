import React from "react";
import "./SelectedFruitsList.css";

const SelectedFruitsList = ({ selectedList, removeFromList }) => {
  console.log(selectedList);

  return (
    <div className="selected-fruit-list-container">
      {selectedList.map((fruit) => (
        <div className="fruit-item" key={fruit.id}>
          <div
            className="image-container-fruit with-background-image-selected-fruit"
            title={fruit.title}
            style={{
              backgroundImage: `url(${fruit.image})`,
            }}
          ></div>
          <div
            className="fruit-name-selected-list"
            style={{ background: `${fruit.color}` }}
            onClick={() => removeFromList(fruit)}
          >
            {fruit.name}
            <div className="small-trash"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedFruitsList;
