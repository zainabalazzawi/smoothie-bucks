import React from "react";
import SmoothieCup from "../SmoothieCup/SmoothieCup";

import "./MakeIt.css";
const MakeIt = ({ selectedList, yourName, setGetIt }) => {
  return (
    <div className="make-it-container">
      <h1 className="make-it-logo"> SmoothieBucks</h1>
      <p className="text-3">Enjoy your Smoothie!</p>
      <div className="make-it-smoothie-cup">
        {" "}
        <SmoothieCup selectedList={selectedList} yourName={yourName} />
      </div>
      <div className="make-new-one" onClick={() => setGetIt(false)}>
        Make a new one
      </div>
    </div>
  );
};

export default MakeIt;
