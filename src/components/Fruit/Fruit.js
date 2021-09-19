import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import "./Fruit.css";
const Fruit = ({ fruit, selected, addRemoveFruit }) => {
  return (
    <div>
      <div className="fruit" onClick={() => addRemoveFruit(fruit)}>
        <div key={fruit.id}>
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
              className="remove-icon hover"
              style={{
                display: `${selected ? "grid" : "none"}`,
              }}
            >
              <HiOutlineTrash />
            </div>
          </div>
          <div
            className="rectangle-fruit"
            style={{ opacity: `${!selected ? "0.75" : "1"}` }}
          >
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
