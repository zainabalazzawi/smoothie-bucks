import React from "react";
import "./GetIt.css";
import SmoothieCup from "../SmoothieCup/SmoothieCup";
import YourName from "../YourName/YourName";
import SelectedFruitsList from "../SelectedFruitsList/SelectedFruitsList";

const GetIt = ({ selectedList, removeFromList, yourName, setYourName }) => {
  return (
    <div className="make-it-container">
      <div className="side-bar">
        <h1 className="make-it-title">SmoothieBucks</h1>
        <YourName yourName={yourName} setYourName={setYourName} />
        <SelectedFruitsList
          selectedList={selectedList}
          removeFromList={removeFromList}
        />
      </div>
      <div className="main">
        <SmoothieCup yourName={yourName} selectedList={selectedList} />
      </div>
    </div>
  );
};

export default GetIt;
