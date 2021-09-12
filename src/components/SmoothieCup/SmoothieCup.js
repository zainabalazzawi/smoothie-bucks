import React from "react";
import "./SmoothieCup.css";
const SmoothieCup = ({ yourName, selectedList }) => {
  return (
    <div className="smoothie-cup-container">
      <div className="smoothie-cup-name"> {yourName}</div>
      <div className="smoothie-cup">
        <div className="smoothie-cup-images">
          {selectedList.map((fruit) => (
            <div className="fruit-item" key={fruit.id}>
              <div
                className="image-container-smoothie-cup  with-background-image-smoothie-cup"
                title={fruit.title}
                style={{
                  backgroundImage: `url(${fruit.image})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothieCup;
