import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./GetItButton.css";
const GetItButton = ({ setGetIt, selectedList }) => {
  return (
    <div className="get-it-button">
      <div className="total-selected">
        <p className="total">{selectedList.length}</p>
        <p className="selected">selected</p>
      </div>
      <h1 className="get-blend">let’s get blendy!</h1>
      <div className="arrow" onClick={() => setGetIt(true)}>
        {" "}
        <FaArrowRight />
      </div>
    </div>
  );
};

export default GetItButton;
