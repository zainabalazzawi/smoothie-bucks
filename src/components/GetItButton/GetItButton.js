import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./GetItButton.css";
const GetItButton = ({ setGetIt }) => {
  return (
    <div className="get-it-button" onClick={() => setGetIt(true)}>
      <div className="total-selected">
        <p className="total">0</p>
        <p className="selected">selected</p>
      </div>
      <h1 className="get-blend">
        let’s get blendy!{" "}
        <span>
          <FaArrowRight />
        </span>
      </h1>
    </div>
  );
};

export default GetItButton;
