import React from "react";
import SmoothieCup from "../SmoothieCup/SmoothieCup";

import "./MakeIt.css";
const MakeIt = ({ selectedList, yourName, setGetIt }) => {
  return (
    <div className="make-it-container">
      <div className="make-it-logo"> </div>
      <div className="text-3">Enjoy your Smoothie!</div>
      <SmoothieCup
        className="make-it-cup"
        selectedList={selectedList}
        yourName={yourName}
      />

      <div className="make-new-one" onClick={() => setGetIt(false)}>
        Make a new one
      </div>
    </div>
  );
};

export default MakeIt;
