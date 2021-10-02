import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./GetItButton.css";
const GetItButton = ({ setGetIt, selectedList }) => {
  const isEmpty = selectedList.length === 0;
  return (
    <div className={`get-it-button ${isEmpty ? 'empty-list' : ''}`} onClick={() => !isEmpty && setGetIt(true)}>
      <div className="total-selected">
        <p className="total">{selectedList.length}</p>
        <p className="selected">selected</p>
      </div>
      {isEmpty ? (
        <h1 className="get-blend">Select fruits!</h1>
      ) : (
        <h1 className="get-blend">let’s get blendy!</h1>
      )}
      <div className="arrow">
        {" "}
        <FaArrowRight />
      </div>
    </div>
  );
};

export default GetItButton;
