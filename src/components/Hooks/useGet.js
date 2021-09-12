import { useEffect, useState } from "react";

const useGet = () => {
  const [getIt, setGetIt] = useState(false);
  const [selected, setIsSelected] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const [yourName, setYourName] = useState("");
  // const [selectedTotal, setSelectedTotal] = useState(0);

  useEffect(() => {
    setGetIt(false);
    setIsSelected(false);
    setYourName("");
  }, []);

  useEffect(() => {
    setYourName("");
  }, []);

  const addFruit = (fruit) => {
    console.log(fruit);
    if (selectedList.find((fruitItem) => fruitItem.id === fruit.id)) return;
    setSelectedList([...selectedList, fruit]);
  };

  const removeFromList = (fruit) => {
    setSelectedList(
      selectedList.filter((fruitItem) => fruitItem.id !== fruit.id)
    );
  };

  //Total of selected fruit
  // useEffect(() => {
  //   setSelectedTotal(selectedList.reduce((sum, {}) => sum + {}, 0));
  // }, [selectedList]);

  // function to select one
  // const SelectOne = () => {};

  return {
    getIt,
    setGetIt,
    selected,
    setIsSelected,
    addFruit,
    selectedList,
    removeFromList,
    // selectedTotal,
    yourName,
    setYourName,
  };
};

export default useGet;
