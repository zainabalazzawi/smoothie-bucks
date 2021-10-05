import React from "react";
import FruitsList from "../FruitsList/FruitsList";
import GetItButton from "../GetItButton/GetItButton";
import "./MainPage.css";
const MainPage = ({
  data,
  addRemoveFruit,
  isSelected,
  getIt,
  setGetIt,
  selectedList,
}) => {
  return (
    <div className="main-page background-main">
      <div className="logo"></div>
      <p className="text">
        To make the best Smoothie, select your favorate fruites:
      </p>
      <FruitsList
        data={data}
        addRemoveFruit={addRemoveFruit}
        isSelected={isSelected}
      />
      <GetItButton
        getIt={getIt}
        setGetIt={setGetIt}
        selectedList={selectedList}
      />
    </div>
  );
};

export default MainPage;
