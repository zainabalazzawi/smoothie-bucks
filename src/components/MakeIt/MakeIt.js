import React from "react";
import SmoothieCup from "../SmoothieCup/SmoothieCup";
import "./MakeIt.css";
const MakeIt = ({ selectedList, yourName, setGetIt, restSelectedList }) => {
  return (
    <div className="make-it-container">
      <div className="make-it-logo"> </div>
      <div className="text-3">Enjoy your Smoothie!</div>

      <SmoothieCup selectedList={selectedList} yourName={yourName} />

      <div onClick={() => restSelectedList()}>
        <div className="make-new-one" onClick={() => setGetIt(false)}>
          Make a new one
        </div>
      </div>
    </div>
  );
};

export default MakeIt;
