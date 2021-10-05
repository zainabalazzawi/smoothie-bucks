import React from "react";
import { ReactComponent as TrashIcon } from "../../images/trash-icon.svg";

import "./Fruit.css";
const Fruit = ({ fruit, selected, addRemoveFruit }) => {
  return (
    <div
      className={`fruit ${selected ? "fruit-selected" : ""}`}
      onClick={() => addRemoveFruit(fruit)}
    >
      <div
        className="image-container with-background-image"
        title={fruit.title}
        style={{
          backgroundImage: `url(${fruit.image})`,
          border: `${!selected ? "none" : "5px solid #512d6d"}`,
        }}
      >
        {" "}
        <div
          className="remove-icon"
          style={{
            display: `${selected ? "grid" : "none"}`,
          }}
        >
          <TrashIcon />
        </div>
      </div>
      <div
        className="rectangle-fruit"
        // style={{ opacity: `${!selected ? "0.75" : "1"}` }}
      >
        <div className="color" style={{ background: `${fruit.color}` }}></div>
        <div className="fruit-name">{fruit.name}</div>
      </div>
    </div>
  );
};

export default Fruit;
