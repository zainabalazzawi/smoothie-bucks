import React from "react";
import SmoothieCup from "../SmoothieCup/SmoothieCup";
import YourName from "../YourName/YourName";

const GetIt = () => {
  return (
    <div className="make-it-container">
      <div className="side-bar">
        <h1 className="make-it-title">SmoothieBucks</h1>
        <YourName />
      </div>
      <div>
        <SmoothieCup />
      </div>
    </div>
  );
};

export default GetIt;
