import React from "react";
import "./Fruit.css";
const Fruit = ({ fruit, setIsSelected, selected, addFruit }) => {
  return (
    <div>
      <div
        className="fruit"
        onClick={() => addFruit(fruit)}
        // need to know how to select one when click
      >
        <div key={fruit.id}>
          <div
            onClick={() => setIsSelected(true)}
            className="image-container with-background-image"
            title={fruit.title}
            style={{
              backgroundImage: `url(${fruit.image})`,
              border: `${!selected ? "none" : "5px solid #512d6d"}`,
            }}
          ></div>
          <div className="rectangle-fruit">
            <div
              className="color"
              style={{ background: `${fruit.color}` }}
            ></div>
            <div className="fruit-name">{fruit.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fruit;
