import React from "react";
import "./GetIt.css";
import SmoothieCup from "../SmoothieCup/SmoothieCup";
import YourName from "../YourName/YourName";
import SelectedFruitsList from "../SelectedFruitsList/SelectedFruitsList";

const GetIt = ({ selectedList }) => {
  return (
    <div className="make-it-container">
      <div className="side-bar">
        <h1 className="make-it-title">SmoothieBucks</h1>
        <YourName />
        <SelectedFruitsList selectedList={selectedList} />
      </div>
      <div className="main">
        <SmoothieCup />
      </div>
    </div>
  );
};

export default GetIt;
