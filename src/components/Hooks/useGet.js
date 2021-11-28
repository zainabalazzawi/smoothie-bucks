import { useEffect, useState } from "react";

const useGet = () => {
  const [getIt, setGetIt] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const [yourName, setYourName] = useState("");
  const [makeIt, setMakeIt] = useState(false);
  useEffect(() => {
    setGetIt(false);
    setMakeIt(false);
  }, []);

  const addRemoveFruit = (fruit) => {
    console.log(fruit);
    // If fruit is in selectedList,
    const fruitIsSelected = selectedList.find(
      (fruitItem) => fruitItem.id === fruit.id
    );
    // then remove it from selectedList
    if (fruitIsSelected) {
      removeFromList(fruit);
      return;
    }
    // If fruit is not in selectedList, then add it to selectedList
    setSelectedList([...selectedList, fruit]);
  };

  const removeFromList = (fruit) => {
    setSelectedList(
      selectedList.filter((fruitItem) => fruitItem.id !== fruit.id)
    );
  };

  const isSelected = (fruit) => {
    return (
      selectedList.filter((selectedFruit) => selectedFruit.id === fruit.id)
        .length > 0
    );
  };

  const restSelectedList = () => {
    setSelectedList([]);
  };
  return {
    getIt,
    setGetIt,
    addRemoveFruit,
    selectedList,
    removeFromList,
    setYourName,
    yourName,
    setMakeIt,
    makeIt,
    isSelected,
    restSelectedList,
  };
};

export default useGet;
