import React from "react";
import "./GetIt.css";
import SmoothieCup from "../SmoothieCup/SmoothieCup";
import YourName from "../YourName/YourName";
import SelectedFruitsList from "../SelectedFruitsList/SelectedFruitsList";
import MakeIt from "../MakeIt/MakeIt";

const GetIt = ({
  selectedList,
  removeFromList,
  yourName,
  setYourName,
  makeIt,
  setMakeIt,
  setGetIt,
  restSelectedList,
}) => {
  return (
    <div>
      {!makeIt ? (
        <div className="get-it-container">
          <div className="side-bar">
            <div className="get-it-logo"></div>
            <YourName yourName={yourName} setYourName={setYourName} />
            <SelectedFruitsList
              selectedList={selectedList}
              removeFromList={removeFromList}
            />
          </div>
          <SmoothieCup yourName={yourName} selectedList={selectedList} />

          <div className="back-arrow" onClick={() => setGetIt(false)}></div>

          <div
            className="make-it-happen-container"
            onClick={() => setMakeIt(true)}
          >
            <p className="make-it-happen"> Make it happen!</p>
            <div className="next-arrow"></div>
          </div>
        </div>
      ) : (
        <MakeIt
          selectedList={selectedList}
          yourName={yourName}
          setGetIt={setGetIt}
          restSelectedList={restSelectedList}
        />
      )}
    </div>
  );
};

export default GetIt;
