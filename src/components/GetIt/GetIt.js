import React from "react";
import "./GetIt.css";
import SmoothieCup from "../SmoothieCup/SmoothieCup";
import YourName from "../YourName/YourName";
import SelectedFruitsList from "../SelectedFruitsList/SelectedFruitsList";
import MakeIt from "../MakeIt/MakeIt";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const GetIt = ({
  selectedList,
  removeFromList,
  yourName,
  setYourName,
  makeIt,
  setMakeIt,
  setGetIt,
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

          <div className="arrow-left" onClick={() => setGetIt(false)}>
            <FaArrowLeft />
          </div>
          <div className="make-it-happen-container">
            <p className="make-it-happen"> Make it happen!</p>
            <div className="arrow-right" onClick={() => setMakeIt(true)}>
              <FaArrowRight />
            </div>
          </div>
        </div>
      ) : (
        <MakeIt
          selectedList={selectedList}
          yourName={yourName}
          setGetIt={setGetIt}
        />
      )}
    </div>
  );
};

export default GetIt;
